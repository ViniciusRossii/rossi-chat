import { useState, useEffect } from "react"

import Container from "./styles"

import io from 'socket.io-client'
const socket = io('https://rossi-chat.herokuapp.com/', {transports: ['websocket']})

export default function Chat() {
    const [myId, setMyId] = useState(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on('setId', id => {
            setMyId(id)
        })
    }, [])

    useEffect(() => {
        socket.on('loadMessage', message => {
            setMessages([...messages, message])
        })
    }, [messages])

    function sendMessage(event) {
        if (event.key !== 'Enter') return
        event.preventDefault()
        if (!event.currentTarget.value.trim()) return
        socket.emit('sendMessage', {userId: myId, message: event.currentTarget.value})
        event.currentTarget.value = ""
    }

    function sendMessageButton() {
        if (!document.querySelector('#input-message').value.trim()) return
        socket.emit('sendMessage', {userId: myId, message: document.querySelector('#input-message').value})
        document.querySelector('#input-message').value = ""
    }

    return (
        <Container>
            <div className="header">
                <h1 className="title">Rossi Chat</h1>
            </div>
            <div className="chat-wrapper">
                <div className="chat-container">
                    {/* <div className="message">
                        <p className="message-text">lorem</p>
                    </div> */}
                    {messages.map((message, index) => {
                        return (
                            <div key={index} className={`message ${message.userId === myId ? 'mine' : 'not-mine'}`}>
                                <p className="message-text">{message.message}</p>
                            </div>
                        )
                    })}
                    <div className="chat-inputs">
                        <textarea id="input-message" autoComplete="off" onKeyDown={sendMessage} maxLength="100" className="input-message" />
                        <button onClick={sendMessageButton} className="send-message">
                            <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.466 6.75437V0.390372C13.466 -0.0256282 13.226 -0.125628 12.934 0.170372L0.222 12.8904C-0.074 13.1864 -0.074 13.6624 0.222 13.9584L12.93 26.6664C13.226 26.9624 13.462 26.8624 13.462 26.4464V19.8864C13.462 19.4704 13.802 19.1304 14.218 19.1384C23.374 19.2904 29.918 22.2624 34.678 28.5624C34.93 28.8944 35.058 28.8384 34.97 28.4304C32.898 19.0184 27.13 9.78237 14.21 7.62237C13.802 7.55437 13.466 7.17037 13.466 6.75437Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
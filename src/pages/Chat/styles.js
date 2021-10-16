import styled from 'styled-components'

import whiteBg from '../../assets/white-bg.png'

const Container = styled.div`
    background-image: url(${whiteBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
    font-family: 'Inter';

    .header {
        height: 60px;
        background-color: #eaeaea;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
            font-size: 18px;
            font-weight: 400;
        }
    }

    .chat-wrapper {
        height: calc(100% - 60px);
        display: flex;
        justify-content: center;

        .chat-container {
            /* border: 1px solid black; */
            margin-top: 10px;
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media (max-width: 576px) {
                & {
                    width: 95%;
                }
            }

            .messages-container {
                display: flex;
                flex-direction: column;
                overflow-y: auto;

                .message {
                min-height: 50px;
                max-width: 300px;
                margin-top: 5px;
                
                .message-text {
                    display: inline-block;
                    padding: 10px;
                    word-break: break-word;
                }

                &.mine {
                    align-self: flex-end;

                    .message-text {
                        background-color: #48E5C2;
                        border-radius: 20px 0 20px 20px;
                    }
                }

                &.not-mine {

                    .message-text {
                        background-color: #9ABCE7;
                        border-radius: 0 20px 20px 20px;
                    }
                }
            }
        }

            .chat-inputs {
                height: 60px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;

                .input-message {
                    height: 100%;
                    width: 100%;
                    outline: none;
                    border: none;
                    margin-right: 10px;
                    background-color: #9ABCE7;
                    border-radius: 20px;
                    padding: 10px;
                    font-size: 14px;
                    font-family: inherit;
                    resize: none;
                    line-height: 40px;

                    @media (max-width: 576px) {
                        & {
                            line-height: 1;
                        }
                    }
                }

                .send-message {
                    min-height: 60px;
                    min-width: 60px;
                    background-color: #A1C6EA;
                    border-radius: 50%;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 0.2s;
                    &:active {
                        transform: translateY(5px)
                    }
                }
            }
        }
    }
`

export default Container
import styled from "styled-components";

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;

    .info {
        font-weight: bold;
        font-size: 1.8rem;
    }

    p {
        margin-Top: 5px;
    }

    #emailMsg, #passwordMsg {
        color: red;
        font-size: 0.8rem;
    }

    label {
        font-weight: bold;
    }

    input {
        padding: 15px;
        border-radius: 10px;
        border-width: 1px;
        margin-Top: 5px;
    }

    .msg {
        color: red;
    }

    #validButton {
        background-color: #0C253F;
    }

    #invalidButton {
        background-color: #DADADA;
        disabled: ture;
    }
`;

export const confirmButton = styled.button`
    border-radius: 30px;
    border: none;
    padding: 10px;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
`;
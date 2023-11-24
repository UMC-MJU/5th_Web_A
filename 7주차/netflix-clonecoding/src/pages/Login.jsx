import { useState } from "react";
import * as S from "./Login.style"

let emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [emailValidationMsg, setEmailValidationMsg] = useState();
    const [passwordValidationMsg, setPasswordValidationMsg] = useState();

    const [loginValid, setLoginValid] = useState(false);

    const checkValidEmail = (value) => {
        return (emailPattern.test(value) && value.length !== 0);
    }

    const checkValidPassword = (value) => {
        return (passwordPattern.test(value) && value.length !== 0);
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!checkValidEmail(e.target.value)) {
            setEmailValidationMsg("올바른 이메일을 입력해주세요.");
            
        } else {
            setEmailValidationMsg("");
        }
        if (checkValidEmail(email) && checkValidPassword(password)) {
            setLoginValid(true);
        } else {
            setLoginValid(false);
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if(!checkValidPassword(e.target.value)) {
            setPasswordValidationMsg("영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.");
        } else {
            setPasswordValidationMsg("");
        }
        if (checkValidEmail(email) && checkValidPassword(password)) {
            setLoginValid(true);
        } else {
            setLoginValid(false);
        }
    };

    const handleConfirmButtonClick = () => {
        console.log(email, password);
    }

    return (
        <S.Login>
            <p className="info">이메일과 비밀번호를 입력해주세요</p>
            <label for="email">이메일 주소</label>
            <input id="email" placeholder="이메일 주소" onChange={handleEmailChange}></input>
            <p id="emailMsg">{emailValidationMsg}</p>
            <label for="password">비밀번호</label>
            <input id="password" type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" onChange={handlePasswordChange}></input>
            <p id="passwordMsg">{passwordValidationMsg}</p>
            {(loginValid)?
                <S.confirmButton id="validButton" onClick={handleConfirmButtonClick}>확인</S.confirmButton> :
                <S.confirmButton id="invalidButton" onClick={handleConfirmButtonClick}>확인</S.confirmButton>
            }
        </S.Login>
    )

}

export default Login;
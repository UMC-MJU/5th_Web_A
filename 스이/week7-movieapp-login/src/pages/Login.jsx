import React, { useState } from "react";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [checkEmail, setCheckEmail] = useState(true);
  const [passwordValue, setPasswordValue] = useState("");
  const [checkPassword, setCheckPassword] = useState(true);
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@^])[a-zA-Z0-9!@^]{8,12}$/;

  const emailChangeHandler = (event) => {
    setEmailValue(event.target.value);
    if (event.target.value.includes("@")) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };

  const passwordChangeHandler = (event) => {
    setPasswordValue(event.target.value);
    if (passwordRegex.test(event.target.value)) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };

  const submitHandler = (event) => {
    if (
      checkEmail &&
      emailValue !== "" &&
      checkPassword &&
      passwordValue !== ""
    ) {
      alert(emailValue + "님 반갑습니다.");
    } else {
      event.preventDefault();
    }
  };

  return (
    <div className="loginpagediv">
      <h2>이메일과 비밀번호를 입력해주세요</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="inputEmail">이메일 주소</label>
        <input
          id="inputEmail"
          type="email"
          value={emailValue}
          onChange={emailChangeHandler}
          placeholder="이메일을 입력해주세요"
        />
        <p
          style={{
            visibility: checkEmail ? "hidden" : "visible",
          }}
        >
          올바른 이메일을 입력해주세요.
        </p>
        <label htmlFor="inputPassword">비밀번호</label>
        <input
          id="inputPassword"
          type="password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
        />
        <p
          style={{
            visibility: checkPassword ? "hidden" : "visible",
          }}
        >
          영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
        </p>
        <input
          type="submit"
          value="확인"
          disabled={
            !(
              checkEmail &&
              emailValue !== "" &&
              checkPassword &&
              passwordValue !== ""
            )
          }
        />
      </form>
    </div>
  );
}

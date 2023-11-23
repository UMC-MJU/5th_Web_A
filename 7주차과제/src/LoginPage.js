import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [pas, setPas] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [pasMesaage, setPasMessage] = useState("");

  const navigate = useNavigate();
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleClick = () => {
    navigate("/");
  };

  const emailCorrect = (value) => {
    if (emailRegEx.test(value)) {
      setEmailMessage("맞는 형식 입니다.");
    } else {
      setEmailMessage("잘못된 형식 입니다.");
    }
  };

  const pasCorrect = (value) => {
    if (passwordRegex.test(value)) {
      setPasMessage("맞는 형식 입니다.");
    } else {
      setPasMessage("잘못된 형식 입니다.");
    }
  };

  return (
    <div className="App">
      <h1>이메일과 비밀번호를 입력해주세요</h1>
      <p>이메일 주소</p>
      <input
        className="email_input"
        value={email}
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
          emailCorrect(e.target.value);
        }}
      ></input>
      <p>{emailMessage}</p> {/* 추가: 이메일 형식 메시지 출력 */}
      <p>비밀번호</p>
      <input
        className="pas_input"
        value={pas}
        placeholder="영문,숫자,특수문자 포함 8자 이상"
        onChange={(e) => {
          setPas(e.target.value);
          pasCorrect(e.target.value);
        }}
      ></input>
      <p>{pasMesaage}</p>
      <button className="btn" onClick={handleClick}>
        확인
      </button>
    </div>
  );
}

export default LoginPage;

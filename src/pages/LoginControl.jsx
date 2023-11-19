import React from 'react';
import {useState} from 'react';
import Header from '../Components/Header';
//import Header from '../Components/Header';

const LoginForm1 = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <div>
      <Header/>
      <h2>이메일과 비밀번호를 입력해주세요</h2>
      <h4>이메일 주소</h4>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <button type="submit">로그인</button>
    </form>
    </div>
  )
}
export default LoginForm1;


/* const Login = () => {
  return (
    <div>
      <Header/>
      <h2>이메일과 비밀번호를 입력해주세요</h2>
      <h4>이메일 주소</h4>

      <h4>비밀번호</h4>
    </div>
  );
}

export default Login; */

/* import React from 'react';
import {} from 'react-router-dom'
import Header from '../Components/Header';
import styled from 'styled-components';

//요소들
const nameInput = document.querySelector(".input_name");
const nameError = document.querySelector('.nameError');

const nicknameInput = document.querySelector(".input_nickname");
const nicknameError = document.querySelector(".nicknameError");

const emailInput = document.querySelector(".input_email");
const emailError = document.querySelector(".emailError");

const passwordInput = document.querySelector(".input_password");
const passwordError = document.querySelector(".passwordError");

const passwordCheckInput = document.querySelector(".input_passwordCheck");
const passwordCheckError = document.querySelector(".passwordCheckError");

//이름
function validateName() {
   if (nameInput.value != "") {
       nameError.innerText = '멋진 이름 입니다.';
       nameError.classList.remove('error');
       nameError.classList.add('success');
   }
   else {
       nameError.innerText = '필수 입력 항목입니다.';
       nameError.classList.remove('success');
       nameError.classList.add('error');
   }
}

//닉네임
function validateNickname() {
   //const expNicknameText = /^[A-Za-z]{4,20}$/;
   !expPwText.test(passwordInput.value);

   if (nicknameInput.value.length >= 2 && nicknameInput.value.length <= 5) {
       nicknameError.innerText = '멋진 닉네임입니다.';
       nicknameError.classList.remove('error');
       nicknameError.classList.add('success');
   } else {
       nicknameError.innerText = '2자 이상 5글자 이하여야 합니다.';
       nicknameError.classList.remove('success');
       nicknameError.classList.add('error');
   }
}

//이메일    
function validateEmail() {
   if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
       emailError.innerText = '올바른 형식입니다.';
       emailError.classList.remove('error');
       emailError.classList.add('success');
   } else {
       emailError.innerText = '올바른 이메일 형식이 아닙니다.';
       emailError.classList.remove('success');
       emailError.classList.add('error');
   }
}

//비밀번호 입력에 필요한 정규 표현식
const expPwText = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

//비밀번호
function validatePassword() {
   if(!expPwText.test(passwordInput.value) == false){
       passwordError.innerText = '안전한 비밀번호 입니다.';
       passwordError.classList.remove('error');
       passwordError.classList.add('success');
   } else {
       passwordError.innerText = '영어 + 숫자 + 특수문자를 조합하여 만들어주세요.';
       passwordError.classList.remove('success');
       passwordError.classList.add('error');
   }
}

//비밀번호 확인
function validatePasswordCheck(){
   if (passwordCheckInput.value == passwordInput.value) {
       passwordCheckError.innerText = '비밀번호가 일치합니다.';
       passwordCheckError.classList.remove('error');
       passwordCheckError.classList.add('success');
   } else {
       passwordCheckError.innerText = '비밀번호가 일치 하지 않습니다';
       passwordCheckError.classList.remove('success');
       passwordCheckError.classList.add('error');
   }
}

//출력
document.querySelector('.name').addEventListener('input',validateName);
document.querySelector('.nickname').addEventListener('input',validateNickname);
document.querySelector('.email').addEventListener('input',validateEmail);
document.querySelector('.password').addEventListener('input',validatePassword);
document.querySelector('.passwordCheck').addEventListener('input',validatePasswordCheck);

//가입하기 창
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal_wrapper");

open.onclick = () => {
   if(
       nameInput.value != "" &&
       nicknameInput.value.length >= 2 &&
       nicknameInput.value.length <= 5 &&
       emailInput.value.includes("@") && emailInput.value.includes(".com") &&
       !expPwText.test(passwordInput.value) == false &&
       passwordCheckInput.value == passwordInput.value
   ){
       modal.style.display = "flex";
   }else{
       alert("조건이 충족하지 않았습니다.");
   }
};  

close.onclick = () => {
   modal.style.display = "none";
};
function Login(){
    return(
      <div>
        <Header/>
      <JoinmemBox>

      <JoinmemText>회원 가입</JoinmemText>

      <NameClass>이름
          <br></br>
          <InputName>{nameInput}</InputName>
          <NameError>{nameError}</NameError>
          <p></p>
      </NameClass>

      <NicknameClass>닉네임
          <br></br>
          <InputNickname>{nicknameInput}</InputNickname>
          <NicknameError>{nicknameError}</NicknameError>
          <p></p>
      </NicknameClass>

      <EmailClass>이메일
          <br></br>
          <InputEmail>{emailInput}</InputEmail>
          <EmailError>{emailError}</EmailError>
          <p></p>
      </EmailClass>

      <PasswordClass>비밀번호
          <br></br>
          <InputPassword>{passwordInput}</InputPassword>
          <PasswordError>{passwordError}</PasswordError>
          <p></p>
      </PasswordClass>

      <PasswordCheckClass>비밀번호 확인
          <br></br>
          <InputPasswordCheck>{passwordCheckInput}</InputPasswordCheck>
          <PasswordCheckError>{passwordCheckError}</PasswordCheckError>
          <p></p>
      </PasswordCheckClass>

      <p></p>

      <JoinButton>가입하기</JoinButton>
      
      <ModalWrapper style="display: none">
          <ModalClass>
              <ModalTitle>가입 성공!</ModalTitle>
              <p>umc 챌린저 가입을 축하합니다 !</p>
              <CloseWrapper>
                  <CloseButton>닫기</CloseButton>
              </CloseWrapper>
          </ModalClass>
       </ModalWrapper>
       

      </JoinmemBox>
      </div>
    );
}

export default Login;

const JoinmemBox = styled.div`
  width: 700px;
  height: 650px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: rgb(195, 195, 195);
  border-radius: 17px 17px;
  opacity: 70%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const JoinmemText = styled.div`
  width: 400px;
  font-size: 55px;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 3%;
  border-bottom: 2px solid;
  border-color: white;
  text-align: center;
  justify-content: center;

`;

const InputName = styled.text`
  width: 250px;
  height: 33px;
  border: none;
  font-size: 25px;
  border-style: solid;
  border-color: white;
  background-color:rgb(195, 195, 195);
  border-style: bold;
  border-radius: 7px 7px;
`;

const NameClass = styled.div`
  margin-left: 221px;
  color: white;
  text-align: left;
`;

const NameError = styled.div`
  margin-top: 3px;
  font-size: 12px;
  color: red;
  margin: 0;
`;

const NicknameClass = styled.div`
  margin-left: 221px;
  color: white;
  text-align: left;
`;

const InputNickname = styled.text`
  width: 250px;
  height: 33px;
  border: none;
  font-size: 25px;
  border-style: solid;
  border-color: white;
  background-color:rgb(195, 195, 195);
  border-style: bold;
  border-radius: 7px 7px;
`;

const NicknameError = styled.div`
  margin-top: 3px;
  font-size: 12px;
  color: red;
`;

const EmailClass = styled.div`
  margin-left: 221px;
  color: white;
  text-align: left;
`;

const InputEmail = styled.text`
  width: 250px;
  height: 33px;
  border: none;
  font-size: 25px;
  border-style: solid;
  border-color: white;
  background-color:rgb(195, 195, 195);
  border-style: bold;
  border-radius: 7px 7px;
`;

const EmailError = styled.div`
  margin-top: 3px;
  font-size: 12px;
  color: red;
`;

const PasswordClass = styled.div`
  margin-left: 221px;
  color: white;
  text-align: left;
`;

const InputPassword = styled.text`
  width: 250px;
  height: 33px;
  border: none;
  font-size: 25px;
  border-style: solid;
  border-color: white;
  background-color:rgb(195, 195, 195);
  border-style: bold;
  border-radius: 7px 7px;
`;


const PasswordError = styled.div`
  margin-top: 3px;
  font-size: 12px;
  color: red;
`;

const PasswordCheckClass = styled.div`
  margin-left: 221px;
  color: white;
  text-align: left;
`;

const InputPasswordCheck = styled.text`
  width: 250px;
  height: 33px;
  border: none;
  font-size: 25px;
  border-style: solid;
  border-color: white;
  background-color:rgb(195, 195, 195);
  border-style: bold;
  border-radius: 7px 7px;
`;

const PasswordCheckError = styled.div`
  margin-top: 3px;
  font-size: 12px;
  color: red;
`;

const JoinButton = styled.button`
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalClass = styled.div`
  background: white;
  padding: 24px 16px;
  border-radius: 4px;
  width: 320px;
  align-items: center;
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const CloseWrapper = styled.div`
  text-align: right;
`;

const CloseButton = styled.button`
`;

 */




{/* {import React from 'react';
import styled from 'styled-components';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // 로그인 상태를 저장하는 상태
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true, // 로그인 상태를 true로 변경
    });
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false, // 로그인 상태를 false로 변경
    });
  }

  render() {
    const { isLoggedIn } = this.state; // 로그인 상태 상태 가져오기

    let button;
    let greeting;

    if (isLoggedIn) {
      button = <LogOutButton onClick={this.handleLogoutClick}>로그아웃</LogOutButton>;
      greeting = <LogOutComment>환영합니다! 로그인되었습니다.</LogOutComment>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick}>로그인</LoginButton>;
      greeting = <LoginComment>로그인되어 있지 않습니다.</LoginComment>;
    }

    return (
      <LoginDiv>
        {button}
        {greeting}
      </LoginDiv>
    );
  }
}

const LoginDiv = styled.div`
  display: flex;
  padding: 5px;
`;

const LoginButton =styled.button`
  color: black;
  border-radius: 15px;
  outline: none;
  border: none;
  height: 25px;
  width: 70px;
  margin-top: 12.5px;
  margin-right: 15px;
`;

const LogOutButton =styled.button`
  color: black;
  border-radius: 15px;
  outline: none;
  border: none;
  height: 25px;
  width: 70px;
  margin-top: 12.5px;
  margin-right: 15px;
`;

const LoginComment =styled.p`
  color: white;
  font-size: 15px;
  height: 15px;
`;

const LogOutComment =styled.p`
  color: white;
  font-size: 15px;
`;

export default LoginControl;} */}

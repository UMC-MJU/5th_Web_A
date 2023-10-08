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
   const expNicknameText = /^[A-Za-z]{4,20}$/;
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


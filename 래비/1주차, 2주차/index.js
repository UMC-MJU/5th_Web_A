const nameInput = document.getElementById('nameInput');
const nicknameInput = document.getElementById('nicknameInput');
const emailInput = document.getElementById('emailInput');
const pwdInput = document.getElementById('pwdInput');
const pwdCheckInput = document.getElementById('pwdCheckInput');
const signInBtn = document.getElementById('signInBtn');

const nameMsg = document.getElementById('nameMsg');
const nicknameMsg = document.getElementById('nicknameMsg');
const emailMsg = document.getElementById('emailMsg');
const pwdMsg = document.getElementById('pwdMsg');
const pwdCheckMsg = document.getElementById('pwdCheckMsg');

const modal = document.querySelector('.modal-wrapper');
const closeBtn = document.getElementById('closeBtn');

let emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
let pwdPattern = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

function isCompleted() {
    if(nameInput.value && (nicknameInput.value.length >= 2 && nicknameInput.value.length <= 5) && emailPattern.test(emailInput.value) && 
    pwdPattern.test(pwdInput.value) && pwdInput.value === pwdCheckInput.value) {
        return true;
    } else {
        return false;
    }
}

function changeSignInBtn() {
    if(isCompleted()) {
        signInBtn.disabled = false;
        signInBtn.style.backgroundColor = '#353535';
        signInBtn.style.cursor = 'pointer';
    } else {
        signInBtn.disabled = true;
        signInBtn.style.backgroundColor = 'grey';
        signInBtn.style.cursor = 'default';
    }
}

nameInput.addEventListener('input', () => {
    nameMsg.style.visibility = 'visible';

    if(nameInput.value) {
        nameMsg.innerText = '멋진 이름이네요!';
        nameMsg.style.color = '#00FF80';
    } else {
        nameMsg.innerText = '필수 입력 항목입니다!';
        nameMsg.style.color = '#f05650';
    }

    changeSignInBtn();
})

nicknameInput.addEventListener('input', () => {
    nicknameMsg.style.visibility = 'visible';

    if(nicknameInput.value.length >= 2 && nicknameInput.value.length <= 5) {
        nicknameMsg.innerText = '멋진 닉네임이군요!';
        nicknameMsg.style.color = '#00FF80';
    } else {
        nicknameMsg.innerText = '닉네임을 2 ~ 5글자로 구성해주세요!';
        nicknameMsg.style.color = '#f05650';
    }

    changeSignInBtn();
})


emailInput.addEventListener('input', () => {
    emailMsg.style.visibility = 'visible';

    if(emailPattern.test(emailInput.value)) {
        emailMsg.innerText = '올바른 이메일 형식입니다!';
        emailMsg.style.color = '#00FF80';
    } else {
        emailMsg.innerText = '올바른 이메일 형식이 아닙니다!';
        emailMsg.style.color = '#f05650';
    }

    changeSignInBtn();
})

pwdInput.addEventListener('input', () => {
    pwdMsg.style.visibility = 'visible';

    if(pwdPattern.test(pwdInput.value)) {
        pwdMsg.innerText = '안전한 비밀번호입니다!';
        pwdMsg.style.color = '#00FF80';
    } else {
        pwdMsg.innerText = '영어+숫자+특수문자를 조합하여 작성해주세요!';
        pwdMsg.style.color = '#f05650';
    }

    if(pwdInput.value.length != 0) {
        if(pwdInput.value === pwdCheckInput.value) {
            pwdCheckMsg.innerText = '비밀번호가 일치합니다!';
            pwdCheckMsg.style.color = '#00FF80';
        } else {
            pwdCheckMsg.innerText = '비밀번호가 일치하지 않습니다!';
            pwdCheckMsg.style.color = '#f05650';
        }
    }

    changeSignInBtn();
})

pwdCheckInput.addEventListener('input', () => {
    pwdCheckMsg.style.visibility = 'visible';

    if(pwdInput.value.length != 0) {
        if(pwdInput.value === pwdCheckInput.value) {
            pwdCheckMsg.innerText = '비밀번호가 일치합니다!';
            pwdCheckMsg.style.color = '#00FF80';
        } else {
            pwdCheckMsg.innerText = '비밀번호가 일치하지 않습니다!';
            pwdCheckMsg.style.color = '#f05650';
        }
    }

    changeSignInBtn();
})


signInBtn.onclick = () => {
    modal.style.display = 'flex';
}

closeBtn.onclick = () => {
    modal.style.display = 'none';
}

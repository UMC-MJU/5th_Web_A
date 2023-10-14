const modal = document.querySelector(".modalContainer");
const signup = document.getElementById("signup");
const close = document.getElementById("close");
const names = document.getElementById("name");
const namep = document.getElementById("namep");
const nickname = document.getElementById("nickname");
const nicknamep = document.getElementById("nicknamep");
const email = document.getElementById("email");
const emailp = document.getElementById("emailp");
const password = document.getElementById("password");
const passwordp = document.getElementById("passwordp");
const passwordconfirm = document.getElementById("passwordconfirm");
const passwordconfirmp = document.getElementById("passwordconfirmp");
const bool = {
  name: false,
  nickname: false,
  email: false,
  password: false,
  passwordconfirm: false,
};

function checkInputs() {
  if (
    bool.name &&
    bool.nickname &&
    bool.email &&
    bool.password &&
    bool.passwordconfirm
  ) {
    signup.disabled = false;
  } else {
    signup.disabled = true;
  }
}

names.addEventListener("input", function (e) {
  if (names.value === "") {
    namep.innerText = "필수 입력 항목입니다!";
    namep.style.color = "#ed6464";
    bool.name = false;
  } else {
    namep.innerText = "멋진 이름이네요!";
    namep.style.color = "#6bc97b";
    bool.name = true;
  }
  checkInputs();
});

nickname.addEventListener("input", function (e) {
  if (nickname.value.length < 2 || nickname.value.length > 5) {
    nicknamep.innerText = "닉네임은 2~5글자로 구성해주세요!";
    nicknamep.style.color = "#ed6464";
    bool.nickname = false;
  } else {
    nicknamep.innerText = "멋진 닉네임이군요!";
    nicknamep.style.color = "#6bc97b";
    bool.nickname = true;
  }
  checkInputs();
});

email.addEventListener("input", function (e) {
  if (email.value.includes("@") && email.value.endsWith(".com")) {
    emailp.innerText = "올바른 메일 형식입니다!";
    emailp.style.color = "#6bc97b";
    bool.email = true;
  } else {
    emailp.innerText = "올바른 메일 형식이 아닙니다!";
    emailp.style.color = "#ed6464";
    bool.email = false;
  }
  checkInputs();
});

let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

password.addEventListener("input", function (e) {
  if (reg.test(password.value)) {
    passwordp.innerText = "안전한 비밀번호입니다!";
    passwordp.style.color = "#6bc97b";
    bool.password = true;
  } else {
    passwordp.innerText = "영어+숫자+특수문자를 포함해야 합니다.";
    passwordp.style.color = "#ed6464";
    bool.password = false;
  }
  checkInputs();
});

passwordconfirm.addEventListener("input", function (e) {
  if (password.value === passwordconfirm.value) {
    passwordconfirmp.innerText = "비밀번호가 일치합니다.";
    passwordconfirmp.style.color = "#6bc97b";
    bool.passwordconfirm = true;
  } else {
    passwordconfirmp.innerText = "비밀번호가 일치하지 않습니다.";
    passwordconfirmp.style.color = "#ed6464";
    bool.passwordconfirm = false;
  }
  checkInputs();
});

signup.onclick = () => {
  modal.style.display = "flex";
};

close.onclick = () => {
  modal.style.display = "none";
};

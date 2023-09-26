const nameInput = document.getElementById("name");
const nicknameInput = document.getElementById("nickname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submitButton");

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

nameInput.addEventListener("input", validateName);
nicknameInput.addEventListener("input", validateNickname);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

const passwordPattern =
  /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

function validateName() {
  const name = nameInput.value;
  const nameError = document.getElementById("nameError");
  if (name === "") {
    nameError.textContent = "필수 입력 항목입니다";
    nameError.style.color = "red";
    open.disabled = true;
  } else {
    nameError.textContent = "멋진 이름이네요!";
    nameError.style.color = "green";
    open.disabled = false;
  }
}

function validateNickname() {
  const nickname = nicknameInput.value.length;
  const nicknameError = document.getElementById("nicknameError");
  if (nickname < 2 || nickname > 5) {
    nicknameError.textContent = "2-5사이여야 합니다.";
    nicknameError.style.color = "red";
    open.disabled = true;
  } else {
    nicknameError.textContent = "멋진 닉네임이군요!";
    nicknameError.style.color = "green";
    open.disabled = false;
  }
}

function validateEmail() {
  const email = emailInput.value;
  const emailError = document.getElementById("emailError");
  if (email.includes("@")) {
    emailError.textContent = "올바른 메일 형식입니다!";
    emailError.style.color = "green";
    open.disabled = false;
  } else {
    emailError.textContent = "올바른 메일 형식이 아닙니다!";
    emailError.style.color = "red";
    open.disabled = true;
  }
}

function validatePassword() {
  const passwordError = document.getElementById("passwordError");

  const passwordPattern =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  const password = passwordInput.value;

  if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "영문 소문자, 숫자, 특수 문자를 모두 포함해야 합니다.";
    passwordError.style.color = "red";
    open.disabled = true;
  } else {
    passwordError.textContent = "안전한 비밀번호 입니다! ";
    passwordError.style.color = "green";
    open.disabled = false;
  }
}

function validateConfirmPassword() {
  const confirmPassword = confirmPasswordInput.value;
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  if (confirmPassword !== passwordInput.value) {
    confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다.";
    confirmPasswordError.style.color = "red";
    open.disabled = true;
  } else {
    confirmPasswordError.textContent = "비밀번호가 일치합니다 ";
    confirmPasswordError.style.color = "green";
    open.disabled = false;
  }
}

open.onclick = () => {
  if (
    nameInput.value !== "" &&
    nicknameInput.value.length >= 2 &&
    nicknameInput.value.length <= 5 &&
    emailInput.value.includes("@") &&
    passwordPattern.test(passwordInput.value) &&
    confirmPasswordInput.value === passwordInput.value
  ) {
    modal.style.display = "flex";
  } else {
    alert("조건이 충족하지 않았습니다.");
  }
};

close.onclick = () => {
  modal.style.display = "none";
};

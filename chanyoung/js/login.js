const ID = document.getElementsByClassName("inputId")[0];
const PW = document.getElementsByClassName("inputPw")[0];
const loginButton = document.getElementsByClassName("loginButton")[0];
const loginForm = document.getElementsByClassName("loginForm")[0];
function changeColor() {
  if (ID.value.includes('@') && PW.value.length>4) {
    loginButton.disabled="false"
    loginButton.style.backgroundColor = "#0096f6";
  } else {
    loginButton.disabled = "true"
    loginButton.style.backgroundColor = "#9fcdea";
  }
}
PW.addEventListener('keyup', changeColor);
const loginForm = document.getElementById("login-form");
const inputID = document.getElementById("id-input");
const inputPW = document.getElementById("pw-input");
const loginButton = document.getElementById("login-btn");

function pushValue() {
  switch (!(inputID.value && inputPW.value)) {
    case false:
      loginButton.disabled = false;
      loginButton.style.backgroundColor = "rgb(29, 142, 255)";
      break;
    case true:
      loginButton.disabled = true;
      loginButton.style.backgroundColor = "rgb(133, 182, 231)";
      break;
  }
}

inputID.addEventListener("keyup", pushValue);
inputPW.addEventListener("keyup", pushValue);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

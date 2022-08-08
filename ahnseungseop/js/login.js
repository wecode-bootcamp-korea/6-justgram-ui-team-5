let loginInput = document.getElementsByClassName("login__input");
let id = loginInput[0];
let pw = loginInput[1];
let btn = document.querySelector(".login__btn > button");

document.addEventListener("keyup", function (event) {
  if (id.value.length > 0 && pw.value.length > 0) {
    btn.disabled = false;
    btn.className = "login__btn-enable";
  } else {
    btn.disabled = true;
    btn.className = "login__btn-disable";
  }
});

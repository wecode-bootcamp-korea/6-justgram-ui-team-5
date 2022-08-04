const idElmt = document.getElementById("id");
const pwElmt = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

function pushValue() {
  switch (!(idElmt.value && pwElmt.value)) {
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

idElmt.addEventListener("keyup", pushValue);
pwElmt.addEventListener("keyup", pushValue);

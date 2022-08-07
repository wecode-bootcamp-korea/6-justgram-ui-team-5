const loginForm = document.getElementById("login-form");
const inputID = document.getElementById("id-input");
const inputPW = document.getElementById("pw-input");
const loginButton = document.getElementById("login-btn");

// 로그인 validation(유효성 검사) 함수
function pushValue() {
  switch (!(inputID.value && inputPW.value)) {
    case false: // inpuID, inpuPW 에 값이 있는 경우
      switch (!(inputID.value.includes("@") && inputPW.value.length >= 5)) {
        case false: // id "@" 포함시 && pw 5글자 이상이면 loginButton 활성화
          console.log("hey");
          loginButton.disabled = false;
          loginButton.style.backgroundColor = "rgb(29, 142, 255)";
          break;
        case true: // id "@" 미포함시 && pw 5글자 미만이면 loginButton 비활성화
          console.log("bb");
          loginButton.disabled = true;
          loginButton.style.backgroundColor = "rgb(133, 182, 231)";
          break;
      }
      break;
    case true: // inpuID, inpuPW 에 값이 없는 경우 loginButton 비활성화
      loginButton.disabled = true;
      loginButton.style.backgroundColor = "rgb(133, 182, 231)";
      break;
  }
}

// login input태그에 keyup 이벤트 일어날때마다 유효성 검사
inputID.addEventListener("keyup", pushValue);
inputPW.addEventListener("keyup", pushValue);

// login button태그에 submit 이벤트 일어날떄마다 새로고침 없애주기
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

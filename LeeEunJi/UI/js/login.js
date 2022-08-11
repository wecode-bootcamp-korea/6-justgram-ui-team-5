// 엘리멘트(태그)선택
const inputId = document.getElementById("input-id");
const inputPw = document.getElementById("input-pw");
const loginButton = document.getElementById("login");
// #input-pw 여기에 이벤트가 발생(keyup)

// 다중이벤트 -> 각각 input(pw, id) 해당 값들이 없으면 (null, length ===0) 이거일 때 버튼이 활성화//비활성화 되게 만들어보셈
// 이건 다중이벤트를 검색해보면 이벤트 function을 하나만들고 각각의 input에 event가 들어가게

function buttonEvent() {
  // 비교 후 button disable/enable 시켜주는 프로세스
  // 비교 : Id / pw 값이 있을 경우 => button 활성화
  //                값이 없을 경우 => button 비활성화
  // hint : input 값에서 value를 가져오는 방법
  //       -> const value = 어떤인풋을가져와서.value;
  if (
    inputId.value === null ||
    inputId.value === "" ||
    inputPw.value === null ||
    inputPw.value === ""
  ) {
    // 값이 없을 경우
    loginButton.setAttribute("disabled", true);
    loginButton.style.backgroundColor = "rgb(190, 220, 248)";
  } else {
    //id/pw가 값이 있을 경우
    loginButton.removeAttribute("disabled");
    loginButton.style.backgroundColor = "lightskyBlue";
  }
}

inputId.addEventListener("keyup", function () {
  buttonEvent();
});

inputPw.addEventListener("keyup", function () {
  buttonEvent();
});

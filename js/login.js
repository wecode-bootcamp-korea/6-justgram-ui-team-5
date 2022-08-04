const inputid = document.getElementById("id_box");
const inputpw = document.getElementById("pw_box");
const loginbtn = document.getElementById("loginbtn");

function onIput() {
  const id = inputid.value;
  const pw = inputpw.value;

  if (id.length > 1 && pw.length > 1) {
    loginbtn.style.backgroundColor = "#4ec5f4";
    loginbtn.style.cursor = "pointer";
    loginbtn.disabled = false;
  } else {
    loginbtn.style.backgroundColor = "#c4e1fb";
    loginbtn.style.cursor = "not-allowed";
    loginbtn.disabled = true;
  }
}
inputid.addEventListener("input", onIput);
inputpw.addEventListener("input", onIput);

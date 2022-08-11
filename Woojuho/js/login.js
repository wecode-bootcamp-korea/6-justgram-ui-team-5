const $loginButton = document.querySelector('.loginButton')
const $username = document.querySelector('#username')
const $password = document.querySelector('#password')

$username.addEventListener('input', loginButtonActive);
$password.addEventListener('input', loginButtonActive);

function loginButtonActive() {
  if($username.value !== '' && $password.value !== ''){
    $loginButton.classList.add('active');
    $loginButton.disabled = false;
  } else {
    $loginButton.classList.remove('active');
    $loginButton.disabled = true;
  }
}

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");

function confirmThePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.onchange = confirmThePassword;
confirmPassword.onkeyup = confirmThePassword;

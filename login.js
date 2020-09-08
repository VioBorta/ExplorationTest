const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginId = document.getElementById("loginId");
const avatarID = document.getElementById("avatarID");
const userLogged = document.getElementById("userLogged");
const img = document.getElementById("img");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "pass") {
    window.localStorage.setItem(username, "user");
    window.localStorage.setItem(password, "web_dev");
    console.log("logged");
    loginId.style.display = "none";
    avatarID.style.display = "block";
    loginForm.style.display="none"
    userLogged.style.display = "block";
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

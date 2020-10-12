
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");
const logout = document.getElementById("logout");
const avatarID = document.getElementById("avatarID");

window.addEventListener("load", (e) => {
  var cookie = document.cookie;

  if (cookie) {
    avatarID.style.display = "block";
    loginId.style.display = "none";
    userID.style.display = "block";
    logout.style.display = "block";
  } else {
    avatarID.style.display = "none";
    loginId.style.display = "block";
    userID.style.display = "none";
    logout.style.display = "none";
  }
});

logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
});
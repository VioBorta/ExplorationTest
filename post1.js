const post1 = document.getElementById("post1");
const post1Img = document.getElementById("post1Img");
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");
const logout = document.getElementById("logout");

window.addEventListener("load", (e) => {
  if (window.localStorage.getItem("user")) {
    post1Img.style.display = "block";
    avatarID.style.display = "block";
    loginId.style.display = "none";
    userID.style.display = "block";
    logout.style.display = "block";
  } else {
    post1Img.style.display = "none";
    post1Img.style.opacity = 0;
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
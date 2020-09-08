
const post4 = document.getElementById("post4");
const post4Img = document.getElementById("post4Img");
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");
const logout = document.getElementById("logout");

window.addEventListener("load", (e) => {
  if (window.localStorage.getItem("user")) {
    post4Img.style.display = "block";
    avatarID.style.display = "block";
    loginId.style.display = 'none';
    userID.style.display = 'block';
    logout.style.display = 'block';
  } else {
    post4Img.style.display = "none";
    post4Img.style.opacity = 0;
    avatarID.style.display = "none";
    loginId.style.display = 'block';
    userID.style.display = 'none';
    logout.style.display = 'none';
  }
});

logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
});
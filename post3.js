
const post3 = document.getElementById("post3");
const post3Img = document.getElementById("post3Img");
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");

window.addEventListener("load", (e) => {
  if (window.localStorage.getItem("user")) {
    post3Img.style.display = "block";
    avatarID.style.display = "block";
    loginId.style.display = 'none';
    userID.style.display = 'block';
  } else {
    post3Img.style.display = "none";
    avatarID.style.display = "none";
    loginId.style.display = 'block';
    userID.style.display = 'none';
  }
});

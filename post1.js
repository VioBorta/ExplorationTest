
const post1 = document.getElementById("post1");
const post1Img = document.getElementById("post1Img");
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");

window.addEventListener("load", (e) => {
  if (window.localStorage.getItem("user")) {
    post1Img.style.display = "block";
    avatarID.style.display = "block";
    loginId.style.display = 'none';
    userID.style.display = 'block';
  } else {
    post1Img.style.display = "none";
    avatarID.style.display = "none";
    loginId.style.display = 'block'
    userID.style.display = 'none';
  }
});


const post2 = document.getElementById("post2");
const post2Img = document.getElementById("post2Img");
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");

window.addEventListener("load", (e) => {
  if (window.localStorage.getItem("user")) {
    post2Img.style.display = "block";
    avatarID.style.display = "block";
    loginId.style.display = 'none';
    userID.style.display = 'block';
  } else {
    post2Img.style.display = "none";
    avatarID.style.display = "none";
    loginId.style.display = 'block';
    userID.style.display = 'none';
  }
});


const post4 = document.getElementById("post4");
const post4Img = document.getElementById("post4Img");
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");

window.addEventListener("load", (e) => {
  if (window.localStorage.getItem("user")) {
    post4Img.style.display = "block";
    avatarID.style.display = "block";
    loginId.style.display = 'none';
    userID.style.display = 'block';
  } else {
    post4Img.style.display = "none";
    avatarID.style.display = "none";
    loginId.style.display = 'block';
    userID.style.display = 'none';
  }
});

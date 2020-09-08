const post2 = document.getElementById("post2");
const post2Img = document.getElementById("post2Img");
const loginId = document.getElementById("loginId");
const logout = document.getElementById("logout");

post2.addEventListener("click", (e) => {
  e.preventDefault();
  if (window.localStorage.getItem("user") === null) {
    post2Img.style.display = "none";
    // loginId.style.display = "none";
    // logout.style.display = "block";
  }else{
    post2Img.style.display = "block";
    // loginId.style.display = "block";
    // logout.style.display = "none";
  }
});

logout.addEventListener("click", (e) => {
    e.preventDefault();
  localStorage.clear();
});

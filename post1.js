const post1 = document.getElementById("post1");
const post1Img = document.getElementById("post1Img");

post1.addEventListener("click", (e) => {
   if (
    window.localStorage.getItem("user") &&
    window.localStorage.getItem("pass") === null
  ) {
    post1Img.style.display = "none";
  }else {
   post1Img.style.display = "block";
  }
});

const post4 = document.getElementById("post4");
const post4Img = document.getElementById("post4Img");

post4.addEventListener("click", (e) => {
  e.preventDefault();
 if(window.localStorage.getItem('user')){
    post4Img.style.display = "block";
 }
});


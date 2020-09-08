const post3 = document.getElementById("post3");
const post3Img = document.getElementById("post3Img");

post3.addEventListener("click", (e) => {
  e.preventDefault();
 if(window.localStorage.getItem('user') === null){
    post3Img.style.display = "none";
 }else{
    post3Img.style.display = "block";

 }
});


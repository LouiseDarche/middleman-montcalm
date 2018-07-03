//= require jquery
//= require bootstrap
//= require_tree .


let imageId = 0;
function changeWrapper() {
  if(!imageId){
    document.querySelector(".right-image").style.backgroundImage = "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%), url(images/fond-1-full.jpg";
    imageId++;
  }
  else if (imageId == 1){
    document.querySelector(".right-image").style.backgroundImage = "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%), url(images/fond-2.jpg";
    imageId++;
  }
  else if(imageId == 2){
    document.querySelector(".right-image").style.backgroundImage = "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%), url(images/fond-3.jpg";
    imageId = 0;
  }
}
window.setInterval(changeWrapper, 5000);





// document.addEventListener("DOMContentLoaded", function(event) {
// })


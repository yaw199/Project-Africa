// SELECTORS//
const dotWrapper = document.querySelector(".dot-wrapper");
const menuWrapper = document.querySelector(".menu-wrapper");
const slideShow = document.querySelector(".slide-wrapper");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

// MENU TOGGLE//

dotWrapper.addEventListener("click", function(){
    menuWrapper.classList.toggle("menu-wrapper-active1");
    dotWrapper.childNodes[1].classList.toggle("dot1-active");
    dotWrapper.childNodes[3].classList.toggle("dot2-active");
    dotWrapper.childNodes[5].classList.toggle("dot3-active");
    
});








// HOME SLIDE-SHOOW// NB: MUST BE AT THE BOTTOM//
let i =0;
let images = ["don1.png","don2.png","don3.png","don4.png","don5.png","don7.png","don8.png","don10.png"];
let time = 9000;

function pictureSlides(){
    slideShow.style.backgroundImage = "url(images/" + images[i] + ")";
    if(i <images.length-1 ){
        i++;
    }

    else{
        i=0;
    }

    let timeOut = setTimeout(pictureSlides, time);
    leftArrow.addEventListener("click",function(){
        clearTimeout(timeOut);
    });
    rightArrow.addEventListener("click",function(){
        clearTimeout(timeOut);
    });
}

pictureSlides();

// RIGHT SLIDE//

rightArrow.addEventListener("click",function(){

     slideShow.style.backgroundImage = "url(images/" + images[i] + ")";

     if (i<images.length-1){
         i++;
     }
     else{
         i=0;
     }
})

// LEFT SLIDE//

leftArrow.addEventListener("click",function(){

     slideShow.style.backgroundImage = "url(images/" + images[i] + ")";

     if (i<images.length && i>0){
         i--;
     }

     else{
         i=images.length-1;
     }

})
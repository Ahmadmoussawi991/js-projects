const slides=document.querySelectorAll(".images img")
let slideindex=0
document.addEventListener("DOMContentLoaded",initialize)
function initialize(){
    if(slides.length>0){
        slides[slideindex].classList.add("displayslide")
    }
}
function show(index){
    if(index>=slides.length){
        slideindex=0
    }
    else if(index<0){
        slideindex=slides.length-1;
    }
    slides.forEach(slide=>{slide.classList.remove("displayslide")})
    slides[slideindex].classList.add("displayslide")
}
function next(){
slideindex++
show(slideindex)
}
function prev(){
    slideindex--
    show(slideindex)
}
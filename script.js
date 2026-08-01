/*=========================================
 ALBERTO DORIAN OFFICIAL
 VERSION 1.0
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*==============================
AÑO AUTOMÁTICO
==============================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
MENÚ MÓVIL
==============================*/

const menuBtn=document.querySelector(".menu-mobile");
const menu=document.querySelector(".menu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("open");

});

}

/*==============================
SLIDER
==============================*/

const slides=document.querySelectorAll(".slide");
const dots=document.querySelectorAll(".dot");

const next=document.getElementById("next");
const prev=document.getElementById("prev");

let current=0;
let timer;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");

current=index;

}

function nextSlide(){

let index=current+1;

if(index>=slides.length){

index=0;

}

showSlide(index);

}

function prevSlide(){

let index=current-1;

if(index<0){

index=slides.length-1;

}

showSlide(index);

}

function startSlider(){

timer=setInterval(nextSlide,5000);

}

function stopSlider(){

clearInterval(timer);

}

if(next){

next.addEventListener("click",()=>{

stopSlider();

nextSlide();

startSlider();

});

}

if(prev){

prev.addEventListener("click",()=>{

stopSlider();

prevSlide();

startSlider();

});

}

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

stopSlider();

showSlide(index);

startSlider();

});

});

startSlider();

/*==============================
SWIPE MÓVIL
==============================*/

const slider=document.querySelector(".slider");

if(slider){

let startX=0;
let endX=0;

slider.addEventListener("touchstart",(e)=>{

startX=e.changedTouches[0].screenX;

});

slider.addEventListener("touchend",(e)=>{

endX=e.changedTouches[0].screenX;

if(endX<startX-60){

stopSlider();

nextSlide();

startSlider();

}

if(endX>startX+60){

stopSlider();

prevSlide();

startSlider();

}

});

}

/*==============================
BOTÓN SUBIR
==============================*/

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-chevron-up"></i>';

topButton.className="backTop";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
ANIMACIÓN SCROLL
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(".fade").forEach(item=>{

observer.observe(item);

});

});

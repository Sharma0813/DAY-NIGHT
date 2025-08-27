let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#text",{
strings:["CARS & BIKES", "BMW", "MERCEDES", "AUDI", "DEFENDER"],
loop:true,
typeSpeed:125,
backSpeed:45,
backDelay:1500
})
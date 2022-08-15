const buttonE1=document.querySelector(".btn")
const closeiconE1=document.querySelector(".close-icon")
const trailerContainerE1=document.querySelector(".trailer-container")

const videoE1=document.querySelector("video")

buttonE1.addEventListener("click", ()=>{
    trailerContainerE1.classList.remove("active");
})

closeiconE1.addEventListener("click",()=>
{
    trailerContainerE1.classList.add("active")

    videoE1.pause();
    videoE1.currentTime=0;
})
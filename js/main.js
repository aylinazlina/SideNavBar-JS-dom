// get all html element

const sideNavbar=document.querySelector(".sideNavbar");
const rightIconbar=document.querySelector(".rightIconbar");
const crossIcon=document.querySelector(".crossIcon");

rightIconbar.addEventListener("click",()=>{
  if(sideNavbar.classList.contains("sideNavbar")){
    sideNavbar.classList.toggle("activeSideNavbar");
  }
    
});

crossIcon.addEventListener("click",()=>{
    sideNavbar.classList.add("activeSideNavbar");
});
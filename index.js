const navToggle = document.querySelector(".navToggle");
const ullNav = document.querySelector(".ullNav");

navToggle.addEventListener("click", ()=>{
    ullNav.classList.toggle("ullNav_visible");
});

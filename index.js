const navToggle = document.querySelector(".navToggle");
const ullNav = document.querySelector(".ullNav");

navToggle.addEventListener("click", ()=>{
    ullNav.classList.toggle("ullNav_visible");

    if (ullNav.classList.contains("ullNav_visible")){
        navToggle.setAttribute("arial-label", "cerrar menú");
    }else{
        navToggle.setAttribute("arial-label", "Abrir menú")
    }
});

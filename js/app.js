const iconMenu = document.querySelector(".menu__icon");
const img = document.querySelector(".menu__icon img");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", () => {
    menu.classList.toggle("menu--active");

    if(document.querySelector(".menu--active")) {
        img.src = "img/icon-close.svg";
    } else {
        img.src = "img/hamburguer.svg";
    }
})
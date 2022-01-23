const iconMenu = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", () => {
    menu.classList.toggle("menu--active");
})
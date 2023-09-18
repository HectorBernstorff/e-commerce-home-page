const rightArrow = document.querySelector(".mainPage .Menu .rightArrowIcon");
const leftArrow = document.querySelector(".mainPage .Menu .leftArrowIcon");

const rightArrowMobile = document.querySelector(".mainPage .Menu .rightArrowIconMobile");
const leftArrowMobile = document.querySelector(".mainPage .Menu .leftArrowIconMobile");

const menuList = document.querySelector(".innerMenu");
const navPadding = document.querySelector(".MainContent");

const nav = document.querySelector(".navBar");
let lastScrollY = window.scrollY;


rightArrow.addEventListener("click", () => {
    menuList.scrollLeft += 208;

});

leftArrow.addEventListener("click", () => {
    menuList.scrollLeft -= 208;

});

rightArrowMobile.addEventListener("click", () => {
    menuList.scrollLeft += 160;

});

leftArrowMobile.addEventListener("click", () => {
    menuList.scrollLeft -= 160;

});

window.addEventListener("scroll", () => {

    console.log(lastScrollY);

    if ((lastScrollY < window.scrollY) && (lastScrollY >= 128)) {
        nav.classList.add("navHidden");

    } else {

        nav.classList.remove("navHidden");
    }

    lastScrollY = window.scrollY;
});





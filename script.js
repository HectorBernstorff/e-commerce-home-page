
const rightArrow = document.querySelector(".page1 .Menu .rightArrowIcon");
const leftArrow = document.querySelector(".page1 .Menu .leftArrowIcon");

const rightArrowMobile = document.querySelector(".page1 .Menu .rightArrowIconMobile");
const leftArrowMobile = document.querySelector(".page1 .Menu .leftArrowIconMobile");

const menuList = document.querySelector(".innerMenu");

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

// window.addEventListener("scroll", () =>{
    

//     if (lastScrollY==0){
//         console.log("ta em cima");
//     }

//     // console.log(lastScrollY);
//     if (lastScrollY < window.scrollY) {
//         nav.classList.add("navHidden");
//     } else{
//         nav.classList.remove("navHidden");
//     }

//     lastScrollY = window.scrollY;
// });





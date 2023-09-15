const innermenu = document.querySelector(".innerMenu");

const dragging = (e) => {
    innermenu.scrollLeft = e.pageX;
}

innermenu.addEventListener("mousemove", dragging);


/* ---------------- toggle the sidebar by a small one-----------------  */
let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("small-sidebar");
}, false);
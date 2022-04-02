const menu = document.querySelector("header nav ul")
const menuButton = document.querySelector(".toggle-menu")
// .addEventListener("click", e => {
//     menu.classList.toggle("open-list")
// })

document.addEventListener("click", e => {
    if (e.target !== menuButton) {
        menu.classList.remove("open-list")
    }
    if (e.target === menuButton) {
        menu.classList.toggle("open-list")
    }
})
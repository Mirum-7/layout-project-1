const nav_btn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");

nav_btn.addEventListener("click", () => {
	nav.classList.toggle('open');
})
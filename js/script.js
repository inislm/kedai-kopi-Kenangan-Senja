// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di-klik
document.querySelector("#Hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#Hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li a"); // Ambil semua link dalam menu

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("show");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navList.classList.remove("show");
    });
  });
});

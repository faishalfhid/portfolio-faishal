document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li a"); // Ambil semua link dalam menu

  // Toggle menu saat tombol hamburger diklik
  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("show");
  });

  // Tutup menu saat salah satu item navigasi diklik
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navList.classList.remove("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    document.body.style.overflow = navBar.classList.contains("active")
      ? "hidden"
      : "";
  });
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        hamburger.classList.remove("active");
        navBar.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      hamburger.classList.remove("active");
      navBar.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

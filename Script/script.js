const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-bar");
let isMobileMenuOpen = false;

menu.addEventListener("click", () => {
  isMobileMenuOpen = !isMobileMenuOpen;

  nav.classList.toggle("active");
  menu.innerHTML = isMobileMenuOpen ? "&times;" : "&#9776;";
  menu.classList.toggle("is-open", isMobileMenuOpen);
});

document.querySelectorAll(".nav-bar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMobileMenuOpen) {
      isMobileMenuOpen = false;
      nav.classList.remove("active");
      menu.innerHTML = "&#9776;";
      menu.classList.remove("is-open");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".questions");

  questions.forEach((question) => {
    const header = question.querySelector(".question-header");
    header.addEventListener("click", () => {
      question.classList.toggle("active");
      questions.forEach((q) => {
        if (q !== question && q.classList.contains("active")) {
          q.classList.remove("active");
        }
      });
    });
  });
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-bar");
let isMobileMenuOpen = false; // Initialize the state variable

// Combined click handler
menu.addEventListener("click", () => {
  isMobileMenuOpen = !isMobileMenuOpen; // Toggle state

  // Toggle navigation visibility
  nav.classList.toggle("active");

  // Update menu icon
  menu.innerHTML = isMobileMenuOpen ? "&times;" : "&#9776;";

  // Optional: Add/remove a class for styling
  menu.classList.toggle("is-open", isMobileMenuOpen);
});

// Optional: Close menu when clicking on nav links
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

      // Close other open questions (optional)
      questions.forEach((q) => {
        if (q !== question && q.classList.contains("active")) {
          q.classList.remove("active");
        }
      });
    });
  });
});

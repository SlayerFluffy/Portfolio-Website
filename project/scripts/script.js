// Lightbox functionality for image gallery
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");
  
    document.querySelectorAll(".lightbox-thumb").forEach(img => {
      img.addEventListener("click", function () {
        const fullImgSrc = img.getAttribute("data-full");
        lightboxImg.src = fullImgSrc;
        lightbox.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });
  
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightboxImg.src = "";
      }
    });
});
  
// nav menu hover effect
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".main-nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("mouseover", function () {
        this.style.color = "#cf8c33"; // Change color on hover
      });
  
      link.addEventListener("mouseout", function () {
        this.style.color = ""; // Reset color on mouse out
      });
    });
});

// fuction to determine which page is active
const activePage = document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.textDecoration = "underline"; // Underline the active link
        }
    });
});

// local storage for contact form
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementsByClassName("contact-form")[0];
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Load saved data from localStorage
    if (nameInput) nameInput.value = localStorage.getItem("name") || "";
    if (emailInput) emailInput.value = localStorage.getItem("email") || "";

    // Save data to localStorage on input change
    if (contactForm) {
        contactForm.addEventListener("input", function () {
            localStorage.setItem("name", nameInput.value);
            localStorage.setItem("email", emailInput.value);
        });
    }
});

// Thanks page, displaying the name
document.addEventListener("DOMContentLoaded", function () {
  const thanksNameElements = document.getElementsByClassName("thanks");
  if (thanksNameElements && thanksNameElements.length > 0) {
      const savedName = localStorage.getItem("name") || "";
      thanksNameElements[0].textContent = savedName
        ? `Thank you, ${savedName}!`
        : "Thank you!";
  }
});

// make logo clickable and navigate to home page
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", function () {
        window.location.href = "index.html"; // Navigate to home page
    });
});
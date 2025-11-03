// Enhanced script with EmailJS functionality
// Initialize EmailJS (you'll need to replace with your actual EmailJS credentials)
(function() {
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Replace with your actual public key
})();

// Contact form submission with EmailJS
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Disable submit button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
            
            // Get form data
            const formData = new FormData(contactForm);
            const templateParams = {
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                message: formData.get('message'),
                to_email: 'drewjezekart@gmail.com' // Your email
            };
            
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showFormStatus('success', 'Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                    
                    // Optional: redirect to thanks page after 2 seconds
                    setTimeout(() => {
                        window.location.href = 'thanks.html';
                    }, 2000);
                }, function(error) {
                    console.log('FAILED...', error);
                    showFormStatus('error', 'Sorry, there was an error sending your message. Please try again or contact me directly.');
                })
                .finally(function() {
                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send your message";
                });
        });
    }
    
    function showFormStatus(type, message) {
        if (formStatus) {
            formStatus.style.display = 'block';
            formStatus.textContent = message;
            formStatus.className = type === 'success' ? 'form-success' : 'form-error';
            formStatus.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
            formStatus.style.color = type === 'success' ? '#155724' : '#721c24';
            formStatus.style.border = type === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb';
        }
    }
});

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
  
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            lightbox.style.display = "none";
            lightboxImg.src = "";
        });
    }
  
    if (lightbox) {
        lightbox.addEventListener("click", e => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
                lightboxImg.src = "";
            }
        });
    }
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

// function to determine which page is active
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
            if (nameInput) localStorage.setItem("name", nameInput.value);
            if (emailInput) localStorage.setItem("email", emailInput.value);
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
    if (logo) {
        logo.addEventListener("click", function () {
            window.location.href = "index.html"; // Navigate to home page
        });
    }
});
// Smooth scroll effect
document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId)?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      document.querySelectorAll("nav ul li a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Floating animation for hero photo
const heroPhoto = document.querySelector(".hero-photo");
if (heroPhoto) {
  heroPhoto.addEventListener("mouseover", () => {
    heroPhoto.style.transform = "scale(1.05)";
  });
  heroPhoto.addEventListener("mouseout", () => {
    heroPhoto.style.transform = "scale(1)";
  });
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

// Initialize only if elements exist
if (navLinks && menuToggle && closeBtn) {
  menuToggle.style.cursor = "pointer";
  menuToggle.style.fontSize = "1.5rem";
  menuToggle.style.display = "none";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.display = "none"; // Initially hidden

  function handleResize() {
    if (window.innerWidth <= 700) {
      navLinks.style.display = "none";
      menuToggle.style.display = "block";
      closeBtn.style.display = "none"; // Keep close button hidden initially
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "row";
      navLinks.style.position = "static";
      menuToggle.style.display = "none";
      closeBtn.style.display = "none";
    }
  }

  // Open menu
  menuToggle.addEventListener("click", () => {
    menuToggle.style.display = "none";
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "60px";
    navLinks.style.right = "20px";
    navLinks.style.background = "#111"; 
    navLinks.style.width = "190px";
    navLinks.style.border = "1px solid #444";
    navLinks.style.padding = "1rem";
    closeBtn.style.paddingLeft = "25px";
    closeBtn.style.display = "block"; // Show close button only when menu is open
  });

  // Close menu
  closeBtn.addEventListener("click", () => {
    navLinks.style.display = "none";
    closeBtn.style.display = "none"; // Hide close button when menu is closed
  });

  window.addEventListener("resize", handleResize);
  window.addEventListener("load", handleResize);
}

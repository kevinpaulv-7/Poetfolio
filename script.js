// Smooth scroll effect
document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 100;

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

// Floating animation enhancement for hero photo
const heroPhoto = document.querySelector(".hero-photo");
if (heroPhoto) {
  heroPhoto.addEventListener("mouseover", () => {
    heroPhoto.style.transform = "scale(1.05)";
  });
  heroPhoto.addEventListener("mouseout", () => {
    heroPhoto.style.transform = "scale(1)";
  });
}

  const logo = document.querySelector(".logo");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const closeBtn = document.getElementById("close-btn");

  // Set base styles
  navLinks.style.display = "flex";
  navLinks.style.gap = "1rem";
  menuToggle.style.cursor = "pointer";
  menuToggle.style.fontSize = "1.5rem";
  menuToggle.style.display = "none"; 
  closeBtn.style.cursor = "pointer";

  function handleResize() {
    if (window.innerWidth <= 700) {
      navLinks.style.display = "none"; 
      menuToggle.style.display = "block"; 
      closeBtn.style.display = "block"; // show only on phone
    } else {
      navLinks.style.display = "flex"; 
      navLinks.style.flexDirection = "row";
      navLinks.style.position = "static";
      menuToggle.style.display = "none"; 
      closeBtn.style.display = "none"; // hide on desktop
    }
  }

  // Open menu
  menuToggle.addEventListener("click", () => {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "60px";
    navLinks.style.right = "20px";
    navLinks.style.background = "#111";
    navLinks.style.padding = "1rem";
    closeBtn.style.paddingLeft = "25px"
  });

  // Close menu (only works in phone mode)
  closeBtn.addEventListener("click", () => {
    if (window.innerWidth <= 700) {
      navLinks.style.display = "none";
    }
  });

  window.addEventListener("resize", handleResize);
  window.addEventListener("load", handleResize);
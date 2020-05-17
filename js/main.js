document.addEventListener("DOMContentLoaded", function () {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinksA = document.querySelectorAll(".nav-links li a");

    burger.addEventListener("click", () => {
      // Toggle nav menu
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });

    navLinksA.forEach((navLinksA) =>
      navLinksA.addEventListener("click", () => {
        // Close nav menu on anchor click
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
      })
    );
  };
  navSlide();

  const sr = ScrollReveal();

  sr.reveal(".tagline-first", {
    origin: "right",
    distance: "100px",
    duration: 1500,
  });

  sr.reveal(".tagline-second", {
    origin: "left",
    distance: "100px",
    duration: 1500,
    delay: 1000,
    easing: "ease-out",
  });

  sr.reveal(".about-header", {
    origin: "left",
    distance: "100px",
    duration: 1000,
    viewFactor: 1,
  });

  sr.reveal(".about-mission", {
    origin: "right",
    distance: "100px",
    duration: 1000,
  });

  sr.reveal(".img", {
    origin: "bottom",
    distance: "100px",
    duration: 1500,
    // interval: 300,
  });

  sr.reveal(".contact-header", {
    origin: "left",
    distance: "100px",
    duration: 1000,
    // interval: 300,
  });

  sr.reveal(".contact-form", {
    origin: "bottom",
    distance: "100px",
    duration: 1000,
    // interval: 300,
  });
});

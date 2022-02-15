console.log("Hello world");

const myName = "Rok Papez";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);

// Make mobile navigaton work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to the top of the page
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href);
    }
  });
});

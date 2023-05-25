"use strict";

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");
const accountSid = "AC568e4838f718a1b6c034a337d3ea1c07";
const authToken = "dedec3e5453c6c8fdaca9f6a2eb116d9";

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

function setButtonActive(id) {
  var elements = document.getElementsByClassName("filter-btn");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("active")) {
      elements[i].classList.remove("active");
    }
  }
  var activeButton = document.getElementById(id);
  activeButton.classList.add("active");

  if (id === "allTimefavorites") {
    document.getElementById("breakfastAndSnacksList").style.display = "none";
    document.getElementById("riceRotiList").style.display = "none";
    document.getElementById("coldAndSweetList").style.display = "none";
    document.getElementById("allTimeFavoritesList").style.display = "block";
  } else if (id === "breakfastAndSnacks") {
    document.getElementById("allTimeFavoritesList").style.display = "none";
    document.getElementById("riceRotiList").style.display = "none";
    document.getElementById("coldAndSweetList").style.display = "none";
    document.getElementById("breakfastAndSnacksList").style.display = "block";
  } else if (id === "riceRoti") {
    document.getElementById("allTimeFavoritesList").style.display = "none";
    document.getElementById("breakfastAndSnacksList").style.display = "none";
    document.getElementById("coldAndSweetList").style.display = "none";
    document.getElementById("riceRotiList").style.display = "block";
  } else {
    document.getElementById("allTimeFavoritesList").style.display = "none";
    document.getElementById("breakfastAndSnacksList").style.display = "none";
    document.getElementById("riceRotiList").style.display = "none";
    document.getElementById("coldAndSweetList").style.display = "block";
  }
}
/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});

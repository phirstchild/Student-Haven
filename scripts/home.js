/*Toggle Button Function*/
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const button = document.getElementsByClassName("btn")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("activee");
  button.classList.toggle("activee");
});

/*Slider 1 Function */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let myslides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < myslides.length; i++) {
    myslides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > myslides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  myslides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Changes image every 4 seconds
}

/*Testemonial Slide Function*/
let slideIndes = 1;
seeSlides(slideIndes);

function plusSlides(n) {
  seeSlides((slideIndes += n));
}

function currentSlide(n) {
  seeSlides((slideIndes = n));
}

function seeSlides(n) {
  let a;
  let slydes = document.getElementsByClassName("slyde");
  let dot = document.getElementsByClassName("dotz");
  if (n > slydes.length) {
    slideIndes = 1;
  }
  if (n < 1) {
    slideIndes = slydes.length;
  }
  for (a = 0; a < slydes.length; a++) {
    slydes[a].style.display = "none";
  }
  for (a = 0; a < dot.length; a++) {
    dot[a].className = dot[a].className.replace(" active", "");
  }
  slydes[slideIndes - 1].style.display = "block";
  dot[slideIndes - 1].className += " active";
}

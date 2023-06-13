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

// Create the overlay element
var overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
overlay.style.zIndex = "9999";

// Create the pop-up element
var popup = document.createElement("div");
popup.id = "popup";
popup.style.position = "absolute";
popup.style.top = "4.2%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%)";
popup.style.width = "300px";
popup.style.padding = "20px";
popup.style.backgroundColor = "navy";
popup.style.border = "1px solid #000000";
popup.style.textAlign = "center";
popup.style.borderRadius = "10px";
popup.style.zIndex = "10000";
popup.style.color = "white";



// Create the message text
var message = document.createElement("p");
message.textContent = "Please sign in or sign up to continue.";
message.style.paddingBottom = '10px'; // Add padding at the bottom
popup.appendChild(message);

// Create the login button
var loginButton = document.createElement("button");
loginButton.textContent = "Sign In";
loginButton.style.backgroundColor = "#F25202";
loginButton.style.color = "white";
loginButton.style.borderRadius = "5px";
loginButton.style.width = "70px";
loginButton.style.cursor = "pointer";
loginButton.style.marginRight = "10px";
loginButton.style.padding = '5px 9px'; // Add padding inside the button
loginButton.addEventListener("click", function () {
  console.log("User clicked Log In");
  window.location.href = "signin.html";
});
popup.appendChild(loginButton);

// Create the sign up button
var signUpButton = document.createElement("button");
signUpButton.textContent = "Sign Up";
signUpButton.style.backgroundColor = "grey";
signUpButton.style.color = "white";
signUpButton.style.borderRadius = "5px";
signUpButton.style.width = "70px";
signUpButton.style.cursor = "pointer";
signUpButton.style.padding = '5px 9px'; // Add padding inside the button
signUpButton.addEventListener("click", function () {
  console.log("User clicked Sign Up");
  window.location.href = "signup.html";
});
popup.appendChild(signUpButton);

// Append the pop-up and overlay elements to the document body
document.body.appendChild(overlay);
document.body.appendChild(popup);

// Disable pointer events on other elements
var elements = document.querySelectorAll("body > *:not(#popup)");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.pointerEvents = "none";
}

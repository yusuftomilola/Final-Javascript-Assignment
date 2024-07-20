// MENU CODE
const menuBtn = document.querySelector(".menu-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const subMenu = document.querySelector(".submenuu");

let navbar = document.getElementById("navbar");
let mobileNav = document.getElementById("mobileNav");
let serviceLi = document.getElementById("service");

const downarrow = document.querySelector(".downarrow");

menuBtn.onclick = () => {
  navbar.style.display = "none";
  mobileNav.style.display = "flex";
};

cancelBtn.onclick = () => {
  navbar.style.display = "flex";
  mobileNav.style.display = "none";
};

serviceLi.onclick = () => {
  subMenu.style.display = "flex";
  downarrow.classList.add("rotatearrow");
};

// FORM VALIDATION CODE
function validateForm() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const password1Error = document.getElementById("password1-error");
  const password2Error = document.getElementById("password2-error");

  let valid = true;

  // Validate Username
  if (username.value === "" || username.value.length < 5) {
    username.classList.add("error");
    username.classList.remove("success");
    usernameError.textContent = "Username must be at least 5 characters long.";
    valid = false;
  } else {
    username.classList.add("success");
    username.classList.remove("error");
    usernameError.textContent = "";
  }

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.value === "" || !emailPattern.test(email.value)) {
    email.classList.add("error");
    email.classList.remove("success");
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  } else {
    email.classList.add("success");
    email.classList.remove("error");
    emailError.textContent = "";
  }

  // Validate Password1
  if (password1.value === "" || password1.value.length < 8) {
    password1.classList.add("error");
    password1.classList.remove("success");
    password1Error.textContent = "Password must be at least 8 characters long.";
    valid = false;
  } else {
    password1.classList.add("success");
    password1.classList.remove("error");
    password1Error.textContent = "";
  }

  // Validate Password2
  if (password2.value === "" || password2.value !== password1.value) {
    password2.classList.add("error");
    password2.classList.remove("success");
    password2Error.textContent = "Passwords must match.";
    valid = false;
  } else {
    password2.classList.add("success");
    password2.classList.remove("error");
    password2Error.textContent = "";
  }

  return valid;
}

const divButton = document.querySelector(".form-field span.btn-arrow");
const divErrorIcon = document.querySelector(".form-field span.icon-error");
const divErrorField = document.querySelector(".form-field span.error-message");
const divSuccessField = document.querySelector(
  ".form-field span.success-message"
);
const emailField = document.querySelector("#email");

emailField.addEventListener("input", () => clear());

divButton.addEventListener("click", handleButtonClick);
divButton.addEventListener("animationend", handleAnimationEnd);

function handleButtonClick() {
  let email = emailField.value;
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  clear();
  if (!pattern.test(email)) {
    showErrorElements();
  } else {
    divButton.classList.add("btn-slide");
    emailField.value = "";
  }
}

function handleAnimationEnd() {
  divButton.classList.remove("btn-slide");
  divSuccessField.style.display = "block";
}

function showErrorElements() {
  divErrorIcon.style.display = "block";
  divErrorField.style.display = "block";
  emailField.classList.add("red-border");
}

function hideErrorElements() {
  divErrorIcon.style.display = "none";
  divErrorField.style.display = "none";
  emailField.classList.remove("red-border");
}

function clear() {
  hideErrorElements();
  divSuccessField.style.display = "none";
}

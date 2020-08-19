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
  /**
   * On clicking the email button
   * 1. if the email address is empty or invalid
   *    a. Show the error icon inside the input field
   *    b. show error message below field
   *    c. change the email field's border color
   * 2. If the email address is valid
   *    a. animate the button (by adding the "btn-slide" class name - slides the button to the left of the input field and then back to original position)
   *    b. empty the email field
   *    c. show "Thank you!" message below the email field.
   */

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
  /**
   * Remove the animation class (btn-slide)
   * On ending the button animation display the "Thank you!" message
   */
  divButton.classList.remove("btn-slide");
  divSuccessField.style.display = "block";
}

function showErrorElements() {
  /**
   * Display the error message and change then email input field's border color
   */
  divErrorIcon.style.display = "block";
  divErrorField.style.display = "block";
  emailField.classList.add("red-border");
}

function hideErrorElements() {
  /**
   * Hide error message and reset border color
   */
  divErrorIcon.style.display = "none";
  divErrorField.style.display = "none";
  emailField.classList.remove("red-border");
}

function clear() {
  /**
   * Remove error message and "Thank you" message and reset email input field's border color
   */
  hideErrorElements();
  divSuccessField.style.display = "none";
}

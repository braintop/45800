const emailInput = document.querySelector("#email");
const message = document.querySelector("#message");

emailInput.addEventListener("focus", () => {
  message.textContent = "Please enter your email";
  emailInput.style.borderColor = "blue";
});

emailInput.addEventListener("blur", () => {
  if (!emailInput.value.includes("@")) {
    message.textContent = "Invalid email!";
    emailInput.style.borderColor = "red";
  } else {
    message.textContent = "Valid!";
    emailInput.style.borderColor = "green";
  }
});
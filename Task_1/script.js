"use strict";

function ShowPass() {
  let pass = document.getElementById("pass");
  let passInput = document.getElementById("pass-input");
  passInput.type = passInput.type === "password" ? "text" : "password";
  pass.className =
    passInput.type === "password" ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
}

function passCheck() {
  let passInput = document.getElementById("pass-input").value;
  let strongPass = "*";
  let spanText = document.getElementById("spanText");

  for (let i = 0; i < passInput.length; i++) {
    spanText.innerHTML =
      passInput[i] === strongPass && passInput.length > 9 ? "strong" : "weak";
    spanText.className =
      passInput[i] === strongPass && passInput.length > 9
        ? "badge bg-success"
        : "badge bg-danger";
  }
}

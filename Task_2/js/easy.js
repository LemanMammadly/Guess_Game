"use strict";

let randomNum = Math.floor(Math.random() * 11);
let count = 3;

function guessNum() {
  let inpVal = document.getElementById("inpVal").value;
  let trueNum = document.getElementById("trueNum");
  let hint = document.getElementById("hint");
  let change = document.getElementById("change");

  count--;
  change.innerHTML = count;

  if (inpVal == randomNum) {
    trueNum.innerHTML = "Congratulations! You Guessed Right!";
    change.innerHTML = 0;
    hint.innerHTML = "";
    inpVal = "";
  } else if (count === 0) {
    alert("You Lose! :(");
    window.location.reload();
  } else if (inpVal > randomNum) {
    hint.innerHTML = "Your Guess Is Great";
    inpVal = "";
  } else {
    hint.innerHTML = "Your Guess Is Small";
    inpVal = "";
  }
}

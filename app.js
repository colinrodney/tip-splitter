console.warn("CONNECTED!");

// DOM ELEMENTS - input fields
const INPUT = document.querySelectorAll("input");
console.log(INPUT[0]); // bill Amount
console.log(INPUT[1]); // Number of People

// DOM ELEMENTS - buttons [all buttons]
const PERCENTAGE = document.querySelectorAll(".percentage-button"); // INCLUDES
const RESET = document.querySelector(".reset-btn");

// DOM ELEMENT - span[all spans]
const SPAN = document.querySelectorAll(".display");
console.log(SPAN[0], SPAN[1]);

//  DOM ELEMENT - Custom tip input field - THIS IS FOR THE CUSTOM BUTTON TOO!!
let customTipInput = document.getElementById("custom-button");
console.log(customTipInput);
let customTipValue;

let tip; // NOW HAS GLOBAL SCOPE
let billAmount; // GLOBAL SCOPE
let customTip; // GLOBAL SCOPE

// BUTTON EVENT LISTNERS
PERCENTAGE[0].addEventListener("click", function () {
  let percentOfTip = Number(PERCENTAGE[0].value);
  billAmount = Number(INPUT[0].value);
  // console.log("5%", billAmount, percentOfTip);
  tip = billAmount * percentOfTip;
  console.log(tip.toFixed(2), typeof tip);
  // THE CODE IN THIS BLOCK IS WORKING!!! PICKUP HERE LATER!!
});

PERCENTAGE[1].addEventListener("click", function () {
  let percentOfTip = Number(PERCENTAGE[1].value);
  billAmount = Number(INPUT[0].value);
  // console.log("15%", billAmount, percentOfTip);
  tip = billAmount * percentOfTip;
  console.log(tip.toFixed(2), typeof tip);
});

PERCENTAGE[2].addEventListener("click", function () {
  let percentOfTip = Number(PERCENTAGE[2].value);
  billAmount = Number(INPUT[0].value);
  // console.log("50%", billAmount, percentOfTip);
  tip = billAmount * percentOfTip;
  console.log(tip.toFixed(2), typeof tip);
});

PERCENTAGE[3].addEventListener("click", function () {
  let percentOfTip = Number(PERCENTAGE[3].value);
  billAmount = Number(INPUT[0].value);
  // console.log("10%", billAmount, percentOfTip);
  tip = billAmount * percentOfTip;
  console.log(tip.toFixed(2), typeof tip);
});

// FOR NOW THIS IS THE CUSTOM BUTTON...
customTipInput.addEventListener("click", function () {
  // 1. grab bill Amount value
  billAmount = Number(INPUT[0].value);

  // 2. Prompt user to enter custom tip percentage
  customTipInput.setAttribute(
    "value",
    prompt("enter custom tip amount(Ex. 20)")
  );

  // 3. Store captured user input to variable + type cast to "Number"
  customTipValue = Number(customTipInput.value);
  customTip = customTipValue / 100;
  tip = billAmount * customTip; // display this amount!!
  console.log(tip);
});

PERCENTAGE[5].addEventListener("click", function () {
  let percentOfTip = Number(PERCENTAGE[5].value);
  billAmount = Number(INPUT[0].value);
  // console.log("Custom", billAmount, percentOfTip);
  tip = billAmount * percentOfTip;
  console.log(tip.toFixed(2), typeof tip);
});

// INPUT FIELD EVENT LISTENERS (NUMBER OF PEOPLE)

INPUT[1].addEventListener("keyup", function () {
  // console.log(INPUT[1].value);
  let tipPerPerson = tip / Number(INPUT[1].value);
  // console.log(tipPerPerson.toFixed(2), typeof tipPerPerson);
  SPAN[0].innerText = tipPerPerson.toFixed(2);

  // Show TOTAL amount to be paid by each person
  let totalPerPerson = billAmount / Number(INPUT[1].value) + tipPerPerson;
  // console.log(totalPerPerson.toFixed(2));
  SPAN[1].innerText = totalPerPerson.toFixed(2);
});

// RESET BUTTON
RESET.addEventListener("click", function () {
  console.log("reset button triggered");
  location.reload(); //reload page
});

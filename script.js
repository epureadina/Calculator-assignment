//Selectors
const numberButton = document.querySelectorAll(".number-btn");
const decimalButton = document.querySelector(".decimal-btn");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-btn");
const equalButton = document.querySelector(".equal-btn");
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

//Declaring variables
let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let result = "";

//Functions
function add(x, y) {
  return x + y;
}
function substract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return y === 0 ? "Can't divide by 0!" : x / y;
}
function percentage(x) {
  return x / 100;
}
function operate(x, y, operator) {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return substract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    case "%":
      return percentage(x);
  }
}
function displayResult() {
  result = operate(
    parseFloat(firstNumber),
    parseFloat(storedNumber),
    clickedOperator
  );
  currentOperand.textContent = result;
  previousOperand.textContent =
    firstNumber + " " + clickedOperator + " " + storedNumber;
  storedNumber = result;
  console.log("FirstNumber" + firstNumber + "Stored" + storedNumber);
  firstNumber = "";
  clickedOperator = "";
  result = "";
}

//Event Listeners
numberButton.forEach((number) => {
  number.addEventListener("click", function () {
    storedNumber += number.value;
    currentOperand.textContent = storedNumber;
  });
});
operatorButton.forEach((operator) => {
  operator.addEventListener("click", function () {
    if (firstNumber && storedNumber) {
      displayResult();
    }
    // save the first number
    firstNumber = storedNumber;
    // get the operator that was clicked
    clickedOperator = operator.textContent;
    previousOperand.textContent = storedNumber + clickedOperator;
    storedNumber = "";
    currentOperand.textContent = "";
    console.log("FirstNumber" + firstNumber + "Stored" + storedNumber);
    console.log(clickedOperator);
  });
});
equalButton.addEventListener("click", function () {
  displayResult();
});
clearButton.addEventListener("click", function () {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
  storedNumber = "";
  operatorButton.textContent = "";
});
decimalButton.addEventListener("click", function () {
  if (!currentOperand.textContent.includes(".")) {
    storedNumber += ".";
    currentOperand.textContent = storedNumber;
  }
});

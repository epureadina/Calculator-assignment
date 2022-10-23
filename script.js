//Selectors
const numberButton = document.querySelectorAll(".number-btn");
const decimalButton = document.querySelector(".decimal-btn");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-btn");
const deleteButton = document.querySelector(".delete-btn");
const equalButton = document.querySelector(".equal-btn");
const signButton = document.querySelector(".sign-btn");
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

//Declaring variables
currentOperand.textContent = "";
previousOperand.textContent = "";
let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let result = "";
//Functions
function add(x, y) {
  return (x + y).toFixed(2);
}
function substract(x, y) {
  return (x - y).toFixed(2);
}
function multiply(x, y) {
  return (x * y).toFixed(2);
}
function divide(x, y) {
  return y === 0 ? "Can't divide by 0!" : (x / y).toFixed(2);
}
function percentage(x) {
  return x / 100;
}
function factorial(x) {
  let y;
  if (x === 0) {
    y = 1;
  } else if (x < 1) {
    x = "undefined";
  } else {
    y = 1;
    for (let i = x; i > 0; i--) {
      y *= i;
    }
  }
  return y.toFixed(2);
}
function exponent(x, y) {
  /* let z = 1;
  if (y === 0) {
    z = 1;
  } else if (y < 0) {
    for (let i = y; i < 0; i++) {
      z = z * (1 / x);
    }
  } else {
    for (let i = y; i > 0; i--) {
      z = z * x;
    }
  }
  return z;*/
  return Math.pow(x, y).toFixed(2);
}
function naturalLogaritm(x, y) {
  return Math.log(y).toFixed(2);
}
function cosinus(x, y) {
  return Math.cos(y).toFixed(2);
}
function sinus(x, y) {
  return Math.sin(y).toFixed(2);
}
function tangent(x, y) {
  return Math.tan(y).toFixed(2);
}
function radians(x) {
  return (x * (Math.PI / 180)).toFixed(2);
}
function radical(x, y) {
  return Math.sqrt(y);
}
function Pi(x) {
  return x * Math.PI;
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
    case "!":
      return factorial(x);
    case "^":
      return exponent(x, y);
    case "ln":
      return naturalLogaritm(x, y);
    case "cos":
      return cosinus(x, y);
    case "sin":
      return sinus(x, y);
    case "tan":
      return tangent(x, y);
    case "rad":
      return radians(x);
    case "√":
      return radical(x, y);
    case "π":
      return Pi(x);
  }
}
function displayResult() {
  result = operate(
    parseFloat(firstNumber),
    parseFloat(storedNumber),
    clickedOperator
  );
  const stringNumber = result.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  console.log(integerDigits, decimalDigits);
  if (decimalDigits === "00") {
    result = integerDigits;
  }
  currentOperand.textContent = result;
  previousOperand.textContent =
    firstNumber + " " + clickedOperator + " " + storedNumber;
  storedNumber = result;
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
    firstNumber = storedNumber;
    clickedOperator = operator.textContent;
    previousOperand.textContent = storedNumber + clickedOperator;
    storedNumber = "";
    currentOperand.textContent = "";
  });
});
equalButton.addEventListener("click", function () {
  displayResult();
});
clearButton.addEventListener("click", function () {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
  firstNumber = "";
  storedNumber = "";
  operatorButton.textContent = "";
});
decimalButton.addEventListener("click", function () {
  if (!currentOperand.textContent.includes(".")) {
    storedNumber += ".";
    currentOperand.textContent = storedNumber;
  }
});
deleteButton.addEventListener("click", function () {
  arr1 = storedNumber.split("");
  arr1.pop();
  storedNumber = arr1.join("");
  currentOperand.textContent = storedNumber;
});
signButton.addEventListener("click", function () {
  if (storedNumber.charAt(0) === "-") {
    storedNumber = storedNumber.slice(1);
    currentOperand.textContent = storedNumber;
  } else {
    storedNumber = "-" + storedNumber;
    currentOperand.textContent = storedNumber;
  }
});

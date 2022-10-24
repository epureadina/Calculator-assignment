//Selectors
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");
const numberButton = document.querySelectorAll(".number-btn");
const decimalButton = document.querySelector(".decimal-btn");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-btn");
const deleteButton = document.querySelector(".delete-btn");
const equalButton = document.querySelector(".equal-btn");
const signButton = document.querySelector(".sign-btn");
const memoryResultButton = document.querySelector(".memory-result-btn");
const memoryPlusButton = document.querySelector(".memory-plus-btn");
const memoryMinusButton = document.querySelector(".memory-minus-btn");
const memoryClearButton = document.querySelector(".memory-clear-btn");
const memoryOperand = document.querySelector(".memory-operand");

//Declaring variables
currentOperand.textContent = "";
previousOperand.textContent = "";
memoryOperand.textContent = " ";
let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let result = "";
let memoryNumber1 = "";
let memoryNumber = 0;
let memoryNumber2 = 0;
let memoryResult = 0;

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
function factorial(x, y) {
  let z;
  if (!y) {
    if (x === 0) {
      z = 1;
    } else if (x < 1) {
      x = "undefined";
    } else {
      z = 1;
      for (let i = x; i > 0; i--) {
        z *= i;
      }
    }
    return z;
  } else {
    if (x === 0) {
      z = 1;
    } else if (x < 1) {
      x = "undefined";
    } else {
      z = 1;
      for (let i = x; i > 0; i--) {
        z = z * i;
      }
    }
    return z * y;
  }
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
  return Math.pow(x, y);
}
function naturalLogaritm(x, y) {
  if (!x) return Math.log(y);
  else return x * Math.log(y);
}
function cosinus(x, y) {
  if (!x) return Math.cos(y);
  else return x * Math.cos(y);
}
function sinus(x, y) {
  if (!x) return Math.sin(y);
  else return x * Math.sin(y);
}
function tangent(x, y) {
  if (!x) return Math.tan(y);
  else return x * Math.tan(y);
}
function radians(x) {
  return x * (Math.PI / 180);
}
function radical(x, y) {
  if (!x) return Math.sqrt(y);
  else return x * Math.sqrt(y);
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
      return factorial(x, y);
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
  /*const stringNumber = result.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  console.log(integerDigits, decimalDigits);
  if (decimalDigits === "00") {
    result = integerDigits;
  }*/
  currentOperand.textContent = result.toString().substring(0, 20);
  previousOperand.textContent =
    firstNumber + " " + clickedOperator + " " + storedNumber;
  storedNumber = result;
  firstNumber = "";
  clickedOperator = "";
  result = "";
}
function displayMemoryResult() {
  memoryResult = operate(
    parseFloat(memoryNumber1),
    parseFloat(memoryNumber2),
    clickedOperator
  );
  console.log(memoryResult);
  memoryOperand.textContent = memoryResult;
  memoryNumber = memoryNumber1 + " " + clickedOperator + " " + memoryNumber2;
  console.log(memoryNumber);
  memoryNumber2 = memoryResult;
  memoryNumber1 = "";
  clickedOperator = "";
  memoryResult = "";
}

//Event Listeners
window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});
numberButton.forEach((number) => {
  number.addEventListener("click", function () {
    storedNumber += number.value;
    storedNumber = storedNumber.substring(0, 10);
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
/*memoryButton.forEach((memory) => {
  memory.addEventListener("click", function () {
    if (memoryNumber1 && memoryNumber2) {
      displayMemoryResult();
    }
    memoryNumber1 = memoryNumber2;
    clickedOperator = memory.textContent;
    memoryOperand.textContent = memoryNumber1 + clickedOperator;
    memoryNumber2 = "";
  });
});
*/
memoryPlusButton.addEventListener("click", function () {
  memoryNumber1 = parseFloat(currentOperand.textContent);
  memoryNumber2 += memoryNumber1;
  memoryOperand.textContent = "M+" + " " + memoryNumber2;
});
memoryMinusButton.addEventListener("click", function () {
  memoryNumber1 = parseFloat(currentOperand.textContent);
  memoryNumber2 -= memoryNumber1;
  memoryOperand.textContent = "M-" + " " + memoryNumber2;
});
memoryClearButton.addEventListener("click", function () {
  memoryNumber1 = 0;
  memoryNumber2 = 0;
  memoryOperand.textContent = "";
});
memoryResultButton.addEventListener("click", function () {
  currentOperand.textContent = memoryNumber2;
  memoryOperand.textContent = "";
});

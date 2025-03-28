function add(num1, num2) {
    return num1 += num2;
}

function subtract(num1, num2) {
    return num1 -= num2;
}

function multiply(num1, num2) {
    return num1 *= num2;
}

function divide(num1, num2) {
    return num1 /= num2;
}

let displayNum, inputNum1, operator, inputNum2;

const acButton = document.querySelector("#AC");
const plusMinusButton = document.querySelector("#plus-minus");
const percentButton = document.querySelector("#percent");
const divideButton = document.querySelector("#divide");

const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");

const decimalButton = document.querySelector("#decimal");
const equalButton = document.querySelector("#equal");

const screen = document.querySelector("#screen");
displayNum = "";

function updateDisplay() {
    screen.textContent = displayNum;
}

function operate(num1, op, num2) {
    if (op === 1) {
        add(num1, num2);
    } else if (op === 2) {
        subtract(num1, num2);
    } else if (op === 3) {
        multiply(num1, num2);
    } else if (op === 4) {
        divide(num1, num2);
    }
}

const numberButtons = document.querySelectorAll("[id^='num']");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        displayNum += button.textContent;
        updateDisplay();
    });
});

addButton.addEventListener("click", () => {
    if (["-", "x", "÷"].includes(displayNum.charAt(displayNum.length - 1))) {
        displayNum = displayNum.slice(0, displayNum.length - 1);
    }
    if (displayNum.charAt(displayNum.length - 1) !== "+") {
        operator = 1;
        displayNum += addButton.textContent;
        updateDisplay();
    }
});

subtractButton.addEventListener("click", () => {
    if (["+", "x", "÷"].includes(displayNum.charAt(displayNum.length - 1))) {
        displayNum = displayNum.slice(0, displayNum.length - 1);
    }
    if (displayNum.charAt(displayNum.length - 1) !== "-") {
        operator = 2;
        displayNum += subtractButton.textContent;
        updateDisplay();
    }
});

multiplyButton.addEventListener("click", () => {
    if (["-", "+", "÷"].includes(displayNum.charAt(displayNum.length - 1))) {
        displayNum = displayNum.slice(0, displayNum.length - 1);
    }
    if (displayNum.charAt(displayNum.length - 1) !== "x") {
        operator = 3;
        displayNum += multiplyButton.textContent;
        updateDisplay();
    }
});

divideButton.addEventListener("click", () => {
    if (["-", "x", "+"].includes(displayNum.charAt(displayNum.length - 1))) {
        displayNum = displayNum.slice(0, displayNum.length - 1);
    }
    if (displayNum.charAt(displayNum.length - 1) !== "÷") {
        operator = 4;
        displayNum += divideButton.textContent;
        updateDisplay();
    }
});

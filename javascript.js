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

function operate(num1, op, num2) {
    if (op === 1) {
        add(num1, num2);
    }
}

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

const numberButtons = document.querySelectorAll("[id^='num']");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        displayNum += button.textContent;
        updateDisplay();
    });
});
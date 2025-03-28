// Functions for basic operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error"; // Handle division by zero
    }
    return num1 / num2;
}

// Variables for calculator state
let displayNum = "";
let operator = "";
let inputNum1 = null;
let inputNum2 = null;

const acButton = document.querySelector("#AC");
const plusMinusButton = document.querySelector("#plus-minus");
const percentButton = document.querySelector("#percent");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const decimalButton = document.querySelector("#decimal");
const equalButton = document.querySelector("#equal");
const display = document.querySelector("#display");

// Function to update the display
function updateDisplay() {
    display.textContent = displayNum;
}

// Add event listeners to number buttons
const numberButtons = document.querySelectorAll("[id^='num']");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        displayNum += button.textContent;
        updateDisplay();
    });
});

// Handle operator buttons
addButton.addEventListener("click", () => {
    if (inputNum1 === null) {
        inputNum1 = parseFloat(displayNum);
        displayNum = "";
    } else {
        inputNum2 = parseFloat(displayNum);
        inputNum1 = add(inputNum1, inputNum2);
        displayNum = "";
    }
    operator = "+";
    const history = document.getElementById("history");
    history.textContent = `${inputNum1} ${operator}`;  // Update history
    updateDisplay();
});

subtractButton.addEventListener("click", () => {
    if (inputNum1 === null) {
        inputNum1 = parseFloat(displayNum);
        displayNum = "";
    } else {
        inputNum2 = parseFloat(displayNum);
        inputNum1 = subtract(inputNum1, inputNum2);
        displayNum = "";
    }
    operator = "-";
    const history = document.getElementById("history");
    history.textContent = `${inputNum1} ${operator}`;  // Update history
    updateDisplay();
});

multiplyButton.addEventListener("click", () => {
    if (inputNum1 === null) {
        inputNum1 = parseFloat(displayNum);
        displayNum = "";
    } else {
        inputNum2 = parseFloat(displayNum);
        inputNum1 = multiply(inputNum1, inputNum2);
        displayNum = "";
    }
    operator = "*";
    const history = document.getElementById("history");
    history.textContent = `${inputNum1} ${operator}`;  // Update history
    updateDisplay();
});

divideButton.addEventListener("click", () => {
    if (inputNum1 === null) {
        inputNum1 = parseFloat(displayNum);
        displayNum = "";
    } else {
        inputNum2 = parseFloat(displayNum);
        inputNum1 = divide(inputNum1, inputNum2);
        displayNum = "";
    }
    operator = "/";
    const history = document.getElementById("history");
    history.textContent = `${inputNum1} ${operator}`;  // Update history
    updateDisplay();
});

// Handle the equals button
equalButton.addEventListener("click", () => {
    if (inputNum1 !== null && displayNum !== "") {
        inputNum2 = parseFloat(displayNum);

        // Calculate and update the displayNum
        switch (operator) {
            case "+":
                displayNum = add(inputNum1, inputNum2).toString();
                break;
            case "-":
                displayNum = subtract(inputNum1, inputNum2).toString();
                break;
            case "*":
                displayNum = multiply(inputNum1, inputNum2).toString();
                break;
            case "/":
                displayNum = divide(inputNum1, inputNum2).toString();
                break;
        }

        // Update the history with the full calculation
        const history = document.getElementById("history");
        history.textContent = `${inputNum1} ${operator} ${inputNum2} = ${displayNum}`;

        // Reset inputNum1 for next calculation
        inputNum1 = null; 
        operator = "";
    }
    updateDisplay();
});

// Handle the AC (clear) button
acButton.addEventListener("click", () => {
    displayNum = "";
    inputNum1 = null;
    inputNum2 = null;
    operator = "";
    
    // Clear the history
    const history = document.getElementById("history");
    history.textContent = "";

    updateDisplay();
});

// Handle the plus-minus button (negative number toggle)
plusMinusButton.addEventListener("click", () => {
    displayNum = (parseFloat(displayNum) * -1).toString();
    updateDisplay();
});

// Handle decimal point
decimalButton.addEventListener("click", () => {
    if (!displayNum.includes(".")) {
        displayNum += ".";
        updateDisplay();
    }
});
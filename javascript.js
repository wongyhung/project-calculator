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

let inputNum1, operator, inputNum2;

function operate(num1, op, num2) {
    if (op === 1) {
        add(num1, num2);
    }
}
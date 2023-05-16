const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll(".button"));

let operandA = 0;
let operandB = 0;
let operator;
let displayNum = 0;
display.textContent = +displayNum;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (+button.textContent || +button.textContent === 0) {
            displayNum += button.textContent;
            display.textContent = +displayNum;
        } else if (button.textContent == '+') {
            operandA
        }
    })
})


function operate(x, operator, y) {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divise(x, y);
    };
}

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divise(x, y) {
    return x / y;
};
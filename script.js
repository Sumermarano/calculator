let enteredValue = "";
let operandA = null;
let operandB = null;
let operator = null;
let float = false;

const buttons = Array.from(document.querySelectorAll(".button"));
const topDisplay = document.querySelector(".top");
const bottomDisplay = document.querySelector(".bottom");
bottomDisplay.textContent = "0";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.getAttribute("data-type") == "number") {
            // The enteredValue is a string, and will be displayed as a number.
            enteredValue += button.textContent;
            bottomDisplay.textContent = +enteredValue;

        } else if (button.getAttribute("data-type") == "operation") {

            operator = button.textContent;
            operandA = +enteredValue;
            topDisplay.textContent = +enteredValue + " " + operator;
            float = false;
            enteredValue = "";

        } else if (button.getAttribute("data-type") == "equals") {

            operandB = +enteredValue;
            topDisplay.textContent += " " + operandB;
            enteredValue = operate(operandA, operator, operandB);
            float = false;
            console.log(enteredValue);
            bottomDisplay.textContent = enteredValue;

        } else if (button.getAttribute("data-type") == "reset") {

            enteredValue = "";
            operandA = null;
            operandB = null;
            operator = null;
            float = false;
            topDisplay.textContent = "";
            bottomDisplay.textContent = "0";
            
        } else if (button.getAttribute("data-type") == "sign") {

            enteredValue = -enteredValue;
            bottomDisplay.textContent = enteredValue;
        
        } else if (button.getAttribute("data-type") == "dot") {
            
            if (!float) {
                float = true;
                enteredValue = enteredValue + '.';
                bottomDisplay.textContent = enteredValue;
            }
        } else if (button.getAttribute("data-type") == "delete") {

                enteredValue = enteredValue.slice(0, -1);
                bottomDisplay.textContent = enteredValue;
        }
    })
})













function operate(x, operator, y) {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case 'x':
            return multiply(x, y);
        case '/':
            return divise(x, y);
        case '%':
            return remainder(x, y);
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
    if (y === 0) return "NOPE!";
    return x / y;
};

function remainder(x, y) {
    return x % y;
}
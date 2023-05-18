let enteredValue = "";
let operandA = null;
let operandB = null;
let operator = null;
let isFloat = false;
let isEquals = false;

const buttons = Array.from(document.querySelectorAll(".button"));
const topDisplay = document.querySelector(".top");
const bottomDisplay = document.querySelector(".bottom");
bottomDisplay.textContent = "0";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.getAttribute("data-type") == "number") {
            // The enteredValue is a string, and will be displayed as a number.
            if (enteredValue == "" && button.textContent == "0") {

            } else {
                enteredValue += button.textContent;
                bottomDisplay.textContent = enteredValue;
            }

        } else if (button.getAttribute("data-type") == "operation") {

            isEquals = false;
            operator = button.textContent;
            operandA = +enteredValue;
            topDisplay.textContent = +enteredValue + " " + operator;
            isFloat = false;
            enteredValue = "";

        } else if (button.getAttribute("data-type") == "equals") {

            if (!isEquals) {

                isEquals = true;
                operandB = +enteredValue;
                topDisplay.textContent += " " + operandB;
                enteredValue = operate(operandA, operator, operandB);
                isFloat = false;
                bottomDisplay.textContent = enteredValue;

            }

        } else if (button.getAttribute("data-type") == "reset") {

            enteredValue = "";
            operandA = null;
            operandB = null;
            operator = null;
            isFloat = false;
            isEquals = false;
            topDisplay.textContent = "";
            bottomDisplay.textContent = "0";
            
        } else if (button.getAttribute("data-type") == "sign") {

            enteredValue = -enteredValue;
            bottomDisplay.textContent = enteredValue;
        
        } else if (button.getAttribute("data-type") == "dot") {
            
            if (!isFloat) {
                isFloat = true;
                enteredValue = '0' + enteredValue + '.';
                bottomDisplay.textContent = enteredValue;
            }
            
        } else if (button.getAttribute("data-type") == "delete") {

                enteredValue = enteredValue.slice(0, -1);
                bottomDisplay.textContent = enteredValue;
        }
    });

    button.addEventListener("mouseenter", () => {

        if (button.getAttribute("data-type") == "number" || button.getAttribute("data-type") == "dot") {

            button.style.cssText = "transform: scale(1.1); background-color: #3498DB;";

        } else if (button.getAttribute("data-type") == "operation" || button.getAttribute("data-type") == "sign") {

            button.style.cssText = "transform: scale(1.1); background-color: #F1C40F;";

        } else if (button.getAttribute("data-type") == "equals") {

            button.style.cssText = "transform: scale(1.1); background-color: #2ECC71;";

        } else if (button.getAttribute("data-type") == "reset" || button.getAttribute("data-type") == "delete") {

            button.style.cssText = "transform: scale(1.1); background-color: #E74C3C;";

        }

    });
    
    button.addEventListener("mouseleave", () => {
        button.style.cssText = "transform: scale(1); background-color: #9BA4B5;";
    });
});













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
};

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
};
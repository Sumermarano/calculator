let operandA = 0;
let operandB = 0;
let operator;


        if (+button.textContent || +button.textContent === 0) {
            displayNum += button.textContent;
            display.textContent = +displayNum;
        } else if (button.textContent == '=') {
            operandB = +displayNum;
            console.log(operandA);
            console.log(operandB);
            displayNum = 0;
            operandA = operate(operandA, operator, operandB);
            display.textContent = operandA;
        } 
        else {
            if (operandA == null) operandA = +displayNum;
            displayNum = 0;
            operator = button.textContent;
        }


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
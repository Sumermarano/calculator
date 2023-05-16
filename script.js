

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
    return x / y;
};

function remainder(x, y) {
    return x % y;
}
//Variables:
let result = 0, operator, equal;
let buffor = "0";
const number = document.querySelector('.result');

//Function to handle clicking buttons:
function click(value) {
    if(isNaN(value)) {
        symbols(value);
    }
    else {
        numb(value);
    }
    number.innerText = buffor;
}

//Function to read and handle symbols:
function symbols(symbol) {
    let numberValue = parseInt(buffor);
    switch(symbol) {
        case '+':
        case '−':
        case '×':
        case '÷':
        case '%':
            if(result === 0) {
                result = numberValue;
            }
            else {
                calc(numberValue);
            }
            operator = symbol;
            buffor = '0';
            break;
        case 'C':
            buffor = '0';
            result = 0;
            break;
        case '=':
            if(operator === null) {
                return 0;
            }
            equal = parseInt(buffor);
            calc(equal);
            operator = null;
            buffor = result.toString();
            break;
        case '←':
            if(buffor.length < 1) {
                buffor = '0';
            }
            else {
                buffor.slice(0, buffor.length - 1);
            }
            break;
        default:
            result = 0;
            buffor = '0';
            break;
    }
}

//Function to handle strings:
function numb(string) {
    if(buffor === '0') {
        buffor = string;
    }
    else {
        buffor += string;
    }
}

//Function to calculate result:
function calc(numberValue) {
    switch(operator) {
        case '+':
            result += numberValue;
            break;
        case '−':
            result -= numberValue;
            break;
        case '×':
            result *= numberValue;
            break;
        case '÷':
            result /= numberValue;
            break;
        case '%':
            result %= numberValue;
            break;
        //to be added - other operators
        default:
            result = numberValue;
            break;
    }
}

//Initialization of the function:
function f() {
    document.querySelector('.buttons').addEventListener('click', function(event) { click(event.target.innerText) });
}

f();

//to be added - different way of displaying result etc.
//Variables:
let result = 0, operator, equal;
let buffor = "";
const number = document.querySelector('.result');

//Function to handle clicking buttons:
function click(value) {
    if(isNaN(value)) { //if value is not a number handle symbol
        symbols(value);
    }
    else { //else add value to the buffor
        if(buffor === '0') {
            buffor = value;
        }
        else {
            buffor += value;
        }
    }
    number.innerText = buffor;
}

//Function to read and handle symbols:
function symbols(symbol) {
    let numberValue = parseFloat(buffor);
    switch(symbol) {
        //two numbers required:
        case '+':
        case '-':
        case '×':
        case '÷':
        case '%':
            //buffor += `${symbol}`; - this is messing up math operations
            if(result === 0) {
                result = numberValue;
            }
            else {
                calc(numberValue);
            }
            operator = symbol;
            buffor = '0';
            break;
        case '.':
            buffor = numberValue.toString() + '.';
            break;
        //one number required:
        case 'x²':
            buffor = Math.pow(numberValue, 2).toString();
            break;
        case '√x':
            if(numberValue < 0) {
                buffor = '0';
            }
            else {
                buffor = Math.sqrt(numberValue).toString();
            }
            break;
        case '1/x':
            if(numberValue === 0) {
                buffor = '0';
            }
            else {
                buffor = (1/numberValue).toString();
            }
            break;
        case '~':
            if(buffor[0] === '-')
            {
                buffor = buffor.slice(1);
            }
            else {
                buffor = '-' + numberValue.toString();
            }
            break;
        //other options:
        case 'C':
        case 'CE':
            buffor = '0';
            result = 0;
            break;
        case '=':
            if(operator === null) {
                return 0;
            }
            equal = parseFloat(buffor);
            calc(equal);
            operator = null;
            buffor = result.toString();
            break;
        case '←':
            if(buffor.length <= 1) {
                buffor = '0';
            }
            else {
                buffor = buffor.slice(0, buffor.length - 1);
            }
            break;
        default:
            result = 0;
            buffor = '0';
            break;
    }
}

//Function to calculate result:
function calc(numberValue) {
    switch(operator) {
        case '+':
            result += numberValue;
            break;
        case '-':
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
        default:
            result = numberValue;
            break;
    }
}

//Initialization of the function:
function f() {
    document.querySelector('.buttons').addEventListener('click', function(event) { click(event.target.innerText) });
}

//Start:
f();

//to be added:
//displaying operators & displaying history above the result
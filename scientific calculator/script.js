//Variables:
let result = 0, operator, equal;
let buffor = "", history = "";
const number = document.querySelector('.result');
const hist = document.querySelector('.history');

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
    hist.innerText = history;
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
            history = "";
            if(result === 0) {
                result = numberValue;
            }
            else {
                calc(numberValue);
            }
            operator = symbol;
            history += `${buffor} ${symbol}`;
            buffor = '0';
            break;
        case '.':
            buffor = numberValue.toString() + '.';
            break;
        case '(':
            buffor = '(';
            break;
        case ')':
            buffor = ')';
            break;
        //one number required:
        case 'x^2':
            history = "";
            buffor = Math.pow(numberValue, 2).toString();
            history += `sqrt(${numberValue})`;
            break;
        case '√x':
            history = "";
            if(numberValue < 0) {
                buffor = '0';
                history += "Invalid number";
            }
            else {
                buffor = Math.sqrt(numberValue).toString();
                history += `√(${numberValue})`;
            }
            break;
        case '1/x':
            history = "";
            if(numberValue === 0) {
                buffor = '0';
                history += "Invalid number";
            }
            else {
                buffor = (1/numberValue).toString();
                history += `1/(${numberValue})`;
            }
            break;
        case '+/-':
            if(buffor[0] === '-')
            {
                buffor = buffor.slice(1);
            }
            else {
                buffor = '-' + numberValue.toString();
            }
            break;
        case 'π':
            buffor = Math.PI;
            break;
        case 'e':
            buffor = Math.E;
            break;
        case 'log':
            history = "";
            buffor = Math.log10(numberValue);
            history += `log10(${numberValue})`;
            break;
        case 'ln':
            history = "";
            buffor = Math.log(numberValue);
            history += `ln(${numberValue})`;
            break;
        case '|x|':
            history = "";
            buffor = Math.abs(numberValue);
            history += `abs(${numberValue})`;
            break;
        case 'exp':
            history = "";
            buffor = Math.exp(numberValue);
            history += `exp(${numberValue})`;
            break;
        //other options:
        case 'C':
        case 'CE':
            buffor = '0';
            result = 0;
            history = "";
            break;
        case '=':
            if(operator === null) {
                return 0;
            }
            equal = parseFloat(buffor);
            calc(equal);
            operator = null;
            history += ` ${buffor} =`;
            buffor = result.toString();
            break;
        case '←':
            if(buffor.length <= 1) {
                buffor = '0';
                history = "";
            }
            else {
                buffor = buffor.slice(0, buffor.length - 1);
                history = "";
            }
            break;
        default:
            result = 0;
            buffor = '0';
            history = "";
            break;
        //to be added - other options and hidden layer of buttons
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

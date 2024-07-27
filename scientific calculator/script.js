//Variables:
let result = 0, operator, x, y, z;
let buffor = "", history = "";
const number = document.querySelector('.result');
const hist = document.querySelector('.history');

//Function to handle clicking buttons:
function click(value) {
    if (isNaN(value)) { //if value is not a number handle symbol
        symbols(value);
    }
    else { //else add value to the buffor
        if (buffor === '0') {
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
    switch (symbol) {
        //two numbers required:
        case '+':
        case '-':
        case '×':
        case '÷':
        case '%':
            if (result === 0) {
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
        case 'x^y':
            x = numberValue;
            operator = symbol;
            history = `${x}^`;
            buffor = '0';
            break;
        case 'y√x':
            y = numberValue;
            operator = symbol;
            history = `${y} yroot `;
            buffor = '0';
            break;
        case 'logy_x':
            z = numberValue;
            operator = symbol;
            history = `${z} log base `;
            buffor = '0';
            break;

        //one number required:
        case 'x^2':
            history = "";
            buffor = Math.pow(numberValue, 2).toString();
            history += `(${numberValue})^2`;
            break;
        case 'x^3':
            history = "";
            buffor = Math.pow(numberValue, 3).toString();
            history += `(${numberValue})^3`;
            break;
        case '√x':
            history = "";
            if (numberValue < 0) {
                buffor = '0';
                history += "Invalid number";
            }
            else {
                buffor = Math.sqrt(numberValue).toString();
                history += `√(${numberValue})`;
            }
            break;
        case '∛x':
            history = "";
            if (numberValue < 0) {
                buffor = '0';
                history += "Invalid number";
            }
            else {
                buffor = Math.cbrt(numberValue).toString();
                history += `∛(${numberValue})`;
            }
            break;
        case '1/x':
            history = "";
            if (numberValue === 0) {
                buffor = '0';
                history += "Invalid number";
            }
            else {
                buffor = (1 / numberValue).toString();
                history += `1/(${numberValue})`;
            }
            break;
        case '+/-':
            if (buffor[0] === '-') {
                buffor = buffor.slice(1);
            }
            else {
                buffor = '-' + numberValue.toString();
            }
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
            buffor = Math.abs(numberValue);
            history += `abs(${numberValue})`;
            break;
        case 'exp':
            history = "";
            buffor = Math.exp(numberValue);
            history += `exp(${numberValue})`;
            break;
        case '10^x':
            buffor = Math.pow(10, numberValue).toString();
            history += `10^(${numberValue})`;
            break;
        case '2^x':
            buffor = Math.pow(2, numberValue).toString();
            history += `2^(${numberValue})`;
            break;
        case 'e^x':
            buffor = Math.pow(Math.E, numberValue).toString();
            history += `e^(${numberValue})`;
            break;
        case 'n!':
            buffor = recursiveN(numberValue);
            history += `(${numberValue})!`;
            break;

        //other options:
        case 'π':
            buffor = Math.PI;
            break;
        case 'e':
            buffor = Math.E;
            break;
        case 'C':
            buffor = '0';
            result = 0;
            history = "";
            break;
        case '=':
            if (operator === null) {
                return 0;
            }
            else if (operator === 'x^y') {
                result = Math.pow(x, numberValue);
                buffor = result.toString();
                history += `${numberValue} = `;
                operator = null;
                break;
            }
            else if (operator === 'y√x') {
                result = Math.pow(y, 1 / numberValue);
                buffor = result.toString();
                history += `${numberValue} = `;
                operator = null;
                break;
            }
            else if (operator === 'logy_x') {
                result = Math.log(z) / Math.log(numberValue);
                buffor = result.toString();
                history += `${numberValue} = `;
                operator = null;
                break;
            }
            calc(parseFloat(buffor));
            operator = null;
            history += ` ${buffor} =`;
            buffor = result.toString();
            break;
        case '←':
            if (buffor.length <= 1) {
                buffor = '0';
                history = "";
            }
            else if (typeof buffor === 'string') {
                buffor = '0';
                history = "";
            }
            else {
                buffor = buffor.slice(0, buffor.length - 1);
                history = "";
            }
            break;

        //brackets don't work properly, the result will always be NaN:
        case '(':
            buffor = '(';
            break;
        case ')':
            buffor = numberValue.toString() + ')';
            break;
        default:
            if(buffor === "") {
                result = 0;
                buffor = '0';
            }
            break;
    }
}

//Function to calculate result:
function calc(numberValue) {
    switch (operator) {
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

//Function to handle n!:
function recursiveN(value) {
    if (value < 0) {
        return 'Invalid number';
    }
    else if (value === 0 || value === 1) {
        return 1;
    }
    else {
        return value * recursiveN(value - 1);
    }
}

//Functions that change the first column:
function changeColumn() {
    let hidden = document.getElementsByClassName('hidden');
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.visibility = 'visible';
        hidden[i].style.display = 'inline';

    }
    let first = document.getElementsByClassName('first');
    for (let i = 0; i < first.length; i++) {
        first[i].style.visibility = 'hidden';
        first[i].style.display = 'none';
    }
}

function changeColumn2() {
    let first = document.getElementsByClassName('first');
    for (let i = 0; i < first.length; i++) {
        first[i].style.visibility = 'visible';
        first[i].style.display = 'inline';

    }
    let hidden = document.getElementsByClassName('hidden');
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.visibility = 'hidden';
        hidden[i].style.display = 'none';
    }
}

//Initialization of the function:
function f() {
    document.querySelector('.buttons').addEventListener('click', function (event) { click(event.target.innerText) });
}

//Start:
f();

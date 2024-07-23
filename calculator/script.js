//Script:
let x, result = 0;
let buffor = "0";

function addNum(x) {
    result += x;
    return result;
}

function subNum(x) {
    result -=x;
    return result;
}

function multiNum(x) {
    result *= x;
    return result;
}

function diviNum(x) {
    result /= x;
    return result;
}

/*function f() {
    document.getElementById("num").innerHTML = "Liczba";
}*/

function button(value) {
    switch(value) {
        case '+':
            addNum(value);
            break;
        default:
            result = 0;
            break;
    }
}
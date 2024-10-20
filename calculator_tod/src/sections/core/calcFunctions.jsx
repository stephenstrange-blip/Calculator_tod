import { useState } from "react";

let num1 = 0;
let num2 = 0;
let operator = '';


function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function operate(num1, operator, num2) {
    if (operator.trim() === "+") return add(num1, num2)
    else if (operator.trim() === "-") return subtract(num1, num2)
    else if (operator.trim() === "*") return multiply(num1, num2)
    else if (operator.trim() === "/") return divide(num1, num2)
    else return "Error"
}

/*console.log(operate(1, "+", 2))
console.log(operate(1,"-", 2))
console.log(operate(1, "*", 2))
console.log(operate(1, "/", 2))
console.log(operate(1, "%", 2))*/
function InputNum () {
    const [num, setNum] = useState(0);
    const [operator, setOperator] = useState('');

    const inputNum = (value) => {
        setNum(value);
    };
    const inputOperator = (value) => {
        setOperator(value);
        //TODO Set arithmetic logi here
    }
    return [num, inputNum, operator, inputOperator];
}



export default InputNum


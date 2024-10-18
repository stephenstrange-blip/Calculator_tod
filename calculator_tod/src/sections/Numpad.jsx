import './numPad.css';

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

function NumGrid() {
    return (
        [0,1,2].map((row) => {
            return (
                <div className={`gridRow number${row}`}>
                    {[9,8,7].map((column) => {
                        let index = column - row * 3;
                        return (<div className={`numGrid number${index}`}>{index}</div>)
                    })
                    }
                </div>
            )
        }))
}
export default NumGrid;




let num;
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let operator = document.getElementById("operator");
let input = document.getElementById("userInput").value;
let selection = document.getElementById("selection");
let selectOption = selection.value;
let operatorDisplay;

randomNumber = () => {
    num = Math.floor((Math.random() * 20) + 1);
    console.log(num);
    return num;
}

firstOperand = () => {
    let num1 = randomNumber();
    return num1;
}

secondOperand = () => {
    let num2 = randomNumber();
    return num2;
}

getOperator = (selectOption) => {
    switch (selectOption) {
        case "addition":
            operatorDisplay = "+";
            break;
        case "subtraction":
            operatorDisplay = "-";
            break;
        case "multiplication":
            operatorDisplay = "X"
            break;
        case "division":
            operatorDisplay = "/";
            break;
        // case "Greater Than":
        //     operatorDisplay = ">";
        //     break;
        // case "Lesser Than":
        //     operatorDisplay = "<";
        //     break;
        default:
            operatorDisplay = "+";
            break;
    }
    return operatorDisplay;
}

calculateAnswer = () => {
    let answer = parseInt(input);

}

firstNumber.innerHTML = firstOperand();
secondNumber.innerHTML = secondOperand();
operator.innerHTML = getOperator();

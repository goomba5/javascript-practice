let num;
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let operator = document.getElementById("operator");
let input = document.getElementById("userInput").value;
let selection = document.getElementById("selection");
let selectOption = selection.value;
let option;

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
            option = "+";
            break;
        case "subtraction":
            option = "-";
            break;
        case "multiplication":
            option = "X"
            break;
        case "division":
            option = "/";
            break;
        // case "Greater Than":
        //     option = ">";
        //     break;
        // case "Lesser Than":
        //     option = "<";
        //     break;
        default:
            option = "+";
            break;
    }
    return option;
}



calculateAnswer = () => {
    let answer = parseInt(input);

}

firstNumber.innerHTML = firstOperand();
secondNumber.innerHTML = secondOperand();
operator.innerHTML = getOperator();
console.log(selectOption);

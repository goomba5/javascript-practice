let num;

randomNumber = () => {
    num = Math.floor((Math.random() * 20) + 1);
    console.log(num);
}

firstNumber = () => {
    let numberOne = randomNumber().toString();
    document.getElementById("firstNumber").innerHTML = numberOne;
}

getInput = () => {
    let input = document.getElementById("userInput").value;
    let answer = parseInt(input);
    let sum = answer + 5;
    alert(sum);
}
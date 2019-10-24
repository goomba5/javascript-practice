// Write a JavaScript program that converts a specified number to an array of digits

let number = 1234567891;
let digits = [...`${number}`];
let newDigits = [];

// print digits
console.log("First Digits Array")
console.log(digits);

for (let i = 0; i < digits.length; i++) {
    let parseNum = parseInt(digits[i]);

    newDigits.push(parseNum);
}

// print new digits array
console.log("New Digits Array")
console.log(newDigits);
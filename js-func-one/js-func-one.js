// write a JavaScript function that reverses a number

reverseNumber = (num) => {
    let numArray = [];
    numberStr = num.toString();

    for (let i = 0; i < numberStr.length; i++) {
        numArray.push(numberStr.charAt(i));
    }
    numArray.reverse();
    console.log(numArray);
}

let arr = [2, 3, 4, 5];

reverseNumber(257);
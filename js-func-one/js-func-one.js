// write a JavaScript function that reverses a number

reverseNumber = (num) => {
    let numArray = [];
    numToStr = num.toString();

    for (let i = 0; i < numToStr.length; i++) {
        numArray.push(numToStr.charAt(i));
    }
    let str = numArray.reverse().join("");
    let newNum = parseInt(str);
    console.log(newNum);
}

// test 1
console.log("Test 1");
reverseNumber(257);

// test 2
console.log("Test 2");
reverseNumber(68732);

// test 3
console.log("Test 3");
reverseNumber(100000000002);
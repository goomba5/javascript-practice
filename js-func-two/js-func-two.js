// write a javascript function that checks whether or not a string or number can be a palindrome

isPalindrome = (input) => {
    let str = input.toString();
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        arr.push(str.charAt(i));
    }

    let strReversed = arr.reverse().join("");

    if (str === strReversed) {
        console.log(str + " is a palindrome!")
    }
    else {
        console.log(str + " is NOT a palindrome.");
    }
}

// test 1
console.log("Test 1");
isPalindrome(677775);

// test 2
console.log("Test 2");
isPalindrome("lol");

// test 3
console.log("Test 3");
isPalindrome("He I eH")

// test 4
console.log("Test 4");
isPalindrome("madam");
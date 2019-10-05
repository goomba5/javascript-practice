// IF input is not a letter || string length > 1, print error
// ELSE print msg stating if input is a vowel or consonant

//regular function
function checkItMan(input) {

}

// arrow function
checkLetter = (input) => {
    const vowels = ["a", "e", "i", "o", "u"];
    // const vowels = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };

    // for (v in vowels) {
    for (i = 0; i < vowels.length; i++) {
        if (input === vowels[i]) {
            console.log("The letter is a vowel.");
            break;
        }
        else {
            console.log("The letter is a consonant.");
            break;
        }
    }
}

/* TEST CASES */

// Test 1
checkLetter("i");

// Test 2
checkLetter("u");

// Test 3
checkLetter("b");
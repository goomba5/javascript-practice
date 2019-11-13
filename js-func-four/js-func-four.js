// write a javascript function that alphabatizes a string

alphabet = (input) => {
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        arr.push(input.charAt(i));
    }

    let strSorted = arr.sort().join("");

    console.log("Input: " + input);
    console.log("Alphabetized: " + strSorted);
}

console.log("Test 1");
alphabet("Captain Marvel");

console.log("---------------");
console.log("Test 2");
alphabet("fdakfdklskeiwoinvio");

console.log("---------------");
console.log("Test 3");
alphabet("zxpoerwyuwqnvmeionniwoqewinngiovo");

console.log("---------------");
console.log("Test 4");
alphabet("gumbo");
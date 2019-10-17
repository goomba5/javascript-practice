// create a javascript program that displays the cube of each number up to
// n number

//ES6
cubeMe = (number) => {
    for (let i = 1; i <= number; i++) {
        let cubed = i * i * i;
        console.log("Number is :" + i + " cube of " + i + " is: " + cubed);
    }
}

// regular function
// function cubeMe2(number) {
//     let cubed = number * number * number;
//     console.log("Number is " + i + " cube of 1 is: " + cubed);
// }

// TESTS

// test 1
console.log("Test 1")
cubeMe(4)

// test 2
console.log("Test 2")
cubeMe(5)

// test 3
console.log("Test 3")
cubeMe(6)
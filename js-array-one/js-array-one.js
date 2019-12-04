// write a javascript function to check whether an input is an array or not

isArray = (arg) => {
    console.log("Input: " + arg);
    console.log("Is input an array: " + Array.isArray(arg));
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["Telesto", "Symmetry", "Outbreak Perfected"];

// test 1
isArray("Remember Reach");

// test 2
isArray(arr1);

// test 3
isArray(arr2);
/*  create a function that returns the first element of an array, and also accepts a
    parameter which returns the first 'x' elements in the
*/

// return the first element in an array

const firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const thirdArr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 10000];

// regular function
function getFirstElement(arr, span) {
    let firstElement = arr[0];

    console.log(firstElement);
}

/* TESTS */

// test 1
getFirstElement(firstArr);

// test 2
getFirstElement(secondArr);

// test 3
getFirstElement(thirdArr);

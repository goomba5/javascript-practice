/*  create a function that returns the first element of an array, and also accepts a
    parameter which returns the first 'x' elements in the array
*/

// return the first element in an array

const firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const thirdArr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 10000];

// ES6 arrow function
getFirstElement = (arr, elements) => {

    // prints the first element of the array
    console.log("The first element is: ");
    let firstElement = arr[0];

    console.log(firstElement);

    // prints the first 'n' elements of the array
    console.log("The first " + elements + " elements are: ");

    for (let i = 0; i < elements; i++) {
        console.log(arr[i]);
    }
}

/* TESTS */

// test 1
getFirstElement(firstArr, 3);

// test 2
getFirstElement(secondArr, 5);

// test 3
getFirstElement(thirdArr, 4);

// write a javascript program that checks if a user's entry
// matches a value in an array

let pool = [1, 2, 3, 4];

checkArray = (value) => {
    let result;
    for (let i = 0; i < pool.length; i++) {
        if (value === pool[i]) {
            result = "The number " + value + " is in the array! Hooray!";
            break;
        }
        else {
            result = "The number " + value + " is not in the array. Bummer.";
        }
    }
    console.log(result);
}

// test 1
checkArray(5);

// test 2
checkArray(3);

// test 3
checkArray(7);

// test 4
checkArray(4);
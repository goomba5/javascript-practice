// write a javascript function which compares two objects
// and determines if each object has the same values

const objectOne = { 1: "Gary", 2: "Kelly", 3: "Mom" };
const objectTwo = { 1: "Gary", 2: "Kelly" };
const objectThree = { 1: "Blah", 2: "Blah", 3: "Blah", 4: "Blah" };
const objectFour = { 1: "Blah", 2: "Blah", 3: "Blah", 4: "Blah" };

areObjectsEqual = (obj1, obj2) => {

    let isEqual = Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]);

    // Object.keys() creates an array containing each of the keys from obj1
    // Array.every() is used to test each key in the obj1 array
    // If the second object's KEYS equal the first object's KEYS
    // AND the second object's VALUES equal the first object's VALUES
    // then isEqual will return true, else false
    console.log(isEqual);
}

// test 1
areObjectsEqual(objectOne, objectTwo); // false

// test 2
areObjectsEqual(objectOne, objectFour); // false

// test 3
areObjectsEqual(objectThree, objectFour); // true
// write a javascript function which compares two objects
// and determines if each object has the same values

const objectOne = { 1: "Gary", 2: "Kelly" };
const objectTwo = { 1: "Gary", 2: "Kelly" };

Object.equals = (obj1, obj2) => {
    if (obj1 === obj2) {
        return true;
    }
    return false;
}

Object.equals(objectOne, objectTwo);
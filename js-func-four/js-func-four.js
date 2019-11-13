// write a javascript function that alphabatizes a string

alphabet = (input) => {
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        arr.push(input.charAt(i));
    }

    let strSorted = arr.sort().join("");

    console.log(strSorted);
}

alphabet("blah");
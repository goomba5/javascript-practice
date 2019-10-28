// write a JavaScript program to delete a specific property from an object
// print the object before the property is deleted

let anObject = {
    name: "Cayde-6",
    age: "Unknown",
    weaponOfChoice: "Ace of Spades",
    killer: "Uldren Sov"
}

console.log("Before revmoing a property")
console.log(anObject);

console.log("--------------------------")

delete anObject.killer; // deletes the killer property, because Uldren sucks

console.log("After revmoing a property")
console.log(anObject);
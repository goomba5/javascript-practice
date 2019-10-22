// Write a JavaScript program to target a given value in a nested JSON object, based on // the given key

// JSON object
jsonObject = {
    "class": "Warlock",
    "subClass": "Dawnblade",
    "weaponLoadout": {
        "kinetic": "Randy's Throwing Knife",
        "energy": "The Recluse",
        "heavy": "Thunderlord"
    }
}

// retrieve values from JSON object
let characterClass = jsonObject.class;
let characterSubclass = jsonObject.subClass;
let kineticWeapon = jsonObject.weaponLoadout.kinetic;

// test 1
console.log(characterClass);

// test 2
console.log(characterSubclass);

// test 3
console.log(kineticWeapon);
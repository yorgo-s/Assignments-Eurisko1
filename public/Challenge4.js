"use strict";
function firstNonRepeatingChar(str) {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1);
        }
        else {
            map.set(str[i], 1);
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) {
            return str[i];
        }
    }
    return null;
}
console.log("Challenge 4");
console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("racecar"));

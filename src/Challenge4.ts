function firstNonRepeatingChar(str: string): string | null {
  // takes a string as an argument and checks for the first non-repeating character by using a map to store the frequency of each character
  let map = new Map<string, number>();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i])! + 1);
    } else {
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
console.log(firstNonRepeatingChar("swiss")); //w
console.log(firstNonRepeatingChar("racecar")); //e
console.log(firstNonRepeatingChar("raccar")); //Null
console.log(firstNonRepeatingChar("mammal")); //l
console.log(firstNonRepeatingChar("apple")); //a

function countVowels(str: string): number {
  return str.split("").filter((char) => "aeiou".includes(char)).length; // split the string into an array of characters, filter out the vowels, and return the length of the filtered array
}
console.log("Challenge 2");
console.log(countVowels("Challenge")); // 3

function countVowels(str: string): number {
  return str.split("").filter((char) => "aeiou".includes(char)).length;
}

console.log("Challenge 2");
console.log(countVowels("typescript"));

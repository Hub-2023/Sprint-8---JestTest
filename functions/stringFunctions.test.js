const {capitalizeString, reverseString, countVowels, isPalindrome} = require("./stringFunctions");



test ("capitalization of text", () => {
    expect(capitalizeString("hello")).toEqual("HELLO");
});

test ("reverse of text", () => {
    expect(reverseString("world")).toEqual("dlrow");
});

test ("count the Vowels", () => {
    expect(countVowels('aeiou')).toBe(5);
});
test("Palindrome", () => {
    expect(isPalindrome('hannah')).toBeTruthy()
  });
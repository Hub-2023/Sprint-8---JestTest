const stringFunctions = require('./stringFunctions'); // Replace with the correct path to your stringFunctions file

test('capitalizeString should capitalize the first letter', () => {
  expect(stringFunctions.capitalizeString('hello')).toBe('Hello');
  expect(stringFunctions.capitalizeString('world')).toBe('World');
});

test('reverseString should reverse the string', () => {
  expect(stringFunctions.reverseString('hello')).toBe('olleh');
  expect(stringFunctions.reverseString('world')).toBe('dlrow');
});

test('countVowels should count the vowels in a string', () => {
  expect(stringFunctions.countVowels('hello')).toBe(2); // e and o
  expect(stringFunctions.countVowels('world')).toBe(1); // o
  expect(stringFunctions.countVowels('aeiou')).toBe(5); // all vowels
});

test('isPalindrome should check if a string is a palindrome', () => {
  expect(stringFunctions.isPalindrome('racecar')).toBe(true);
  expect(stringFunctions.isPalindrome('hello')).toBe(false);
  expect(stringFunctions.isPalindrome('A man a plan a canal Panama')).toBe(true);
});

test('isPalindrome should handle spaces and case insensitivity', () => {
  expect(stringFunctions.isPalindrome('Was it a car or a cat I saw')).toBe(true);
  expect(stringFunctions.isPalindrome('No lemon, no melon')).toBe(true);
});


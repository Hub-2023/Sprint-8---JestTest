//Write the following String Functions

// capitalizeString(str)
// This function takes a string str as input and returns the capitalized version of the string.

function capitalizeString(str) {
    let upperCase = str.toUpperCase()
    return upperCase
}

// reverseString(str)
// This function takes a string str as input and returns the reversed version of the string.

function reverseString(str) {
    return str.split('').reverse().join('')
}

// countVowels(str)
// This function takes a string str as input and returns the count of vowels in the string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// isPalindrome(str)
// This function takes a string str as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

function isPalindrome(str) {
    const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
}

module.exports = { capitalizeString, reverseString, countVowels, isPalindrome}

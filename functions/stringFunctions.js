const stringFunctions = {
    // capitalizeString(str)
    // This function takes a string str as input and returns the capitalized version of the string.
    capitalizeString: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
 
 // reverseString(str)
  // This function takes a string str as input and returns the reversed version of the string.
  reverseString: function (str) {
    return str.split('').reverse().join('');
  },

  // countVowels(str)
  // This function takes a string str as input and returns the count of vowels in the string.
  countVowels: function (str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  },

  // isPalindrome(str)
  // This function takes a string str as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
  isPalindrome: function (str) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanStr = str.replace(/\s/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  },
};

module.exports = stringFunctions;
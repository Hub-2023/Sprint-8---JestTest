//Write the following String Functions

// capitalizeString(str)
// This function takes a string str as input and returns the capitalized version of the string.
function capitalizeString( str )
{
  console.log( str.toUpperCase() );
  return str.toUpperCase()
}

// reverseString(str)
// This function takes a string str as input and returns the reversed version of the string.
function reverseString( str )
{
  console.log( str.split( "" ).reverse().join( "" ) )
  return str.split( "" ).reverse().join( "" );
}

// countVowels(str)
// This function takes a string str as input and returns the count of vowels in the string.
function countVowels( str )
{
  const vowels = str.match( /[aeiou]/gi );
  console.log( vowels ? vowels.length : 0 )
  return vowels ? vowels.length : 0;
}

// isPalindrome(str)
// This function takes a string str as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

function isPalindrome( str )
{
  const reversedStr = str.split( "" ).reverse().join( "" );
  console.log( str === reversedStr )
  return str === reversedStr;
}

module.exports = { capitalizeString, reverseString, countVowels, isPalindrome };

// capitalizeString( "hello" );
// reverseString( "hello" );
// countVowels( "hello" );
// isPalindrome( "hello" );
// isPalindrome( "racecar" );

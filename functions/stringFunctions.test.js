const { capitalizeString } = require( "./stringFunctions" );
const { reverseString } = require( "./stringFunctions" );
const { countVowels } = require( "./stringFunctions" );
const { isPalindrome } = require( "./stringFunctions" );

test( "Example Test", () =>
{
  const name = "bob";
  expect( name ).toBe( "bob" );
} );

test( "capitalizeString", () =>
{
  const expected = "HELLO";
  const actual = capitalizeString( "hello" );
  expect( actual ).toBe( expected );
} );

test( "reverseString", () =>
{
  const expected = "olleh";
  const actual = reverseString( "hello" );
  expect( actual ).toBe( expected );
} );

test( "countVowels", () =>
{
  const expected = 2;
  const actual = countVowels( "hello" );
  expect( actual ).toBe( expected );
} );

test( "countVowels with no vowels", () =>
{
  const expected = 0;
  const actual = countVowels( "bcdfghjklmnpqrstvwxyz" );
  expect( actual ).toBe( expected );
} );


test( "isPalindrome", () =>
{
  const expected = false;
  const actual = isPalindrome( "hello" );
  expect( actual ).toBe( expected );
} )

test( "isPalindrome", () =>
{
  const expected = true;
  const actual = isPalindrome( "racecar" );
  expect( actual ).toBe( expected );
} )

// Tests using other matchers

// .toEqual
test( "reverseString", () =>
{
  const expected = [ "o", "l", "l", "e", "h" ];
  const actual = reverseString( "hello" ).split( "" );
  expect( actual ).toEqual( expected );
} );

// .toBeGreaterThan
test( "countVowels", () =>
{
  const expected = 2;
  const actual = countVowels( "hello" );
  expect( actual ).toBeGreaterThan( expected - 1 );
} );

// .toBeFalsy
test( "isPalindrome", () =>
{
  const actual = isPalindrome( "hello" );
  expect( actual ).toBeFalsy();
} );

// .toMatch
test( "isPalindrome", () =>
{
  const actual = isPalindrome( "racecar" );
  expect( actual ).toBeTruthy();
} );

// .toThrow
test( "capitalizeString with null input", () =>
{
  expect( () => capitalizeString( null ) ).toThrow();
} );
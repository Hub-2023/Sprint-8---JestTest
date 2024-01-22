const fn = require( "./functions" ); // we need to import the file where our functions live. Lets imagine our function lives in a file called 'functions.js'

test( "onlyReturnWhenSumIsFive", () =>
{
  const expected = "Yay! You got five!";
  const actual = fn.onlyReturnWhenSumIsFive( 2, 3 );
  expect( actual ).toBe( expected );
} );

test( "onlyReturnWhenSumIsFive", () =>
{
  const expected = "Sorry try again with different numbers";
  const actual = fn.onlyReturnWhenSumIsFive( 2, 4 );
  expect( actual ).toBe( expected );
} );

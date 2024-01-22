const { addNumbers } = require( "./mathsFunctions" );
const { subtractNumbers } = require( "./mathsFunctions" );
const { multiplyNumbers } = require( "./mathsFunctions" );
const { divideNumbers } = require( "./mathsFunctions" );

test( "Example Test", () =>
{
  const name = "bob";
  expect( name ).toBe( "bob" );
} );

test( "addNumbers", () =>
{
  const expected = 5;
  const actual = addNumbers( 2, 3 );
  expect( actual ).toBe( expected );
} );

test( "subtractNumbers", () =>
{
  const expected = 1;
  const actual = subtractNumbers( 5, 4 );
  expect( actual ).toBe( expected );
} );

test( "multiplyNumbers", () =>
{
  const expected = 6;
  const actual = multiplyNumbers( 2, 3 );
  expect( actual ).toBe( expected );
} );

test( "divideNumbers", () =>
{
  const expected = 2;
  const actual = divideNumbers( 6, 3 );
  expect( actual ).toBe( expected );
} );

// Tests using other matchers

// .toBeCloseTo
test( "multiplyNumbers", () =>
{
  const expected = 6;
  const actual = multiplyNumbers( 2, 3 );
  expect( actual ).toBeCloseTo( expected );
} );


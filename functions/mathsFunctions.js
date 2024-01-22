//  Write the following Math Functions

// addNumbers(a, b)
// This function takes two numbers a and b as input and returns their sum.

function addNumbers( a, b )
{
  console.log( a + b )
  return a + b
}

// subtractNumbers(a, b)
// This function takes two numbers a and b as input and returns the difference between a and b.

function subtractNumbers( a, b )
{
  console.log( a - b )
  return a - b
}

// multiplyNumbers(a, b)
// This function takes two numbers a and b as input and returns their product.

function multiplyNumbers( a, b )
{
  console.log( a * b )
  return a * b
}

// divideNumbers(a, b)
// This function takes two numbers a (dividend) and b (divisor) as input and returns the quotient.

function divideNumbers( a, b )
{
  console.log( a / b )
  return a / b
}

module.exports = { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers }

// addNumbers( 2, 3 )
// subtractNumbers( 5, 3 )
// multiplyNumbers( 2, 3 )
// divideNumbers( 6, 2 )
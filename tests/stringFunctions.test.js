const { capitalizeString, reverseString, countVowels, isPalindrome } = require("../functions/stringFunctions");

  test("Capitalize string", () => {
    expect(capitalizeString('andrew')).toEqual('ANDREW')
  })

  test("Reverse string", () => {
    expect(reverseString('andrew')).toEqual('werdna')
  })

  test("Count vowels", () => {
    expect(countVowels('andrew')).toBe(2)
  })

  test("Palindrome", () => {
    expect(isPalindrome('hannah')).toBeTruthy()
  })

  test("Palindrome", () => {
    expect(isPalindrome('andrew')).toBeFalsy()
  })




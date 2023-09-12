const functions = require("./functions"); // we need to import the file where our functions live. Lets imagine our function lives in a file called 'functions.js'

test ('functions that add two numbers together',  () => {
  expect(functions.add(5,3)).toBe(8);
});

test('functions that add two numbers together', () => {
  expect(functions.add(5,3)).not.toBe(6);
});

// toBeNull matcher

test('result should be null', () => {
  expect(functions.isNull()).toBeNull
})

// toBeFalsy

test('result should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

test('User should be named Spongebob Squarepants and this should be an object', () => {
  expect(functions.createUser(null)).toEqual({firstName:'Spongebob', lastName: 'Squarepants'})
})

// Less Than

test('should be under 24', () => {
  const hub = 12
  const prison = 11
  expect(hub + prison).toBeLessThanOrEqual(24)
})

// Regexes

test('There is no I in team', () => {
  expect('teami').not.toMatch(/I/)
})

test('Petera should be in usernames', () => {
  const usernames = ['bob', 'dylan', 'elizabeth', 'Petera']
  expect(usernames).toContain('Petera')
})

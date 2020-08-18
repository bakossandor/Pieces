const { addNumbersTogether } = require('../index')

test('addNumbersTogether tets', () => {
  const testNumbersArray = [1, 2, 3]
  const expected = 6
  expect(addNumbersTogether(testNumbersArray)).toBe(expected)
})
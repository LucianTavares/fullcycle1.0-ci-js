const sum = require('./soma').somaDoisNumeros;

test('A soma de 2 + 5 deve ser igual a 7', () => {
  expect(sum(2, 5)).toBe(7);
});
const somaDoisNumeros = require('./soma')

test('Somar dois números', () => {
  expect(somaDoisNumeros.somaDoisNumeros(1, 5)).toEqual(6)
})
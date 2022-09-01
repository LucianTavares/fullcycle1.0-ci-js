const somaDoisNumeros = require('./soma')

test('Somar dois números', () => {
  expect(SomaDoisNumeros.somaDoisNumeros(1, 5)).toEqual(6)
})
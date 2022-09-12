const soma = require('./soma').somaDoisNumeros;
const subtracao = require('./soma').subtracaoDoisNumeros;
const divisao = require('./soma').divisaoDoisNumeros;
const multiplicacao = require('./soma').multiplicacaoDoisNumeros;
const potencia = require('./soma').potenciaDoisNumeros;

test('A soma de 2 + 5 deve ser igual a 7', () => {
  expect(soma(2, 5)).toBe(7);
});

test('A subtracao de 2 - 5 deve ser igual a 3', () => {
  expect(subtracao(2, 5)).toBe(-3);
});

test('A divisao de 2 / 5 deve ser igual a 0.4', () => {
  expect(divisao(2, 5)).toBe(0.4);
});

test('A multiplicacao de 2 * 5 deve ser igual a 10', () => {
  expect(multiplicacao(2, 5)).toBe(10);
});

test('A potencia de 2 ** 5 deve ser igual a 32', () => {
  expect(potencia(2, 5)).toBe(32);
});
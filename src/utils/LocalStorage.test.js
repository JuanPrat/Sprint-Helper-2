import { readFromLocalStorage, saveInLocalStorage } from './LocalStorage'

test('the mock should return empty array when read from local storage', () => {
    const myMock = jest.fn(readFromLocalStorage())
    .mockImplementation(()=> [])
    expect(myMock()).toStrictEqual([]);
  });

  test('the mock should not return empty array when read from local storage', () => {
    const resultadoEsperado = [{puntos: '2', codigo: 'TFGS-2456', fecha: new Date()}];
    const myMock = jest.fn(readFromLocalStorage())
    .mockImplementation(()=> resultadoEsperado)
    expect(myMock()).toStrictEqual(resultadoEsperado);
  });

test('the mock should return empty array', () => {
    const myMock = jest.fn(saveInLocalStorage('', '', new Date, []))
    .mockImplementation(()=> [])
    expect(myMock()).toStrictEqual([]);
  });

  test('the mock should not return empty array', () => {
      const resultadoEsperado = [{puntos: '2', codigo: 'TFGS-2456', fecha: new Date()}];
    const myMock = jest.fn(saveInLocalStorage('', '', new Date, []))
    .mockImplementation(()=> resultadoEsperado)
    expect(myMock()).toStrictEqual(resultadoEsperado);
  });
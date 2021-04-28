import { readFromLocalStorage, saveInLocalStorage } from '../utils/LocalStorage'

beforeEach(()=>{
  localStorage.clear()
})

test('should save to localStorage', () => {
  const hus = saveInLocalStorage("codigo", "puntos", [])
  expect(hus.length).toBe(1);
});

test('should save and add without loosign info', ()=> {
  let hus = [{codigo:"codigo1", puntos:"puntos1"}];
  hus = saveInLocalStorage("codigo", "puntos", hus)
  expect(hus.length).toBe(2);
})

test('should read empty info from localStorage and initialize empty', ()=> {
  const hus = readFromLocalStorage();
  expect(hus.length).toBe(0)
})

test('should read info from localStorage and initialize with data', ()=> {
  let hus = []
  hus = saveInLocalStorage("codigo", "puntos", hus)
  saveInLocalStorage("codigo1", "puntos1", hus)
  expect(readFromLocalStorage().length).toBe(2)
})


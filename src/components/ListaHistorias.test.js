import { readFromLocalStorage, saveInLocalStorage } from '../utils/LocalStorage'

beforeEach(()=>{
  localStorage.clear()
})

test('should save to localStorage', () => {
  const hus = saveInLocalStorage("codigo", "puntos",new Date(), [])
  expect(hus.length).toBe(1);
});

test('should save and add without loosign info', ()=> {
  let hus = [{codigo:"codigo1", puntos:"puntos1",fecha: new Date()}];
  hus = saveInLocalStorage("codigo", "puntos",new Date(), hus)
  expect(hus.length).toBe(2);
})

test('should read empty info from localStorage and initialize empty', ()=> {
  const hus = readFromLocalStorage();
  expect(hus.length).toBe(0)
})

test('should read info from localStorage and initialize with data', ()=> {
  let hus = []
  hus = saveInLocalStorage("codigo", "puntos",new Date(), hus)
  saveInLocalStorage("codigo1", "puntos1",new Date(), hus)
  expect(readFromLocalStorage().length).toBe(2)
})


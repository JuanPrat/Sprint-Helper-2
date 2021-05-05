export function saveInLocalStorage(codigo, puntos,fecha,  hus){
    let husArray = hus;
    if (codigo !== "" && puntos !== "") {
        husArray.push({codigo, puntos, fecha});
        localStorage.setItem('hus', JSON.stringify(husArray))
      }
      return husArray;
}

export function readFromLocalStorage(){
    return localStorage.getItem('hus') ? JSON.parse(localStorage.getItem('hus')) : []
}
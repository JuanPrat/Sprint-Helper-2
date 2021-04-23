import React, { Component } from 'react';
import { readFromLocalStorage, saveInLocalStorage } from '../utils/LocalStorage'

class ListaHistorias extends Component {

  constructor(props){
    super(props)
    this.state = {  listaHu:  readFromLocalStorage()}
  }

  shouldComponentUpdate(nextProps) {// evalua si el componente deberia renderizarse. devuelve true o false
    let huArray = JSON.parse(localStorage.getItem("hus"))
    if (huArray === null) {
      huArray = []
    }
    const update = huArray.filter(hu => hu.codigo === nextProps.codigo).length === 0;
    if(!update){
      window.alert("Una historia de usuario con este codigo ya existe")
    }
    return update
  }

  render() {
    saveInLocalStorage(this.props.codigo, this.props.puntos, this.state.listaHu)
    let huArray = []
    debugger
    this.state.listaHu.forEach(hu => {
      huArray.push(
          <ul key={hu.codigo}>
            <p >Codigo: {hu.codigo}</p>
            <p>Puntos: {hu.puntos}</p>
            <p>consumidos: </p>
          </ul>
      )
    }
    )
    return huArray;
  }
}


export default ListaHistorias;

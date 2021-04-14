import React, { Component } from 'react';

class ListaHistorias extends Component {

  constructor(props){
    super(props)
    this.state = {  listaHu: localStorage.getItem('hus') ? JSON.parse(localStorage.getItem('hus')) : [] }
  }

  shouldComponentUpdate(nextProps) {// evalua si el componente deberia renderizarse. devuelve true o false
    let huArray = JSON.parse(localStorage.getItem("hus"))
    if (huArray === null) {
      huArray = []
    }
    return huArray.filter(hu => hu.codigo === nextProps.codigo).length === 0;
  }

  saveInLocalStorage = () => {
    if (this.props.codigo !== "" && this.props.puntos !== "") {
      let husArray = this.state.listaHu;
      husArray.push(this.props);
      this.setState(this.husArray);
      localStorage.setItem('hus', JSON.stringify(this.state.listaHu))
    }
  }

  render() {
    this.saveInLocalStorage()
    let huArray = []
    debugger
    this.state.listaHu.forEach(hu => {
      huArray.push(
        <div className="card">
          <ul key={hu.codigo}>
            <p >Codigo: {hu.codigo}</p>
            <p>Puntos: {hu.puntos}</p>
            <p>consumidos: </p>
          </ul>
        </div>
      )
    }
    )
    return huArray;
  }
}


export default ListaHistorias;

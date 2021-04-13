import React, { Component } from 'react';

class ListaHistorias extends Component {

  listaHu;

  constructor(props) {
    super(props)
    this.state = { listaHu: [] }
  }

  componentWillMount() { //puede servir para quitarle carga al constructor
    
  }

  componentDidMount(){ //ya podemos hacer uso del DOM y deberiamos hacer llamadas a servidores y apis para actualizar el state
    this.setState({listaHu: JSON.parse(localStorage.getItem("hus"))})
    if (this.state.listaHu === (null || undefined)) {
      this.setState({ listaHu: [] })
    }
  }

  shouldComponentUpdate(){// evalua si el componente deberia renderizarse. devuelve true o false
    return true;
  }

  componentWillUnmount(){ //para deshacer suscripciones a apis y ejecutar codigo que necesitemos al salir de un compoenente

  }

  render() {
    let huArray = []
    this.state.listaHu.forEach(hu => {
      huArray.push(
      <div class="list">
        <div class="card">
          <li>Codigo: {hu.codigo}</li>
          <li>Puntos: {hu.puntos}</li>
          <p>consumidos: </p>
        </div>
      </div>
      )
    }
    )
    return huArray;
  }
}


export default ListaHistorias;

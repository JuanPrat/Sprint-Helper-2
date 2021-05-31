import React from "react";
import ListaHistorias from "./ListaHistorias";
import '../css/style.css'

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { codigo: "", puntos: "" };
  }

  componentDidMount() { }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ codigo: this.codigo.value, puntos: this.puntos.value, fecha: new Date() });
    this.codigo.value = "";
    this.puntos.value = "";
  };

  render() {
    return (
      <div className="grid-container">
        <div className="formulario" >
          <form className="form-flex-container">
            <label>Codigo Hu</label>
            <input
              data-testid="input-codigo"
              type="text"
              name="codigo"
              ref={(inputElement) => (this.codigo = inputElement)}
            ></input>
            <label>Puntos Hu</label>
            <input
              data-testid="input-puntos"
              type="text"
              name="puntos"
              ref={(inputElement) => (this.puntos = inputElement)}
            ></input>
            <button data-testid="enviar-button" className="button" onClick={(event) => this.handleClick(event)}>Enviar</button>
          </form>
        </div>
        <ListaHistorias
          codigo={this.state.codigo}
          puntos={this.state.puntos}
          fecha={this.state.fecha}
        ></ListaHistorias>
      </div>
    );
  }
}


export default Formulario;

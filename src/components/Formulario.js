import React from "react";
import ListaHistorias from "./ListaHistorias";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { codigo: "", puntos: "" };
  }

  componentDidMount() { }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ codigo: this.codigo.value, puntos: this.puntos.value });
    this.codigo.value = "";
    this.puntos.value = "";
  };

  render() {
    return (
      <div>
        <form>
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
        <ListaHistorias
          codigo={this.state.codigo}
          puntos={this.state.puntos}
        ></ListaHistorias>
      </div>
    );
  }
}


export default Formulario;

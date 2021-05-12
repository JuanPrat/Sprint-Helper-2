import React, { Component } from "react";
import {
  readFromLocalStorage,
  saveInLocalStorage,
} from "../utils/LocalStorage";

class ListaHistorias extends Component {
  constructor(props) {
    super(props);
    this.state = { listaHu: readFromLocalStorage() };
  }

  shouldComponentUpdate(nextProps) {
    // evalua si el componente deberia renderizarse. devuelve true o false
    let huArray = JSON.parse(localStorage.getItem("hus"));
    if (huArray === null) {
      huArray = [];
    }
    const update =
      huArray.filter((hu) => hu.codigo === nextProps.codigo).length === 0;
    if (!update) {
      window.alert("Una historia de usuario con este codigo ya existe");
    }
    return update;
  }

  calcularPuntosConsumidos(fechaHu) {
    if (fechaHu !== undefined) {
      const fecha1 = new Intl.DateTimeFormat("en-US").format(new Date(fechaHu));
      const fecha2 = new Intl.DateTimeFormat("en-US").format(new Date());
      const fechaActual = new Date();
      let puntos = 2 * this.restaFechas(fecha1, fecha2);
      if (fechaActual.getHours() < 12) {
        puntos = puntos - 1;
      }
      return puntos;
    }
  }

  // Función para calcular los días transcurridos entre dos fechas
  restaFechas = function (f1, f2) {
    var aFecha1 = f1.split("/");
    var aFecha2 = f2.split("/");
    var fFecha1 = Date.UTC(aFecha1[2], aFecha1[0], aFecha1[1] - 1);
    var fFecha2 = Date.UTC(aFecha2[2], aFecha2[0], aFecha2[1] - 1);
    var dif = fFecha2 - fFecha1;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
  };

  render() {
    saveInLocalStorage(
      this.props.codigo,
      this.props.puntos,
      this.props.fecha,
      this.state.listaHu
    );
    let huArray = [];
    this.state.listaHu.forEach((hu) => {
      huArray.push(
        <div className="card">
          <p className="codigo">{hu.codigo}</p>
          <p className="puntos">Puntos: {hu.puntos}</p>
          <p className="puntos">consumidos: {this.calcularPuntosConsumidos(hu.fecha)}</p>
          <p>Creada: {new Intl.DateTimeFormat("en-US").format(new Date(hu.fecha))}</p>
        </div>
      );
    });
    return huArray;
  }
}

export default ListaHistorias;

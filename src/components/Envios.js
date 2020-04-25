import React, { Component } from "react";


class Envios extends Component {
  render() {
    if (this.props.envio === "G") {
      return (
        <div className="envioGratis">
          <img src={require(`../assets/images/envio.png`)}></img>Envio Gratis a
            todo el pais
        </div>
      );
    } else {
      return (
        <div className="envio">
          Costo de Envio Interior de Argentina: $ {this.props.costoEnvio}
        </div>
      );
    }
  }
}

export default Envios;

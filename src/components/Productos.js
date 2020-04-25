import React, { Component } from 'react';
import Nav from './Nav';
import { informatica } from '../data/informatica.json';
import Tarjetas from "./Tarjetas";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Productos extends Component {

  constructor() {
    super();
    this.state = {
      informatica,
    };
  }
  render() {
    const informatica = this.state.informatica.map((informatica, i) => {
      return (
        <Tarjetas
          id={informatica.id}
          nombre={informatica.componente}
          marca={informatica.marca}
          imagen={informatica.imagen}
          precio={informatica.precio}
          envio={informatica.envio}
          costoEnvio={informatica.costoEnvio}
          vendidos={informatica.vendidos}
          detalle={informatica.detalle}
        ></Tarjetas>
      );
    }
    );
    return (
      <React.Fragment>
        <Nav></Nav>
        <h2 class="titulo">¡Productos informaticos en venta!</h2>
        <Container fluid="md">
          <Col className="col">{informatica}</Col>
        </Container>
      </React.Fragment>
    );
  }
}


export default Productos;
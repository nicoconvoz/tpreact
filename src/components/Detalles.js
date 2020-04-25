import React, { Component } from 'react';
import Nav from './Nav';
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { informatica } from '../data/informatica.json';
import Envios from "./Envios";

class Detalles extends Component {

  constructor() {
    super();
    this.state = {
      informatica
    }
  }

  render() {
    const id = this.props.match.params.id;
    const informaticaEncuentra = informatica.filter(
      (informatica) => informatica.id === id
    );
    console.log(this.props);
    return (
      <React.Fragment>
        <Nav></Nav>

        <h2 className="titulo">Detalles del Producto</h2>
        <Card className="tarjetasDetalles">
          <Container>
            <Row>
              <Col>
                <img
                  className="imagenDetalles"
                  src={require(`../assets/images/${informaticaEncuentra[0].imagen}`)}
                />
              </Col>
              <Col className="colDetalles">
              <Row className="vendidos">
                  <br></br>
                  {informaticaEncuentra[0].vendidos} vendidos
                    </Row>
                <br />
                <Row>
                  <h2>{informaticaEncuentra[0].componente}</h2>
                </Row>
                <br />
                <Row>
                  <h4>Marca: {informaticaEncuentra[0].marca}</h4>
                </Row>
                <br />
                <Row>
                   <h6>{informaticaEncuentra[0].detalle}</h6>
                </Row>
                <br />
                <Row>
                  <h2> $ {informaticaEncuentra[0].precio}</h2>
                </Row>
                <br />
                <Row>
                  <Envios envio={informaticaEncuentra[0].envio}></Envios>
                </Row>
                <br />
                <Row>
                  <button className="btn btn-primary boton">Añadir al carrito</button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card>
      </React.Fragment>
    );
  }
}

export default Detalles;
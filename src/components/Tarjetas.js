import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Tarjetas extends Component {
    render() {
        if (this.props.envio === "G") {
            return (
                <React.Fragment>
                    <Card className="cards">
                        <Card.Body className="body">
                            <img className="imagenes" align="left" src={require(`../assets/images/${this.props.imagen}`)} />
                            <Card.Title>{this.props.nombre}</Card.Title>
                            <Card.Text>${this.props.precio}</Card.Text>
                            <Card.Text className="envioGratis">
                                <img src={require(`../assets/images/envio.png`)}></img>
                    ¡Envio gratis a todo el pais!
                </Card.Text>
                            <Card.Text>{this.props.vendidos} Vendidos</Card.Text>
                            <Button href={`detalles/${this.props.id}`} variant="primary">Detalle</Button>
                        </Card.Body>
                    </Card>
                </React.Fragment>

            );

        } else {
            return (
                <React.Fragment>
                    <Card className="cards">
                        <Card.Body className="body">
                            <img className="imagenes" align="left" src={require(`../assets/images/${this.props.imagen}`)} />

                            <Card.Title>{this.props.nombre}</Card.Title>
                            <Card.Text>${this.props.precio}</Card.Text>
                            <Card.Text className="envio">
                                Costo de Envio Interior de Argentina $ {this.props.costoEnvio}
                            </Card.Text>
                            <Card.Text>{this.props.vendidos} Vendidos</Card.Text>
                            <Button href={`detalles/${this.props.id}`} variant="primary">Detalle</Button>
                        </Card.Body>
                    </Card>
                </React.Fragment>

            );
        }

    }
}

export default Tarjetas;
import React, { Component } from 'react';
import Nav from './Nav';

class Inicio extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav></Nav>
                <div className="mt-5 mr-5 ml-5 inicio">
                    <h3>TiendaLibre es una tienda que ofrece todo tipo de componentes informaticos con más de 15 años de experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra en linea.
                    </h3>
                    <br>
                    </br>
                </div>
                
                <h3><a href="/productos" className="enlaces">¡Examinar nuestros productos!</a></h3>
            </React.Fragment>
        );
    }
}

export default Inicio;
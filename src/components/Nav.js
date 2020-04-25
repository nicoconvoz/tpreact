import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavB from 'react-bootstrap/Nav';

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>TP REACT Nicolas Astorga</Navbar.Brand>
          <NavB className="nav">
            <NavB.Link href="/">Inicio</NavB.Link>
            <NavB.Link href="/productos">Productos</NavB.Link>
            <NavB.Link href="/dondeEncontrarnos">Donde Encontrarnos</NavB.Link>
          </NavB>
        </Navbar>
      </React.Fragment>

    );

  }
}

export default Nav;
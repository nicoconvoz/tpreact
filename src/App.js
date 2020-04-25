import  Inicio from './components/Inicio';
import  Productos  from './components/Productos';
import  Detalles from './components/Detalles';
import  DondeEncontrarnos from './components/DondeEncontrarnos';
import React, { Component } from 'react';
import './assets/css/App.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component{

  render(){
    return(
      <Switch>
        <Route exact path="/" component={Inicio}></Route>
        <Route exact path="/productos" component={Productos}></Route>
        <Route exact path="/detalles/:id" component={Detalles}></Route>
        <Route exact path="/dondeEncontrarnos" component={DondeEncontrarnos}></Route>
      </Switch>
    )
  }
}

export default App;

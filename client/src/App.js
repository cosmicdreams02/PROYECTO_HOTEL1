/* import Login from './pages/Login';
import Registro from './pages/Registro';
import Reservas from './pages/Reservas'; */
import './App.css';

import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/Main";



class App extends Component {

  render() {
    return (
      <div className="App">
        { <BrowserRouter>
          <MainComponent />
        </BrowserRouter> }

      </div>
    );
  }
}


export default App;



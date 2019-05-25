import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';

import Navbar from './components/navbar';
import Home from './components/home';
import Breakfast from './components/breakfast';
import Meal from './components/meal';


// import { AppContextProvider, AppContext } from "./appContext";
import Item from "./components/item"
import Button from "./components/button";


class App extends Component {
    
    render() {
        return (
            
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" render={() => <Home title="Bienvenido" />} />
                    <Route path="/breakfast" render={() => <Breakfast title="Desayuno" />} />
                    <Route path="/meal" render={() => <Meal title="Comida" />} />
                
                
                    <Route path="/complements" render={() => <Item />} />
            <Route path="/complements" render={() => <Button />} />
                
                </div>
            </BrowserRouter>
        );
           
  }
}

export default App;


ReactDOM.render(
  <App 
  //proop = message se accede con this.prop.message
  />, 
  document.getElementById("root")
);
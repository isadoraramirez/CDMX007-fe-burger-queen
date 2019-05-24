import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import { AppContextProvider,
     AppContext } from "./appContext";
import Navbar from './components/navbar';
import Menu from "./components/menu";
import Ticket from "./components/ticket";




Ticket.contextType = AppContext;
Menu.contextType = AppContext;

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route path="/breakfast" render={() => <Menu />} />
            <Route path="/burgers" render={() => <Menu />} />
            <Route path="/drinks" render={() => <Menu />} />
            <Route path="/complements" render={() => <Menu />} />
          </div>
        </BrowserRouter>
      </AppContextProvider>
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
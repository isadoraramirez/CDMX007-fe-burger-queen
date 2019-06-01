import React, { Component } from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import Navbar from './components/navbar';
// import Home from './components/home';
// import Breakfast from './components/breakfast';




// import Item from "./components/item"

// import Button from "./components/button";


class App extends Component {
    
    render() {
        return (
          
          <div>
            <Layout>
              <BurgerBuilder/>
              </Layout> 
          </div>




            // <BrowserRouter>
            //     <div className="App">
            //         <Navbar />
            //         <Route exact path="/" render={() => <Home title="Bienvenido" />} />
            //         <Route path="/breakfast" render={() => <Breakfast title="Desayuno" />} />
                   
            //         <Route path="/complements" render={() => <Item />} />
                    
            // <Route path="/complements" render={() => <Button />} />
                
            //     </div>
            // </BrowserRouter>
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
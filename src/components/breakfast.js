import React from 'react';
import{Datamenu} from "../data/datamenu"
//import { Link } from 'react-router-dom';
// import breakfast from './breakfast';
// import { Route} from 'react-router-dom';

const Breakfast = (props) => {
    let menu = Datamenu.map((dish)=>{
        return (
            <div className="menu-Container">
                <button>{dish.name} <br></br> $ 
                {dish.price}</button>
            </div>
        );
    });
  return (
      <div className="main-content">
          <div className= "container">
              {menu}
          </div>
      </div>
  );
  
    
  };
  fetch('./datamenu.json').then(response => {
    console.log(response);
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data);
  }).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });
export default Breakfast;
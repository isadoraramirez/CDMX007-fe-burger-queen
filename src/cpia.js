import React from 'react';
import{Datamenu} from "../data/datamenu"
//import { Link } from 'react-router-dom';
// import breakfast from './breakfast';
// import { Route} from 'react-router-dom';

const Breakfast = (props) => {
    let menu = Datamenu.map((dish)=>{
        return (
            <div className="menu-Container">
                <h3>{dish.name}</h3>
                <h3>{dish.price}</h3>
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
export default Breakfast;
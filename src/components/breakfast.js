import React from 'react';
//import { Link } from 'react-router-dom';
// import breakfast from './breakfast';
// import { Route} from 'react-router-dom';

const Breakfast = (props) => {
  return (
    <div className="main-content">
        <div className="container">
            <h2>{props.title}</h2>
            <div className="home-image"></div>
            <div className="thumbnail-container">
                <div className="home-thumbnail-1"></div>
              
            </div>
        </div>
    </div> 
);
}

export default Breakfast;
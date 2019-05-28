import React, { Component } from 'react';
import Item from './item';

import Button from './button';
import _ from 'lodash';




 class Breakfast extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      data: []
   
    };
    
  }

  componentDidMount() {
    fetch("https://ely-burguer-queen.firebaseio.com/menu.json").then(res =>
    
   
    res.json().then(json => {
        console.log(json);      
        this.setState({
          data: json
          
        });  
    })
    );
  }


  _remove(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]

    this.setState({ data : newData });

  }



  _add(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]

    this.setState({ data : newData });

  }




  _getTotal(){
    return _.sumBy(this.state.data, function(o) { return o.price; });;
  }



  render() {
    return (
      <div className="app">
        <h1>Carta</h1>
        <ul className="menu-rest">
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} onAdd={() => this._add(index)} />
            )
          }
        </ul>






        <div 
        className="menu-add">
          <Button
            onClick={this._add.bind(this)}
            name="añadir"
          />
          </div> 

       <div>

       <h4>Total: $ {this._getTotal()}</h4>

      </div>
      </div>
    );
  }
}

export default Breakfast;


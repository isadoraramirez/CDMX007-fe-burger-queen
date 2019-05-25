import React from "react";

import Button from './components/button';
import Item from './components/item';
import _ from 'lodash';
export const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
      // ,
      // order: []
    };
    // this.btnSelect = this.btnSelect.bind(this);
    // this.btnDelete = this.btnDelete.bind(this);
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

    this.setState({ data : newData });

  }

  _add(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]

    this.setState({ data : newData });

  }




  _getTotal(){
    return _.sumBy(this.state.data, function(o) { return o.price; });;
  }


  // btnSelect(item) {
  //   let uniqs = [...this.state.order];
  //   // uniqs.push(item);
  //   // console.log(productOrder);
  //   if (uniqs.includes(item)) {
  //     item.cant = item.cant + 1;
  //     item.total = item.price + item.total;
  //   } else {
  //     uniqs.push(item);
  //   }

  //   this.setState({
  //     order: uniqs
  //   });
  // }

  // btnDelete(item) {
  //   console.log(item);
  //   let uniqs = [];
  //   // console.log(uniqs);
  //   if (item.cant > 1 && this.state.order.includes(item)) {
  //     console.log("siesta", this.state.order);
  //     item.cant = item.cant - 1;
  //     item.total = item.total - item.price;
  //     uniqs = this.state.order;
  //   } else {
  //     uniqs = this.state.order.filter(elemnt => {
  //       return elemnt !== item;
  //     });
  //     // console.log(nuevo);
  //   }

  //   this.setState({
  //     order: [...uniqs]
  //   });
  // }




  render() {
    return (
      <div className="app">
        <h1>Burger Queen</h1>
        <ul className="menu-rest">
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} />
            )
          }
        </ul>


        {/* <ul className="menu-add">
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onAdd={ () => this._add(index)} />
            )
          }
        </ul> */}

        <div 
        className="menu-add">
          <Button
            onClick={this._add.bind(this)}
            name="añadir"
          />



          <h4>Total: $ {this._getTotal()}</h4>
        </div>
      </div>
    );
  }
}


export const AppContextConsumer = AppContext.Consumer;

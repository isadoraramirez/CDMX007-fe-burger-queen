import React from 'react';

import axios from 'axios';

export default class List extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get(`https://ely-burguer-queen.firebaseio.com/menu.json`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  render() {
    return (
      <ul>
       { this.state.items.map(obj => <li> <button>{obj.name} $ {obj.price}</button></li>)}
      </ul>
    )
  }
}
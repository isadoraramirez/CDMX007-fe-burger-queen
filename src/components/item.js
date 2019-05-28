import React, { Component } from 'react';

class Item extends Component{
	_remove(){
		if(this.props.onRemove)
			this.props.onRemove();
	}

	 
	add= ()=>{
		if(this.props.onAdd)
			this.props.onAdd();
	}
	 
	





	render(){
		return (
			<li>
				<div className="icon">
					
				</div>
				<div className="name">
					<span className="item-name">{this.props.data.name}</span>
					<span className="item-price">{this.props.data.portion}</span>
				</div>
				<div className="price">
					<h3>${this.props.data.price}</h3>
				</div>
				<button className="remove" onClick={this._remove.bind(this)}>
					<i className="material-icons">quitar

					</i>
				</button>
				

				<button className="add" onClick={this.add}>
					<i className="material-icons">añadir

					</i>
				</button>
				

			</li>
		)
	}
}


export default Item;
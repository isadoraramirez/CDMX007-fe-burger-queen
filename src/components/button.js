import React, { Component } from 'react';

class Button extends Component{
	
	_add(){
		if(this.props.onClick)
			this.props.onClick();
	}

	render(){
		return (
			<button className="add-button" onClick={this._add.bind(this)}>
				{this.props.name}
			</button>
		)
	}
}

export default Button;




// import React, { Component } from 'react';

// class Button extends Component{
// 	_add(){
// 		if(this.props.onAdd)
// 			this.props.onAdd();
// 	}
// 	render(){
// 		return (
// 			<li>
				



// 				<div className="name">
// 					<span className="item-name">{this.props.data.name}</span>
// 					<span className="item-price">{this.props.data.portion}</span>
// 				</div>
// 				<div className="price">
// 					<h3>${this.props.data.price}</h3>
// 				</div>
// 				<button className="add" onClick={this._add.bind(this)}>
// 					<i className="material-icons">quitar</i>
// 				</button>
// 			</li>
// 		)
// 	}
// }


// export default Button;
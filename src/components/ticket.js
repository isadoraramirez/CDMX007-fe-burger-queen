import React, { Component } from "react";
// import less from "../assets/minus.png";

class Ticket extends Component {
  render() {
    const { order, btnDelete } = this.context;
    return (
      <div className="ticket-order">
        {order.map((order, index) => (
          <ul key={index} className="produc-list">
            <li>
              <button className="btn-ticket">
                <div className="btn-text-ticket">
                  {order.lastname} {order.name}
                </div>
                <div className="btn-cant-ticket">{order.cant} </div>
                <div className="btn-total-ticket">${order.total} </div>
                <button className="btn-less" onClick={() => btnDelete(order)}>
                  {/* <img className="img-burger " src={less} alt="drinks" /> */}
                </button>
              </button>
            </li>
          </ul>
        ))}
        <div className="total-ticket">
          Total $
          {order.reduce((sum, newPrice) => {
            return sum + newPrice.total;
          }, 0)}
        </div>
      </div>
    );
  }
}

export default Ticket;

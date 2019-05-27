import React from 'react';

const Ticket =(props) =>{
    return (
        <div className={props.ticket_head}>
        <div className="ticket_icon_area">
         <div className="menu_icon icons"  id="micon"></div>
            <div className="gear_icon icons" id="gcon"></div>
            <div className="signout_icon icons" id="sicon"></div>
        </div>
        </div>
    )
}

export default Ticket;
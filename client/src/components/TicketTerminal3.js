import React from "react";
import terminal3 from "./img/terminal3.jpeg";
import terminal31 from "./img/terminal31.png";

const TicketTerminal3 = () => {

    return (
        <div id="details" className="termialWrapper">
            <h4>The Keikyu Line / Tokyo Monorail platform is at B1F.</h4>
            <div className="ticketsWrapper">
                <div className="ticketInfo">
                    <img src={terminal3} alt="terminal" width='100%' height={250}></img>
                    <div className="ticketTitle">
                        3F Departure lobby
                    </div>
                </div>
                <div className="ticketInfo">
                    <img src={terminal31} alt="terminal" width='100%' height={250}></img>
                    <div className="ticketTitle">
                        2F Arrival Lobby
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketTerminal3;

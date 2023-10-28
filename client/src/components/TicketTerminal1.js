import React from "react";
import terminal from "./img/terminal1.png";
import terminal1 from "./img/terminal11.png";
import terminal1map from "./img/terminal1map.png";

const TicketTerminal1 = () => {

    return (
        <div id="details" className="termialWrapper">
            <h4>The Keikyu Line / Tokyo Monorail platform is at B1F.</h4>
            <div className="ticketsWrapper">
                <div className="ticketInfo">
                    <img src={terminal} alt="terminal" width='100%' height={250}></img>
                    <div className="ticketTitle">
                        Keikyu Line ticket gate
                    </div>
                </div>
                <div className="ticketInfo">
                    <img src={terminal1} alt="terminal" width='100%' height={250}></img>
                    <div className="ticketTitle">
                        Tokyo Monorail ticket gate
                    </div>
                </div>
                <div className="ticketInfo">
                    <img src={terminal1map} alt="terminal" width='100%' height={250}></img>
                    <div className="ticketTitle">
                        B1F
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketTerminal1;

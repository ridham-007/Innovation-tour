import React from "react";
import terminal2 from "./img/terminal2.png";
import terminal21 from "./img/terminal21.png";
import terminal2map from "./img/terminal2map.png";

const TicketTerminal2 = () => {

    return (
        <div id="details" className="termialWrapper">
            <h4>The Keikyu Line / Tokyo Monorail platform is at B1F.</h4>
            <div className="ticketsWrapper">
                <div className="ticketInfo">
                    <img src={terminal2} alt="terminal" width='100%' height={250}></img>
                    <div className="ticketTitle">
                        Keikyu Line ticket gate
                    </div>
                </div>
                <div className="ticketInfo">
                    <img src={terminal21} alt="terminal" width='100%' height={250}></img>
                    <div className="ticketTitle">
                        Tokyo Monorail ticket gate
                    </div>
                </div>
                <div className="ticketInfo">
                    <img src={terminal2map} alt="terminal" width='100%' height={250}></img>
                    <div className="ticketTitle">
                        B1F
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketTerminal2;

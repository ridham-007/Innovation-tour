import React from "react";
import busterminal1 from "./img/busterminal1.png";
import busterminal2map from "./img/busterminal2map.png";


const BusTerminal2 = () => {

    return (
        <div id="details" className="termialWrapper">
            <h4>The Keikyu Line / Tokyo Monorail platform is at B1F.</h4>
            <div className="ticketsWrapper">
                <div className="ticketInfo">
                    <img src={busterminal1} alt="terminal" width='100%' height={250}></img>
                </div>
                <div className="ticketInfo">
                    <img src={busterminal2map} alt="terminal" width='100%' height={250}></img>
                </div>
            </div>
        </div>
    );
};

export default BusTerminal2;

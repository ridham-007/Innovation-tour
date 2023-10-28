import React from "react";
import busterminal2 from "./img/busterminal2.png";
import busterminal1map from "./img/busterminal1map.png";

const BusTerminal1 = () => {

    return (
        <div id="details" className="termialWrapper">
            <h4>Bus stops are located on 1F of each terminal.</h4>
            <div className="ticketsWrapper">
                <div className="ticketInfo">
                    <img src={busterminal2} alt="terminal" width='100%' height={250}></img>
                </div>
                <div className="ticketInfo">
                    <img src={busterminal1map} alt="terminal" width='100%' height={250}></img>
                </div>
            </div>
        </div>
    );
};

export default BusTerminal1;

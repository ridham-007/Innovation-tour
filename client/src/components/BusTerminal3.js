import React from "react";
import busterminal3 from "./img/busterminal3.png";
import busterminal31 from "./img/busterminal31.png";


const BusTerminal3 = () => {

    return (
        <div id="details" className="termialWrapper">
            <p>To check the schedules for buses leaving Haneda Airport and bus stop numbers, please go to the bus ticket counter or see the bus ticket machine display located on the second floor arrival lobby. Please purchase your tickets before boarding the bus.</p>
            <p>After getting off the bus, please go to the third floor for departures or to the second floor when waiting for an arrival.</p>
            <div className="ticketsWrapper">
                <div className="ticketInfo">
                    <img src={busterminal3} alt="terminal" width='100%' height={250}></img>
                </div>
                <div className="ticketInfo">
                    <img src={busterminal31} alt="terminal" width='100%' height={250}></img>
                </div>
            </div>
        </div>
    );
};

export default BusTerminal3;

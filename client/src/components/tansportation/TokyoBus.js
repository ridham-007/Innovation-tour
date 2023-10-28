import React, { useState } from "react";
import BusTerminal1 from "../BusTerminal1";
import BusTerminal2 from "../BusTerminal2";
import BusTerminal3 from "../BusTerminal3";

const TokyoBus = () => {

    const [busterminal, setBusTerminal] = useState('terminal1');

    const busstyle = busterminal === 'terminal1' ? { borderBottom: '5px solid red', color: '#000' } : {};
    const busstyle1 = busterminal === 'terminal2' ? { borderBottom: '5px solid #0082f0', color: '#000' } : {}
    const busstyle2 = busterminal === 'terminal3' ? { borderBottom: '5px solid #00afbd', color: '#000' } : {}

    const handleClickBus1 = () => {
        setBusTerminal('terminal1');
    }

    const handleClickBus2 = () => {
        setBusTerminal('terminal2');
    }

    const handleClickBus3 = () => {
        setBusTerminal('terminal3');
    }


    return (
        <div id="details">
            <div className="content">
                <div className="details" style={{ width: "90%", margin: "auto" }}>
                    <div style={{ textAlign: 'center', alignItems: 'center' }}>
                        <h2 id="root-haneda-bus">Bus Stop Information</h2>
                    </div>
                    <div className="terminalcontent">
                        <div className="terminal"
                            onClick={handleClickBus1}
                            style={busstyle}
                        >
                            <h1>T1 <span><p>(Terminal 1)</p></span></h1>
                        </div>
                        <div className="terminal"
                            onClick={handleClickBus2}
                            style={busstyle1}>
                            <h1>T2 <span><p>(Terminal 2)</p></span></h1>
                        </div>
                        <div className="terminal"
                            onClick={handleClickBus3}
                            style={busstyle2}>
                            <h1>T3 <span><p>(Terminal 3)</p></span></h1>
                        </div>
                    </div>
                    <hr></hr>
                    {(busterminal === 'terminal1' && (<BusTerminal1 />)) || (busterminal === 'terminal2' && (<BusTerminal2 />)) || (busterminal === 'terminal3' && (<BusTerminal3 />))
                    }
                </div>
            </div>
        </div>
    );
};

export default TokyoBus;

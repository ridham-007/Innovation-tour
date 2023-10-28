import React, { useState } from "react";
import monorail from "../img/monorail.jpg"
import keikyu from '../img/keikyu.png';
import TicketTerminal1 from "../TicketTerminal1";
import TicketTerminal2 from "../TicketTerminal2";
import TicketTerminal3 from "../TicketTerminal3";

const TokyoTrain = () => {

    const [terminal, setTerminal] = useState('terminal1');

    const style = terminal === 'terminal1' ? { borderBottom: '5px solid red', color: '#000' } : {};
    const style1 = terminal === 'terminal2' ? { borderBottom: '5px solid #0082f0', color: '#000' } : {}
    const style2 = terminal === 'terminal3' ? { borderBottom: '5px solid #00afbd', color: '#000' } : {}

    const handleClickTicket1 = () => {
        setTerminal('terminal1');
    }

    const handleClickTicket2 = () => {
        setTerminal('terminal2');
    }

    const handleClickTicket3 = () => {
        setTerminal('terminal3');
    }

    return (
        <div id="details">
            <div className="content">
                <div className="details" style={{ width: "90%", margin: "auto" }}>
                    <h3>Arrival Airport: Haneda</h3>
                    <div className="arrivalContainer" >
                        <h2 id="root-haneda-trains">Train & Monorail</h2>
                        <p>Haneda Airport is directly connected to the Keikyu Line and the Tokyo Monorail Line. Route maps and required times are outlined below. Please refer to each company's website for details on schedules and fares, etc.</p>
                        <img src={monorail} alt="monorail" width='85%'></img>
                    </div>
                    <div className="arrivalContainer">
                        <h2>Keikyu Line</h2>
                        <img src={keikyu} alt="keikyu" width='100%'></img>
                        <h3>Inquiries and Reception Hours</h3>
                        <div className="arrivalInfo">
                            <div className="arrivalInfoWrapper">
                                <p className="arrivalInfoTitle">Phone Number</p>
                                <p>Keikyu Information Center 03-5789-8686</p>
                            </div>
                            <div style={{ width: '10px' }}></div>
                            <div className="arrivalInfoWrapper">
                                <p className="arrivalInfoTitle">Fax Number</p>
                                <p>-</p>
                            </div>
                        </div>
                        <div className="arrivalInfo">
                            <div className="arrivalInfoWrapper">
                                <p className="arrivalInfoTitle">Reception Hours</p>
                                <p>Weekdays 9:00-19:00 / Weekends & Holidays 9:00-17:00</p>
                            </div>
                            <div style={{ width: '10px' }}></div>
                            <div className="arrivalInfoWrapper">
                                <p className="arrivalInfoTitle">Website</p>
                                <a href="https://www.keikyu.co.jp/" target="_blank">Keikyu Corporation Website</a>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="arrivalContainer" >
                        <h2>Tokyo Monorail</h2>
                        <img src={keikyu} alt="keikyu" width='100%'></img>
                        <h3>Inquiries and Reception Hours</h3>
                        <div className="arrivalInfo">
                            <div className="arrivalInfoWrapper">
                                <p className="arrivalInfoTitle">Phone Number</p>
                                <p>Tokyo Monorail Customer Center 050-2016-1640</p>
                            </div>
                            <div style={{ width: '10px' }}></div>
                            <div className="arrivalInfoWrapper">
                                <p className="arrivalInfoTitle">Fax Number</p>
                                <p>-</p>
                            </div>
                        </div>
                        <div className="arrivalInfo">
                            <div className="arrivalInfoWrapper">
                                <p className="arrivalInfoTitle">Reception Hours</p>
                                <p>Weekdays 9:00-20:00 / Weekends & Holidays (including from 12/29-1/3) 9:00-18:00</p>
                            </div>
                            <div style={{ width: '10px' }}></div>
                            <div className="arrivalInfoWrapper">
                                <p className="arrivalInfoTitle">Website</p>
                                <a href="http://www.tokyo-monorail.co.jp/" target="_blank">Tokyo Monorail Website</a>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', alignItems: 'center' }}>
                        <h2>Ticket Gate Information</h2>
                        <a href="https://www.ecomo-rakuraku.jp/ja" target="_blank">This information can also be found on RakuRaku Odekake-net.</a>
                    </div>
                    <div className="terminalcontent">
                        <div className="terminal"
                            onClick={handleClickTicket1}
                            style={style}>
                            <h1>T1 <span><p>(Terminal 1)</p></span></h1>
                        </div>
                        <div className="terminal"
                            onClick={handleClickTicket2}
                            style={style1}>
                            <h1>T2 <span><p>(Terminal 2)</p></span></h1>
                        </div>
                        <div className="terminal"
                            onClick={handleClickTicket3}
                            style={style2}>
                            <h1>T3 <span><p>(Terminal 3)</p></span></h1>
                        </div>
                    </div>
                    <hr></hr>
                    {(terminal === 'terminal1' && (<TicketTerminal1 />)) || (terminal === 'terminal2' && (<TicketTerminal2 />)) || (terminal === 'terminal3' && (<TicketTerminal3 />))
                    }
                </div>
            </div>
        </div>
    );
};

export default TokyoTrain;

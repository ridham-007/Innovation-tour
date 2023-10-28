import React, { useState } from "react";
import airport1 from "./img/airport1.png";
import airport2 from "./img/airport2.png";
// import train1 from "./img/train1.jpg";
// import trainmap1 from "./img/trainmap1.png";
// import train2 from "./img/train2.jpg";
// import trainmap2 from "./img/trainmap2.png";
// import bus from "./img/bus.jpg";
// import bus1 from "./img/bus1.jpg";
// import map from "./img/map.png";
// import monorail from "./img/monorail.jpg"
// import keikyu from './img/keikyu.png';
// import bustable from "./img/bustable.png";
// import TicketTerminal1 from "./TicketTerminal1";
// import TicketTerminal2 from "./TicketTerminal2";
// import TicketTerminal3 from "./TicketTerminal3";
// import BusTerminal1 from "./BusTerminal1";
// import BusTerminal2 from "./BusTerminal2";
// import BusTerminal3 from "./BusTerminal3";
import { useNavigate } from "react-router-dom";

const Airport = () => {

    const navigate = useNavigate();
    // const [terminal, setTerminal] = useState('terminal1');
    // const [busterminal, setBusTerminal] = useState('terminal1');

    // const style = terminal === 'terminal1' ? { borderBottom: '5px solid red', color: '#000' } : {};
    // const style1 = terminal === 'terminal2' ? { borderBottom: '5px solid #0082f0', color: '#000' } : {}
    // const style2 = terminal === 'terminal3' ? { borderBottom: '5px solid #00afbd', color: '#000' } : {}

    // const busstyle = busterminal === 'terminal1' ? { borderBottom: '5px solid red', color: '#000' } : {};
    // const busstyle1 = busterminal === 'terminal2' ? { borderBottom: '5px solid #0082f0', color: '#000' } : {}
    // const busstyle2 = busterminal === 'terminal3' ? { borderBottom: '5px solid #00afbd', color: '#000' } : {}

    // const handleClickTicket1 = () => {
    //     setTerminal('terminal1');
    // }

    // const handleClickTicket2 = () => {
    //     setTerminal('terminal2');
    // }

    // const handleClickTicket3 = () => {
    //     setTerminal('terminal3');
    // }

    // const handleClickBus1 = () => {
    //     setBusTerminal('terminal1');
    // }

    // const handleClickBus2 = () => {
    //     setBusTerminal('terminal2');
    // }

    // const handleClickBus3 = () => {
    //     setBusTerminal('terminal3');
    // }

    return (
        <div id="details">
            <div className="content">
                <div className="details" style={{ width: "90%", margin: "auto" }}>
                    <h3
                        style={{
                            lineHeight: "3rem",
                            marginLeft: "20p",
                            textAlign: "center"
                        }}
                    >
                        Travel Between Arrival Airport and Tokyo
                    </h3>
                    <div className="airportConent">
                        <div className="airportContentTitle">
                            <h3>Arrival Airport: Narita</h3>
                        </div>
                        <div className="airportConentImg">
                            <img src={airport1} alt="local" width="100%" height={200} />
                        </div>
                        <div className="airportConentAction">
                            <button className="airportConentActionButton" onClick={() => { navigate("/arrival-train-narita") }}>Train</button>
                            <button className="airportConentActionButton" onClick={() => { navigate("/arrival-bus-narita") }}>Bus</button>
                            <button className="airportConentActionButton">Taxi</button>
                        </div>
                    </div>
                    <div className="airportConent" style={{ marginTop: '50px' }}>
                        <div className="airportContentTitle">
                            <h3>Arrival Airport: Haneda</h3>
                        </div>
                        <div className="airportConentImg">
                            <img src={airport2} alt="local" width="100%" height={200} />
                        </div>
                        <div className="airportConentAction">
                            <button className="airportConentActionButton" onClick={() => { navigate("/arrival-train-haneda") }}>Train</button>
                            <button className="airportConentActionButton" onClick={() => { navigate("/arrival-bus-haneda") }}>Bus</button>
                            <button className="airportConentActionButton">Taxi</button>
                            <button className="airportConentActionButton" style={{ background: 'green' }}><a href="https://www.youtube.com/watch?v=ojNV4_KMsAE" target="_blank" style={{ color: "white" }}>Watch Video</a></button>
                        </div>
                    </div>
                    {/* <h3>Arrival Airport: Narita</h3>
                    <h3 id="root-narita-trains" style={{ textAlign: 'center' }}>Train</h3>
                    <div className="contentCommon">
                        <div className="trainInfo">
                            <h4>Keisei Skyliner Express</h4>
                            <p>Narita Airport Station/Airport Terminal 2 Station 〜 Nippori Stn./Ueno Stn.</p>
                            <p>All seats reserved. Minimum time to Nippori All seats reserved. Minimum time to Nippori <b>36</b>mins /Charges¥ <b>2,570*</b></p>
                            <p>All seats reserved. Minimum time to Nippori All seats reserved. Minimum time to Ueno <b>41</b>mins /Charges¥ <b>2,570*</b></p>
                            <p>*One-way fare + reserved seat charge.</p>
                            <p>¥2,557 if using IC card (IC fare 1,257 + reserved express ticket 1,300).</p>
                            <img src={train1} alt="train" width="100%" height={200}></img>
                        </div>
                        <div className="trainRoute">
                            <img src={trainmap1} alt="trainmap" width="100%" height={350}></img>
                        </div>

                    </div>
                    <h3 style={{ textAlign: 'center' }}>Train</h3>
                    <div className="contentCommon">
                        <div className="trainInfo">
                            <h4>Narita Express (NEX)</h4>
                            <p>Narita Airport Station/Airport  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 〜Main stations incl. Tokyo, Shinagawa, Shibuya,</p>
                            <p>Terminal 2 Station &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shinjuku, Yokohama</p>
                            <p>All seats reserved. Minimum time to Tokyo <b>50</b>mins /Charges¥ <b>3,070*</b></p>
                            <p>*One-way fare + reserved seat.</p>
                            <p>¥3,072 if using IC card (IC fare 1,342 + reserved express ticket 1,730).</p>
                            <p>Reserved seat limited express fares vary by season.</p>
                            <a href="https://www.jreast.co.jp/multi/en/nex/tickets/" target="blank">Tickets required for boarding the N'EX</a>
                            <img src={train2} alt="train" width="100%" height={200}></img>
                        </div>
                        <div className="trainRoute">
                            <img src={trainmap2} alt="trainmap" width="100%" height={350}></img>
                        </div>

                    </div>
                    <h3 id="root-narita-bus" style={{ textAlign: 'center' }}>Bus</h3>
                    <div className="contentCommon">
                        <div className="trainInfo">
                            <h4>Express Bus</h4>
                            <p>Narita   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shinjuku and other main stations and hotels, Tokyo Disney Resort and other</p>
                            <p> Airport 〜 &nbsp;&nbsp;&nbsp;&nbsp;sightseeing areas</p>
                            <p>Please contact the operating company for detailed information.(List of Contacts for Inquiries)</p>
                            <img src={bus} alt="=bus" width="100%" height={200}></img><br></br>
                            <img src={bus1} alt="=bus" width="100%" height={200}></img>
                        </div>
                        <div className="trainRoute">
                            <img src={map} alt="busmap" width="100%" height={350} style={{ paddingLeft: '25px' }}></img>
                        </div>
                    </div>
                    <div>
                        <img src={bustable} alt="bus" width='100%'></img>
                    </div>
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
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Airport;

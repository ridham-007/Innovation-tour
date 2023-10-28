import React, { useState } from "react";
import bus from "../img/bus.jpg";
import bus1 from "../img/bus1.jpg";
import map from "../img/map.png";
import bustable from "../img/bustable.png";

const ArrivalBus = () => {

    return (
        <div id="details">
            <div className="content">
                <div className="details" style={{ width: "90%", margin: "auto" }}>
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
                </div>
            </div>
        </div>
    );
};

export default ArrivalBus;

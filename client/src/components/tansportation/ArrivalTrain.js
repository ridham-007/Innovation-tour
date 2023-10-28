import React, { useState } from "react";
import train1 from "../img/train1.jpg";
import trainmap1 from "../img/trainmap1.png";
import train2 from "../img/train2.jpg";
import trainmap2 from "../img/trainmap2.png";

const ArrivalTrain = () => {

    return (
        <div id="details">
            <div className="content">
                <div className="details" style={{ width: "90%", margin: "auto" }}>
                    <h3>Arrival Airport: Narita</h3>
                    <h3 style={{ textAlign: 'center' }}>Train</h3>
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
                </div>
            </div>
        </div>
    );
};

export default ArrivalTrain;

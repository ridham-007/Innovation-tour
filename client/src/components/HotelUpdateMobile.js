import React, { useState } from "react";
import LogisticHotelTable from "./LogisticsHotelTable";
import single from "./img/single.png";
import family from "./img/family.png";


const HotelUpdateMobile = () => {

    const [active, setActive] = useState(false);

    const singletable = () => {
        setActive(!active);
        setTimeout(() => {
            if (document.getElementById('single-rooms')) {
                document.getElementById('single-rooms').scrollIntoView(
                    { behavior: 'smooth', block: 'center' }
                );
            }
        }, 10)
    };

    const doubletable = () => {
        setActive(!active);
        setTimeout(() => {
            if (document.getElementById('double-rooms')) {
                document.getElementById('double-rooms').scrollIntoView(
                    { behavior: 'smooth', block: 'center' }
                );
            }
        }, 10)
    };

    return (
        <div id="details">
            <div className="content">
                <div
                    style={{
                        display: 'block',
                        marginLeft: '25px'
                    }}
                    id="table-container"
                >
                    <div
                        className="single-hotel"
                        style={{
                            paddingBottom: '36px'
                        }}
                    ><img src={single} alt="wifi-zone" width="300px" />
                        <button className="btn-logistic" style={{ marginRight: "15px", backgroundColor: active ? "#b8c9d2" : "#0087cb" }} onClick={singletable}>Single Occupancy Rooms</button>
                    </div>
                    <div className="double-hotel">
                        <img src={family} alt="wifi-zone" width="300px" />
                        <button className="btn-logistic" style={{ backgroundColor: active ? "#0087cb" : "#b8c9d2" }} onClick={doubletable}>Double Occupancy Rooms</button>
                        (Recommended for Families)
                    </div>
                </div>
                <h4 style={{marginTop:'15px'}}>Hotel prices shown below are as reference and could vary during time of booking.</h4>
                <div>
                    <h3 id="single-rooms">Single Occupancy Rooms :</h3>
                    <LogisticHotelTable></LogisticHotelTable>
                </div>
                <div>
                    <h3 id="double-rooms" style={{ margin: '50px 0px 50px 0px' }}>Double Occupancy Rooms :</h3>
                    <LogisticHotelTable></LogisticHotelTable>
                </div>
            </div>
        </div>
    );
};

export default HotelUpdateMobile;

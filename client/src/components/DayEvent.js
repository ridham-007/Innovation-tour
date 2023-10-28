import React from "react";
import house from "./img/house.png";
import photo from "./img/camera.png";
import tree from "./img/tree.png";

export default function DayEvent() {
  return (
    <div id="details">
      <div className="content">
        <div
          className="details"
          style={{ width: "90%", margin: "auto", marginTop: "40px" }}
        >
          <h3 style={{ textAlign: "center" }}>
            <a
              style={{ textDecoration: "underline" }}
              href="https://www.playtours.app/scavenger-hunt"
              target="blank"
            >
              https://www.playtours.app/scavenger-hunt
            </a>
            <br />
            <br />
            <br />I have to set up the account and get exact link for you
          </h3>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                cursor: "pointer",
                width: "15%",
                alignItems: "center",
                textAlign: "center",
              }}
            // onClick={onFlightClick}
            >
              <img src={house} alt="flight" width="100%" />
              <h3 style={{ textAlign: "center" }}>
                Neighbourhood Scvenger Hunt
              </h3>
            </div>
            <div
              style={{
                cursor: "pointer",
                width: "15%",
                alignItems: "center",
                textAlign: "center",
              }}
            // onClick={onHotelClick}
            >
              <img src={photo} alt="hotel" width="100%" />
              <h3 style={{ textAlign: "center" }}>Photo Scavenger Hunt</h3>
            </div>
            <div
              style={{
                cursor: "pointer",
                width: "22%",
                alignItems: "center",
                textAlign: "center",
              }}
            // onClick={onLocalClick}
            >
              <img src={tree} alt="local" width="70%" />
              <h3 style={{ textAlign: "center" }}>
                Nature
                <br /> Scavenger Hunt
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

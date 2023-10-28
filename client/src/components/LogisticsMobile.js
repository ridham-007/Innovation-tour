import React, { useState } from "react";
import hotel from "./img/hotel.jpg";
import local from "./img/local.jpg";
import flight from "./img/flight.jpg";
import image from "./img/image.png";
import { useNavigate } from "react-router-dom";

const LogisticsMobile = () => {

  const navigate = useNavigate();

  const onFlightClick = () => { navigate("/guide_visa") };
  const onHotelClick = () => { navigate("/hotels") };
  const onLocalClick = () => { navigate("/airport-trasportation") };
  const onLinkClick = () => { };

  return (
    <div id="details">
      <div className="content">
        <div className="details" style={{ width: "90%", margin: "auto" }}>
          <h3
            style={{
              lineHeight: "3rem",
              marginLeft: "20px",
              marginBottom: "30px",
            }}
          >
            Welcome to LEAD Innovation Tour 2023 in Tokyo. Our team of LEADers have worked very hard to curate these resources to make your trip more comfortable, easy and fun.
          </h3>
          <div
            style={{
              cursor: "pointer",
              width: "80%",
              alignItems: "center",
              textAlign: "center",
              margin: "auto",
            }}
            onClick={onFlightClick}
          >
            <img src={flight} alt="flight" width="100%" />
            <h3 style={{ textAlign: "center" }}>Flights/Visa</h3>
          </div>
          <div
            style={{
              cursor: "pointer",
              width: "80%",
              alignItems: "center",
              textAlign: "center",
              margin: "auto",
            }}
            onClick={onHotelClick}
          >
            <img src={hotel} alt="hotel" width="100%" />
            <h3 style={{ textAlign: "center" }}>Hotel</h3>
          </div>
          <div
            style={{
              cursor: "pointer",
              width: "80%",
              alignItems: "center",
              textAlign: "center",
              margin: "auto",
            }}
            onClick={onLocalClick}
          >
            <img src={local} alt="local" width="100%" />
            <h3 style={{ textAlign: "center", alignItems: "bottom" }}>
              Local Transportation
            </h3>
          </div>

          <div
            style={{
              cursor: "pointer",
              alignItems: "center",
              marginTop: "50px",
              marginBottom: "100px",
            }}
          >
            <div
              style={{
                width: "100%",
                margin: "auto",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              onClick={onLinkClick}
            >
              <img src={image} alt="wifi-zone" width="100%" />
            </div>
            <h3>
              If you have any questions in regards to the tour, please drop us a
              note:{" "}
              <a style={{ textDecoration: "underline" }} href="#">
                lead.innovation.tour.org@gmail.com
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsMobile;

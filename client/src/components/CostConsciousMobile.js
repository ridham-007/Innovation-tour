import React from "react";
import step1 from "./img/step1.png";
import step2 from "./img/step2.png";
import photo1 from "./img/photo1.png";

export default function ContConsciousMobile() {
  return (
    <div id="details">
      <div className="content">
        <h3 style={{ display: "inline" }}>
          Welcome Cost Conscious LEAD Alumni
        </h3>
        <div
          id="details"
          className="details"
          style={{
            marginTop: "30px",
          }}
        >
          <div>
            <p>
              As with everything in life, to save few cents, we have to put in
              this effort. We have partnered With Wise to get you best rates to
              transfer Japanese Yen, Whether you are in Asia, Europe or In
              Americas. Please follow the steps to register on Wise and transfer
              the Money to Sachio Nishioka, Your local Stanford LEADer.
            </p>
            <p>
              I am sure you want to know the person before transferring the
              money for the Innovation tour, so here are Some of the details
              about Sachio
            </p>
            <ul className="title">
              <li>
                He is very active member of the Stanford LEAD program and you
                probably had a change to interact with him
              </li>
              <li>
                Recipient of the John Hanay Memorial Award, Graduate of Stanford
                Engineering and LEAD program.
              </li>
              <li>
                He is an awesome people person, greeting every one with Smile on
                his face.
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                width: "70%",
                marginBottom: "80px",
              }}
            >
              <img src={step1} alt="step1" width="70%" height={190} />
              <img src={step2} alt="step2" width="70%" height={190} />
            </div>
          </div>
          <div>
            <img src={photo1} alt="step1" width={200} height={200} />
            <div style={{ marginTop: "30px", marginBottom: "80px" }}>
              <button
                className="btn"
                style={{
                  width: "230px",
                  height: "50px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  fontWeight: "700",
                  fontSize: "2rem",
                  border: "3px solid  grey",
                }}
              >
                <a
                  href="https://wise.com/gb/send-money/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Connect me to Wise
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

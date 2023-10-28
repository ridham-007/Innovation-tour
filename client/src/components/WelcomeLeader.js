import React from "react";
import image from "./img/image2.png";

const WelcomeLeader = () => {
    return (
        <div id="details">
            <div className="leadercontent">
                <div
                    style={{
                        cursor: "pointer",
                        display: "flex",
                    }}>
                    <div style={{ width: "25%" }}>
                        <img src={image} alt="wifi-zone" width="70%" />
                    </div>
                
                    <div style={{ width: "60%" }}>
                        <p style={{ textAlign: "justify",fontWeight: "bold" }}>
                            Dear LEADers,
                        </p><br></br><br></br><br></br>
                            <p>
                            On behalf of the organizing team, we would like to extend a warm welcome to the 2nd LEAD Innovation Tour in
                            Japan from September 28 -30th, 2023. We are thrilled to have you join us for this exciting opportunity to explore
                            innovation and leadership in the heart of Japan.
                        </p>
                        <br></br><br></br><br></br>
                        <p style={{ textAlign: "justify" }}>
                            To confirm your attendance, we kindly request that you transfer the registration fee at your earliest convenience.
                            This fee is necessary to secure your spot and ensure that we can provide the best possible experience for all
                            participants
                        </p>
                        <br></br><br></br><br></br>
                        <p style={{ textAlign: "justify" }}>
                            We look forward to having you as part of our community and sharing an unforgettable experience together. If you
                            have any questions or concerns, please do not hesitate to contact us at lead.innovation.tour.org@gmail.com
                        </p>
                        <br></br><br></br><br></br>
                        <p>Best regards,<br></br><br></br></p>
                         <p style={{fontWeight:"bold"}}>[LEAD Innovation Tour 2023 Committee]</p>
                    </div>
             </div>
            </div>
        </div>
    );
};

export default WelcomeLeader;

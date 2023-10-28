import React from "react";
import tea1 from "./img/tea1.png";
import tea2 from "./img/tea2.png";
import tea3 from "./img/tea3.png";

const TeaCeremony = () => {

    return (
        <div id="details">
            <div className="teaWrapper">
                <div className="leadercontent">
                    <div className="leadercontent-header">
                        <div className="leadercontent-text" >
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>
                                Tea Ceremony experience
                            </p><br></br><br></br>
                            <p style={{ fontSize: '16px' }}>
                                Immerse yourself into Japanese Culture
                                through traditional Tea ceremony, which is
                                called as the composite art form or moving
                                meditation.
                            </p>
                            <br></br><br></br>
                            <p style={{ fontSize: '16px' }}>
                                At the tea ceremony, you can experience
                                Japanese culture through your five senses.
                                The spirit of Sado is utilized in business or
                                education, and also the tradition inspired
                                innovation.
                            </p>
                        </div>
                        <div className="leadercontent-img">
                            <img src={tea1} alt="wifi-zone" width="100%" />
                        </div>

                    </div>
                </div>
                <div className="leadercontent">
                    <div className="leadercontent-header">
                        <div className="leadercontent-img">
                            <img src={tea2} alt="wifi-zone" width="100%" />
                        </div>
                        <div className="leadercontent-text">
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>
                                Max. 65 participants
                            </p>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>
                                Sept.28 (Thu 11:00-12:00
                            </p>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>
                                ・Meeting room at Office we visit
                            </p>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>
                                ・Table style (not tatami mat)
                            </p><br></br>
                            <p style={{ fontSize: '16px' }}>
                                Schedule(idea)
                            </p>
                            <p style={{ fontSize: '16px' }}>
                                11:00-11:15 Explanation on the Way of Tea, Japanese Culture
                            </p>
                            <p style={{ fontSize: '16px' }}>
                                11:15-11:30 Demonstration of making Tea
                            </p>
                            <p style={{ fontSize: '16px' }}>
                                11:30-12:00 Learn & Enjoy Matcha green  tea with Sweets
                            </p>
                        </div>
                    </div>
                </div>
                <div className="leadercontent">
                    <div className="leadercontent-header">
                        <div className="leadercontent-text">
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>
                                Professor Sanae Otsuka Profile
                            </p><br></br><br></br>
                            <p style={{ fontSize: '16px' }}>
                                CEO of Japan Culture Salon BIMON
                            </p>
                            <p style={{ fontSize: '16px' }}>
                                Professor of Omotesenke Sado(the way of tea) school
                            </p><br></br><br></br>
                            <p style={{ textAlign: "justify", fontSize: '16px' }}>
                                Omotesenke is one of the schools in Japan.
                                Omotesenke is the main school which inherit Sen family
                                estate and Professor Besides starting to learn the
                                Omotesenke Way of Tea since 4-years-old, Mrs. Otsuka also
                                learnt other Japanese traditional arts such as Japanese
                                dance, floral art and kimono dressing She opened schools
                                also in Shanghai and Singapore, performed at many events
                                hosted by international companies, or diplomatic
                                organizations and attracts attention of local medias in those
                                countries. Now based in Tokyo, she entertains VIP guests
                                from overseas on top of teaching at schools.
                            </p>
                        </div>
                        <div className="leadercontent-img">
                            <img src={tea3} alt="wifi-zone" height="450px" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeaCeremony;

import React, { Component } from "react";
import logo from './img/community.png';
import { community } from "../data.js";

class Community extends Component {
    render() {
        return (
            <div id="details">
                <div className="content" style={{ padding: '15px' }}>
                    <div className="community">
                        <div id="details" className="details">
                            <h1 style={{
                                textAlign: 'center',
                                marginBottom: '10px',
                                fontSize: '4rem'
                            }}>Innovation Tour Community Page</h1>
                            <h3 style={{
                                textAlign: 'center',
                                marginTop: 0,
                                marginBottom: '60px',
                                fontSize: '3rem'
                            }}>(For the LEADers and By the LEADers)</h3>
                        </div>
                    </div>
                    <div style={{
                        marginTop: 40,
                        marginBottom: 60
                    }} className="community">
                        <div className="community-left">
                            <div
                                style={{
                                    margin: 'auto',
                                    justifyContent: 'center',
                                    display: 'flex',
                                }}
                            >
                                <img src={logo} alt="community" height="400px"></img>
                            </div>

                            <div className="community-right">
                                <h3 style={{
                                    fontSize: '3rem',
                                    fontWeight: 'normal',
                                    marginRight: 'auto',
                                }}> We yearn for the beautiful, the unknown, and the mysterious.</h3><br />
                                <p style={{
                                    fontWeight: 'bold',
                                    fontSize: '2rem',
                                    color: 'blue',
                                    marginRight: 'auto'
                                }}>Issey Miyake</p><br />

                            </div>
                        </div>
                    </div>
                    <div className="community">
                        <div id="details" className="details">
                            <p style={{
                                fontWeight: 'bold',
                                fontSize: '2rem'
                            }}>Please reach out to LEADer below for any questions about the schedule or if you would like to be part of it. Please note
                                that core team members will not be able to answer these questions.  This is community page, planned and organized activities
                                by your fellow LEADer, who is part of Innovation tour. Please Click on images above for further details.</p>
                        </div>
                    </div>
                    <div className="community" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        rowGap: '40px',
                    }}>
                        {
                            community.map((commm, index) => {
                                return (

                                    <div className="community-left" key={index}>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        }}>
                                            <div
                                                style={{
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    margin: 'auto',
                                                }}
                                            >
                                                <a href="https://docs.google.com/spreadsheets/d/1gLIWwmcjaZc-oNoV0KpbRPjLH3u4Z_ej6CZE7uXny_U/edit#gid=1903932532" target="_blank" rel="noreferrer"><img src={commm.img} alt="visa" height="200px"></img></a>
                                            </div>

                                            <div style={{
                                                width: '100%'
                                            }} className="community-right">
                                                <p style={{
                                                    fontWeight: 'bold',
                                                    marginBottom: '10px',
                                                    marginTop: '10px',
                                                    fontSize: '2rem'
                                                }}>{commm.city}</p>
                                                <p style={{
                                                    fontWeight: 'normal',
                                                }}><span style={{
                                                    fontWeight: 'normal'
                                                }}>Travel Dates: </span>{commm.date}</p>
                                                <p><span style={{
                                                    fontWeight: 'normal'
                                                }}>Organizer Contact: </span>{commm.organizer} <span style={{
                                                    fontWeight: 'normal',
                                                    color: 'blue'
                                                }}>{commm.email}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Community;
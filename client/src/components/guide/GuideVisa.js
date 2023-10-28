import React, { Component } from "react";
import header from "../img/header.png";
import visa from "../img/visacovid.png";
import visitjapan from "../img/visitjapan.png";

class GuideVisa extends Component {
  render() {
    return (
<div id="details">
  <div className="content">
          <div className="content-visa">
    <div id="details" className="details">
      <h1>Visa Information</h1>
      <h2>Guide to Entering, Leaving & Staying in Japan</h2>
      <p>The entry requirements for Japan dictate that all foreign visitors must possess a valid passport throughout their stay, and adhere to their visa conditions.</p>
    </div>
    <div className="header-right" style={{
      display: "flex",
      flexDirection: "column"
    }} >
              <img src={header} alt="header" width="250px"></img>
              <a 
                style={{
                  marginTop: "10px",
                  color: '#8c1515'
                }}
              href="https://www.evisa.mofa.go.jp/index" target="_blank" rel="noreferrer">Click for more details</a>
    </div>
          </div>
          <div className="content-visa">
            <div className="header-right">
              <div className="header-content">
              <h2>COVID-19: Current Japanese Border Measures</h2>
              <br />
              <p
                style={{
                  color: '#2e3136',
                  fontSize: '18px'
                }}
              >※ If you are boarding an aircraft arriving in Japan after midnight Japan time on April 29 ,valid vaccination certificate or pre-departure test is not required.</p>
              <br/>
              <br />
              <p>※ Those entering Japan with symptoms of suspected COVID-19 infection will be tested upon arrival. Furthermore, those who test positive will be required to quarantine at a designated facility.</p>
             <br/>
              </div>
              <div
                style={{
                  margin: 'auto'
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                <img src={visitjapan} alt="visa" height="100px"></img>
              <a 
              
              style={{
                marginTop: "10px",
                color: '#8c1515',
                fontSize: '18px',
              }}
              href="https://www.mhlw.go.jp/stf/covid-19/bordercontrol.html" target="_blank" rel="noreferrer">
                  Click for more details
              </a>
                </div>
              </div>
            </div>
          </div>
          <div className="content-visa">
            <div id="details" className="header-right">
              <div className="header-content">
              <h1>Visa</h1>
              <h2>Guide to Entering, Leaving & Staying in Japan</h2>
              <p>With regards to visa inquiries, you can contact
                “Foreign Residents Support Center (FRESC) MOFA
                Visa Information” or “the Japan Visa Information
                Hotline” listed on the website of <a style={{
                  textDecoration: 'underline',

                }}href="https://www.mofa.go.jp/j_info/visit/visa/index.html" target="_blank" rel="noreferrer">the Embassy or
                  Consulate General of Japan.</a> Due to the complex
                nature of visa requirements, we are UNABLE to
                respond to visa-related inquiries made through this
                website at the moment.</p>
                </div>
                <div
                  style={{
                    margin: 'auto',
                    display: "flex",
                    flexDirection: 'column'
                  }}
                >
                <a style={{
                  padding: '25px 40px',
                  border: '1px solid #8c1515',
                  color: '#8c1515',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  textAlign: "center",

                }} href="https://www.mofa.go.jp/j_info/visit/visa/index.html" target="_blank" rel="noreferrer">
                  Japan Visa
                </a>
                <a style={{
                  margin: '10px',
                  color: '#8c1515',
                  fontSize: '18px',
                }} href="https://www.mofa.go.jp/j_info/visit/visa/index.html" target="_blank" rel="noreferrer">
                  Click for more details
                </a>
                </div>
            </div>
          </div>
  </div>
</div>
    );
  }
}
 
export default GuideVisa;
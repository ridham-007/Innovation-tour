import React, { Component } from "react";

class GuideCredit extends Component {
  render() {
    return (
<div id="details">
  <div className="content">
  <div id="details" className="details">
      <h1>Currency</h1>
      <h2>Currency & Currency Exchange in Japan</h2>
      <p>
      Japan is predominantly a cash-based society, and while credit cards are widely accepted, it is recommended to carry cash throughout your stay. ATMs may charge for withdrawals and not all are 24/7, and may run out of cash in central areas. The yen comes in bills of 1,000, 2,000, 5,000, and 10,000, and coins of 1, 5, 10, 50, and 500 yen. When carrying over one million yen when entering or leaving Japan, a customs declaration is required. Japan Post Bank ATMs, located in post offices, train stations, and supermarkets, allow for cash withdrawals and have English language support.
      </p>
      <div class="resources-btn">
        <ul class="btn-currency">
          <li><a class="btn-wifi-li" href="https://location.sevenbank.co.jp/sevenbank/?lang=en" target="_blank" rel="noreferrer">7-ELEVEN ATM Locator</a></li>
          <li><a class="btn-wifi-li" href="https://www.jp-bank.japanpost.jp/en/ias/en_ias_index.html" target="_blank" rel="noreferrer">Japan Post Office ATM Locator</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    );
  }
}
 
export default GuideCredit;
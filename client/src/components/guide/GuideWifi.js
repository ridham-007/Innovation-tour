import React, { Component } from "react";

class GuideWifi extends Component {
  render() {
    return (
<div id="details">
  <div className="content">
    <div id="details" className="details">
      <h2>WI-FI & CONNECTIVITY</h2>
      <h3>Getting Online is Easy in Japan</h3>
      <ul>
        <li>Japan has many Wi-Fi hotspots, but it's best to rent a pocket Wi-Fi device for guaranteed access.</li>
        <li>Major airports and hotels provide free Wi-Fi, but traditional ryokan hotels may not.</li>
        <li>Some businesses offer free Wi-Fi, another way to stay connected is to rent or buy a sim card.</li>
      </ul>
      <h3>Additional Sources for internet services in Tokyo during your stay</h3>
      <ul>
         <li><a href="https://www.japan-guide.com/e/e2279.html" target="_blank" rel="noreferrer">Internet Access Guide</a></li>
          <li><a href="https://www.softbank.jp/en/mobile/special/freewifi/en/" target="_blank" rel="noreferrer">Softbank - FREE Wi-Fi PASSPORT</a></li>
          <li><a href="https://www.mobal.com/japan-sim-card/" target="_blank" rel="noreferrer">mobal - Japanese SIM Card</a></li>
          <li><a href="https://www.japan-wireless.com/" target="_blank" rel="noreferrer">JAPAN WIRELESS</a></li>
          <li><a href="https://ninjawifi.com/en/plan/" target="_blank" rel="noreferrer">NINJA Wifi</a></li>
      </ul>
      <ul class="btn-wifi">
        <li><a class="btn-wifi-li" href="https://www.softbank.jp/en/mobile/special/freewifi/en/setting/android/" target="_blank" rel="noreferrer">SoftBank Wifi for Android</a></li>
        <li><a class="btn-wifi-li" href="https://www.softbank.jp/en/mobile/special/freewifi/en/setting/iphone/" target="_blank" rel="noreferrer">SoftBank Wifi for iPhone</a></li>
        <li><a class="btn-wifi-li" href="https://www.softbank.jp/en/mobile/special/freewifi/en/search/" target="_blank" rel="noreferrer">SoftBank Wifi hotspots</a></li>
      </ul>
      <h2>PLUGS & ELECTRICITY</h2>
      <h3>Japan’s different plugs, voltage, and frequencies</h3>
      <p>
      The voltage in Japan is uniformly 100 volts, A.C. and there are two types of frequencies - 50 Hertz in the eastern part of Japan and 60 Hertz in the western part. Some appliances may require a step-down transformer. Conversion plugs and transformers can be found in electronics quarters and major home appliance retailers. New shinkansen models and certain restaurants have outlets available for charging appliances on the go.
      </p>
    </div>
  </div>
</div>
    );
  }
}
 
export default GuideWifi;
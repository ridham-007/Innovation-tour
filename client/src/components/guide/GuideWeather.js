import React, { Component } from "react";

class GuideWeather extends Component {
  render() {
    return (
<div id="details">
  <div className="content">
    <div id="details" className="details">
      <h1>Weather</h1>
      <h2>Weather Forecast & Seasonal Information</h2>
      <p>Japan has four distinct seasons, with regional differences in weather patterns and temperatures.<br></br>
      The best time to visit a particular region in Japan depends on the desired activities and weather preferences.</p>
      <div class="row">
        <div class="col-sm-3">
          <div>
            <h4>Spring</h4>
            <h5>March - May</h5>
            <p>Popular time to visit for cherry blossoms and mild weather.</p>
         </div>
        </div>
        <div class="col-sm-3">
          <div>
            <h4>Summer</h4>
            <h5>June - August</h5>
            <p>Hot and humid, but it is a good time for outdoor activities.</p>
          </div>
        </div>
        <div class="col-sm-3">
          <div>
            <h4>Autumn</h4>
            <h5>September - November</h5>
            <p>Known for its colourful foliage, mild temperatures, and fewer crowds.</p>
          </div>
        </div>
        <div class="col-sm-3">
          <div>
            <h4>Winter</h4>
            <h5>December - February</h5>
            <p>Cold with snow, but it is a good time for winter sports and hot springs.</p>
        </div>
        </div>
     </div>
    </div>
  </div>
</div>
    );
  }
}
 
export default GuideWeather;
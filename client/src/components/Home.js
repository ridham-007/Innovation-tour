import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import fromt_small from "./img/front_small.png";
import Slider1 from "./img/slider1.jpg";
import Slider2 from "./img/slider2.jpg";
import { notification } from "antd";
import Slider from "./Slider";

const Home = (props) => {
  const sliders = [fromt_small, Slider2, Slider1];

  useEffect(() => {
    if (props.emailVerified) {
      notification.open({
        message: "Success",
        description: "Email is just verified. You can log in now!",
      });
    }
  }, []);

  return (
    <div id="home">
      <MediaQuery query="(min-width: 767px)">
        <div className="content">
          <div id="top" className="top">
            <Slider sliders={sliders} />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 766px)">
        <div className="content">
          <div id="top" className="top">
            <Slider sliders={sliders} />
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Home;

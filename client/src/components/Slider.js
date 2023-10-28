import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = ({ sliders }) => {
  return (
    <>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <div className="swiper">
          {sliders.map((slide, index) => {
            return (
              <div className="slider-image" key={index}>
                <SwiperSlide>
                  <img
                    src={slide}
                    alt="Slider Image"
                    className="slider"
                    style={{
                      width: `${index > 0 && '100%'}`,
                      height: 'auto'
                    }}
                  />
                </SwiperSlide>
              </div>
            );
          })}
        </div>
      </Swiper>
    </>
  );
};

export default Slider;

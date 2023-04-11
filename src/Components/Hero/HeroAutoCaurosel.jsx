import React, { useState } from "react";
import { arrow } from "../../assets";
import "./Hero.css";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroAutoCaurosel = (props) => {
  const handleMouseEnter = () => setimgScale("scale-[1.05]  ");
  const handleMouseLeave = () => setimgScale("scale-[1] ");
  const [imgScale, setimgScale] = useState("scale-[1]");
  return (
    <div
      className={` h-[550px] overflow-hidden w-[610px] relative row-start-1 row-end-3 flex items-center justify-between outline-none cursor-pointer ease-in-out duration-500 transition-all rounded-[4px]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        className="mySwiper"
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            className={` w-full h-full ease-in-out  duration-300 ${imgScale}`}
            src={props.img_1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={` w-full h-full ease-in-out  duration-300 ${imgScale}`}
            src={props.img_2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={` w-full h-full ease-in-out  duration-300 ${imgScale}`}
            src={props.img_3}
          />
        </SwiperSlide>
      </Swiper>
      <div
        className={`z-10 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 px-3  `}
      >
        <div
          className={`flex flex-col items-center justify-center bg-white rounded-[4px] ${props.bannerCss}]`}
        >
          <span className="text-grey-600 tracking-wide">{props.title}</span>
          <p className="text-base font-semibold">
            {props.info}
            <span className="text-red">{props.style}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAutoCaurosel;

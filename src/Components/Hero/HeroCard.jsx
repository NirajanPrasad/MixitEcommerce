import React, { useState } from "react";
import { arrow } from "../../assets";

const HeroCard = (props) => {
  const handleMouseEnter = () => setimgScale("scale-[1.05]  ");
  const handleMouseLeave = () => setimgScale("scale-[1] ");
  const [imgScale, setimgScale] = useState("scale-[1]");
  return (
    <div
      className={`h-[${props.height}] overflow-hidden w-[${
        props.width ? props.width : "full"
      }] relative ${
        props.gridPosition
      } flex items-center justify-between outline-none cursor-pointer ease-in-out duration-500 transition-all rounded-[4px]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={`${props.imgCss} w-full h-full ease-in-out  duration-300 ${imgScale}`}
        src={props.img}
      />
      <div
        className={` absolute w-full top-1/2 -translate-y-1/2 px-3 flex items-center ${
          props.activeArrow ? "justify-between " : " justify-center "
        }`}
      >
        <div
          className={`w-9 h-9 grid place-items-center bg-white rounded-full hover:cursor-pointer ${
            props.activeArrow ? "block" : "hidden"
          } `}
        >
          <img src={arrow} />
        </div>
        <div
          className={`flex flex-col items-center justify-center bg-white rounded-[4px] ${props.bannerCss}]`}
        >
          <span className="text-grey-600 tracking-wide">{props.title}</span>
          <p className="text-base font-semibold">
            {props.info}
            <span className="text-red">{props.style}</span>
          </p>
        </div>

        <div
          className={`rotate-180 w-9 h-9 grid place-items-center bg-white rounded-full hover:cursor-pointer ${
            props.activeArrow ? "block" : "hidden"
          }`}
        >
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

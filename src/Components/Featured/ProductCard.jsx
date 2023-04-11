import React, { useState } from "react";
import { cartWhite, heart, view } from "../../assets/index";

const ProductCard = (props) => {
  const handleMouseEnter = () => {
    setimgScale("scale-[1.025]");
    setproductView("flex opacity-100");
  };
  const handleMouseLeave = () => {
    setimgScale("scale-[1]");
    setproductView("hidden opacity-0");
  };
  const [imgScale, setimgScale] = useState("scale-[1]");
  const [productView, setproductView] = useState("hidden");

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`min-w-[260px] w-[410px]   bg-black relative`}
    >
      <div className="overflow-hidden">
        <img
          className={`${imgScale} ease-in-out duration-300`}
          src={props.img}
        />
      </div>
      <div className="absolute top-5 flex gap-3 flex-col">
        <p
          className={`
          ${
            !props.salePercentage ? "hidden" : ""
          } w-16 h-10 bg-white flex items-center justify-center font-semibold text-red  shadow-[#c0c7cb24] shadow-lg pointer-events-none`}
        >
          {props.salePercentage}
        </p>
        <p
          className={`${
            !props.arrival ? "hidden" : ""
          } w-16 h-10 bg-white flex items-center font-semibold justify-center shadow-[#c0c7cb24] shadow-lg pointer-events-none`}
        >
          NEW
        </p>
        <p
          className={`${
            !props.salePercentage ? "hidden" : ""
          } w-16 h-10 bg-white flex items-center justify-center text-red font-semibold shadow-[#c0c7cb24] shadow-lg pointer-events-none`}
        >
          SALE
        </p>
      </div>

      <div
        className={`absolute w-[40px] top-8 right-4 rounded-full bg-white text-center h-[40px]  hover:bg-[#DA1411]  transition-all duration-300 ease-in-out hover:cursor-pointer flex justify-center items-center hover:text-white`}
      >
        <span className="text-xl">
          <i className="fa-regular fa-heart"></i>
        </span>
      </div>

      <div
        className={`${productView} absolute bottom-0 gap-1 justify-between w-full `}
      >
        <div className="h-[60px] flex items-center justify-center gap-3 bg-black w-full text-white hover:bg-grey-800 cursor-pointer">
          <img className=" w-[20px]" src={view} />
          {/* <span className="flex">
            <i class="fa-regular fa-eye "></i>
          </span> */}
          <p className=" text-sm">VIEW PRODUCT</p>
        </div>

        <div className="w-full h-[60px] bg-black flex items-center justify-center gap-3 hover:bg-grey-800 cursor-pointer">
          <img className="text-white w-[20px] stroke-white " src={cartWhite} />
          <p className="text-white text-sm">ADD TO CART</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

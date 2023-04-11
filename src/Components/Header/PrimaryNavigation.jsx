import React from "react";
import { logo } from "../../assets/index";

const PrimaryNavigation = () => {
  return (
    <div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
      <div>
        <img src={logo} alt="mixit logo" />
      </div>

      <div className="border border-solid border-dimGrey py-1 px-4 rounded-full w-2/3 flex h-10">
        <input
          className="outline-none w-full"
          type="text"
          name=""
          id=""
          placeholder="Search Here . . ."
        />
        <button className="">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="flex place-items-center gap-3 cursor-pointer">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default PrimaryNavigation;

import React from "react";

const SecondaryNavigation = () => {
  return (
    <div className="bg-black text-white w-full ">
      <div className="max-w-7xl mx-auto py-2 flex justify-between">
        <ul className="flex gap-4 place-items-center">
          <li className="flex place-items-center gap-3">
            <i className="fa-solid fa-location-dot "></i>
            <span>Patna, Bihar</span>
          </li>

          <li className="w-[1px] bg-dimGrey h-4"></li>

          <li className="flex place-items-center gap-3">
            <i className="fa-solid fa-phone"></i>
            <span>+91 12345678909</span>
          </li>
        </ul>

        <div>
          <ul className="flex gap-4 place-items-center">
            <li className="flex place-items-center gap-3 cursor-pointer">
              <i className="fa-solid fa-circle-question"></i>
              <span>Support</span>
            </li>
            <li className="w-[1px] bg-dimGrey h-4"></li>
            <li className="cursor-pointer">Register</li>
            <li className="w-[1px] bg-dimGrey h-4"></li>
            <li className="cursor-pointer">Log In</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavigation;

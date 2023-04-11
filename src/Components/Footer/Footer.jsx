import React from "react";
import { footerLinks } from "../../Constants";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <footer className="mt-24 max-w-7xl mx-auto">
      <div className="flex justify-center items-center w-full">
        <div className="flex-[1] flex flex-col justify-start">
          <img
            src={logo}
            alt="mixit"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p
            className={`text-[18px] leading-[30.8px] mt-4 max-w-[312px] text-grey-600`}
          >
            Discover the latest fashion trends with us. Shop now!
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between ">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col  my-4 min-w-[150px]"
            >
              <h4 className=" font-medium text-[18px] leading-[27px] text-black">
                {footerLink.title}
              </h4>

              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={` font-normal leading-[24px] text-grey-600 hover:text-grey-800 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-slate-100 mb-4"></div>

      <div className="w-full flex justify-between items-center mb-4">
        <p className=" text-center text-[#aaa] text-sm leading-[27px] ">
          Copyright &copy; 2023 MiXiT. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

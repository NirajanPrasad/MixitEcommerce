import React from "react";
import { Servicesdata } from "../../Constants";

const Services = () => {
  return (
    <section className="bg-[#F2F2F2] w-full">
      <div className="max-w-7xl mx-auto">
        <div className="my-24 h-80 flex justify-between">
          {Servicesdata.map((data, index) => (
            <div
              className="flex flex-col items-center justify-center"
              key={data.id}
            >
              <div className="h-16 aspect-square flex items-center justify-center rounded-full border-[2px] border-dimGrey">
                <i className={`${data.logo} fa-2xl`}></i>
              </div>
              <h6 className="text-2xl font-medium my-2">{data.title}</h6>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

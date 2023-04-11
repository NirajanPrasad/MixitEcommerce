import React from "react";
import HeroCard from "./HeroCard";
import {
  banner_3,
  men,
  women,
  accessories,
  banner_1,
  banner_2,
} from "../../assets";
import HeroAutoCaurosel from "./HeroAutoCaurosel";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
      <div className="w-full grid grid-cols-[610px_1fr_1fr] gap-5">
        <HeroAutoCaurosel
          img_1={banner_1}
          img_2={banner_2}
          img_3={banner_3}
          title="GET"
          info="PREPARE YOURSELF"
          bannerCss="w-[267px] h-[73px] "
          activeArrow={true}
          gridPosition="row-start-1 row-end-3"
        />

        <HeroCard
          height="235px"
          width="235px"
          img={men}
          title=""
          info="MEN"
          bannerCss="w-[120px] h-[48px] "
          imgCss="scale-[1.2]"
        />

        <HeroCard
          height="235px"
          width="235px"
          img={women}
          title=""
          info="WOMEN"
          bannerCss="w-[120px] h-[48px] "
        />

        <HeroCard
          height="235px"
          width="490px"
          img={accessories}
          title=""
          info="BAGS & ACCESSORIES"
          bannerCss="w-[267px] h-[62px] "
          gridPosition="col-start-2 col-span-2"
        />
      </div>
    </div>
  );
};

export default Hero;

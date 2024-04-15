import React from "react";

const ExploreCard = () => {
  return (
    <>
      <div className="border-[1px] p-[10px] md:p-5 w-full rounded-t-[40px] ">
        <div className="w-full p-[5px] md:py-[19px] md:pl-[22px] md:pr-[19px] bg-light_primary_shades_4p rounded-t-[40px] ">
          <img className="w-full" src="/images/bluetShirt.png" alt="shirts" />
        </div>
        <div className=" pt-[10px] md:pt-[16px] text-center ">
          <h2 className="text_24_16 text-blue_gray_700  pb-[2px] md:pb-[4px]">
            T-Shirts
          </h2>
          <h3 className="text_16_1_12 text-light_primary ">Get Upto 40% Off</h3>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;

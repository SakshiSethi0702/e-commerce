import React from "react";

const WearfashionCard = () => {
  return (
    <>
      <div className="my-[60px]">
        <div
          style={{ backgroundImage: `url('/images/menimagewearfashion.png')` }}
          className="bg-cover bg-no-repeat bg-center py-[9%] xl:py-[128px] w-full  flex justify-end rounded-md "
        >
          <div className="max-w-[186px] md:max-w-[300px] md:mr-[70px]  lg:max-w-[400] xl:max-w-[496px] xl:mr-[149px]">
            <h3 className="text_24_12 text-light_primary">Grab Upto 50% Off</h3>
            <h2 className="text_48_18 text-blue_gray_800 pt-[10px] md:pt-5 ">
              {" "}
              Bigest Sale On Men's Wear Fashion
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default WearfashionCard;

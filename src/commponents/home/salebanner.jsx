import React from "react";
import Solidbutton from "../common/solidbutton";
import { Link } from "react-router-dom";
const Salebanner = () => {
  return (
    <>
      <section className="container py-10 md:py-[40px] xl:py-[80px]">
        <img src="" alt="" />
        <div className='bg-[url("images/salebg.png")] bg-center bg-cover bg-text_custom rounded-lg flex flex-col items-center py-[33px] md:pt-[55px] lg:pt-[74px] md:pb-[50px] xl:pb-[61px] xl:h-[420px]'>
          <div className="relative pt-[">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="240"
              height="40"
              viewBox="0 0 240 40"
              fill="none"
            >
              <path
                d="M0 0H240L231.045 20L240 40H0L8.95522 20L0 0Z"
                fill="white"
              />
            </svg>
            {/* <h3 className='absolute top-0 left-0 right-0 ' ></h3> */}
            <h3 className="absolute top-0  text-light_primary py-[8px] px-[65px] text-center  ">
              20th - 24th Sep
            </h3>
          </div>
          <div className="text-center my-5">
            <h2 className="text-white text_48_20">
              Hurry Up ! The Sale is Live Now
            </h2>
            <h6 className="text_20_12 text-white mt-[6px]">
              Grab Upto 40% Off on Fashion
            </h6>
          </div>
          <div className="">
            <button className="text-white bg-light_primary py-[10px] px-4 rounded-md md:py-[14px] md:px-5 lg:px-6 flex items-center gap-x-2">
              <Link to="/exploreByCategories"> Shop Now</Link>
             {" "}
              <img className="max-w-6" src="/svg/whiteleftarrow.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Salebanner;

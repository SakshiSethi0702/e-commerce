import React, { useContext } from "react";
import Share from "/svg/shared.svg";
import User from "/svg/User.svg";
import Addfilled from "/svg/AddFilled.svg";
import Search from "/svg/darksearch.svg";
import Downarrow from "/svg/Arrowdown.svg";
import Commoncard from "../commponents/snippets/card/commoncard";
import Solidbutton from "../commponents/common/solidbutton";
import Products from "../contextfils/product";
const Wishlist = () => {
  const { productsdata } = useContext(Products)
  return (
    <>
      <section className="container mt-[159px] py-10 md:py-[60px] xl:py-[80px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <img src={User} alt="icon" />
            <h5 className="text_20_14 text-blue_gray_600">Raj Kumar</h5>
          </div>
          <div className="flex items-center gap-x-3">
            <img src={Share} alt="icon" />
            <h5 className="text_20_14 text-blue_gray_600">Share With Others</h5>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 my-[30px] border-b-[1px] pb-[30px]  mb-5 lg:mb-0">
            <div className="flex items-center ">
              <h5 className="flex items-center gap-x-2 text-lg font-semibold uppercase leading-[26px] text-light_primary">
                <img src={Addfilled} alt="icon" />
                Create new List
              </h5>
            </div>
            <div className="flex items-center justify-between gap-x-[30px] ">
              <span className="flex items-center max-w-[500px] w-full border-[1px] rounded-md">
                <input
                  type="text"
                  placeholder="Search Brands..."
                  className="placeholder:text_16_2 text-blue_gray_400 py-3 px-[14px] max-w-[446px] w-full"
                />
                <img className="pr-[14px]" src={Search} alt="" />
              </span>
              <button className="flex items-center justify-between gap-x-2 text-lg font-semibold uppercase leading-[26px] border-2 text-blue_gray_400 py-[14px] px-[18px] max-w-[200px] w-full">
                Sort By <img src={Downarrow} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid gap-[15px] md:gap-[30px] grid-2 md:grid-cols-3 lg:grid-cols-4" >
            {
              productsdata?.map((item, index) => {
                return (
                  <>
                    <Commoncard card={1} data={item} />
                  </>
                )
              })
            }
          </div>
          <div className="flex justify-center mt-[30px]">
            <Solidbutton className="py-4 px-6 rounded-md text-[20px] font-semibold leading-7">
              Load more
            </Solidbutton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;

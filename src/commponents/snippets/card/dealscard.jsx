import React, { useContext } from "react";
import Swipersection from "../sections/swipersection";
import Commoncard from "./commoncard";
import Products from "../../../contextfils/product";
import { Link } from "react-router-dom";
const Dealscard = () => {
  const { productsdata } = useContext(Products);

  return (
    <>
      <section className="container">
        <div className="flex items-center justify-between flex-col-reverse md:flex-row">
          <div className="flex justify-center md:justify-start">
            <Swipersection
              smallHeading={"Sale"}
              mainHeading={"Deals On Sale"}
              className="md:text-start"
            ></Swipersection>
          </div>
          <div className="">
            <h4 className="text_16_2 flex flex-col justify-center items-center md:flex-row">
              Deals Ends In :
              <span className="text-light_secondary_shades_18p text_20 flex items-center ml-[14px] gap-x-[6px]">
                <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                  0
                </span>
                <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                  0
                </span>
                :
                <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                  0
                </span>
                <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                  0
                </span>
                :
                <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                  0
                </span>
                <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                  0
                </span>
              </span>
            </h4>
          </div>
        </div>
        <div className="mt-[30px] md:mt-[60px] grid lg:grid-cols-4 md:grid-cols-3 lg:gap-[30px] md:gap-[20px] grid-cols-2 gap-[13px]  ">
          {productsdata?.map((item, index) => {
            return (
              <>
                  {" "}
                  <Commoncard card={1} data={item} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Dealscard;

import React from "react";
import Swipersection from "../snippets/sections/swipersection";
import { Link } from "react-router-dom";

const BudgetDeals = () => {
  return (
    <>
      <section className="container py-10 md:py-[60px] xl:py-[80px]">
        <div className="flex justify-center md:justify-start">
          <Swipersection
            smallHeading={"Budget"}
            mainHeading={"Best Deals In Budget"}
            className="md:text-start"
          ></Swipersection>
        </div>
        <div className="mt-[30px] md:mt-[60px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[13px] md:gap-5 lg:gap-[30px]">
          <div className="relative flex justify-center">
            <img className=" rounded-md" src="/images/budget1.png" alt="img" />
            <Link to="/exploreByCategories">
            <div className="bg-white py-[10px] rounded-md absolute bottom-[8px] right-[8px] left-[8px] md:right-3 md:left-3 md:bottom-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5 ">
              <p className="text_20_12 text-blue_gray_600 text-center">
                Regular Fashion Below
              </p>
              <h3 className="text_34_20 text-blue_gray_800 text-center">
                10% - 30%
              </h3>
            </div>
            </Link>
           
          </div>
          <div className="relative flex justify-center">
            <img className=" rounded-md" src="/images/budget2.png" alt="img" />
            <Link to="/exploreByCategories">
            <div className="bg-white py-[10px] rounded-md absolute bottom-[8px] right-[8px] left-[8px] md:right-3 md:left-3 md:bottom-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5 ">
              <p className="text_20_12 text-blue_gray_600 text-center">
                Regular Fashion Below
              </p>
              <h3 className="text_34_20 text-blue_gray_800 text-center">
                30% - 50%
              </h3>
            </div>
            </Link>
            
          </div>
          <div className="relative flex justify-center">
            <img className=" rounded-md" src="/images/budget3.png" alt="img" />
            <Link to="/exploreByCategories">
            <div className="bg-white py-[10px] rounded-md absolute bottom-[8px] right-[8px] left-[8px] md:right-3 md:left-3 md:bottom-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5 ">
              <p className="text_20_12 text-blue_gray_600 text-center">
                Regular Fashion Below
              </p>
              <h3 className="text_34_20 text-blue_gray_800 text-center">
                50% - 70%
              </h3>
            </div>
            </Link>
          
          </div>
          <div className="relative flex justify-center">
            <img className=" rounded-md" src="/images/budget4.png" alt="img" />
            <Link to="/exploreByCategories">
            <div className="bg-white py-[10px] rounded-md absolute bottom-[8px] right-[8px] left-[8px] md:right-3 md:left-3 md:bottom-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5 ">
              <p className="text_20_12 text-blue_gray_600 text-center">
                Regular Fashion Below
              </p>
              <h3 className="text_34_20 text-blue_gray_800 text-center">
                70% - 90%
              </h3>
            </div>
            </Link>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default BudgetDeals;

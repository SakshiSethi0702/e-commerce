import React from "react";
import Swipersection from "../snippets/sections/swipersection";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <>
      <section className="container py-10 md:py-[60px] xl:py-[80px]">
        <div className="flex justify-center md:justify-start">
          <Swipersection
            mainHeading={"Explore By Categories"}
            smallHeading={"Categories"}
            className="md:text-start"
          ></Swipersection>
        </div>
        <div className="grid grid-cols-2 gap-[13px] md:gap-5 lg:gap-6 xl:gap-[30px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-[30px] md:mt-[60px]">
          <div>
            <div>
              <img
                className="rounded-t-[50px]"
                src="/images/explore1.png"
                alt="img"
              />
            </div>
            <h4 className="text-center text_20_16_medium mt-5"><Link to="/exploreByCategories"> Men's</Link></h4>
          </div>
          <div>
            <div>
              <img
                className="rounded-t-[50px]"
                src="/images/explore2.png"
                alt="img"
              />
            </div>
            <h4 className="text-center text_20_16_medium mt-5"><Link to="/exploreByCategories">Women's</Link></h4>
          </div>
          <div>
            <div>
              <img
                className="rounded-t-[50px]"
                src="/images/explore3.png"
                alt="img"
              />
            </div>
            <h4 className="text-center text_20_16_medium mt-5"><Link to="/exploreByCategories">Kid's</Link></h4>
          </div>
          <div>
            <div>
              <img
                className="rounded-t-[50px]"
                src="/images/explore4.png"
                alt="img"
              />
            </div>
            <h4 className="text-center text_20_16_medium mt-5"><Link to="/exploreByCategories">Perfume's</Link></h4>
          </div>
          <div>
            <div>
              <img
                className="rounded-t-[50px]"
                src="/images/explore5.png"
                alt="img"
              />
            </div>
            <h4 className="text-center text_20_16_medium mt-5">
            <Link to="/exploreByCategories">  Casual Shoe's</Link>
            
            </h4>
          </div>
          <div>
            <div>
              <img
                className="rounded-t-[50px]"
                src="/images/explore6.png"
                alt="img"
              />
            </div>
            <h4 className="text-center text_20_16_medium mt-5">
            <Link to="/exploreByCategories">  Wedding Sandal's</Link>
            
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;

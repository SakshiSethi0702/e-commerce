import React, { Fragment, useContext } from "react";
import Swipersection from "../commponents/snippets/sections/swipersection";
import Productcard from "../commponents/snippets/card/productcard";
import FeaturedSwiper from "../commponents/snippets/swiper/commonSwiper";
import Solidbutton from "../commponents/common/solidbutton";
import Featuredsection from "../commponents/home/Featuredsection";
import Products from "../contextfils/product";

const NewArrivals = () => {
  const { productsdata } = useContext(Products)

  return (
    <>
      <section className="  py-10 md:py-[60px] xl:py-[80px] mt-[170px] bg-extra_bg">
        <div className="flex justify-center text-center">
          <Swipersection
            smallHeading={"New"}
            mainHeading={"New Arrivals"}
            className=""
          ></Swipersection>
        </div>
        <div className="container" >
          <div className="grid gap-[13px] md:gap-5 lg:gap-6 xl:gap-[30px] grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
            {
              productsdata?.map((item, index) => {
                return (<Fragment key={Date.now() + index.name} >
                  <Productcard data={item} />
                </Fragment>)
              })
            }
          </div>
          <div className="md:hidden mt-[30px] w-full" >
            <Solidbutton className={" py-[10px] px-[16px] w-full rounded-[4px] "} >
              View More Products
            </Solidbutton>
          </div>
        </div>
        <div className="mt-[60px]">
          <Featuredsection />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;

import React, { Fragment, useContext, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// // import required modules
// import { Navigation } from 'swiper/modules';
import Swipersection from "../sections/swipersection";
import Productcard from "../card/productcard";

import Solidbutton from "../../common/solidbutton";
import Products from "../../../contextfils/product";
import Commoncard from "../card/commoncard";
import Blogpostcard from "../card/blogpostcard";
import { Link } from "react-router-dom";
const Swipercardsectioncommon = ({
  mainClass,
  className,
  smallHeading,
  mainh_class,
  mainHeading,
  card,
  topbtn,
  bottombtn,
  custombttombtnclass,
  customtopbtnclass,
}) => {
  const swiperRef = useRef();
  const {
    productsdata,
    postcarddata,
    userthoughtdata,
    biggestsalecard,
    similarproducts,
    
  } = useContext(Products);
  // console.log(postcarddata, "Products data with the help of use context file")

  return (
    <>
      <div className="">
        <div className={` flex ${mainClass} items-center justify-between`}>
          <div>
            <h3 className={`${className}  text-light_primary text_24_20  `}>
              {smallHeading}
            </h3>
            <h2
              className={`${className}  ${mainh_class} text_60_32_sec_heading text-blue_gray_800 text-center `}
            >
              {mainHeading}
            </h2>
          </div>
          <div className={`${customtopbtnclass}`}>
            {topbtn === true && (
              <>
                <div className={`md:flex md:gap-[20px] items-center hidden   `}>
                  <img
                    onClick={() => swiperRef.current?.slidePrev()}
                    className=" cursor-pointer md:right-[10px] rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] "
                    src="/svg/Arrowleft.svg"
                    alt=""
                  />
                  <img
                    onClick={() => swiperRef.current?.slideNext()}
                    className=" cursor-pointer rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] "
                    src="/svg/ArrowRight.svg"
                    alt=""
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={"auto"}
            loop={true}
          >
            {card === "productcard" &&
              productsdata.map((item, index) => {
                return (
                  <Fragment key={Date.now() + index}>
                    <SwiperSlide className="w-[375px] ">
                      <div className="mt-[30px] md:mt-[60px]">
                      <Link to={`/${index}`}>
                        <Productcard data={item} />
                      </Link>

                      </div>
                    </SwiperSlide>
                  </Fragment>
                );
              })}
            {card === "commoncard1" &&
              productsdata.map((item, index) => {
                return (
                  <Fragment key={Date.now() + index}>
                    <SwiperSlide className="w-[375px]">
                      <Link to={`/${index}`}>
                        <Commoncard card={1} data={item} />
                      </Link>
                    </SwiperSlide>
                  </Fragment>
                );
              })}
            {card === "blogcard" &&
              postcarddata.map((item, index) => {
                return (
                  <Fragment key={Date.now() + index}>
                    <SwiperSlide className="w-[335px] md:w-[375px]">
                      <Link to={`/${index}`}>
                        <Blogpostcard data={item} />
                      </Link>
                    </SwiperSlide>
                  </Fragment>
                );
              })}
            {card === "userthoughtcard" &&
              userthoughtdata?.map((item, index) => {
                return (
                  <Fragment key={ Date.now()+ index}>
                    <SwiperSlide className="  max-w-[1320px] w-full">
                      <div className="flex flex-col-reverse items-center bg-light_primary_shades_4p py-5 px-[14px] lg:py-[50px] lg:px-10 gap-[30px] lg:gap-[60px] lg:flex-row lg:max-w-[1320px] rounded-[20px] mt-[30px] md:mt-[60px]">
                        <div className="flex flex-col items-center gap-[10px] max-w-[805px]">
                          <h2 className="text_34_20 text-blue_gray_800 text-center">
                            {item.heading}
                          </h2>
                          <p className="text-blue_gray_500 text-center text_20_14">
                            {item.description}
                          </p>
                          <div className="flex flex-col items-center border-t-[1px] border-[#ECEFF1] mt-[14px] pt-[14px] w-full">
                            <h4 className="text-blue_gray_600 text_24_16">
                              {item.username}
                            </h4>
                            <h5 className="text-blue_gray_400">
                              {item.location}
                            </h5>
                          </div>
                        </div>
                        <div className=" flex max-w-[375px] w-full justify-center">
                          <div className="border-2 border-light_primary p-[10px]  rounded-t-[60px]">
                            <img
                              className="rounded-t-[60px] max-w-[255px] lg:max-w-[345px] w-full text_20_12"
                              src="/images/thoughtbg.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Fragment>
                );
              })}
            {card === "biggestsalecard" &&
              biggestsalecard?.map((item, index) => {
                return (
                  <Fragment key={Date.now()+index}>
                    <SwiperSlide className="max-w-[1185px] ">
                      <div
                        className={`bg-[url("/images/${item.image}")] bg-cover bg-no-repeat bg-center py-[9%] xl:py-[128px] xl:max-w-[1185px] flex justify-end rounded-md `}
                      >
                        <div className="max-w-[186px] md:max-w-[300px] md:mr-[70px]  lg:max-w-[400] xl:max-w-[496px] xl:mr-[149px]">
                          <h3 className="text_24_12 text-light_primary">
                            {item.discount}
                          </h3>
                          <h2 className="text_48_18 text-blue_gray_800 pt-[10px] md:pt-5 ">
                            {item.subcategoryinfo}
                          </h2>
                        </div>
                      </div> 
                    </SwiperSlide>
                  </Fragment>
                );
              })}
            {card === "similarproductscard" &&
              similarproducts?.map((item, index) => {
                return (
                  <Fragment key={Date.now()+index}>
                    <SwiperSlide className="w-[375px] md:w-[510px]">
                      <div className="relative">
                        <img
                          className=" xl:max-w-[510px] min-h-[170px]"
                          src={`/images/${item.image}`}
                          alt="img"
                        />
                        <div className="absolute top-[28.5px] left-[10px] xl:top-[41px] xl:left-5 bottom-[23.5px]">
                          <h3 className="text_34_20 text-blue_gray_900">
                            {item.productsname}
                          </h3>
                          <h5 className="text_24_16 text-blue_gray_800 flex items-center gap-x-[6px] mt-[10px]">
                            <span className="text_16_1_12 text-blue_gray_800">
                              Get
                            </span>
                            {item.discount}
                          </h5>
                          <Solidbutton className="py-[10px] px-4 min-w-[200px]:py-[5px] lg:py-[10px] lg:px-4 mt-[14px] xl:mt-6 rounded-md">
                            Shop Now
                          </Solidbutton>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Fragment>
                );
              })}           
          </Swiper>
        </div>
        <div className={`${custombttombtnclass}`}>
          {bottombtn === true && (
            <>
              <div className={`flex justify-center items-center gap-[20px] `}>
                <img
                  onClick={() => swiperRef.current?.slidePrev()}
                  className=" cursor-pointer md:right-[10px] rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] "
                  src="/svg/Arrowleft.svg"
                  alt=""
                />
                <img
                  onClick={() => swiperRef.current?.slideNext()}
                  className=" cursor-pointer rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] "
                  src="/svg/ArrowRight.svg"
                  alt=""
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Swipercardsectioncommon;

//  ues this components
{
  /*      <Swipercardsectioncommon card={"productcard"} smallHeading={"manish"} mainHeading={"taak"} /> */
}

/*

      <Swipercardsectioncommon card={"productcard"} smallHeading={"manproductcardish"} mainHeading={"productcard"} />
                <Swipercardsectioncommon card={"commoncard1"} smallHeading={"commoncard1"} mainHeading={"commoncard1"} />
                <Swipercardsectioncommon card={"blogcard"} smallHeading={"blogcard"} mainHeading={"blogcard"} />

*/

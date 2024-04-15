// import React, { useContext, useRef, useState } from "react";
import React, { Fragment, useContext, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Swipersection from "../snippets/sections/swipersection";
// import { Navigation } from "swiper/modules";
import Swipercardsectioncommon from "../snippets/swiper/swipercardsectioncommon";
import Solidbutton from "./solidbutton";
import Products from "../../contextfils/product";
import Swipersection from "../snippets/sections/swipersection";

const UserThoughts = () => {


  return (
    <>
      <section className="py-10 md:py-[60px] xl:py-[80px] container " >
        <div className=" pb-[30px]">
          <Swipercardsectioncommon
            custombttombtnclass={"block md:hidden pt-[30px]"}
            customtopbtnclass={"md:block hidden "}
            topbtn={true}
            card={"userthoughtcard"}
            bottombtn={true}
            smallHeading={"Thought"}
            mainHeading={"Our Users Thoughts"} />
        </div>
      </section>

      {/* <section className="container py-10 md:py-[60px] xl:py-[80px]"> */}
      {/* <div className="flex items-center justify-center md:justify-between">
          <Swipersection
            smallHeading={"Thought"}
            mainHeading={"Our Users Thoughts"}
            className="md:text-start"
          ></Swipersection>
          <div className="hidden lg:block">
            <div className="flex gap-x-5 ">
              <div className="p-1 bg-white rounded-3xl swiper-button-prevv">
                <img className="" src="/svg/leftarrow.svg" alt="icon" />
              </div>
              <div className="p-1 bg-white rounded-3xl swiper-button-nextt">
                <img className="" src="/svg/rightarrow.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div> */}
      {/* <div className="mt-[60px]">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-nextt",
              prevEl: ".swiper-button-prevv",
            }}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              1000: {
                slidesPerView: 1.3,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col-reverse items-center bg-light_primary_shades_4p py-5 px-[14px] lg:py-[50px] lg:px-10 gap-[30px] lg:gap-[60px] lg:flex-row lg:max-w-[1320px] rounded-[20px]">
                <div className="flex flex-col items-center gap-[10px] max-w-[805px]">
                  <h2 className="text_34_20 text-blue_gray_800 text-center">
                    Lorem ipsum is not simply random text.
                  </h2>
                  <p className="text-blue_gray_500 text-center text_20_14">
                    “ It has survived not only five centuries, also the leap
                    into electronic typesetting remaining essentially unchanged.
                    It was popularised in the 1960s with release of Letraset
                    sheets containing Lorem Ipsum passages. ”
                  </p>
                  <div className="flex flex-col items-center border-t-[1px] border-[#ECEFF1] mt-[14px] pt-[14px] w-full">
                    <h4 className="text-blue_gray_600 text_24_16">
                      Alexander Watts
                    </h4>
                    <h5 className="text-blue_gray_400">New York, USA</h5>
                  </div>
                </div>
                <div className=" flex w-full justify-center">
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
            <SwiperSlide>
              <div className="flex flex-col-reverse items-center bg-light_primary_shades_4p py-5 px-[14px] lg:py-[50px] lg:px-10 gap-[30px] lg:gap-[60px] lg:flex-row lg:max-w-[1320px] rounded-[20px]">
                <div className="flex flex-col items-center gap-[10px] max-w-[805px]">
                  <h2 className="text_34_20 text-blue_gray_800 text-center">
                    Lorem ipsum is not simply random text.
                  </h2>
                  <p className="text-blue_gray_500 text-center text_20_14">
                    “ It has survived not only five centuries, also the leap
                    into electronic typesetting remaining essentially unchanged.
                    It was popularised in the 1960s with release of Letraset
                    sheets containing Lorem Ipsum passages. ”
                  </p>
                  <div className="flex flex-col items-center border-t-[1px] border-[#ECEFF1] mt-[14px] pt-[14px] w-full">
                    <h4 className="text-blue_gray_600 text_24_16">
                      Alexander Watts
                    </h4>
                    <h5 className="text-blue_gray_400">New York, USA</h5>
                  </div>
                </div>
                <div className=" flex w-full justify-center">
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
            <SwiperSlide>
              <div className="flex flex-col-reverse items-center bg-light_primary_shades_4p py-5 px-[14px] lg:py-[50px] lg:px-10 gap-[30px] lg:gap-[60px] lg:flex-row lg:max-w-[1320px] rounded-[20px]">
                <div className="flex flex-col items-center gap-[10px] max-w-[805px]">
                  <h2 className="text_34_20 text-blue_gray_800 text-center">
                    Lorem ipsum is not simply random text.
                  </h2>
                  <p className="text-blue_gray_500 text-center text_20_14">
                    “ It has survived not only five centuries, also the leap
                    into electronic typesetting remaining essentially unchanged.
                    It was popularised in the 1960s with release of Letraset
                    sheets containing Lorem Ipsum passages. ”
                  </p>
                  <div className="flex flex-col items-center border-t-[1px] border-[#ECEFF1] mt-[14px] pt-[14px] w-full">
                    <h4 className="text-blue_gray_600 text_24_16">
                      Alexander Watts
                    </h4>
                    <h5 className="text-blue_gray_400">New York, USA</h5>
                  </div>
                </div>
                <div className=" flex w-full justify-center">
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
          </Swiper>
          <div className="block lg:hidden">
            <div className="flex gap-x-5 justify-center">
              <div className="p-1 bg-white rounded-3xl swiper-button-prevv">
                <img className="" src="/svg/leftarrow.svg" alt="icon" />
              </div>
              <div className="p-1 bg-white rounded-3xl swiper-button-nextt">
                <img className="" src="/svg/rightarrow.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div> */}
      {/* </section> */}


    </>
  );
};

export default UserThoughts;

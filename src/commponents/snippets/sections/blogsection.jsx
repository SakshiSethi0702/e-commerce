import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Swipersection from "./swipersection";
import Blogpostcard from "../card/blogpostcard";
import { Navigation } from "swiper/modules";

const Blogsection = () => {
  return (
    <>
      <div className="py-10 md:py-[60px] xl:py-[80px]">
        <div className="flex items-center justify-center md:justify-between">
          <div>
            <Swipersection
              smallHeading={"Blog"}
              mainHeading={"Newly Blog Posts"}
              className="md:text-start"
            ></Swipersection>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-x-5 ">
              <div className="p-1 bg-white rounded-3xl swiper-button-prevv">
                <img className="" src="/svg/leftarrow.svg" alt="icon" />
              </div>
              <div className="p-1 bg-white rounded-3xl swiper-button-nextt">
                <img className="" src="/svg/rightarrow.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[60px]">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-nextt",
              prevEl: ".swiper-button-prevv",
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              550: {
                slidesPerView: 1.5,
              },
              700: {
                slidesPerView: 1.5,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Blogpostcard />
            </SwiperSlide>
            <SwiperSlide>
              <Blogpostcard />
            </SwiperSlide>
            <SwiperSlide>
              <Blogpostcard />
            </SwiperSlide>
            <SwiperSlide>
              <Blogpostcard />
            </SwiperSlide>
            <SwiperSlide>
              <Blogpostcard />
            </SwiperSlide>
            <SwiperSlide>
              <Blogpostcard />
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center md:hidden">
            <div className="flex gap-x-5 ">
              <div className="p-1 bg-white rounded-3xl swiper-button-prevv">
                <img className="" src="/svg/leftarrow.svg" alt="icon" />
              </div>
              <div className="p-1 bg-white rounded-3xl swiper-button-nextt">
                <img className="" src="/svg/rightarrow.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogsection;

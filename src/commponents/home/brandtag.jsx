import React, { useRef, useState } from "react";
import branddata from "../../json/branddata.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Brandtag = () => {
  return (
    <>
      <section className="container py-[40px] md:py-[60px] xl:py-[80px]">
        <div className="flex flex-col items-center">
          <h3 className="text-light_primary text_24_20 ">Our Partners</h3>
          <h4 className="text-blue_gray_800 text_60_32_sec_heading">
            Fashion Partners
          </h4>
        </div>
        {/* before lg breakpoint  */}
        <div className="grid grid-cols-4 gap-[13px] place-items-center mt-[30px] lg:hidden">
          <img
            className="max-w-[76px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[190px] items-center"
            src="/images/brand1.png"
            alt="brand"
          />
          <img
            className="max-w-[76px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[190px] items-center"
            src="/images/brand3.png"
            alt="brand"
          />
          <img
            className="max-w-[76px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[190px] items-center"
            src="/images/brand2.png"
            alt="brand"
          />
          <img
            className="max-w-[76px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[190px] items-center"
            src="/images/brand3.png"
            alt="brand"
          />
          <img
            className="max-w-[76px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[190px] items-center"
            src="/images/brand4.png"
            alt="brand"
          />
          <img
            className="max-w-[76px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[190px] items-center"
            src="/images/brand5.png"
            alt="brand"
          />
          <img
            className="max-w-[76px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[190px] items-center"
            src="/images/brand3.png"
            alt="brand"
          />
          <img
            className="max-w-[76px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[190px] items-center"
            src="/images/brand1.png"
            alt="brand"
          />
        </div>
        {/* after lg breakpoint */}
        <div className="hidden lg:block mt-[30px]">
          <Swiper
            slidesPerView={5}
            spaceBetween={140}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1000:{
                slidesPerView:4
              },
              1100:{
                slidesPerView:4
              },
              1200: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 5,
              },
            }}
            modules={[]}
            className="mySwiper"
          >
            {branddata.map((item, index) => {
              return (
                <SwiperSlide>
                  <img src={`/images/${item.image}`} alt="images" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Brandtag;

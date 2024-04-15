import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const DiscountRange = () => {
  return (
    <>
      {/* <section className="container py-10 md:py-[60px] xl:py-[80px]">
        <div>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/images/topcollection.png"
                  alt=""
                />
                <div className="absolute top-5 md:top-10 lg:top-[60px] xl:top-[80px] left-2 md:left-[30px]">
                  <h3 className="text_48_20 text-extra_4">
                    Top Brands Kidswear
                  </h3>
                  <h5 className="flex items-center text_34_20 font-normal gap-x-[10px] text-light_secondary_contrast tab:mt-5">
                    <p className="text_20_12 font-normal text-white">
                      Stating From
                    </p>{" "}
                    $40.00/-
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/images/glassescollection.png"
                  alt=""
                />
                <div className="absolute top-5 md:top-10 lg:top-[60px] xl:top-[80px] left-2 md:left-[30px]">
                  <h3 className="text_48_20 text-extra_4">
                    Top Brands Kidswear
                  </h3>
                  <h5 className="flex items-center text_34_20 font-normal gap-x-[10px] text-light_secondary_contrast tab:mt-5">
                    <p className="text_20_12 font-normal text-white">
                      Stating From
                    </p>{" "}
                    $40.00/-
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/images/topcollection.png"
                  alt=""
                />
                <div className="absolute top-5 md:top-10 lg:top-[60px] xl:top-[80px] left-2 md:left-[30px]">
                  <h3 className="text_48_20 text-extra_4">
                    Top Brands Kidswear
                  </h3>
                  <h5 className="flex items-center text_34_20 font-normal gap-x-[10px] text-light_secondary_contrast tab:mt-5">
                    <p className="text_20_12 font-normal text-white">
                      Stating From
                    </p>{" "}
                    $40.00/-
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/images/glassescollection.png"
                  alt=""
                />
                <div className="absolute top-5 md:top-10 lg:top-[60px] xl:top-[80px] left-2 md:left-[30px] ">
                  <h3 className="text_48_20 text-extra_4">
                    Top Brands Kidswear
                  </h3>
                  <h5 className="flex items-center text_34_20 font-normal gap-x-[10px] text-light_secondary_contrast tab:mt-5">
                    <p className="text_20_12 font-normal text-white">
                      Stating From
                    </p>{" "}
                    $40.00/-
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}
    </>
  );
};

export default DiscountRange;

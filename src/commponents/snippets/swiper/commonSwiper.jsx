import React, { useRef, useState } from "react";
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

const FeaturedSwiper = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="container">
        <Swipersection
          mainHeading={"Featured Products"}
          smallHeading={"Featured"}
          className="md:text-start"
        >
          <div className="md:flex md:gap-[20px] items-center hidden   ">
            <svg
              onClick={() => swiperRef.current?.slidePrev()}
              className=" md:right-[10px] rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] "
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M14.3575 20.15L21.8992 27.9601C22.3798 28.4578 23.159 28.4578 23.6396 27.9601C24.1201 27.4624 24.1201 26.6554 23.6396 26.1577L16.8902 19.1657L23.6396 12.1756C24.1201 11.6779 24.1201 10.871 23.6396 10.3733C23.159 9.87558 22.3798 9.87558 21.8992 10.3733L14.3575 18.1833C14.139 18.4096 14 18.7 14 19.1261C14 19.5606 14.1325 19.917 14.3575 20.15Z"
                fill="#546E7A"
              />
            </svg>
            <svg
              onClick={() => swiperRef.current?.slideNext()}
              className=" rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] "
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M23.6425 20.15L16.1008 27.9601C15.6202 28.4578 14.841 28.4578 14.3604 27.9601C13.8799 27.4624 13.8799 26.6554 14.3604 26.1577L21.1098 19.1657L14.3604 12.1756C13.8799 11.6779 13.8799 10.871 14.3604 10.3733C14.841 9.87558 15.6202 9.87558 16.1008 10.3733L23.6425 18.1833C23.861 18.4096 24 18.7 24 19.1261C24 19.5606 23.8675 19.917 23.6425 20.15Z"
                fill="#546E7A"
              />
            </svg>
          </div>
        </Swipersection>
        <div className="hidden md:block mt-[60px]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              355: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <Productcard />
            </SwiperSlide>
            <SwiperSlide>
              <Productcard />
            </SwiperSlide>
            <SwiperSlide>
              <Productcard />
            </SwiperSlide>
            <SwiperSlide>
              <Productcard />
            </SwiperSlide>
            <SwiperSlide>
              <Productcard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-[60px] md:hidden ">
          <div className="grid grid-cols-2 ">
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
          <div className="w-full mt-[30px] rounded-[4px]  ">
            <Solidbutton>View More Products</Solidbutton>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedSwiper;

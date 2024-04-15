import React from "react";
import Swipercardsectioncommon from "../snippets/swiper/swipercardsectioncommon";
import { Link } from "react-router-dom";
const BiggestSalecard = () => {
  return (
    <>
      <div className="container py-10 md:py-[60px] xl:py-[80px]">
        <Link to="/exploreByCategories">
          {" "}
          <Swipercardsectioncommon card={"biggestsalecard"} />
        </Link>
      </div>
      {/* <section className="container py-10 md:py-[60px] xl:py-[80px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          modules={[]}
          breakpoints={{
            1000: {
              slidesPerView: 1.3,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='bg-[url("/images/biggestswipercard.png")] bg-cover bg-no-repeat bg-center py-[9%] xl:py-[128px] xl:max-w-[1185px] flex justify-end rounded-md '>
              <div className="max-w-[186px] md:max-w-[300px] md:mr-[70px]  lg:max-w-[400] xl:max-w-[496px] xl:mr-[149px]">
                <h3 className="text_24_12 text-light_primary">
                  Grab Upto 50% Off
                </h3>
                <h2 className="text_48_18 text-blue_gray_800 pt-[10px] md:pt-5 ">
                  {" "}
                  Bigest Sale On Men's Wear Fashion
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("/images/biggestswipercard.png")] bg-cover bg-no-repeat bg-center py-[9%] xl:py-[128px] xl:max-w-[1185px] flex justify-end rounded-md '>
              <div className="max-w-[186px] md:max-w-[300px] md:mr-[70px]  lg:max-w-[400] xl:max-w-[496px] xl:mr-[149px]">
                <h3 className="text_24_12 text-light_primary">
                  Grab Upto 50% Off
                </h3>
                <h2 className="text_48_18 text-blue_gray_800 pt-[10px] md:pt-5 ">
                  {" "}
                  Bigest Sale On Men's Wear Fashion
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("/images/biggestswipercard.png")] bg-cover bg-no-repeat bg-center py-[9%] xl:py-[128px] xl:max-w-[1185px] flex justify-end rounded-md '>
              <div className="max-w-[186px] md:max-w-[300px] md:mr-[70px]  lg:max-w-[400] xl:max-w-[496px] xl:mr-[149px]">
                <h3 className="text_24_12 text-light_primary">
                  Grab Upto 50% Off
                </h3>
                <h2 className="text_48_18 text-blue_gray_800 pt-[10px] md:pt-5 ">
                  {" "}
                  Bigest Sale On Men's Wear Fashion
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("/images/biggestswipercard.png")] bg-cover bg-no-repeat bg-center py-[9%] xl:py-[128px] xl:max-w-[1185px] flex justify-end rounded-md '>
              <div className="max-w-[186px] md:max-w-[300px] md:mr-[70px]  lg:max-w-[400] xl:max-w-[496px] xl:mr-[149px]">
                <h3 className="text_24_12 text-light_primary">
                  Grab Upto 50% Off
                </h3>
                <h2 className="text_48_18 text-blue_gray_800 pt-[10px] md:pt-5 ">
                  {" "}
                  Bigest Sale On Men's Wear Fashion
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section> */}
    </>
  );
};

export default BiggestSalecard;

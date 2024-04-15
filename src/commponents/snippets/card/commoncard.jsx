import React from "react";
import { Link } from "react-router-dom";

const Commoncard = ({ card, data }) => {
  return (
    <>
      {card === 1 && (
        <div className="max-w-[375px] relative rounded-lg cursor-pointer ">
          <div className="  px-1 pt-4 pb-5 md:px-[34px] md:pt-6 md:pb-7 bg-extra_bg flex justify-center flex-col items-center rounded-t-[30px]">
            <Link to="/product-detail">
              <img
                className=""
                src={`/images/hoodie2.png`}
                alt="product image"
              />
            </Link>

            <div className="p-2 bg-white rounded-[50px] absolute hidden md:block top-4 right-4">
              <img
                className=" md:max-w-[18px]"
                src={`/svg/Like.svg`}
                alt="like"
              />
            </div>
          </div>
          <div className="flex justify-center flex-col items-center py-[10px] px-[14px]">
            <div className="text-center">
              <h3 className="text_20_14 text-blue_gray_700 ">{data.name}</h3>
              <p className="flex justify-center items-center text_16_1_12 py-[6px] text-blue_gray_400 gap-x-[6px]">
                <span>
                  <img src={`/svg/star.svg`} alt="star" />
                </span>
                {data.price}
              </p>
            </div>
            <div className="flex gap-x-[6px] items-center flex-col gap-1 md:flex-row">
              <h1 className="text_24_16">{data.price}</h1>
              <p className="text_16_2_10 text-blue_gray_200 ">
                <del>2323</del>
              </p>
              <p className="text_16_2_12 text-blue_gray_500">3434</p>
            </div>
          </div>
        </div>
      )}
      {card === 2 && (
        <div className="  p-[10px] md:p-[20px]  bg-white  lg:grid-cols-[40%_54%] xl:grid-cols-[20%_77%] grid grid-cols-2 md:gap-[30px] w-full relative ">
          <div className="bg-light_bg_paper   max-w-[250px] w-full md:grid md:row-[1_/_span_2] ">
            <Link to="/product-detail">
              <img src="/images/mycartimage.png" alt="img" />
            </Link>
          </div>
          <span
            className={`absolute lg:top-[34px] lg:left-[29px]  md:top-[24px] md:left-[19px]  top-[14px] left-[0%]  bg-light_primary rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast block text-center w-[44px] md:w-[48px] lg:w-[53px]`}
          >
            new
          </span>
          <div className="w-full flex flex-col justify-center ">
            <div className="flex justify-between flex-col lg:flex-row gap-[14px] md:gap-[20px] ">
              <div className="flex flex-col  gap-[14px] md:gap-[20px] ">
                <h2 className="text_24_16 text-blue_gray_700">
                  {" "}
                  White Men's US Polo Neck T-Shirt...
                </h2>
                <p className="flex md:pb-[10px] text_16_1_12 text-blue_gray_400  ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z"
                      fill="#FFB400"
                    />
                  </svg>
                  4.5 (200 Reviews)
                </p>
              </div>
              <p className=" pb-[14px] text_16_2_10 text-blue_gray_300">
                Free Delivery By 13 Sep, Tuesday.
              </p>
            </div>
            <div className="flex md:gap-[6px] gap-[4px] items-center">
              <span className={`  xl:text-[17px] text_24_14 2xl:text-[24px] `}>
                $ 20.00
              </span>
              <span className="text_16_2_10   text-blue_gray_400  ">
                {" "}
                $32.00{" "}
              </span>
              <span className=" text-blue_gray_500 text_12">(15% Off)</span>
            </div>
          </div>
          <div className="col-[1_/_3]  md:col-[2_/_3] w-full ">
            <div className="flex flex-col w-full">
              <span className="border-[1px]  my-[14px] md:my-[20px] md:hidden "></span>
              <div className="flex  justify-between md:flex-col">
                <div className="flex gap-[8px] items-center  md:py-[20px]">
                  <span className="text_16_1_12 text-blue_gray_400  ">
                    Qty :
                  </span>
                  <div className="py-[4px] px-[6px] flex gap-[6px] items-center rounded-[30px] border-[1px] w-[106px] justify-between ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="3"
                      viewBox="0 0 12 3"
                      fill="none"
                    >
                      <path d="M12 0.75H0V2.25H12V0.75Z" fill="#B0BEC5" />
                    </svg>
                    <span>2</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M14.25 10.25H9.75V14.75H8.25V10.25H3.75V8.75H8.25V4.25H9.75V8.75H14.25V10.25Z"
                        fill="#B0BEC5"
                      />
                    </svg>
                  </div>
                </div>
                <span className="border-[1px]  my-[14px] md:my-[20px]  hidden md:block "></span>
                <div className="flex gap-[10px]">
                  <h3 className="text_14_1_10 text-blue_gray_400 ">
                    Remove Product
                  </h3>
                  <span className="  hidden  md:block  border-[1px]"> </span>
                  <h3 className=" hidden md:block  text_14_1_10 text-blue_gray_400 ">
                    Save For Later
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Commoncard;

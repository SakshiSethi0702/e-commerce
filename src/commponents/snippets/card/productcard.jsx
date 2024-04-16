import React, { Fragment } from "react";
import cardimage from "/images/cardimage1.png";
import Liquidbutton from "../../common/liquidbutton";
import { Link } from "react-router-dom";

const Productcard = ({ flex, data,star }) => {
  return (
    <>
      <div
        className={` w-full p-[14px] group cursor-pointer relative ${flex === false
          ? " grid grid-cols-2 md:flex md:flex-row gap-[24px] items-center  w-full lg:max-w-[577px] lg:h-[300px]  "
          : "flex flex-col gap-[14px] rounded-[14px] bg-white "
          }  `}
      >
        <div
          className={` ${flex === false
            ? "bg-extra_bg pt-[33px] pr-[30px] pb-[20px] pl-[29px] "
            : "bg-extra_bg lg:px-[35px] lg:pt-[28px] lg:pb-[18px] pt-[23px] pr-[15px] pl-[16px] pb-[10px] rounded-[10px]  md:w-full"
            } `}
        >
         <Link to={`/product-detail/${data?.id}`}> <img
            className={` ${
              flex === false ? "max-w-[181px] w-full max-h-[277px]" : "max-w-[277px] w-full max-h-[277px] h-full"
            } `}
            src={data?.images!==undefined && data?.images[0]}
            alt="cardimage"
          /></Link>
         
          <span
            className={` ${flex === false
              ? "absolute   lg:top-[34px] lg:left-[29px]  md:top-[24px] md:left-[19px]  top-[14px] left-[58%]  bg-light_primary rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast block text-center w-[44px] md:w-[48px] lg:w-[53px] "
              : "absolute lg:top-[34px] lg:left-[29px]  md:top-[24px] md:left-[19px]  top-[14px] left-[14px]  bg-light_primary rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast block text-center w-[44px] md:w-[48px] lg:w-[53px] "
              }`}
          >
            new
          </span>
          <div
            className={`${flex === false
              ? "absolute lg:left-[25%] lg:top-[29px] md:left-[18%] md:top-[19px] right-[14px] top-[10px] bg-white  p-[8px] rounded-[90px]    w-[28px] md:w-[28px]"
              : "absolute  lg:top-[29px] md:right-[24px] md:top-[19px] right-[14px] top-[14px] bg-white  p-[8px] rounded-[90px]    w-[28px] md:w-[28px]"
              } `}
          >
            <img src="/svg/Like.svg" alt="Like" />
          </div>
          <span className="group-hover:block hidden duration-500 absolute bottom-[10px] top-[65%] right-[50%]">
            ......
          </span>
        </div>
        <div
          className={`${flex === false ? "flex flex-col gap-[24px] w-full " : ""
            }`}
        >
          <div
            className={`${flex === false
              ? "lg:flex lg:flex-col lg:gap-[12px] grid  grid-cols-1 md:grid-cols-2 md:gap-[20px]  "
              : ""
              }`}
          >
            <div
              className={` ${flex === false
                ? "flex flex-col gap-[14px] "
                : "md:flex md:gap  justify-between"
                } `}
            >
              <h3 className="text_20_14_medium text-blue_gray_600 md:w-[12vw] group-hover:text-light_primary duration-300 whitespace-nowrap overflow-hidden text-ellipsis ">
                {data?.title}
              </h3>
              {
                star === true && (<>
                  <div className="md:flex gap-[4px] items-center hidden ">
                    <img src="/svg/star.svg" alt="star" />
                    <span className="whitespace-nowrap  text-blue_gray_400">
                     {data?.rating}
                    </span>
                  </div>
                </>)
              }
            </div>
            <div className="flex gap-[8px] py-[10px] items-center ">
              <span className="text_14_1_12 text-blue_gray_400 ">Colors-</span>
              <ul className="flex gap-[6px]">
                {data?.colors && JSON.parse(data?.colors).map((item, index) => {
                  return (
                    <Fragment key={Date.now()+index} >
                      <li
                        className="md:w-[20px] w-[10px] md:h-[20px] cursor-pointer h-[10px] rounded-[50%]"
                        style={{ backgroundColor: "#" + item.color_code }}
                      ></li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="flex md:gap-[6px] gap-[4px] items-center">
                <span
                  className={`${flex === false
                    ? "  xl:text-[17px] text_24_14  2xl:text-[24px] "
                    : "text_24_14  text-blue_gray_800"
                    }`}
                >
                  {data.price}
                </span>
                <span className="text_16_2_10   text-blue_gray_400  ">
                  {/* <del>$32.00</del> */}
                </span>
                <span className=" text-blue_gray_500 text_12">({data?.discountPercentage}% Off)</span>
              </div>
            </div>
          </div>
          <div
            className={` ${flex === false ? " hidden md:block   overflow-hidden " : "hidden"
              } `}
          >
            <Liquidbutton className="w-full rounded-[6px] py-[14px] px-[18px]">
              ADD TO CART
            </Liquidbutton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcard;

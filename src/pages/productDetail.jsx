import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Liquidbutton from "../commponents/common/liquidbutton";
import Solidbutton from "../commponents/common/solidbutton";
import Like from "/svg/Like.svg";
import Tag from "/svg/tag.svg";
import Leftarrow from "/svg/leftarrow.svg";
import Rightarrow from "/svg/rightarrow.svg";
import Addition from "/svg/addition.svg";
import Substraction from "/svg/substraction.svg";
import Offertag from "/svg/offertag.svg";
import Return from "/svg/returns.svg";
import Surity from "/svg/surity.svg";
import Delhivery from "/svg/delhivery.svg";
import Downarrow from "/svg/Arrowdown.svg";
import Productcard from "../commponents/snippets/card/productcard";
import Swipersection from "../commponents/snippets/sections/swipersection";
import dealsdata from "../json/dealsdata.json";
import Swipercardsectioncommon from "../commponents/snippets/swiper/swipercardsectioncommon";
import Products from "../contextfils/product";
import { useLocation } from 'react-router-dom';


const ProductDetail = () => {
  const { productsdata } = useContext(Products)
  const { id } = useParams();
  const [data,setData] = useState({})

  useEffect(()=>{

getProductData()

  },[])

  const getProductData=async(e)=>{
    try {
    let res=  await fetch('https://dummyjson.com/products/'+id)
    res= await res.json()
    console.log(res,"==response");
    // res= res.products.filter(elem => elem.category=="mens-shirts" || elem.category==="tops")
    setData(res)
    } catch (error) {
      
    }
  }
  function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

  return (
    <>
      <section className="container pt-[30px] mt-[159px]">
        <div className="flex flex-col xl:flex-row gap-x-[30px]">
          <div>
            <div className="sticky top-[220px]">
              <div className="bg-extra_bg relative xl:pt-[42px] xl:pb-[30px] px-8 flex flex-col items-center">
                <img
                  className="absolute top-[14px] right-4"
                  src={Like}
                  alt="like"
                />
                <img
                  className="absolute top-[19px] left-4 hidden lg:block"
                  src={Tag}
                  alt="tag"
                />
                <img
                  className="max-w-[259px] lg:max-w-[383px]"
                  src="/images/cart1.png"
                  alt=""
                />
                <div className="hidden lg:block">
                  <div className="max-w-[580px] flex items-center mt-8 ">
                    <div className="p-1 rounded-[120px]">
                      <img
                        className="swiper-button-next-btnn"
                        src={Leftarrow}
                        alt=""
                      />
                    </div>
                    <Swiper
                      navigation={{
                        nextEl: ".swiper-button-next-btnn",
                        prevEl: ".swiper-button-prev-btnn",
                      }}
                      loop={true}
                      slidesPerView={4}
                      spaceBetween={30}
                      modules={[Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div>
                          <img
                            className="rounded-[14px]"
                            src="/images/cart2.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            className="rounded-[14px]"
                            src="/images/cart3.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            className="rounded-[14px]"
                            src="/images/cart4.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            className="rounded-[14px]"
                            src="/images/cart5.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            className="rounded-[14px]"
                            src="/images/cart2.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            className="rounded-[14px]"
                            src="/images/cart3.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            className="rounded-[14px]"
                            src="/images/cart4.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            className="rounded-[14px]"
                            src="/images/cart5.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="p-1 rounded-[120px]">
                      <img
                        className="swiper-button-prev-btnn"
                        src={Rightarrow}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-[30px] mt-[30px]">
                <Liquidbutton className="w-full rounded-lg py-4 px-6">
                  Add to cart
                </Liquidbutton>
                <Solidbutton className="w-full rounded-lg py-4 px-6">
                  Buy Now
                </Solidbutton>
              </div >
            </div >
          </div >
          {/*  */}
          <section div className="w-full" >
            <div className="flex flex-col-reverse xl:flex-col gap-y-[10px] lg:mb-[6px] mb-[30px] mt-5">
              <div className="flex justify-between items-baseline ">
                <h2 className="text_34_16 text-blue_gray_700">
               {capitalizeFirstLetter(data?.title)}
                </h2>
                <div className="hidden lg:block">
                  <button className="flex gap-x-[6px] py-2 px-4 rounded-[50px] border-[1px] text-blue_gray_300">
                    <img src="/svg/share.svg" alt="" /> Share
                  </button>
                </div>
              </div>
              <div className="flex gap-x-1">
                <div className="flex items-center">
                  <img src="/svg/star.svg" alt="star" />
                  <img src="/svg/star.svg" alt="star" />
                  <img src="/svg/star.svg" alt="star" />
                  <img src="/svg/star.svg" alt="star" />
                  <img src="/svg/star.svg" alt="star" />
                </div>
                <div>
                  <h5>15 Ratings & 8 Reviews</h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[34px]">
              <div className="flex gap-x-[10px] items-center ">
                <h1 className="text_48_20 text-blue_gray_900">$ 20.00</h1>
                <p className="text_20_12 text-blue_gray_200 ">
                  <del>$32.00</del>
                </p>
                <p className="text_20_14 text-blue_gray_500">(15% Off)</p>
                <p className="text-light_success_main border-2 text-[13px] leading-[18px] border-light_success_main rounded-[18px] py-1 px-3">
                  in Stock
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center gap-x-[10px]">
                <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start">
                  Choose Color:
                </h5>
                <div className="flex items-center gap-x-[10px]">
                  <div>
                    <div className=" rounded-[4px] mx-[10px] p-[6px] max-w-[60px] bg-blue_gray_50">
                      <img
                        className="max-h-[54px] w-full"
                        src="/images/color1.png"
                        alt="color"
                      />
                    </div>
                    <p className="mt-1 text-center text_14_1 hidden lg:block text-blue_gray_200">
                      Navy Blue
                    </p>
                  </div>

                  <div>
                    <div className="rounded-[4px] mx-[10px] p-[6px] max-w-[60px] bg-blue_gray_50">
                      <img
                        className="max-h-[54px] w-full"
                        src="/images/color2.png"
                        alt="color"
                      />
                    </div>
                    <p className="mt-1 text-center text_14_1 hidden lg:block text-blue_gray_200">
                      Red
                    </p>
                  </div>
                  <div>
                    <div className="rounded-[4px] mx-[10px] p-[6px] max-w-[60px] bg-blue_gray_50">
                      <img
                        className="max-h-[54px] w-full"
                        src="/images/color3.png"
                        alt="color"
                      />
                    </div>
                    <p className="mt-1 text-center text_14_1 hidden lg:block text-blue_gray_200">
                      Green
                    </p>
                  </div>
                  <div>
                    <div className="rounded-[4px] mx-[10px] p-[6px] max-w-[60px] bg-blue_gray_50">
                      <img
                        className="max-h-[54px] w-full"
                        src="/images/color4.png"
                        alt="color"
                      />
                    </div>
                    <p className="mt-1 text-center text_14_1 hidden lg:block text-blue_gray_200">
                      Sky Blue
                    </p>
                  </div>
                  <div>
                    <div className="rounded-[4px] mx-[10px] p-[6px] max-w-[60px] bg-blue_gray_50">
                      <img
                        className="max-h-[54px] w-full"
                        src="/images/color1.png"
                        alt="color"
                      />
                    </div>
                    <p className="mt-1 text-center text_14_1 hidden lg:block text-blue_gray_200">
                      Navy Blue
                    </p>
                  </div>
                  <div>
                    <div className="rounded-[4px] mx-[10px] p-[6px] max-w-[60px] bg-blue_gray_50">
                      <img
                        className="max-h-[54px] w-full"
                        src="/images/color2.png"
                        alt="color"
                      />
                    </div>
                    <p className="mt-1 text-center text_14_1 hidden lg:block text-blue_gray_200">
                      Red
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between lg:justify-normal">
                <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start">
                  Choose Size:
                </h5>
                <div className="hidden 2xl:block">
                  <div className=" flex gap-x-5">
                    <h6 className="text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                      S
                    </h6>
                    <h6 className="text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                      M
                    </h6>
                    <h6 className="text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                      L
                    </h6>
                    <h6 className="text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                      XL
                    </h6>
                    <h6 className="text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                      XXL
                    </h6>
                    <h6 className="text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                      XXXL
                    </h6>
                  </div>
                </div>
                <a
                  href=""
                  className="uppercase py-[10px] px-4 flex items-center text-light_primary"
                >
                  Size Chart{" "}
                  <img className="hidden lg:block" src={Rightarrow} alt="img" />
                </a>
              </div>
              <div className="flex lg:items-center flex-col lg:flex-row">
                <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start">
                  Quantity:
                </h5>
                <div className="flex items-center gap-x-[6px] py-1 px-[6px] border-[1px] border-blue_gray_50 rounded-[30px] mt-[10px] lg:mt-0">
                  <img
                    className="rounded-[120px] px-[3px] m-1 "
                    src={Substraction}
                    alt="icon"
                  />
                  <p className="text-blue_gray_400 w-[30px] text-center">1</p>
                  <img
                    className="rounded-[120px] m-1"
                    src={Addition}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start">
                  Offers:
                </h5>
                <div className="flex flex-col gap-y-[6px]">
                  <p className="flex flex-col lg:flex-row text-blue_gray_500 gap-x-[6px] border-b-[1px] mb-[6px] pb-[6px] lg:border-none lg:mb-0 lg:pb-0">
                    {" "}
                    <span className=" text-blue_gray_700 text_14_1_12 flex items-center">
                      <img className="mr-[6px]" src={Offertag} alt="icon" />{" "}
                      Special Offer
                    </span>
                    Claim Extra 10% Off Above Rs. 599 (Only on First Purchase)
                  </p>
                  <p className="flex  flex-col lg:flex-row text-blue_gray_500 gap-x-[6px] border-b-[1px] mb-[6px] pb-[6px] lg:border-none lg:mb-0 lg:pb-0">
                    {" "}
                    <span className=" text-blue_gray_700 text_14_1_12 flex items-center">
                      <img className="mr-[6px]" src={Offertag} alt="icon" />{" "}
                      Special Offer
                    </span>
                    Get Extra 10% off on Full Swipe purchases through ICICI Bank
                    Cards.
                  </p>
                  <p className="flex  flex-col lg:flex-row text-blue_gray_500 gap-x-[6px] border-b-[1px] mb-[6px] pb-[6px] lg:border-none lg:mb-0 lg:pb-0">
                    {" "}
                    <span className=" text-blue_gray_700 text_14_1_12 flex items-center">
                      <img className="mr-[6px]" src={Offertag} alt="icon" />{" "}
                      Special Offer
                    </span>
                    Get Extra 15% off on HDFC Bank.
                  </p>
                  <p className="text_14_2 text-blue-200 mt-1">
                    +See More Offers
                  </p>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row">
                <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start">
                  Check Eligibility:
                </h5>
                <div className="flex flex-col 2xl:flex-row">
                  <div className="lg:mr-[30px]">
                    <div className="flex border-[1px] rounded-md border-blue_gray_100 py-[14px] px-4 items-center justify-between">
                      <input type="text" name="" id="" placeholder="000000" />
                      <p className="text-light_primary text_14_1_12">Check</p>
                    </div>
                    <p className="text_14_1_12 text-blue_gray_300 mt-[10px]">
                      Enter Pincode For Check Availablity
                    </p>
                  </div>
                  <div className="flex gap-x-[6px] border-t-[1px] lg:border-none mt-3 pt-3 lg:pt-0 lg:my-0 ">
                    <div className="flex flex-col xl:flex-row  items-center xl:items-start gap-x-2 bg-light_primary_shades_4p xl:bg-white">
                      <img src={Surity} alt="" />
                      <h5 className="text_14_1_10 text-blue_gray_500 text-center xl:text-start">
                        100% Original Products
                      </h5>
                    </div>
                    <div className="flex flex-col xl:flex-row  items-center xl:items-start gap-x-2 bg-light_primary_shades_4p xl:bg-white">
                      <img src={Return} alt="" />
                      <h5 className="text_14_1_10 text-blue_gray_500 text-center xl:text-start">
                        14 Days Easy Return Policy
                      </h5>
                    </div>
                    <div className="flex flex-col xl:flex-row  items-center xl:items-start gap-x-2 bg-light_primary_shades_4p xl:bg-white">
                      <img src={Delhivery} alt="" />
                      <h5 className="text_14_1_10 text-blue_gray_500 text-center xl:text-start">
                        Cash On Delivery Available
                      </h5>
                    </div>
                  </div>
                  {/* <div className="lg:mr-[30px]">
                    <div className="flex border-[1px] rounded-md border-blue_gray_100 py-[14px] px-4 items-center justify-between">
                      <input type="text" name="" id="" placeholder="000000" />
                      <p className="text-light_primary text_14_1_12">Check</p>
                    </div>
                    <p className="text_14_1_12 text-blue_gray_300 mt-[10px]">
                      Enter Pincode For Check Availablity
                    </p>
                  </div>
                  <div className="flex gap-x-[6px] border-t-[1px] lg:border-none mt-3 pt-3 lg:pt-0 lg:my-0 ">
                    <div className="flex flex-col xl:flex-row  items-center xl:items-start gap-x-2 bg-light_primary_shades_4p xl:bg-white">
                      <img src={Surity} alt="" />
                      <h5 className="text_14_1_10 text-blue_gray_500 text-center xl:text-start">
                        100% Original Products
                      </h5>
                    </div>
                    <div className="flex flex-col xl:flex-row  items-center xl:items-start gap-x-2 bg-light_primary_shades_4p xl:bg-white">
                      <img src={Return} alt="" />
                      <h5 className="text_14_1_10 text-blue_gray_500 text-center xl:text-start">
                        14 Days Easy Return Policy
                      </h5>
                    </div>
                    <div className="flex flex-col xl:flex-row  items-center xl:items-start gap-x-2 bg-light_primary_shades_4p xl:bg-white">
                      <img src={Delhivery} alt="" />
                      <h5 className="text_14_1_10 text-blue_gray_500 text-center xl:text-start">
                        Cash On Delivery Available
                      </h5>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="my-10">
              <div className="flex justify-between items-center">
                <h2 className="text_34_20 text-blue_gray_700">
                  Product Details
                </h2>
                <img src={Downarrow} alt="img" />
              </div>
              <p className="text-blue_gray_600 mt-5 text_16_1_12 border-b-2 pb-5 mb-5">
                Take the sporty look to the streets with the HRX Men's Active
                T-shirt. This black solid T-shirt can be styled in a million
                ways to create a look that will be remembered
              </p>
              <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600  max-w-[140px] w-full text-start">
                    Style:{" "}
                  </h6>
                  <h6 className="text-blue_gray_400">Round Neck</h6>
                </div>
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
                    Sleeve:{" "}
                  </h6>
                  <h6 className="text-blue_gray_400">Short Sleeves</h6>
                </div>
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
                    Colour:
                  </h6>{" "}
                  <h6 className="text-blue_gray_400">Grey</h6>
                </div>
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
                    Print:{" "}
                  </h6>
                  <h6 className="text-blue_gray_400">Solid</h6>
                </div>
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
                    Fit:
                  </h6>{" "}
                  <h6 className="text-blue_gray_400">Regular</h6>
                </div>
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
                    Size:{" "}
                  </h6>
                  <h6 className="text-blue_gray_400">
                    S ( Chest 36” - Shoulder 16” )
                  </h6>
                </div>
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
                    Qty:{" "}
                  </h6>
                  <h6 className="text-blue_gray_400">1 T-Shirt</h6>
                </div>
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
                    Ideal For:{" "}
                  </h6>
                  <h6 className="text-blue_gray_400">Men's Fashion</h6>
                </div>
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
                    Suitable For:{" "}
                  </h6>
                  <h6 className="text-blue_gray_400">Western Wear</h6>
                </div>
                <div className="flex gap-x-5 items-center">
                  <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
                    Fabric Care:{" "}
                  </h6>
                  <h6 className="text-blue_gray_400">100% Cotton</h6>
                </div>
              </div>
            </div>
            <div className="rounded-[14px] bg-extra_bg  p-5 max-w-[915px]">
              <h2 className="text_34_20  text-blue_gray_700 pb-6">Add On</h2>
              <div className="max-w-[915px] ">
                {/* not responsive section */}
                {/* <div className="flex items-center flex-col xl:flex-row">
                  <div>
                    <img
                      className="  p-1 bg-white rounded-[120px] swiper-button-prev-btn"
                      src={Leftarrow}
                      alt=""
                    />
                  </div>
                  <Swiper
                    navigation={{
                      nextEl: ".swiper-button-next-btn",
                      prevEl: ".swiper-button-prev-btn",
                    }}
                    slidesPerView={2}
                    spaceBetween={30}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      {" "}
                      <Productcard />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <Productcard />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <Productcard />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <Productcard />
                    </SwiperSlide>
                  </Swiper> 
                  <div>
                    <img
                      className="  p-1 bg-white rounded-[120px] swiper-button-next-btn"
                      src={Rightarrow}
                      alt=""
                    />
                  </div>
                  <div className="p-[14px] bg-white max-w-[280px] w-full mb-10">
                    <h3 className="text-blue_gray_700 text_20_16 pb-3">
                      Price Summary
                    </h3>
                    <div className="flex flex-col gap-y-5 border-t-[1px] pt-5">
                      <div className="flex justify-between">
                        <h6 className="text_14_1 text-blue_gray_400">
                          Product Price
                        </h6>
                        <h6 className="text_14_1 text-blue_gray_600">$20.00</h6>
                      </div>
                      <div className="flex justify-between">
                        <h6 className="text_14_1 text-blue_gray_400">GST</h6>
                        <h6 className="text_14_1 text-blue_gray_600">$2.00</h6>
                      </div>
                      <div className="flex justify-between">
                        <h6 className="text_14_1 text-blue_gray_400">
                          Discount
                        </h6>
                        <h6 className="text_14_1 text-blue_gray_600">
                          - $20.00
                        </h6>
                      </div>
                      <div className="flex justify-between">
                        <h6 className="text_14_1 text-blue_gray_400">
                          Delivery Charges
                        </h6>
                        <h6 className="text_14_1 text-blue_gray_600">Free</h6>
                      </div>
                      <div className="flex justify-between border-t-[1px] pt-[10px]">
                        <h6 className="text-blue_gray_700 text_16_2">Total</h6>
                        <h6 className="text-blue_gray_700 text_16_2">$22.00</h6>
                      </div>
                      <Solidbutton className="uppercase mt-[79px] rounded-md text-lg leading-[26px] font-semibold">
                        add items in cart
                      </Solidbutton>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="border-y-[1px] py-5 mt-10 mb-5">
              <div className="flex justify-between items-center">
                <h2 className="text_34_20 text-blue_gray_700">
                  Rating & Reviews
                </h2>
                <Liquidbutton className="uppercase border-none xl:border-[6px]  rounded-md text-lg leading-[26px] font-semibold">
                  Write Review
                </Liquidbutton>
              </div>
              <div className="flex 2xl:flex-col">
                <div className="flex flex-col xl:flex-row lx:justify-between my-5 w-full items-center 2xl:justify-between">
                  <div className="flex items-center xl:gap-x-5 p-2 mb-2 xl:mb-0 ">
                    <div className="flex gap-x-[6px]">
                      <img
                        className="hidden 2xl:block"
                        src="/svg/star.svg"
                        alt="star icon"
                      />
                      <img
                        className="hidden 2xl:block"
                        src="/svg/star.svg"
                        alt="star icon"
                      />
                      <img
                        className="hidden 2xl:block"
                        src="/svg/star.svg"
                        alt="star icon"
                      />
                      <img
                        className="hidden 2xl:block"
                        src="/svg/star.svg"
                        alt="star icon"
                      />
                      <img src="/svg/star.svg" alt="star icon" />
                    </div>
                    <h5 className="text_24_16_medium text-blue_gray_600">
                      4.5 Star
                    </h5>
                  </div>
                  <p className="text_20_14 text-blue_gray_400">120 Reviews</p>
                </div>
                <div className="flex justify-between items-start w-full 2xl:hidden">
                  <div className="w-full flex flex-col gap-y-[6px]">
                    <div className="flex items-center max-w-[259px]  justify-between gap-x-2">
                      <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                      <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                        5 Star
                      </p>
                    </div>
                    <div className="flex items-center max-w-[259px] justify-between gap-x-2">
                      <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                      <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                        4 Star
                      </p>
                    </div>
                    <div className="flex items-center max-w-[259px] justify-between gap-x-2">
                      <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                      <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                        3 Star
                      </p>
                    </div>
                    <div className="flex items-center max-w-[259px] justify-between gap-x-2">
                      <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                      <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                        2 Star
                      </p>
                    </div>
                    <div className="flex items-center max-w-[259px] justify-between gap-x-2">
                      <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                      <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                        1 Star
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="hidden 2xl:block w-full">
                  <div className="flex justify-between items-start w-full ">
                    <div className="w-full flex flex-col gap-y-[6px]">
                      <div className="flex items-center max-w-[259px]  justify-between gap-x-2">
                        <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                        <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                          5 Star
                        </p>
                      </div>
                      <div className="flex items-center max-w-[259px] justify-between gap-x-2">
                        <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                        <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                          4 Star
                        </p>
                      </div>
                      <div className="flex items-center max-w-[259px] justify-between gap-x-2">
                        <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                        <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                          3 Star
                        </p>
                      </div>
                      <div className="flex items-center max-w-[259px] justify-between gap-x-2">
                        <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                        <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                          2 Star
                        </p>
                      </div>
                      <div className="flex items-center max-w-[259px] justify-between gap-x-2">
                        <p className="w-full bg-light_other_rating_active h-2 max-w-[211px]"></p>
                        <p className="text_14_1_10 text-blue_gray_300 min-w-[29px]">
                          1 Star
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 mt-[10px] 2xl:mt-0">
                  <img
                    className="max-w-[42px] md:max-w-[62px] xl:max-w-[80px] rounded-[4px]"
                    src="/images/cart2.png"
                    alt=""
                  />
                  <img
                    className="max-w-[42px] md:max-w-[62px] xl:max-w-[80px] rounded-[4px]"
                    src="/images/cart3.png"
                    alt=""
                  />
                  <img
                    className="max-w-[42px] md:max-w-[62px] xl:max-w-[80px] rounded-[4px]"
                    src="/images/cart4.png"
                    alt=""
                  />
                  <img
                    className="max-w-[42px] md:max-w-[62px] xl:max-w-[80px] rounded-[4px]"
                    src="/images/cart5.png"
                    alt=""
                  />
                  <img
                    className="max-w-[42px] md:max-w-[62px] xl:max-w-[80px] rounded-[4px]"
                    src="/images/cart4.png"
                    alt=""
                  />
                  <img
                    className="max-w-[42px] md:max-w-[62px] xl:max-w-[80px] rounded-[4px]"
                    src="/images/cart5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="py-[10px] border-b-[1px] pb-[10px]">
              <div className="flex items-center justify-between">
                <h4 className="text-blue_gray_800 text_20_16_medium">
                  {" "}
                  Mike Posner
                  <span className="ml-2 text_16_1_12 text-blue_gray_200">
                    (Varified Buyer)
                  </span>
                </h4>
                <h6 className="text_14_1_12 text-blue_gray_200">8 Sep, 2022</h6>
              </div>
              <div className="flex items-center gap-x-5 mt-2">
                <div className="flex gap-x-[6px]">
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                </div>
                <h5 className="text_14_1 text-blue_gray_500">4.5 Star</h5>
              </div>
              <div className="mt-5">
                <h4 className="text_20_16 text-blue_gray_600">
                  Comfortable And Good Design
                </h4>
                <p className="text_14_1_12_normal text-blue_gray_400 my-[10px]">
                  Photographs are a way of preserving a moment in our lives for
                  the rest of our lives. Many of us have at least been tempted
                  at the flashy array of photo printers which seemingly leap off
                  the shelves at even the least tech-savvy.{" "}
                </p>
                <div className="flex gap-x-[14px]">
                  <img src="/images/review1.png" alt="" />
                  <img src="/images/review2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="py-[10px] border-b-[1px] pb-[10px]">
              <div className="flex items-center justify-between">
                <h4 className="text-blue_gray_800 text_20_16_medium">
                  {" "}
                  Mike Posner
                  <span className="ml-2 text_16_1_12 text-blue_gray_200">
                    (Varified Buyer)
                  </span>
                </h4>
                <h6 className="text_14_1_12 text-blue_gray_200">8 Sep, 2022</h6>
              </div>
              <div className="flex items-center gap-x-5 mt-2">
                <div className="flex gap-x-[6px]">
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                  <img
                    className="max-w-[18px]"
                    src="/svg/star.svg"
                    alt="star icon"
                  />
                </div>
                <h5 className="text_14_1 text-blue_gray_500">4.5 Star</h5>
              </div>
              <div className="mt-5">
                <h4 className="text_20_16 text-blue_gray_600">
                  Comfortable And Good Design
                </h4>
                <p className="text_14_1_12_normal text-blue_gray_400 my-[10px]">
                  Photographs are a way of preserving a moment in our lives for
                  the rest of our lives. Many of us have at least been tempted
                  at the flashy array of photo printers which seemingly leap off
                  the shelves at even the least tech-savvy.{" "}
                </p>
                <div className="flex gap-x-[14px]">
                  <img src="/images/review1.png" alt="" />
                  <img src="/images/review2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-start flex-col xl:flex-row xl:items-center justify-between  border-y-[1px] py-5">
                <h2 className="text-blue_gray_700 text_34_20">
                  Frequently Asked Questions
                </h2>
                <div className="flex">
                  <input
                    className="py-3 px-[14px] placeholder:text_16_2 placeholder:text-blue_gray_700 mr-[5px] border-[1px] 
                    w-full
                   max-w-[327px] xl:max-w-[240px] mt-[14px] xl:mt-0 "
                    type="text"
                    name=""
                    id=""
                    placeholder="Search Questions..."
                  />
                  <Solidbutton className="uppercase rounded-[4px] w-full hidden xl:block">
                    Ask question
                  </Solidbutton>
                </div>
              </div>
              <div className="mt-5 border-b-[1px] pb-5">
                <h3 className="text_34_16 text-blue_gray_700 mt-[10px]">
                  Q- Comfortable And Good Design
                </h3>
                <p className="text_14_1_12 text-blue_gray_300 pt-2 pb-5">
                  Ans- Photographs are a way of preserving a moment in our lives
                  for the rest of our lives. Many of us have at least been
                  tempted at the flashy array of photo printers which seemingly
                  leap off the shelves at even the least tech-savvy.{" "}
                </p>
                <div className="flex items-center justify-between">
                  <h5 className="flex items-center gap-x-1 text_16_2_14">
                    Mike Posner <img src="/svg/verified.svg" alt="icon" />
                  </h5>
                  <div className="flex items-center gap-x-4">
                    <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_400">
                      {" "}
                      <img src="/svg/likeup.svg" alt="" />
                      21 Likes
                    </p>{" "}
                    <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_200">
                      {" "}
                      <img src="/svg/likedown.svg" alt="" />
                      21 Likes
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 border-b-[1px] pb-5">
                <h3 className="text_34_16 text-blue_gray_700 mt-[10px]">
                  Q- Comfortable And Good Design
                </h3>
                <p className="text_14_1_12 text-blue_gray_300 pt-2 pb-5">
                  Ans- Photographs are a way of preserving a moment in our lives
                  for the rest of our lives. Many of us have at least been
                  tempted at the flashy array of photo printers which seemingly
                  leap off the shelves at even the least tech-savvy.{" "}
                </p>
                <div className="flex items-center justify-between">
                  <h5 className="flex items-center gap-x-1 text_16_2_14">
                    Mike Posner <img src="/svg/verified.svg" alt="icon" />
                  </h5>
                  <div className="flex items-center gap-x-4">
                    <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_400">
                      {" "}
                      <img src="/svg/likeup.svg" alt="" />
                      21 Likes
                    </p>{" "}
                    <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_200">
                      {" "}
                      <img src="/svg/likedown.svg" alt="" />
                      21 Likes
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 border-b-[1px] pb-5">
                <h3 className="text_34_16 text-blue_gray_700 mt-[10px]">
                  Q- Comfortable And Good Design
                </h3>
                <p className="text_14_1_12 text-blue_gray_300 pt-2 pb-5">
                  Ans- Photographs are a way of preserving a moment in our lives
                  for the rest of our lives. Many of us have at least been
                  tempted at the flashy array of photo printers which seemingly
                  leap off the shelves at even the least tech-savvy.{" "}
                </p>
                <div className="flex items-center justify-between">
                  <h5 className="flex items-center gap-x-1 text_16_2_14">
                    Mike Posner <img src="/svg/verified.svg" alt="icon" />
                  </h5>
                  <div className="flex items-center gap-x-4">
                    <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_400">
                      {" "}
                      <img src="/svg/likeup.svg" alt="" />
                      21 Likes
                    </p>{" "}
                    <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_200">
                      {" "}
                      <img src="/svg/likedown.svg" alt="" />
                      21 Likes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section >
        </div >
        <div className=" py-10 md:py-[60px] xl:py-[80px]" >
          <Swipercardsectioncommon topbtn={true} card={"similarproductscard"} className={"text-center"} mainHeading={"Best Offers On Similar Products"} smallHeading={"Similar Products"} />
        </div>
        {/* <section >
          <div className="flex justify-between items-center">
            <Swipersection
              smallHeading={"Similar Products"}
              mainHeading={"Best Offers On Similar Products"}
              className="md:text-start"
            ></Swipersection>
            <div className="hidden min-w-[1279px]:block xl:flex gap-x-5 ">
              <div>
                <img
                  className="bg-white rounded-[120px] p-1 swiper-button-prev-btn"
                  src="/svg/leftarrow.svg"
                  alt="icon"
                />
              </div>
              <div>
                <img
                  className="bg-white rounded-[120px] p-1 swiper-button-next-btn"
                  src="/svg/rightarrow.svg "
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div className="mt-[60px]">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next-btn",
                prevEl: ".swiper-button-prev-btn",
              }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              modules={[Navigation]}
              breakpoints={{
                300: {
                  slidesPerView: 1.3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
                1600: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <div className="relative">
                  <img
                    className=" xl:max-w-[510px] min-h-[170px]"
                    src="/images/productimg.png"
                    alt="img"
                  />
                  <div className="absolute top-[28.5px] left-[10px] xl:top-[41px] xl:left-5 bottom-[23.5px]">
                    <h3 className="text_34_20 text-blue_gray_900">
                      Denim Jeans
                    </h3>
                    <h5 className="text_24_16 text-blue_gray_800 flex items-center gap-x-[6px] mt-[10px]">
                      <span className="text_16_1_12 text-blue_gray_800">
                        Get
                      </span>
                      40-60% Off
                    </h5>
                    <Solidbutton className="py-[10px] px-4 min-w-[200px]:py-[5px] lg:py-[10px] lg:px-4 mt-[14px] xl:mt-6 rounded-md">
                      Shop Now
                    </Solidbutton>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative">
                  <img
                    className=" xl:max-w-[510px] min-h-[170px]"
                    src="/images/productimg.png"
                    alt="img"
                  />
                  <div className="absolute top-[28.5px] left-[10px] xl:top-[41px] xl:left-5 bottom-[23.5px]">
                    <h3 className="text_34_20 text-blue_gray_900">
                      Denim Jeans
                    </h3>
                    <h5 className="text_24_16 text-blue_gray_800 flex items-center gap-x-[6px] mt-[10px]">
                      <span className="text_16_1_12 text-blue_gray_800">
                        Get
                      </span>
                      40-60% Off
                    </h5>
                    <Solidbutton className="py-[10px] px-4 min-w-[200px]:py-[5px] lg:py-[10px] lg:px-4 mt-[14px] xl:mt-6 rounded-md">
                      Shop Now
                    </Solidbutton>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative">
                  <img
                    className=" xl:max-w-[510px] min-h-[170px]"
                    src="/images/productimg.png"
                    alt="img"
                  />
                  <div className="absolute top-[28.5px] left-[10px] xl:top-[41px] xl:left-5 bottom-[23.5px]">
                    <h3 className="text_34_20 text-blue_gray_900">
                      Denim Jeans
                    </h3>
                    <h5 className="text_24_16 text-blue_gray_800 flex items-center gap-x-[6px] mt-[10px]">
                      <span className="text_16_1_12 text-blue_gray_800">
                        Get
                      </span>
                      40-60% Off
                    </h5>
                    <Solidbutton className="py-[10px] px-4 min-w-[200px]:py-[5px] lg:py-[10px] lg:px-4 mt-[14px] xl:mt-6 rounded-md">
                      Shop Now
                    </Solidbutton>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative">
                  <img
                    className=" xl:max-w-[510px] min-h-[170px]"
                    src="/images/productimg.png"
                    alt="img"
                  />
                  <div className="absolute top-[28.5px] left-[10px] xl:top-[41px] xl:left-5 bottom-[23.5px]">
                    <h3 className="text_34_20 text-blue_gray_900">
                      Denim Jeans
                    </h3>
                    <h5 className="text_24_16 text-blue_gray_800 flex items-center gap-x-[6px] mt-[10px]">
                      <span className="text_16_1_12 text-blue_gray_800">
                        Get
                      </span>
                      40-60% Off
                    </h5>
                    <Solidbutton className="py-[10px] px-4 min-w-[200px]:py-[5px] lg:py-[10px] lg:px-4 mt-[14px] xl:mt-6 rounded-md">
                      Shop Now
                    </Solidbutton>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section> */}
        <div className=" py-10 md:py-[60px] xl:py-[80px]" >
          <Swipercardsectioncommon mainHeading={"Buy Together"} topbtn={true} smallHeading={"Together"} card={"commoncard1"} />
        </div>
        {/* <section >
          <div className="flex justify-center xl:justify-between items-center">
            <Swipersection
              smallHeading={"Together"}
              mainHeading={"Buy Together"}
              className="text-start"
            ></Swipersection>
            <div className="hidden xl:block">
              <div className="flex gap-x-5">
                <div>
                  <img
                    className="bg-white rounded-[120px] p-1 swiper-button-prev-button"
                    src="/svg/leftarrow.svg"
                    alt="icon"
                  />
                </div>
                <div>
                  <img
                    className="bg-white rounded-[120px] p-1 swiper-button-next-button"
                    src="/svg/rightarrow.svg "
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[60px]">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next-button",
                prevEl: ".swiper-button-prev-button",
              }}
              slidesPerView={1.5}
              spaceBetween={30}
              modules={[Navigation]}
              breakpoints={{
                500: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              {dealsdata.map((item, index) => {
                return (
                  <SwiperSlide>
                    <div
                      key={index}
                      className="max-w-[375px] relative rounded-lg h-full"
                    >
                      <div className="px-1 pt-4 pb-5 md:px-[34px] md:pt-6 md:pb-7 bg-extra_bg flex justify-center flex-col items-center ">
                        <img
                          className="max-w-[123px] tab-w-[211px] md:max-w-[250px] xl:max-w-[307px] max-h-[115px] md:max-h-[230px] lg:max-h-[277px]  w-full "
                          src={`/images/${item["image"]}`}
                          alt=""
                        />
                        <div className="p-2 bg-white rounded-[50px] absolute hidden md:block top-4 right-4">
                          <img
                            className=" md:max-w-[18px]"
                            src={`/svg/${item["like"]}`}
                            alt="like"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center flex-col items-center py-[10px] px-[14px]">
                        <div className="text-center">
                          <h3 className="text_20_14 text-blue_gray_700 ">
                            {item["tittle"]}
                          </h3>
                          <p className="flex justify-center items-center text_16_1_12 py-[6px] text-blue_gray_400 gap-x-[6px]">
                            <span>
                              <img src={`/svg/${item.star}`} alt="star" />
                            </span>{" "}
                            {item["rating"]}{" "}
                          </p>
                        </div>
                        <div className="flex gap-x-[6px] items-center flex-col gap-1 md:flex-row">
                          <h1 className="text_24_16">{item["price"]}</h1>
                          <p className="text_16_2_10 text-blue_gray_200 ">
                            <del>{item["oldprice"]}</del>
                          </p>
                          <p className="text_16_2_12 text-blue_gray_500">
                            {item["discount"]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section> */}
        <section className=" py-10 md:py-[60px] xl:py-[80px]" >
          <div className="hidden md:block pb-[30px1] " >
            <Swipercardsectioncommon
              topbtn={true}
              card={"productcard"}
              smallHeading={"Featured"}
              mainHeading={"Recently Visited Products"} />
          </div>
          <div>
            <div className="flex justify-center md:hidden " >
              <Swipersection smallHeading={"Featured"} mainHeading={"Recently Visited Products"} />
            </div>
            <div className="md:hidden grid grid-cols-2" >
              {
                productsdata?.map((item, index) => {
                  return (<Fragment>
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
        </section>
        {/* <section >
          <div className="flex justify-between items-center">
            <Swipersection
              smallHeading={"Featured"}
              mainHeading={"Recently Visited Products"}
              className="text-start"
            ></Swipersection>
            <div className="hidden xl:block">
              <div className="flex gap-x-5">
                <div>
                  <img
                    className="bg-white rounded-[120px] p-1 swiper-button-prev-button"
                    src="/svg/leftarrow.svg"
                    alt="icon"
                  />
                </div>
                <div>
                  <img
                    className="bg-white rounded-[120px] p-1 swiper-button-next-button"
                    src="/svg/rightarrow.svg "
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div> */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 xl:hidden mt-[60px]"> */}
        {/* <Productcard />
            <Productcard />
            <Productcard />
            <Productcard /> */}
        {/* </div> */}
        {/* <div className="hidden xl:block mt-[60px]">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next-button",
                prevEl: ".swiper-button-prev-button",
              }}
              slidesPerView={4}
              spaceBetween={30}
              modules={[Navigation]}
              className="mySwiper"
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
          </div> */}

        {/* </section> */}
      </section >
    </>
  );
};

export default ProductDetail;

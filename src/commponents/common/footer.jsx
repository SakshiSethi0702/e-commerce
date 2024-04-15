import React from "react";
// import location from "/svg/Location.svg";
import call from "/svg/call.svg";
import mail from "/svg/mail.svg";
import Footerbutton from "./footerbutton";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue_gray_900">
        <section className="container pt-[40px] pb-[50px] xl:pt-[80px] md:pb-0">
          <h3 className="text-light_primary text-[22px] font-bold leading-9 mb-5 xl:hidden ">
            FashionCart.
          </h3>
          {/* <div className='flex justify-between '> */}
          <div className="grid gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-[30px]  xl:grid  xl:grid-cols-4">
            <div className=" ">
              <h4 className="text-white text_20_16 mb-[10px]  2xl:w-[240px]">
                Shopping
              </h4>
              <div className="grid grid-cols-2">
                <div className="grid gap-y-2">
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/exploreByCategories">Man's Fashion</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/exploreByCategories">Women's Fashion</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/exploreByCategories">Kid's Fashion</Link>
                  </li>
                </div>
                <div className="grid gap-y-2 md:mt-2">
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/new-arrivals">New Arrivals</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/dealonsale">Deals On Sale</Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[30px]">
              <div className="2xl:w-[240px]">
                <h4 className="text-white text_20_16 mb-[10px]">Help Desk</h4>
                <div className="grid gap-y-2">
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Returns</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Track Order</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/payment-policy">Payments</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/return-policy">Return Policy</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/customer-support">Customer Support</Link>
                  </li>
                </div>
                {/* </div> */}
              </div>
              <div className="2xl:w-[240px]">
                <h4 className="text-white text_20_16 mb-[10px]">Company</h4>
                <div className="grid gap-y-2">
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/about-us">About Us</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/blog-post">Blog</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/career">Career</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Help Center</Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="2xl:w-[375px] ">
              <h4 className="text-white text_20_16 mb-[10px]">
                Popular Searches
              </h4>
              <div className="grid grid-cols-2 gap-x-[10px]">
                <div className="grid gap-y-2">
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Handbag</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Wallet</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/career">Career</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Help Center</Link>
                  </li>
                </div>
                <div className="grid gap-y-2">
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Ethnic Wear</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Casual Shoes</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Designer Kurta Set</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Loafers</Link>
                  </li>
                  <li className="text-blue_gray_200 text_16_2_14">
                    < Link to="/">Banarsi Saree</Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col lg:col-span-4 xl:col-span-1 xl:items-start 2xl:w-[375px] ">
              <h4 className="text-white text_20_16 mb-[10px] xl:text-start">
                {" "}
                Contact Us
              </h4>
              <div className="grid gap-y-[14px]">
                <div>
                  <p className="text-blue_gray_200 text-center  flex justify-center xl:justify-start gap-x-2 ">
                    {" "}
                    <img src={mail} alt="img" /> Email Address
                  </p>
                  <p className="text-blue_gray_200 text-center xl:text-start">
                    dummyemail@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-blue_gray_200 text-center  flex justify-center xl:justify-start gap-x-2  ">
                    {" "}
                    <img src={call} alt="img" /> Mobile
                  </p>
                  <p className="text-blue_gray_200 text-center xl:text-start">
                    +91 12345 67890
                  </p>
                </div>
                <div>
                  <p className="text-blue_gray_200 text-center  flex justify-center xl:justify-start gap-x-2  ">
                    {" "}
                    {/* <img src={location} alt="img" />  */}
                    Store Location
                  </p>
                  <p className="text-blue_gray_200 text-center xl:text-start">
                    Akshya Colony 1st Block 1st Cross, Ram Nagar,
                    Bangalore-560016
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col-reverse py-5">
            <div>
              <p className="text-blue_gray_200 text_14_1_12 text-center ">
                © Copyright 2022 Madbrains. All Rights Are reserved.
              </p>
            </div>
            <div className="flex gap-x-2 justify-center my-5">
              <img
                className="max-w-[38px] md:max-w-[44px] lg:max-w-[48px] xl:max-w-[52.5px]"
                src="/images/pay1.png"
                alt=""
              />
              <img
                className="max-w-[38px] md:max-w-[44px] lg:max-w-[48px] xl:max-w-[52.5px]"
                src="/images/pay2.png"
                alt=""
              />
              <img
                className="max-w-[38px] md:max-w-[44px] lg:max-w-[48px] xl:max-w-[52.5px]"
                src="/images/pay3.png"
                alt=""
              />
              <img
                className="max-w-[38px] md:max-w-[44px] lg:max-w-[48px] xl:max-w-[52.5px]"
                src="/images/pay4.png"
                alt=""
              />
              <img
                className="max-w-[38px] md:max-w-[44px] lg:max-w-[48px] xl:max-w-[52.5px]"
                src="/images/pay5.png"
                alt=""
              />
              <img
                className="max-w-[38px] md:max-w-[44px] lg:max-w-[48px] xl:max-w-[52.5px]"
                src="/images/pay6.png"
                alt=""
              />
              <img
                className="max-w-[38px] md:max-w-[44px] lg:max-w-[48px] xl:max-w-[52.5px]"
                src="/images/pay7.png"
                alt=""
              />
            </div>
            <div className="flex justify-center gap-x-5">
              <Footerbutton>$ USD</Footerbutton>
              <Footerbutton>ENG</Footerbutton>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;

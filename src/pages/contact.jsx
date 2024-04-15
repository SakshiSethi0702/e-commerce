import React from "react";
import Policytittle from "../commponents/snippets/policiesheading/policytittle";
import Solidbutton from "../commponents/common/solidbutton";
import Faq from "../commponents/snippets/faq/faq";
import Swipersection from "../commponents/snippets/sections/swipersection";
import Input from "../commponents/snippets/input/input";

const Contact = () => {
  return (
    <>
      <section className="mt-[159px]">
        <div className=" py-[30px] bg-extra_bg">
          <Policytittle className="mt-[60px]">Contact Us</Policytittle>
        </div>
        <div className="container py-10 md:py-[60px] xl:py-[80px]">
          <div className=" grid lg:grid-cols-2">
            <div className="p-[30px] flex flex-col items-center lg:items-start lg:max-w-[645px]">
              <h2 className="text_34_24 text-light_primary">
                Get in Touch With Us
              </h2>
              <p className="text-blue_gray_400 text_16_1_12 mt-5 text-center">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <div className="mt-10 flex flex-col gap-y-[30px] max-w-[535px]">
                <div className="flex items-center flex-col  lg:flex-row gap-y-[10px] lg:gap-y-0 gap-x-5">
                  <img src="/svg/darkphone.svg" alt="" />
                  <h4 className="text_20_16 text-blue_gray_500 text-center lg:text-start">
                    (180) 01800 180{" "}
                    <span className="text-blue_gray_400 text_14_1_10">
                      (Mon - Sat 10AM - 6PM)
                    </span>
                  </h4>
                </div>
                <div className="flex items-center flex-col  lg:flex-row gap-y-[10px] lg:gap-y-0 gap-x-5">
                  <img src="/svg/darkmail.svg" alt="" />
                  <h4 className="text_20_16 text-blue_gray_500 text-center lg:text-start">
                    dummyemail@gmail.com
                  </h4>
                </div>
                <div className="flex items-center flex-col  lg:flex-row gap-y-[10px] lg:gap-y-0 gap-x-5">
                  <img src="/svg/darklocation.svg" alt="" />
                  <h4 className="text_20_16 text-blue_gray_500 text-center lg:text-start">
                    Akshya Colony 1st Block 1st Cross, Rammurthy Nagar,
                    Bangalore-560016
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="grid md:grid-cols-2 gap-[30px]">
               <Input className={"w-full border-[1px] border-blue_gray_100 py-[14px] px-4" }  inputtext={"Type Here"}>Full Name</Input>
               <Input className={"w-full border-[1px] border-blue_gray_100 py-[14px] px-4" }  inputtext={"Type Here"}>Email Address</Input>
               <Input className={"w-full border-[1px] border-blue_gray_100 py-[14px] px-4" }  inputtext={"Type Here"}>Mobile</Input>
               <Input className={"w-full border-[1px] border-blue_gray_100 py-[14px] px-4" }  inputtext={"Type Here"}>Subject</Input>
              </div>
              <div className="mt-[30px]">
                <Input className={"w-full border-[1px] py-[14px] px-4 "}  inputtext={"Type Here"}>Description</Input>
              </div>
              <div className="flex items-center my-[30px]">
                <input type="checkbox" name="" id="" className="m-[9px]" />
                <p className="text-blue_gray_200 text_16_1_12">
                  I agree to the Privacy Policy and Terms and Conditions
                </p>
              </div>
              <div className="flex justify-end">
                <Solidbutton className="py-4 px-6 lg:max-w-[240px] w-full rounded-md">
                  Submit
                </Solidbutton>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex justify-center">
            <Swipersection
              smallHeading={"FashionCart"}
              mainHeading={"Frequently Asked Questions"}
              className="text-center"
            ></Swipersection>
          </div>
          <div className="mt-[60px]">
            <Faq/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

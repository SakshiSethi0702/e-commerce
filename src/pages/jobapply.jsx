import React from "react";
import Policytittle from "../commponents/snippets/policiesheading/policytittle";
import Solidbutton from "../commponents/common/solidbutton";
import Input from "../commponents/snippets/input/input";
import { Link } from "react-router-dom";
const Jobapply = () => {
  return (
    <>
      <section className="mt-[159px]">
        <div className="p-3 mdp-[30px] bg-extra_bg">
            <div className="container">
          <Policytittle className="mt-[60px] text_34_24 text-blue_gray_800">
            Software Dev Engineer Job, FashionCart Bussiness (India)
          </Policytittle>
            </div>
          <div className="container">
            <div className="grid grid-cols-2 gap-y-[10px]  md:flex items-center justify-center gap-x-5 mt-5 mb-[30px]">
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Location - </p>
                New Delhi, India
              </h4>
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Job Type -</p>
                Full Time
              </h4>
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Experience -</p>
                0 to 4 Years
              </h4>
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Posted on -</p>
                20 Aug, 2022
              </h4>
            </div>
            <div className="flex justify-center ">
              <Solidbutton className="uppercase py-4 px-6 rounded-lg xl:max-w-[240px] w-full">
                <Link to="/job-form">
                Apply This Job
                </Link>
              </Solidbutton>
            </div>
          </div>
        </div>
        <div className="container  py-10 md:py-[60px] xl:py-[80px] flex flex-col gap-y-[30px] border-b-[1px] pb-[30px] mb-[30px]">
          <div>
            <h3 className="text-blue_gray_700 text_24_20 mb-5">Description</h3>
            <div className="flex flex-col gap-y-[15px]">
            <p className="text-justify text_16_1_14 text-blue_gray_500">
              Lorem ipsum dolor sit amet, sit amet feugiat lectus. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Ac scelerisque ante pulvinar.Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Donec ut rhoncus ex. Suspendisse ac rhoncus
              nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
              convallis convallis diam sit amet lacinia. Aliquam in elementum
              tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risuAliquam in elementum
              tellus.{" "}
            </p>
            </div>
          </div>
          <div>
            <h3 className="text-blue_gray_700 text_24_20 mb-5">The Opportunity</h3>
            <div className="flex flex-col gap-y-[15px]">
            <p className="text-justify text_16_1_14 text-blue_gray_500">
              Lorem ipsum dolor sit amet, sit amet feugiat lectus. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Ac scelerisque ante pulvinar.Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Donec ut rhoncus ex. Suspendisse ac rhoncus
              nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
              convallis convallis diam sit amet lacinia. Aliquam in elementum
              tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risuAliquam in elementum
              tellus.{" "}
            </p>
            <p className="text-justify text_16_1_14 text-blue_gray_500">
              Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risus. Maecenas eget
              condimentum velit, sit amet feugiat lectus.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Etiam eu turpis molestie,
              dictum est a, mattis tellus. Sed dignissim, metus nec fringilla ,
              ac scelerisque ante pulvinar. Donec{" "}
            </p>
            </div>
          </div>
          <div>
            <h3 className="text-blue_gray_700 text_24_20 mb-5">What You'll Bring</h3>
            <div className="flex flex-col gap-y-[15px]">
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
            </div>
          </div>
          <div>
            <h3 className="text-blue_gray_700 text_24_20 mb-5">Once Here You'll</h3>
            <div className="flex flex-col gap-y-[15px]">
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
            </div>
          </div>
          <div>
            <h3 className="text-blue_gray_700 text_24_20 mb-5">Requirements</h3>
            <div className="flex flex-col gap-y-[15px]">
            <p className="text-justify text_16_1_14 text-blue_gray_500">
              Lorem ipsum dolor sit amet, sit amet feugiat lectus. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Ac scelerisque ante pulvinar.Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Donec ut rhoncus ex. Suspendisse ac rhoncus
              nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
              convallis convallis diam sit amet lacinia. Aliquam in elementum
              tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risuAliquam in elementum
              tellus.{" "}
            </p>
            </div>
          </div>
          <div>
            <h3 className="text-blue_gray_700 text_24_20 mb-5">Why Treasure</h3>
            <div className="flex flex-col gap-y-[15px]">
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
            </div>
          </div>
            <div>
            <h3 className="text-blue_gray_700 text_24_20 mb-5">Our Amazing Treasure(s) (pun intended)!</h3>
            <div className="flex flex-col gap-y-[15px]">
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li  className="text-justify text_16_1_14 text-blue_gray_500">
            Class aptent taciti sociosqu ad litora torquent per conubia nostraLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
            </div>
          </div>
          <div>
            <h3 className="text-blue_gray_700 text_24_20 mb-5">Even Better</h3>
            <div className="flex flex-col gap-y-[15px]">
            <p className="text-justify text_16_1_14 text-blue_gray_500">
              Lorem ipsum dolor sit amet, sit amet feugiat lectus. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Ac scelerisque ante pulvinar.Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Donec ut rhoncus ex. Suspendisse ac rhoncus
              nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
              convallis convallis diam sit amet lacinia. Aliquam in elementum
              tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risuAliquam in elementum
              tellus.{" "}
            </p>
            <p className="text-justify text_16_1_14 text-blue_gray_500">
              Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risus. Maecenas eget
              condimentum velit, sit amet feugiat lectus.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Etiam eu turpis molestie,
              dictum est a, mattis tellus. Sed dignissim, metus nec fringilla ,
              ac scelerisque ante pulvinar. Donec{" "}
            </p>
            </div>
          </div>
        </div >
        <div className="p-3 md:p-[30px] bg-extra_bg">
        <div className="container">
          <Policytittle className="mt-[60px] text_34_24 text-blue_gray_800">
            Software Dev Engineer Job, FashionCart Bussiness (India)
          </Policytittle>
            </div>
          <div className="container">
            <div className="grid grid-cols-2 gap-y-[10px]  md:flex items-center justify-center gap-x-5 mt-5 mb-[30px]">
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Location - </p>
                New Delhi, India
              </h4>
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Job Type -</p>
                Full Time
              </h4>
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Experience -</p>
                0 to 4 Years
              </h4>
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Posted on -</p>
                20 Aug, 2022
              </h4>
            </div>
            <div className="flex justify-center ">
              <Solidbutton className="uppercase py-4 px-6 rounded-lg xl:max-w-[240px] w-full">
              <Link to="/job-form">
                Apply This Job
                </Link>
              </Solidbutton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobapply;

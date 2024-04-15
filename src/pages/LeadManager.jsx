import React, { useContext, useState } from "react";
import SoftwareDev from "../commponents/snippets/sections/SoftwareDev";
import LeadManagerFilter from "../commponents/snippets/sections/leadmanagerFilter.jsx";
import Accordion from "../commponents/snippets/accordion.jsx";
import Solidbutton from "../commponents/common/solidbutton.jsx";
import Swipersection from "../commponents/snippets/sections/swipersection.jsx";
import Overlay from "../contextfils/overlay.jsx";
import { Link } from "react-router-dom";

const LeadManager = () => {
  const [active, setactive] = useState(false);
  const [activeButton, setActiveButton] = useState();
  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  const [filteractive, setfilteractive] = useState(false);
  function overflow(e) {
    let body = document.getElementsByTagName("body");
    console.log(typeof e, "==============================");
    if (e === 1) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "auto";
    }
  }
  const { overlaypage, setoverlay } = useContext(Overlay);
  // console.log(overlay, setoverlay, "============================use context")

  return (
    <>
      <section className="mt-[159px]">
        <div className=" py-[30px]  bg-extra_bg">
            <div className="mt-[60px]">
          <h1 className=" pb-[10px] text_48_24 text-blue_gray_800 text-center hidden md:block ">
            Lead Manager
          </h1>
          <h2 className="text-blue_gray_500 text-center hidden md:block ">
            20 Jobs Available
          </h2>
            </div>
        </div>
        <div className=" container ">
          <div className="flex gap-[30px] my-[80px]">
            <div
              className={` ${
                activeButton === 1
                  ? "top-[43%] overflow-scroll h-[100vh] pb-[90px] z-10 left-0 "
                  : "top-[-200%]"
              } absolute md:static  `}
            >
              

              <LeadManagerFilter className="md:w-[250px] lg:w-[375px] " />
                </div>
        
            <div className="grid grid-cols-1  gap-[30px] ">
              <SoftwareDev />
              <SoftwareDev />
              <SoftwareDev />
              <SoftwareDev />
              <div className="flex justify-center pt-[10px]  ">
                <Solidbutton
                  className={
                    "text-center w-full md:max-w-[240px] rounded-[8px] py-[16px] px-[24px] items-center "
                  }
                >
                  Load more
                </Solidbutton>
              </div>
            </div>
          </div>
          <div className="  md:hidden flex gap-[14px] justify-between fixed top-0 left-0 right-0 z-10 py-[20px] px-[16px] bg-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="#78909C"
              />
            </svg>
            <span className="text_20 text-blue_gray_600">Man's Fashion</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#78909C"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
                fill="#78909C"
              />
            </svg>
          </div>

          <div className="  my-[80px] py-[40px] px-[16px] md:p-[60px]">
            <div className="justify-center flex">
              <Swipersection
                className={" items-center text-center"}
                smallHeading={"FashionCart"}
                mainHeading={"Frequently Asked Questions"}
              />
            </div>
            <div className=" mt-[60px] flex flex-col lg:flex-row gap-[14px]  md:gap-[30px]">
              <div className="flex flex-col gap-y-[14px] md:gap-y-[30px]">
                <Accordion
                  className={"py-[10px] px-[8px] md:p-5 "}
                  question={"How I Track The Progress of An My Orders?"}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos accusamus laudantium, earum animi quaerat delectus natus
                    inventore vel eius exercitationem. Magni deserunt
                    asperiores, porro odio provident modi quaerat nisi ut ullam
                    cupiditate! Dolorem quod vero, obcaecati esse officiis eius
                    perferendis ducimus asperiores aut.
                  </p>
                </Accordion>
                <Accordion
                  className={"py-[10px] px-[8px] md:p-5 "}
                  question={"How I Track The Progress of An My Orders?"}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos accusamus laudantium, earum animi quaerat delectus natus
                    inventore vel eius exercitationem. Magni deserunt
                    asperiores, porro odio provident modi quaerat nisi ut ullam
                    cupiditate! Dolorem quod vero, obcaecati esse officiis eius
                    perferendis ducimus asperiores aut.
                  </p>
                </Accordion>
                <Accordion
                  className={"py-[10px] px-[8px] md:p-5 "}
                  question={"How I Track The Progress of An My Orders?"}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos accusamus laudantium, earum animi quaerat delectus natus
                    inventore vel eius exercitationem. Magni deserunt
                    asperiores, porro odio provident modi quaerat nisi ut ullam
                    cupiditate! Dolorem quod vero, obcaecati esse officiis eius
                    perferendis ducimus asperiores aut.
                  </p>
                </Accordion>
                <Accordion
                  className={"py-[10px] px-[8px] md:p-5 "}
                  question={"How I Track The Progress of An My Orders?"}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos accusamus laudantium, earum animi quaerat delectus natus
                    inventore vel eius exercitationem. Magni deserunt
                    asperiores, porro odio provident modi quaerat nisi ut ullam
                    cupiditate! Dolorem quod vero, obcaecati esse officiis eius
                    perferendis ducimus asperiores aut.
                  </p>
                </Accordion>
              </div>
              <div className="flex flex-col  gap-y-[14px] md:gap-y-[30px]">
                <Accordion
                  className={"py-[10px] px-[8px] md:p-5 "}
                  question={"How I Track The Progress of An My Orders?"}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos accusamus laudantium, earum animi quaerat delectus natus
                    inventore vel eius exercitationem. Magni deserunt
                    asperiores, porro odio provident modi quaerat nisi ut ullam
                    cupiditate! Dolorem quod vero, obcaecati esse officiis eius
                    perferendis ducimus asperiores aut.
                  </p>
                </Accordion>
                <Accordion
                  className={"py-[10px] px-[8px] md:p-5 "}
                  question={"How I Track The Progress of An My Orders?"}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos accusamus laudantium, earum animi quaerat delectus natus
                    inventore vel eius exercitationem. Magni deserunt
                    asperiores, porro odio provident modi quaerat nisi ut ullam
                    cupiditate! Dolorem quod vero, obcaecati esse officiis eius
                    perferendis ducimus asperiores aut.
                  </p>
                </Accordion>
                <Accordion
                  className={"py-[10px] px-[8px] md:p-5 "}
                  question={"How I Track The Progress of An My Orders?"}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos accusamus laudantium, earum animi quaerat delectus natus
                    inventore vel eius exercitationem. Magni deserunt
                    asperiores, porro odio provident modi quaerat nisi ut ullam
                    cupiditate! Dolorem quod vero, obcaecati esse officiis eius
                    perferendis ducimus asperiores aut.
                  </p>
                </Accordion>
                <Accordion
                  className={"py-[10px] px-[8px] md:p-5 "}
                  question={"How I Track The Progress of An My Orders?"}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos accusamus laudantium, earum animi quaerat delectus natus
                    inventore vel eius exercitationem. Magni deserunt
                    asperiores, porro odio provident modi quaerat nisi ut ullam
                    cupiditate! Dolorem quod vero, obcaecati esse officiis eius
                    perferendis ducimus asperiores aut.
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="items-center  md:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px]  fixed z-40 bottom-0 w-[95%]  left-[50%] right-0 transform translate-x-[-50%] py-[6px] ">
            <div
              onClick={() => {
                handleClick(1);
                overflow(1);
                setoverlay(true);
                setactive(!active);
              }}
              className={`btn ${
                activeButton === 1 ? "active" : ""
              } btn pb-[1px] flex gap-[10px] py-[10px] items-center`}
            >
              <Link
                href="#"
                className={`text_10 ${
                  activeButton === 1 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                }`}
              >
                Filter By
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M7.16667 12H9.83333V10.6667H7.16667V12ZM2.5 4V5.33333H14.5V4H2.5ZM4.5 8.66667H12.5V7.33333H4.5V8.66667Z"
                  fill={activeButton === 1 ? "#F57E5D" : "#FFFFFF"}
                />
              </svg>
            </div>
            <span className="border-[#FFFFFF] opacity-10  h-[18px] border-[1px] "></span>
            <div
              onClick={() => {
                handleClick(2);
                overflow(2);
                setoverlay(false);
              }}
              className={`btn ${
                activeButton === 2 ? "active" : ""
              } btn pb-[1px] flex gap-[10px] py-[10px] `}
            >
              <Link
                href="#"
                className={`text_10 ${
                  activeButton === 2 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                }`}
              >
                Sort By
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.4987 2L3.83203 4.66H5.83203V9.33333H7.16536V4.66H9.16536L6.4987 2ZM11.1654 11.34V6.66667H9.83203V11.34H7.83203L10.4987 14L13.1654 11.34H11.1654Z"
                  fill={activeButton === 2 ? "#F57E5D" : "#FFFFFF"}
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadManager;

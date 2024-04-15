import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../snippets/dropdown/dropdown";
const Header = ({ className }) => {
  const [activeButton, setActiveButton] = useState(2); // Initially, button 2 is active

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  const buttonData = [
    {
      id: 1,
      text: "Button 1",
      pathb:
        "M10.5 4.74167L14.6667 8.49167V15H13V10H8.00002V15H6.33335V8.49167L10.5 4.74167ZM10.5 2.5L2.16669 10H4.66669V16.6667H9.66669V11.6667H11.3334V16.6667H16.3334V10H18.8334L10.5 2.5Z",
    },
    {
      id: 2,
      text: "Button 2",
      pathb:
        "M14.25 2.5C12.8 2.5 11.4084 3.175 10.5 4.24167C9.59169 3.175 8.20002 2.5 6.75002 2.5C4.18335 2.5 2.16669 4.51667 2.16669 7.08333C2.16669 10.2333 5.00002 12.8 9.29169 16.7L10.5 17.7917L11.7084 16.6917C16 12.8 18.8334 10.2333 18.8334 7.08333C18.8334 4.51667 16.8167 2.5 14.25 2.5ZM10.5834 15.4583L10.5 15.5417L10.4167 15.4583C6.45002 11.8667 3.83335 9.49167 3.83335 7.08333C3.83335 5.41667 5.08335 4.16667 6.75002 4.16667C8.03335 4.16667 9.28335 4.99167 9.72502 6.13333H11.2834C11.7167 4.99167 12.9667 4.16667 14.25 4.16667C15.9167 4.16667 17.1667 5.41667 17.1667 7.08333C17.1667 9.49167 14.55 11.8667 10.5834 15.4583Z",
    },
    {
      id: 3,
      text: "Button 3",
      pathb:
        "M13.4583 10.8333C14.0833 10.8333 14.6333 10.4916 14.9166 9.97496L17.9 4.56663C18.2083 4.01663 17.8083 3.33329 17.175 3.33329H4.84165L4.05831 1.66663H1.33331V3.33329H2.99998L5.99998 9.65829L4.87498 11.6916C4.26665 12.8083 5.06665 14.1666 6.33331 14.1666H16.3333V12.5H6.33331L7.24998 10.8333H13.4583ZM5.63331 4.99996H15.7583L13.4583 9.16663H7.60831L5.63331 4.99996ZM6.33331 15C5.41665 15 4.67498 15.75 4.67498 16.6666C4.67498 17.5833 5.41665 18.3333 6.33331 18.3333C7.24998 18.3333 7.99998 17.5833 7.99998 16.6666C7.99998 15.75 7.24998 15 6.33331 15ZM14.6666 15C13.75 15 13.0083 15.75 13.0083 16.6666C13.0083 17.5833 13.75 18.3333 14.6666 18.3333C15.5833 18.3333 16.3333 17.5833 16.3333 16.6666C16.3333 15.75 15.5833 15 14.6666 15Z",
    },
    {
      id: 4,
      text: "Button 4",
      pathb:
        "M10.5 4.91671C11.4667 4.91671 12.25 5.70004 12.25 6.66671C12.25 7.63337 11.4667 8.41671 10.5 8.41671C9.53334 8.41671 8.75001 7.63337 8.75001 6.66671C8.75001 5.70004 9.53334 4.91671 10.5 4.91671ZM10.5 12.4167C12.975 12.4167 15.5833 13.6334 15.5833 14.1667V15.0834H5.41668V14.1667C5.41668 13.6334 8.02501 12.4167 10.5 12.4167ZM10.5 3.33337C8.65834 3.33337 7.16668 4.82504 7.16668 6.66671C7.16668 8.50837 8.65834 10 10.5 10C12.3417 10 13.8333 8.50837 13.8333 6.66671C13.8333 4.82504 12.3417 3.33337 10.5 3.33337ZM10.5 10.8334C8.27501 10.8334 3.83334 11.95 3.83334 14.1667V16.6667H17.1667V14.1667C17.1667 11.95 12.725 10.8334 10.5 10.8334Z",
    },
  ];

  return (
    <>
      <header className={`  pt-[20px] md:pt-[30px] pb-[20px] fixed top-0 left-0 right-0 bg-white z-50 hidden ${className}`}>
        <div className="  container ">
          <div className="flex gap-[40px] md:gap-[60px] lg:gap-[80px] justify-between md:border-b-[2px] md:pb-[14px]  pb-[10px] mb-[10px] md:mb-[14px] items-center  ">
            <Link to="/">
              <img className="cursor-pointer" src="/svg/Logo.svg" alt="alt" />
            </Link>
            <div className=" hidden md:flex gap-[10px] relative max-w-[1089px] w-full bg-extra_bg h-[48px]">
              <div className="  group text-blue_gray_600 bg-extra_4 w-full max-w-[157px] py-[13px] pb-[12px] pl-[12px] ">
                <Dropdown heading={"All Categories"}>
                  <div className="  shadow-2xl  absolute left-[-13px]  top-[10px] bg-white p-[12px] z-[9]  w-[200px]  duration-4000  ">
                    <ul className="flex gap-[8px] flex-col  ">
                      <li className="p-[10px] hover:bg-hf_extra duration-1000 hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">all category </span>
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra duration-1000 hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">all category </span>
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra duration-1000 hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">all category </span>
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra duration-1000 hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">all category </span>
                      </li>
                    </ul>
                  </div>
                </Dropdown>
              </div>
              <form className="bg-extra_bg max-w-[857px] w-full ">
                <input
                  placeholder="Search Brands..."
                  className="outline-none pt-[12px] text-blue_gray_400 w-full bg-extra_bg"
                  type="search"
                  name=""
                  id=""
                />
              </form>
              <span className="bg-light_primary  py-[19px] md:py-[17px] lg:py-[14px] px-[20px] rounded-r-[6px] cursor-pointer ">
                <img src="/svg/searchicon.svg" alt="icon" />
              </span>
            </div>
            <div className="hidden md:flex gap-[20px] items-center">
              <Link
                className="flex gap-[6px] flex-col items-center text-blue_gray_600   "
                to="/wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.6944 0C11.6386 0 10.5 2.04412 10.5 2.04412C10.5 2.04412 9.36139 0 6.30556 0C3.09878 0 0.5 2.70912 0.5 6.05207C0.5 10.6417 5.2611 15.2122 6.70616 16.6174C7.96927 17.8448 9.4999 19.2654 10.1648 19.8794C10.3549 20.0549 10.6456 20.0555 10.8362 19.8805C11.5048 19.2673 13.0456 17.8456 14.3096 16.6174C15.7546 15.2122 20.5 10.6417 20.5 6.05207C20.5 2.70912 17.9012 0 14.6944 0ZM13.1376 15.4177C12.9615 15.6038 10.5 17.9975 10.5 17.9975C10.5 17.9975 8.14329 15.6781 7.89369 15.4177C6.44419 13.9052 2.24024 9.50207 2.24024 6.05207C2.24024 3.62487 4.17779 1.73061 6.21502 1.73061C8.14352 1.73061 9.26135 2.95815 9.29091 2.99446L10.5121 4.27063L11.7066 2.99446C11.7171 2.98016 12.854 1.73061 14.7825 1.73061C16.8197 1.73061 18.8013 3.59315 18.8013 6.05207C18.8013 9.50207 14.6055 13.867 13.1376 15.4177Z"
                    fill="#455A64"
                  />
                </svg>
                <p className="text-[14px] leading-[20px] font-semibold"  > Wishlist</p>
              </Link>
              <Link
                className="flex gap-[6px] flex-col text-blue_gray_600  items-center  "
                to="/cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.3879 7.42375C19.4452 7.42375 19.5024 7.42819 19.559 7.43701C20.122 7.52477 20.52 8.02091 20.4983 8.5768L20.4857 8.70599L19.0214 18.1008C18.7293 19.5762 17.4624 19.9443 15.9398 19.9938L15.5373 20H5.3238L4.92129 19.9938C3.46499 19.9464 2.24299 19.6072 1.88337 18.287L1.83973 18.1008L0.510914 8.69022C0.503647 8.63875 0.5 8.58684 0.5 8.53487C0.5 7.96505 0.928934 7.49541 1.48153 7.43123L1.61111 7.42375H19.3879ZM18.3216 8.98148H2.93163C2.90675 8.98148 2.8819 8.98315 2.85725 8.98648C2.58697 9.023 2.3885 9.24812 2.37658 9.51125L2.38108 9.61141L3.44752 17.5053C3.58127 18.1775 4.18329 18.3605 4.87503 18.409L5.17588 18.4226L5.50143 18.4259H15.5373C16.4595 18.4259 17.2412 18.376 17.4136 17.5053L18.8682 9.63723C18.8742 9.60417 18.8773 9.57064 18.8773 9.53704C18.8773 9.23017 18.6285 8.98148 18.3216 8.98148ZM14.3253 11.412C14.7855 11.412 15.1586 11.7851 15.1586 12.2454V15.0231C15.1586 15.4834 14.7855 15.8565 14.3253 15.8565C13.865 15.8565 13.492 15.4834 13.492 15.0231V12.2454C13.492 11.7851 13.865 11.412 14.3253 11.412ZM10.4364 11.412C10.8966 11.412 11.2697 11.7851 11.2697 12.2454V15.0231C11.2697 15.4834 10.8966 15.8565 10.4364 15.8565C9.97616 15.8565 9.60307 15.4834 9.60307 15.0231V12.2454C9.60307 11.7851 9.97616 11.412 10.4364 11.412ZM6.54751 11.412C7.00775 11.412 7.38084 11.7851 7.38084 12.2454V15.0231C7.38084 15.4834 7.00775 15.8565 6.54751 15.8565C6.08727 15.8565 5.71418 15.4834 5.71418 15.0231V12.2454C5.71418 11.7851 6.08727 11.412 6.54751 11.412ZM10.4444 8.21763e-05C10.6699 -0.00284896 10.8962 0.0726326 11.0681 0.22654L15.5467 4.23704C15.884 4.53908 15.884 5.02877 15.5467 5.33081C15.2094 5.63285 14.6626 5.63285 14.3253 5.33081L10.4454 1.85529L6.56484 5.33081C6.22755 5.63285 5.68068 5.63285 5.34339 5.33081C5.00609 5.02877 5.00609 4.53908 5.34339 4.23704L9.82206 0.22654C9.99367 0.0728722 10.2195 -0.00261375 10.4444 8.21763e-05Z"
                    fill="#455A64"
                  />
                </svg>
                <p className="text-[14px] leading-[20px] font-semibold"  >Cart</p>
              </Link>
              <Link
                className="flex gap-[6px] flex-col text-blue_gray_600  items-center  "
                to="/login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5952 12.2222C17.743 12.2222 20 13.9633 20 16.1111V17.7778C20 19.0051 19.0051 20 17.7778 20H2.22222C0.994923 20 0 19.0051 0 17.7778V16.1111C0 13.9633 2.29967 12.2222 4.44744 12.2222H15.5952ZM4.44028 13.8889C2.6482 13.8889 1.75759 14.7954 1.67276 15.9453L1.66667 16.1111V17.2222C1.66667 17.792 2.0956 18.2617 2.6482 18.3259L2.77778 18.3333H17.2222C17.792 18.3333 18.2617 17.9044 18.3259 17.3518L18.3333 17.2222V16.1111C18.3333 14.9396 17.2222 13.88 15.584 13.8889C13.9457 13.8977 4.44028 13.8889 4.44028 13.8889ZM10 0C13.0682 0 15.5556 2.48731 15.5556 5.55556C15.5556 8.62381 13.0682 11.1111 10 11.1111C6.93175 11.1111 4.44444 8.62381 4.44444 5.55556C4.44444 2.48731 6.93175 0 10 0ZM10 1.66667C7.85223 1.66667 6.11111 3.40778 6.11111 5.55556C6.11111 7.70333 7.85223 9.44444 10 9.44444C12.1478 9.44444 13.8889 7.70333 13.8889 5.55556C13.8889 3.40778 12.1478 1.66667 10 1.66667Z"
                    fill="#455A64"
                  />
                </svg>
                <p className="text-[14px] leading-[20px] font-semibold"  >Login</p>
              </Link>
            </div>
            <img className="md:hidden" src="/svg/menu.svg" alt="menu" />
          </div>
          <form className="md:hidden flex gap-[6px] py-[12px] px-[14px] border-[1px] border-blue_gray_50 rounded-[6px]">
            <img src="/svg/grayiconsearch.svg" alt="search" />
            <input
              className="text-blue_gray_400 text_16_2 w-full outline-none border-none "
              type="search"
              placeholder="Search Brands..."
              name=""
              id=""
            />
          </form>
          <div className=" hidden md:flex xl:gap-[40px] lg:gap-[20px] gap-[7px]">
            <div className="flex  md:gap-[18px] lg:gap-[30px] xl:gap-[60px] max-w-[1223px] w-full items-center">
              <Link to="/exploreByCategories" className="text-[10px] lg:text_14_1 xl:text_16_2 text-blue_gray_400   hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-500 transform hover:pl-[3px] ">
                Man's Fashion
              </Link>
              <Link to="/exploreByCategories" className="text-[10px] lg:text_14_1 xl:text_16_2 text-blue_gray_400   hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-500 transform hover:pl-[3px] ">
                Women's Fashion
              </Link>
              <Link to="/exploreByCategories" className="text-[10px] lg:text_14_1 xl:text_16_2 text-blue_gray_400   hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-500 transform hover:pl-[3px] ">
                Kid's Fashion
              </Link>
              <Link to="/new-arrivals" className="text-[10px] lg:text_14_1 xl:text_16_2 text-blue_gray_400   hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-500 transform hover:pl-[3px] ">
                New Arrivals
              </Link>
              <Link to="/dealonsale" className="text-[10px] lg:text_14_1 xl:text_16_2 text-blue_gray_400   hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-500 transform hover:pl-[3px] ">
                Deals On Sale
              </Link>
              <Link to="/blog-post" className="text-[10px] lg:text_14_1 xl:text_16_2 text-blue_gray_400   hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-500 transform hover:pl-[3px] ">
                Blog
              </Link>
              <Link className=" whitespace-nowrap text-[10px] lg:text_14_1 xl:text_16_2 text-blue_gray_400   hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-500 transform hover:pl-[3px] ">
                My Order
              </Link>
            </div>
            <div className="flex gap-[6px] whitespace-nowrap  items-center max-w-[115px] w-full ">
              <img src="/svg/headerlocation.svg" alt="Location" />
              <h3 className="text_14_1 text-blue_gray_400 ">Find Address</h3>
            </div>
            <div className="flex xl:gap-[10px] w-[172px]  justify-end">
              <div className="group flex text_12_1 text-blue_gray_500 whitespace-nowrap items-center py-[6px] px-[8px]">
                <Dropdown heading={"$ USD"}>
                  {/* <img src="/svg/Arrowtoptriangle.svg" alt="" /> */}
                  <div className=" shadow-2xl absolute left-[-150px]  top-[0px] bg-white p-[12px]  w-[200px]  duration-1000  ">
                    <ul className="flex gap-[8px] flex-col  ">
                      <li className="p-[10px] hover:bg-hf_extra duration-1000 hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                    </ul>
                  </div>
                </Dropdown>
              </div>
              <span className="border-[1px] border-solid "></span>
              <div className=" group flex text_12_1 text-blue_gray_500 whitespace-nowrap items-center py-[6px] px-[8px] ">
                <Dropdown heading={"ENG"}>
                  <div className=" shadow-2xl absolute left-[-150px]  bg-white p-[12px]  w-[200px]  ">
                    <ul className="flex gap-[8px] flex-col  ">
                      <li className="p-[10px] hover:bg-hf_extra duration-1000 hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                      <li className="p-[10px] hover:bg-hf_extra hover:text-light_primary rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                        <span className="text- ">(₹) INR</span>
                        <img src="/svg/indiaflag.svg" alt="india" />
                      </li>
                    </ul>
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
          <div
            id="myDIV"
            className="items-center  md:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px]  fixed z-40 bottom-0 w-[95%]  left-[50%] right-0 transform translate-x-[-50%] py-[6px] "
          >
            <div
              onClick={() => handleClick(1)}
              className={`btn ${activeButton === 1 ? "active" : ""
                } pb-[1px] btn  w-[71px] flex flex-col gap-[1px] justify-center items-center `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.5 4.74167L14.6667 8.49167V15H13V10H8.00002V15H6.33335V8.49167L10.5 4.74167ZM10.5 2.5L2.16669 10H4.66669V16.6667H9.66669V11.6667H11.3334V16.6667H16.3334V10H18.8334L10.5 2.5Z"
                  fill={activeButton === 1 ? "#F57E5D" : "#FFFFFF"}
                />
              </svg>
              <Link
                href="#"
                className={`text_10 ${activeButton === 1 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                  }`}
              >
                Home
              </Link>
              <span className={` ${activeButton === 1 ? "border-[1px] border-light_primary w-[10px] h-[1px]" : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"} `}></span>
            </div>
            <span className="border-[#FFFFFF] opacity-10  h-[18px] border-[1px] "></span>

            <div
              onClick={() => handleClick(2)}
              className={`btn ${activeButton === 2 ? "active" : ""
                } pb-[1px] btn w-[71px] flex flex-col gap-[1px] justify-center items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M14.2503 2.5C12.8003 2.5 11.4087 3.175 10.5003 4.24167C9.59199 3.175 8.20033 2.5 6.75033 2.5C4.18366 2.5 2.16699 4.51667 2.16699 7.08333C2.16699 10.2333 5.00033 12.8 9.29199 16.7L10.5003 17.7917L11.7087 16.6917C16.0003 12.8 18.8337 10.2333 18.8337 7.08333C18.8337 4.51667 16.817 2.5 14.2503 2.5ZM10.5837 15.4583L10.5003 15.5417L10.417 15.4583C6.45033 11.8667 3.83366 9.49167 3.83366 7.08333C3.83366 5.41667 5.08366 4.16667 6.75033 4.16667C8.03366 4.16667 9.28366 4.99167 9.72533 6.13333H11.2837C11.717 4.99167 12.967 4.16667 14.2503 4.16667C15.917 4.16667 17.167 5.41667 17.167 7.08333C17.167 9.49167 14.5503 11.8667 10.5837 15.4583Z"
                  fill={activeButton === 2 ? "#F57E5D" : "#FFFFFF"}
                />
              </svg>
              <Link
                href="#"
                className={`text_10 ${activeButton === 2 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                  }`}
              >
                My Wishlist
              </Link>
              <span className={` ${activeButton === 2 ? "border-[1px] border-light_primary w-[10px] h-[1px]" : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"} `}></span>
            </div>
            <span className="border-[#FFFFFF] opacity-10  h-[18px] border-[1px] "></span>

            <div
              onClick={() => handleClick(3)}
              className={`btn ${activeButton === 3 ? "active" : ""
                } pb-[1px] btn w-[71px] flex flex-col gap-[1px] justify-center items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M13.458 10.8333C14.083 10.8333 14.633 10.4916 14.9163 9.97496L17.8997 4.56663C18.208 4.01663 17.808 3.33329 17.1747 3.33329H4.84134L4.05801 1.66663H1.33301V3.33329H2.99967L5.99967 9.65829L4.87467 11.6916C4.26634 12.8083 5.06634 14.1666 6.33301 14.1666H16.333V12.5H6.33301L7.24967 10.8333H13.458ZM5.63301 4.99996H15.758L13.458 9.16663H7.60801L5.63301 4.99996ZM6.33301 15C5.41634 15 4.67467 15.75 4.67467 16.6666C4.67467 17.5833 5.41634 18.3333 6.33301 18.3333C7.24967 18.3333 7.99967 17.5833 7.99967 16.6666C7.99967 15.75 7.24967 15 6.33301 15ZM14.6663 15C13.7497 15 13.008 15.75 13.008 16.6666C13.008 17.5833 13.7497 18.3333 14.6663 18.3333C15.583 18.3333 16.333 17.5833 16.333 16.6666C16.333 15.75 15.583 15 14.6663 15Z"
                  fill={activeButton === 3 ? "#F57E5D" : "#FFFFFF"}
                />
              </svg>
              <Link
                href="#"
                className={`text_10 ${activeButton === 3 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                  }`}
              >
                My Cart
              </Link>
              <span className={` ${activeButton === 3 ? "border-[1px] border-light_primary w-[10px] h-[1px]" : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"} `}></span>
            </div>
            <span className="border-[#FFFFFF] opacity-10  h-[18px] border-[1px] "></span>

            <div
              onClick={() => handleClick(4)}
              className={`btn ${activeButton === 4 ? "active" : ""
                } pb-[1px] btn w-[71px] flex flex-col gap-[1px] justify-center items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.4997 4.91671C11.4663 4.91671 12.2497 5.70004 12.2497 6.66671C12.2497 7.63337 11.4663 8.41671 10.4997 8.41671C9.53301 8.41671 8.74967 7.63337 8.74967 6.66671C8.74967 5.70004 9.53301 4.91671 10.4997 4.91671ZM10.4997 12.4167C12.9747 12.4167 15.583 13.6334 15.583 14.1667V15.0834H5.41634V14.1667C5.41634 13.6334 8.02467 12.4167 10.4997 12.4167ZM10.4997 3.33337C8.65801 3.33337 7.16634 4.82504 7.16634 6.66671C7.16634 8.50837 8.65801 10 10.4997 10C12.3413 10 13.833 8.50837 13.833 6.66671C13.833 4.82504 12.3413 3.33337 10.4997 3.33337ZM10.4997 10.8334C8.27467 10.8334 3.83301 11.95 3.83301 14.1667V16.6667H17.1663V14.1667C17.1663 11.95 12.7247 10.8334 10.4997 10.8334Z"
                  fill={activeButton === 4 ? "#F57E5D" : "#FFFFFF"}
                />
              </svg>
              <Link
                href="#"
                className={`text_10 ${activeButton === 4 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                  }`}
              >
                Login
              </Link>
              <span className={` ${activeButton === 4 ? "border-[1px] border-light_primary w-[10px] h-[1px]" : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"} `}></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

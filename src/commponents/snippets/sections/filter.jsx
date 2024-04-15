import React from "react";
import Checkbox from "../inputs/checkbox";

const Filter = (props) => {
  function sidebarAccordion(e) {
    let sibbling = e.currentTarget.nextSibling;
    let getheight = sibbling.scrollHeight;
    if (!sibbling.getAttribute("style")) {
      sibbling.style.height = `${getheight}px`;
    } else {
      sibbling.removeAttribute("style");
    }
  }

  return (
    <>
      <div
        className={`flex flex-col w-full max-w-[375px] bg-white  ${props.active === 1
          ? "fixed top-[60px]  left-0  z-10 bg-white h-[100vh] pb-[150px]  overflow-scroll"
          : ""
          } `}
      >
        <div className="p-[20px] flex gap-[20px] flex-col  border-b-[1px]  border-[blue_gray_5]  ">
          <div className="flex justify-between">
            <h2 className="text_20 text-blue_gray_800 ">Filters</h2>
            <p className="text_14_1  text-light_primary">Clear All</p>
          </div>
          <div className="grid grid-cols-3 gap-[10px] ">
            <div className="border-[1px] border-[rgba(0, 0, 0, 0.16)] rounded-[16px] py-[3px] px-[4px] flex items-center w-full max-w-[118px] ">
              <span className="whitespace-nowrap px-[6px] text-Light_Text_Secondary  ">
                Red Color
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99992 1.33337C4.31325 1.33337 1.33325 4.31337 1.33325 8.00004C1.33325 11.6867 4.31325 14.6667 7.99992 14.6667C11.6866 14.6667 14.6666 11.6867 14.6666 8.00004C14.6666 4.31337 11.6866 1.33337 7.99992 1.33337ZM11.3333 10.3934L10.3933 11.3334L7.99992 8.94004L5.60659 11.3334L4.66659 10.3934L7.05992 8.00004L4.66659 5.60671L5.60659 4.66671L7.99992 7.06004L10.3933 4.66671L11.3333 5.60671L8.93992 8.00004L11.3333 10.3934Z"
                  fill="black"
                  fillOpacity="0.16"
                />
              </svg>
            </div>
            <div className="border-[1px] border-[rgba(0, 0, 0, 0.16)] rounded-[16px] py-[3px] px-[4px] flex items-center w-full max-w-[118px] ">
              <span className="whitespace-nowrap px-[6px] text-Light_Text_Secondary ">
                Red Color
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99992 1.33337C4.31325 1.33337 1.33325 4.31337 1.33325 8.00004C1.33325 11.6867 4.31325 14.6667 7.99992 14.6667C11.6866 14.6667 14.6666 11.6867 14.6666 8.00004C14.6666 4.31337 11.6866 1.33337 7.99992 1.33337ZM11.3333 10.3934L10.3933 11.3334L7.99992 8.94004L5.60659 11.3334L4.66659 10.3934L7.05992 8.00004L4.66659 5.60671L5.60659 4.66671L7.99992 7.06004L10.3933 4.66671L11.3333 5.60671L8.93992 8.00004L11.3333 10.3934Z"
                  fill="black"
                  fillOpacity="0.16"
                />
              </svg>
            </div>
            <div className="border-[1px] border-[rgba(0, 0, 0, 0.16)] rounded-[16px] py-[3px] px-[4px] flex items-center w-full max-w-[118px] ">
              <span className="whitespace-nowrap px-[6px] text-Light_Text_Secondary ">
                Red Color
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99992 1.33337C4.31325 1.33337 1.33325 4.31337 1.33325 8.00004C1.33325 11.6867 4.31325 14.6667 7.99992 14.6667C11.6866 14.6667 14.6666 11.6867 14.6666 8.00004C14.6666 4.31337 11.6866 1.33337 7.99992 1.33337ZM11.3333 10.3934L10.3933 11.3334L7.99992 8.94004L5.60659 11.3334L4.66659 10.3934L7.05992 8.00004L4.66659 5.60671L5.60659 4.66671L7.99992 7.06004L10.3933 4.66671L11.3333 5.60671L8.93992 8.00004L11.3333 10.3934Z"
                  fill="black"
                  fillOpacity="0.16"
                />
              </svg>
            </div>
            <div className="border-[1px] border-[rgba(0, 0, 0, 0.16)] rounded-[16px] py-[3px] px-[4px] flex items-center w-full max-w-[118px] ">
              <span className="whitespace-nowrap px-[6px] text-Light_Text_Secondary ">
                Red Color
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99992 1.33337C4.31325 1.33337 1.33325 4.31337 1.33325 8.00004C1.33325 11.6867 4.31325 14.6667 7.99992 14.6667C11.6866 14.6667 14.6666 11.6867 14.6666 8.00004C14.6666 4.31337 11.6866 1.33337 7.99992 1.33337ZM11.3333 10.3934L10.3933 11.3334L7.99992 8.94004L5.60659 11.3334L4.66659 10.3934L7.05992 8.00004L4.66659 5.60671L5.60659 4.66671L7.99992 7.06004L10.3933 4.66671L11.3333 5.60671L8.93992 8.00004L11.3333 10.3934Z"
                  fill="black"
                  fillOpacity="0.16"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          <div className="flex justify-between">
            <h2 className="text_16_2 text-blue_gray_500 ">Categories</h2>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="pr-[4px]">
              <div
                onClick={(e) => sidebarAccordion(e)}
                className="flex  gap-1 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M11.029 13.471C11.321 13.179 11.3213 12.7057 11.0296 12.4135L8.8273 10.2063C8.4378 9.81599 8.4378 9.18401 8.8273 8.79366L11.0296 6.58654C11.3213 6.29426 11.321 5.82099 11.029 5.52904C10.7369 5.23686 10.2631 5.23686 9.97096 5.52904L6.70711 8.79289C6.31658 9.18342 6.31658 9.81658 6.70711 10.2071L9.97096 13.471C10.2631 13.7631 10.7369 13.7631 11.029 13.471Z"
                    fill="#90A4AE"
                  />
                </svg>
                <span className="text_16_2 text-blue_gray_300 cursor-pointer ">
                  Men’s Fashion
                </span>
              </div>
              <ul className=" w-full pl-[50px] h-0 overflow-hidden duration-500   flex flex-col gap-[5px] ">
                <li className="text-blue_gray_500">Mens Fashion</li>
                <li className="text-blue_gray_500">Womens Fashion</li>
                <li className="text-blue_gray_500">kidsFashion</li>
              </ul>
            </div>
            <div className="pr-[4px]">
              <div
                onClick={(e) => sidebarAccordion(e)}
                className="flex gap-1 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M11.029 13.471C11.321 13.179 11.3213 12.7057 11.0296 12.4135L8.8273 10.2063C8.4378 9.81599 8.4378 9.18401 8.8273 8.79366L11.0296 6.58654C11.3213 6.29426 11.321 5.82099 11.029 5.52904C10.7369 5.23686 10.2631 5.23686 9.97096 5.52904L6.70711 8.79289C6.31658 9.18342 6.31658 9.81658 6.70711 10.2071L9.97096 13.471C10.2631 13.7631 10.7369 13.7631 11.029 13.471Z"
                    fill="#90A4AE"
                  />
                </svg>
                <span className="text_16_2 text-blue_gray_300  cursor-pointer">
                  Women’s Fashion
                </span>
              </div>
              <ul className=" pl-[50px] h-0 overflow-hidden duration-500  flex flex-col gap-[5px] ">
                <li className="text-blue_gray_500">Mens Fashion</li>
                <li className="text-blue_gray_500">Womens Fashion</li>
                <li className="text-blue_gray_500">kidsFashion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          <div
            onClick={(e) => sidebarAccordion(e)}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Gender</h2>
            <img className="select-none" src="/svg/Arrowdown.svg" alt="Arrow" />
          </div>
          <div className=" h-0 overflow-hidden duration-500 flex flex-col gap-[8px]">
            <div className="pr-[4px]">
              <div className="grid grid-cols-2 ">
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          <div
            onClick={(e) => sidebarAccordion(e)}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Price Range</h2>
            <img className="select-none" src="/svg/Arrowdown.svg" alt="Arrow" />
          </div>
          <div className=" h-0 overflow-hidden duration-500 flex flex-col gap-[8px]">
            <div className="pr-[4px]">
              <form action="">
                <input className="w-full" type="range" name="" id="" />
                <label className="flex justify-between" htmlFor="">
                  <span>0</span>
                  <span>100</span>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          <div
            onClick={(e) => sidebarAccordion(e)}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Discount</h2>
            <img className="select-none" src="/svg/Arrowdown.svg" alt="Arrow" />
          </div>
          <div className=" h-0 overflow-hidden duration-500 flex flex-col gap-[8px]">
            <div className="pr-[4px]">
              <div className="grid grid-cols-2 ">
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
                <Checkbox color={"green"}>
                  <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          <div
            onClick={(e) => sidebarAccordion(e)}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Brands</h2>
            <img className="select-none" src="/svg/Arrowdown.svg" alt="Arrow" />
          </div>
          <div className="h-0 overflow-hidden duration-500  ">
            <form className="   flex gap-[6px] py-[6px] px-[12px] mb-[14px]">
              <input
                className="text-blue_gray_400 text_16_2 w-full outline-none border-none "
                type="search"
                placeholder="Search Brands..."
                name=""
                id=""
              />
              <img
                className="select-none"
                src="/svg/grayiconsearch.svg"
                alt="search"
              />
            </form>
            <div className="  flex flex-col gap-[8px]">
              <div className="pr-[4px]">
                <div className="grid grid-cols-2 ">
                  <Checkbox color={"green"}>
                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                  </Checkbox>
                  <Checkbox color={"green"}>
                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                  </Checkbox>
                  <Checkbox color={"green"}>
                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                  </Checkbox>
                  <Checkbox color={"green"}>
                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                  </Checkbox>
                  <Checkbox color={"green"}>
                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                  </Checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          <div
            onClick={(e) => sidebarAccordion(e)}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Colors</h2>
            <img className="select-none" src="/svg/Arrowdown.svg" alt="Arrow" />
          </div>
          <div className="h-0 overflow-hidden duration-500  ">
            <div className="  flex flex-col gap-[8px]">
              <div className="pr-[4px]">
                <div className="grid grid-cols-1 ">
                  <Checkbox color={"green"}>
                    <div className="flex gap-[8px] ">
                      <span
                        className="rounded-[50%] w-[30px]  h-[30px] "
                        style={{
                          backgroundColor: "green",
                        }}
                      >
                        {" "}
                      </span>
                      <p className="text_16_2 text-blue_gray_500">
                        60-80% Below
                      </p>
                    </div>
                  </Checkbox>
                  <Checkbox color={"green"}>
                    <div className="flex gap-[8px] ">
                      <span
                        className="rounded-[50%] w-[30px] h-[30px] "
                        style={{
                          backgroundColor: "green",
                        }}
                      >
                        {" "}
                      </span>
                      <p className="text_16_2 text-blue_gray_500">
                        60-80% Below
                      </p>
                    </div>
                  </Checkbox>
                  <Checkbox color={"green"}>
                    <div className="flex gap-[8px] ">
                      <span
                        className="rounded-[50%] w-[30px] h-[30px] "
                        style={{
                          backgroundColor: "green",
                        }}
                      >
                        {" "}
                      </span>
                      <p className="text_16_2 text-blue_gray_500">
                        60-80% Below
                      </p>
                    </div>
                  </Checkbox>
                  <Checkbox color={"green"}>
                    <div className="flex gap-[8px] ">
                      <span
                        className="rounded-[50%] w-[30px]  h-[30px]"
                        style={{
                          backgroundColor: "green",
                        }}
                      >
                        {" "}
                      </span>
                      <p className="text_16_2 text-blue_gray_500">
                        60-80% Below
                      </p>
                    </div>
                  </Checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

// onClick={(e) => sidebarAccordion(e)}
//  h-0 overflow-hidden duration-500
//

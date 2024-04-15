import React from "react";
import Swipersection from "../snippets/sections/swipersection";
import Primarybutton from "../common/primarybutton";
import { Link } from "react-router-dom";

const Wearcollection = () => {
  return (
    <>
      <section className="container py-10 md:py-[60px] lg:py-[80px]">
        <div className="flex justify-center md:justify-start">
          <Swipersection
            smallHeading={"Category"}
            mainHeading={"Explore Category"}
            className="md:text-start"
          ></Swipersection>
        </div>
        {/* it will show till xl breakpoint after hidden */}
        <div className="mt-[30px] md:mt-[60px]">
          <div className="grid grid-cols-3 gap-x-[13px] xl:hidden">
            <div>
              <div className="border-2 border-light_primary p-[6px]  rounded-t-[26px] flex justify-center">
                <img
                  className=" w-full rounded-t-[26px]"
                  src="/images/mencollection.png"
                  alt="img"
                />
              </div>
              <div className="text-center">
                <h4 className="text_34_16 mt-[3px] tab:mt-2"><Link  to="/exploreByCategories">Man's</Link> </h4>
              </div>
            </div>
            <div>
              <div className="border-2 border-light_primary p-[6px]  rounded-t-[26px] flex justify-center">
                <img
                  className=" w-full rounded-t-[26px]"
                  src="/images/womencollection.png"
                  alt="img"
                />
              </div>
              <div className="text-center">
                <h4 className="text_34_16 mt-[3px] tab:mt-2"><Link  to="/exploreByCategories">Women's</Link></h4>
              </div>
            </div>
            <div>
              <div className="border-2 border-light_primary p-[6px]  rounded-t-[26px] flex justify-center">
                <img
                  className=" w-full rounded-t-[26px]"
                  src="/images/childcollection.png"
                  alt="img"
                />
              </div>
              <div className="text-center">
                <h4 className="text_34_16 mt-[3px] tab:mt-2"><Link  to="/exploreByCategories">Kid's</Link></h4>
              </div>
            </div>
          </div>
        </div>
        {/* by default hidden and showed after xl breakpoint */}
        <div className="hidden xl:block mt-[30px] md:mt-[60px]">
          <div className="grid grid-cols-3 place-items-center gap-x-[30px] ">
            <div className="relative  before:absolute before:content-[''] before:border-2 before:border-light_primary before:max-w-[390px]  before:w-full before:z-[-1] before:bottom-5  before:h-full before:rounded-t-[30px]  before:md:rounded-t-[60px] before:lg:rounded-t-[90px] before:xl:rounded-t-[120px] before:-left-5">
              <div className="transition-all origin-bottom-right duration-[1s] hover:scale-[1.04]">
                <img
                  className="w-full xl:max-w-[490px] rounded-t-[30px] md:rounded-t-[60px] lg:rounded-t-[90px] xl:rounded-t-[120px] "
                  src="/images/mencollection.png"
                  alt="img"
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <Link  to="/exploreByCategories">
                    {" "}
                    <Primarybutton> Man's Collection </Primarybutton>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative  before:absolute before:content-[''] before:border-2 before:border-light_primary before:max-w-[390px]  before:w-full before:z-[-1] before:bottom-5  before:h-full before:rounded-t-[120px] before:-left-5">
              <div className="transition-all origin-bottom-right duration-[1s] hover:scale-[1.04]">
                <img
                  className="w-full xl:max-w-[490px] rounded-t-[30px] md:rounded-t-[60px] lg:rounded-t-[90px] xl:rounded-t-[120px] "
                  src="/images/womencollection.png"
                  alt="img"
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <Link  to="/exploreByCategories">
                    {" "}
                    <Primarybutton> Women's Collection </Primarybutton>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative  before:absolute before:content-[''] before:border-2 before:border-light_primary before:max-w-[390px]  before:w-full before:z-[-1] before:bottom-5  before:h-full before:rounded-t-[120px] before:-left-5">
              <div className="transition-all origin-bottom-right duration-[1s] hover:scale-[1.04]">
                <img
                  className="w-full xl:max-w-[490px] rounded-t-[30px] md:rounded-t-[60px] lg:rounded-t-[90px] xl:rounded-t-[120px] "
                  src="/images/childcollection.png"
                  alt="img"
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <Link to="/exploreByCategories">
                    <Primarybutton> Kid's Collection </Primarybutton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wearcollection;

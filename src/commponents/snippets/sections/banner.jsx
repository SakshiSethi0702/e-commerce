import React, { useContext, useState } from "react";
import Solidbutton from "../../common/solidbutton";
import Discountpopup from "../popups/discountpopup";
import Overlay from "../../../contextfils/overlay";
import { stopScrolling } from "../../../utils/utils";
import { Link } from "react-router-dom";

const Banner = ({ smallheading, maintextfirst, maintextlast, ptext, btndata, spantext, banner, image }) => {
  const [on, setoff] = useState(false)
  const { setoverlay, overlaypage } = useContext(Overlay)


  return (
    <>
      {
        on == true && <Discountpopup on={on} setoff={setoff} setoverlay={setoverlay} />
      }
      <section className=" bg-[#02a77d0a] md:mt-[160px] mt-[141px]  py-[30px] md:py-[60px]  ">
        {/* <Solidbutton className={"cursor-pointer"} onClick={() => { setoff(true); setoverlay(true); stopScrolling(true) }} >
          Testing pop up
        </Solidbutton> */}
        <div className="container flex flex-col    md:gap-[30px] lg:gap-[120px] md:flex-row   justify-between items-center relative ">
          <div>
            <img src={`/images/${image}`} alt="girl" />
            <svg
              className="absolute top-[36%] right-[10%] md:top-[38%] md:left-0 left-[17px] "
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="79"
              viewBox="0 0 74 79"
              fill="none"
            >
              <path
                d="M26.7173 26.5169C28.3366 24.8767 21.9946 0 21.9946 0L29.1462 15.9922C33.8689 25.6968 37.1074 24.1933 39.5363 17.2223L44.5289 3.96388L43.4494 17.359C43.0446 22.6898 44.5289 25.9702 51.0058 18.8626L62.8802 7.24432L53.4347 21.733C51.2757 25.6968 47.3625 31.9843 60.1815 29.3873L73.81 27.6104L61.6658 33.4879C54.2443 35.6748 52.0853 39.092 59.2369 41.8257L72.0558 48.5232L57.6177 46.6097C50.7359 45.3795 54.784 48.9333 62.7452 57.5445L72.5956 68.3426L58.6971 57.9545C48.577 49.3434 43.7193 48.7966 49.3866 62.1918L53.4347 76.6804L46.2831 64.3787C42.5049 57.9545 39.2664 50.1635 36.4327 62.7385L31.9798 78.1839L33.3292 57.2711C33.8689 51.9404 30.9004 52.0771 27.392 55.9043L15.3827 66.8391L23.3439 54.5374C29.1462 45.6529 22.9391 46.6097 13.8984 47.9765L0 49.6167L11.7394 45.1061C21.9946 41.689 22.2645 39.9121 17.4068 37.1784L3.50834 31.5743L13.8984 32.5311C19.1609 32.9411 25.368 33.8979 16.1923 24.6033L1.07951 9.43129C1.34938 9.56798 24.1536 29.2506 26.7173 26.5169Z"
                fill="#F57E5D"
              />
            </svg>
            <svg
              className="absolute top-[77%] left-[10%] md:top-[10.6%] md:left-[40%]"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="56"
              viewBox="0 0 70 56"
              fill="none"
            >
              <path
                opacity="0.2"
                d="M48.4996 25.6C56.8996 19.2 61.2996 16.2001 69.3996 10.7001C59.3996 14.6 50.1996 16.8 43.6996 18.5C44.3996 11.8 44.7996 5.20005 45.3996 0.800049C43.3996 3.80005 36.8996 16.7 34.9996 18.3C31.1996 15 29.2996 12.8 26.6996 10.3C27.2996 13.8 26.8996 17.3 26.9996 22.3C19.6996 21.4 11.2996 20.2 0.599609 18.6C9.79961 22.2 16.2996 26 23.7996 29.3C20.2996 32.8 18.1996 35.7001 11.1996 41.7001C16.9996 40 20.4996 39.2 28.7996 36.6C28.8996 41.3 29.4996 48.9 29.3996 55.6C31.3996 52.6 34.8996 42.2001 37.0996 38C40.7996 41.4001 42.5996 42.6001 46.0996 46.4001C45.4996 42.9001 44.2996 39.5 43.3996 34.7001C44.5996 34.6001 50.3996 35.1001 69.1996 37.4001C59.4996 32.1001 56.2996 29.6 48.4996 25.6Z"
                fill="#F57E5D"
              />
            </svg>
          </div>
          <div className="w-full max-w-[780px]">
            <div>
              <h2 className="text_24_20 text-light_primary text-center md:text-left">
                {smallheading}
              </h2>
              <div className="relative" >
                <h1 className=" text-blue_gray_800  text-[38px] leading-[44px] font-bold  text-center md:text-left lg:text_90_34_main_heading">
                  {maintextfirst}
                  <span className='text-[38px] leading-[44px] font-bold   lg:text_90_38_main_heading relative text-light_primary after:content-[""] after:absolute after:left-0 after:top-0  after:border-[2px] after:border-[#f57e5d]  after:transform after:rotate-[-4deg] after:rounded-[50%] after:w-full after:h-[90%] after:block '>
                    {spantext}
                  </span>
                  {maintextlast}
                </h1>
                <svg
                  className=" w-fll max-w-[34px] md:h-[57px] md:max-w-[54px] h-[37px]  absolute top-[62%] right-[3%] md:right-[10%] "
                  xmlns="http://www.w3.org/2000/svg"
                  width=""
                  height="0"
                  viewBox="0 0 54 57"
                  fill="none"
                >
                  <path
                    d="M19.4779 19.3317C20.6583 18.136 16.0348 0 16.0348 0L21.2486 11.6588C24.6916 18.7339 27.0526 17.6377 28.8233 12.5557L32.4631 2.88981L31.6761 12.6553C31.381 16.5416 32.4631 18.9332 37.185 13.7514L45.8418 5.28135L38.9557 15.8441C37.3817 18.7339 34.5289 23.3177 43.8743 21.4244L53.81 20.1289L44.9564 24.4138C39.5459 26.0082 37.972 28.4994 43.1857 30.4923L52.5312 35.3751L42.0052 33.98C36.9882 33.0832 39.9394 35.674 45.7434 41.9519L52.9247 49.8241L42.7922 42.2508C35.4143 35.973 31.8728 35.5744 36.0045 45.3399L38.9557 55.9026L33.7419 46.9343C30.9875 42.2508 28.6265 36.5709 26.5607 45.7385L23.3144 56.9988L24.2981 41.7526C24.6916 37.8663 22.5274 37.966 19.9697 40.7561L11.2145 48.728L17.0185 39.7596C21.2486 33.2825 16.7234 33.98 10.1324 34.9765L0 36.1723L8.55846 32.8839C16.0348 30.3927 16.2316 29.0973 12.6901 27.1043L2.5577 23.0187L10.1324 23.7163C13.969 24.0152 18.4941 24.7127 11.8048 17.9367L0.787001 6.87573C0.983747 6.97538 17.6088 21.3247 19.4779 19.3317Z"
                    fill="#F57E5D"
                  />
                </svg>
              </div>

              <h3 className="pt-[30px] text-blue_gray_500 text_24_16  text-center md:text-left">
                {ptext}
              </h3>

              <svg
                className="absolute  top-[10%] md:top-[54%]"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="56"
                viewBox="0 0 70 56"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M48.4996 25.6C56.8996 19.2 61.2996 16.2001 69.3996 10.7001C59.3996 14.6 50.1996 16.8 43.6996 18.5C44.3996 11.8 44.7996 5.20005 45.3996 0.800049C43.3996 3.80005 36.8996 16.7 34.9996 18.3C31.1996 15 29.2996 12.8 26.6996 10.3C27.2996 13.8 26.8996 17.3 26.9996 22.3C19.6996 21.4 11.2996 20.2 0.599609 18.6C9.79961 22.2 16.2996 26 23.7996 29.3C20.2996 32.8 18.1996 35.7001 11.1996 41.7001C16.9996 40 20.4996 39.2 28.7996 36.6C28.8996 41.3 29.4996 48.9 29.3996 55.6C31.3996 52.6 34.8996 42.2001 37.0996 38C40.7996 41.4001 42.5996 42.6001 46.0996 46.4001C45.4996 42.9001 44.2996 39.5 43.3996 34.7001C44.5996 34.6001 50.3996 35.1001 69.1996 37.4001C59.4996 32.1001 56.2996 29.6 48.4996 25.6Z"
                  fill="#F57E5D"
                />
              </svg>
            </div>
            <div className=" flex flex-col  pt-[40px] md:pt-[80px] gap-[13.5px] md:gap-[30px] lg:flex-row ">
              <div className="rounded-[8px] overflow-hidden w-full lg:max-w-[163px]">
                <Solidbutton className={"py-[16px] px-[24px] rounded-[10px] w-full "}>
                  <Link to="/exploreByCategories">
                  {btndata}
                  </Link>
              
                </Solidbutton>
              </div>
              <div className="flex gap-[10px] items-center justify-center">
                <img
                  className="rounded-[60px] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] bg-white w-[32px] "
                  src="/svg/playbtn.svg"
                  alt="play"
                />
                <h4 className="text-blue_gray_700 whitespace-nowrap  text_16_2 ">
                  What On Trending?
                </h4>
              </div>
            </div>
            {
              banner === true && (<>
                <div className="mt-[25px] md:mt-[80px] py-[12px] px-[20px]  bg-white rounded-[70px] lg:w-[386px] ">
                  <div className="flex gap-[24px] ">
                    <div className="flex w-[138px] items-center pl-[20px]">
                      <img
                        className=" ml-[-20px] md:w-full "
                        src="/images/bannerpeoples.png"
                        alt="imgs"
                      />
                      <img
                        className="ml-[-20px]  md:w-full "
                        src="/images/bannerpeoples.png"
                        alt="imgs"
                      />
                      <img
                        className="ml-[-20px]  md:w-full "
                        src="/images/bannerpeoples.png"
                        alt="imgs"
                      />
                      <img
                        className="ml-[-20px]  md:w-full "
                        src="/images/bannerpeoples.png"
                        alt="imgs"
                      />
                      <img
                        className="ml-[-20px]  md:w-full "
                        src="/images/bannerpeoples.png"
                        alt="imgs"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] ">
                      <div className="flex gap-[10px] ">
                        <div className="flex items-center">
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M9 13.3275L13.635 16.125L12.405 10.8525L16.5 7.305L11.1075 6.8475L9 1.875L6.8925 6.8475L1.5 7.305L5.595 10.8525L4.365 16.125L9 13.3275Z"
                              fill="#FFB400"
                            />
                          </svg>
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M9 13.3275L13.635 16.125L12.405 10.8525L16.5 7.305L11.1075 6.8475L9 1.875L6.8925 6.8475L1.5 7.305L5.595 10.8525L4.365 16.125L9 13.3275Z"
                              fill="#FFB400"
                            />
                          </svg>
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M9 13.3275L13.635 16.125L12.405 10.8525L16.5 7.305L11.1075 6.8475L9 1.875L6.8925 6.8475L1.5 7.305L5.595 10.8525L4.365 16.125L9 13.3275Z"
                              fill="#FFB400"
                            />
                          </svg>
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M9 13.3275L13.635 16.125L12.405 10.8525L16.5 7.305L11.1075 6.8475L9 1.875L6.8925 6.8475L1.5 7.305L5.595 10.8525L4.365 16.125L9 13.3275Z"
                              fill="#FFB400"
                            />
                          </svg>
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M9 13.3275L13.635 16.125L12.405 10.8525L16.5 7.305L11.1075 6.8475L9 1.875L6.8925 6.8475L1.5 7.305L5.595 10.8525L4.365 16.125L9 13.3275Z"
                              fill="#FFB400"
                            />
                          </svg>
                        </div>
                        <h3 className="text_16_2">Ratings</h3>
                      </div>
                      <span className="text_12_1 text-blue_gray_700 "> (2,654 Reviews)</span>
                    </div>
                  </div>
                </div>
              </>)
            }

          </div>
        </div>
      </section>

    </>
  );
};

export default Banner;

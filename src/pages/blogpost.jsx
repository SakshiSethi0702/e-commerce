import React, { Fragment, useContext, useState } from 'react'
import Primarybutton from '../commponents/common/primarybutton'
import Solidbutton from '../commponents/common/solidbutton'
import Liquidbutton from '../commponents/common/liquidbutton'
import Swipersection from '../commponents/snippets/sections/swipersection'
import Blogpostcard from '../commponents/snippets/card/blogpostcard'
import { Link } from 'react-router-dom'
import Productcard from '../commponents/snippets/card/productcard'
import Commoncard from '../commponents/snippets/card/commoncard'
import Products from '../contextfils/product'

const Blogpost = () => {
    const [active, setactive] = useState(false)
    const [activeButton, setActiveButton] = useState(1);
    const handleClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };
    console.log(activeButton, "============check btn")
    const { productsdata, postcarddata } = useContext(Products)
    return (
        <>
            <div className="container mt-[110px] md:mt-[300px]">
                <div>
                    <div className='grid  grid-cols-1 lg:grid-cols-[40%_56%] gap-[20px] md:gap-[30px] lg:gap-[60px]  p-[16px] md:p-[40px] '>
                        <div className='border-[1px] border-[#F57E5D80] rounded-t-[40px] h-fit ' >
                            <img className=' w-full p-[10px] rounded-t-[40px] ' src="/images/towgirlimage.png" alt="towgirlimage   " />
                        </div>
                        <div className='flex flex-col justify-center  gap-[14px] md:gap-[30px] '  >
                            <div className='flex gap-[20px] ' >
                                <Liquidbutton className={"rounded-[16px] p-1 "} >
                                    Fashion
                                </Liquidbutton>
                                <span className='text_24_14 text-light_primary' >20 September , 2020</span>
                            </div>
                            <h2 className='text_48_24 text-blue_gray_800' >A Quick Guide into Incorporating Handlooms to your Workwear...</h2>
                            <p className=' hidden md:block text-blue_gray_400' >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <div className='hidden md:block ' >
                                <Solidbutton className={"rounded-[16px] max-w-[168px] py-[16px] px-[24px] "} >
                                    read more
                                </Solidbutton>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Swipersection
                            mainClass={"flex flex-col lg:flex-row"}
                            className={"   text-center lg:text-start  "}
                            smallHeading={
                                "Blog"
                            }
                            mainh_class={"lg:text-[35px]"}
                            mainHeading={"Newly Blog Post"}
                        >
                            <ul className='flex  overflow-scroll md:overflow-auto  w-[375px]  md:w-[668px]  ' >
                                <Link className='flex flex-col' href="#" >
                                    <div onClick={() => { handleClick(1) }} >
                                        <li className={`uppercase ${activeButton === 1 ? "text-[#F57E5D]" : "text-blue_gray_400"} py-[11px] px-[8px]  text-center w-[132px] text_16_3 `} >All</li>
                                    </div>
                                    <span className={` border-[1px]   ${activeButton === 1 ? "border-[#F57E5D]" : "border-[#ffffff]"}`}  > </span>
                                </Link>
                                <Link className='flex flex-col' href="#" >
                                    <div onClick={() => { handleClick(2) }} >
                                        <li className={`uppercase ${activeButton === 2 ? "text-[#F57E5D]" : "text-blue_gray_400"} py-[11px] px-[8px]  text-center w-[132px] text_16_3 `} >Fashion</li>
                                    </div>
                                    <span className={` border-[1px]   ${activeButton === 2 ? "border-[#F57E5D]" : "border-[#ffffff]"}`}  > </span>
                                </Link>
                                <Link className='flex flex-col' href="#" >
                                    <div onClick={() => { handleClick(3) }} >
                                        <li className={`uppercase ${activeButton === 3 ? "text-[#F57E5D]" : "text-blue_gray_400"} py-[11px] px-[8px]  text-center w-[132px] text_16_3 `} >Community</li>
                                    </div>
                                    <span className={`border-[1px]  ${activeButton === 3 ? "border-[#F57E5D]" : "border-[#ffffff]"}`}  > </span>
                                </Link>
                                <Link className='flex flex-col' href="#" >
                                    <div onClick={() => { handleClick(4) }} >
                                        <li className={`uppercase ${activeButton === 4 ? "text-[#F57E5D]" : "text-blue_gray_400"} py-[11px] px-[8px]  text-center w-[132px] text_16_3 `} >Culture</li>
                                    </div>
                                    <span className={`border-[1px]  ${activeButton === 4 ? "border-[#F57E5D]" : "border-[#ffffff]"}`}  > </span>
                                </Link>
                                <Link className='flex flex-col' href="#" >
                                    <div onClick={() => { handleClick(5) }} >
                                        <li className={`uppercase ${activeButton === 5 ? "text-[#F57E5D]" : "text-blue_gray_400"} py-[11px] px-[8px]  text-center w-[132px] text_16_3 `} >Partners</li>
                                    </div>
                                    <span className={`border-[1px] text-center ${activeButton === 5 ? "border-[#F57E5D]" : "border-[#ffffff]"}`}  > </span>
                                </Link>
                            </ul>
                        </Swipersection>
                    </div>
                    <div className='  md:hidden flex gap-[14px] justify-between fixed top-0 left-0 right-0 z-10 py-[20px] px-[16px] bg-white ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#78909C" />
                        </svg>
                        <span className='text_20 text-blue_gray_600' >Man’s Fashion</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#78909C" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#78909C" />
                        </svg>
                    </div>
                    {
                        activeButton === 1 && (<>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5 md:gap-[30px]' >
                                {
                                    postcarddata?.map((item, index) => {
                                        return (<Fragment key={Date.now() + index}>
                                            <Blogpostcard data={item} />
                                        </Fragment>)
                                    })
                                }
                                {/*  */}
                            </div></>)
                    }
                    {
                        activeButton === 2 && (<>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
                                {
                                    productsdata?.map((item, index) => {
                                        return (<Fragment key={Date.now() + index} >
                                            <Productcard data={item} />
                                        </Fragment>)
                                    })
                                }
                            </div></>)
                    }
                    {
                        activeButton === 3 && (<>
                            <div className='grid grid-cols-1' >
                                {
                                    productsdata?.map((item, index) => {
                                        return (<Fragment key={Date.now() + index} >
                                            <Commoncard data={item} card={2} />
                                        </Fragment>)
                                    })
                                }
                            </div></>)
                    }
                    {
                        activeButton === 4 && (<>
                            <div className='grid gap-x-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
                                {
                                    productsdata?.map((item, index) => {
                                        return (<Fragment key={Date.now() + index} >
                                            <Commoncard data={item} card={1} />
                                        </Fragment>)
                                    })
                                }
                            </div></>)
                    }

                    <Solidbutton className={" md:hidden w-full mt-[30px] mb-[40px] py-[10px] px-[16px] rounded-[4px]  "} >
                        LOAD MORE
                    </Solidbutton>
                </div>
            </div>
        </>
    )
}

export default Blogpost
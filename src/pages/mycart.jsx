import React, { Fragment, useContext, useState } from 'react'
import Dropdown from '../commponents/snippets/dropdown/dropdown'
import { Link } from 'react-router-dom'
import Solidbutton from '../commponents/common/solidbutton'
import Blogpostcard from '../commponents/snippets/card/blogpostcard'
import Commoncard from '../commponents/snippets/card/commoncard'
import Overlay from '../contextfils/overlay'
import Products from '../contextfils/product'

const Mycart = () => {


    const [active, setactive] = useState(false)
    const [activeButton, setActiveButton] = useState(2);
    const handleClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };


    // const [filteractive, setfilteractive] = useState(false)

    // function overflow(e) {
    //     let body = document.getElementsByTagName('body')
    //     console.log(typeof e, "==============================")
    //     if (e === 1) {

    //         body[0].style.overflow = "hidden"
    //     }
    //     else {
    //         body[0].style.overflow = "auto"
    //     }
    // }

    // const { overlaypage, setoverlay } = useContext(Overlay)
    const { productsdata } = useContext(Products)

    return (
        <>
            <div className='bg-extra_4' >
                <div className="container flex md:gap-y-[30px] flex-col mt-[118px] md:mt-[200px] pt-[30px]  ">
                    <div className=" hidden md:flex  gap-[20px] p-[20px] items-center justify-between   bg-white ">
                        <h2 className='text-blue_gray_800 text_24  ' >My Cart<span className='text-blue_gray_400 text_16_2 pl-[12px] ' >(20 item)</span></h2>
                        <div className='max-w-[200px] p-[18px] w-full  ' >
                            <Dropdown classname={""} heading={"Sort By"} >
                                <div className='flex flex-col ' >
                                    <Link>test</Link>
                                    <Link>test</Link>
                                    <Link>test</Link>
                                    <Link>test</Link>
                                    <Link>test</Link>
                                    <Link>test</Link>
                                    <Link>test</Link>
                                    <Link>test</Link>
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <div className='flex flex-col  ' >
                            <div className='  fixed  bg-white top-0 left-0 right-0 z-10 py-[20px] px-[16px]  ' >
                                <div className='flex  pb-[30px] gap-[14px] justify-between' >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#78909C" />
                                    </svg>
                                    <span>Man's Fashion</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#78909C" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#78909C" />
                                    </svg>
                                </div>
                                <div className='flex justify-between items-center flex-wrap ' >
                                    <div className='flex gap-[6px] items-center ' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="#90A4AE" />
                                            <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="#90A4AE" />
                                        </svg>
                                        <div className=' flex flex-wrap ' >
                                            <h2 className='text-blue_gray_300' >
                                                Deliver To-
                                            </h2>
                                            <div className='flex flex-wrap ' >
                                                <span className='text-blue_gray_200 text_10F ' >Raj Kumar,</span>
                                                <span className='text-blue_gray_200 text_10F ' >Abohar,</span>
                                                <span className='text-blue_gray_200 text_10F ' >152116</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className='text-light_primary' to="/" > Change  </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex md:gap-[30px] ">
                        <div className=' gap-y-[10px] md:gap-y-[30px] grid grid-cols-1 max-w-[1158px] w-full ' >
                            {
                                productsdata?.map((item, index) => {
                                    return (<Fragment key={Date.now() + item.name} >
                                        <Commoncard card={2} data={item} />
                                    </Fragment>)
                                })
                            }
                        </div>
                        <div className=" hidden lg:block p-[14px] bg-white max-w-[375px] w-full mb-10 h-fit ">
                            <h3 className="text-blue_gray_700 text_20_16 pb-3">
                                Order Summary
                            </h3>
                            <div className="flex flex-col gap-y-5 border-t-[1px] pt-5">
                                <div className="flex justify-between">
                                    <h6 className="text_14_1 text-blue_gray_400">
                                        Product Price (2 items)
                                    </h6>
                                    <h6 className="text_14_1 text-blue_gray_600">$40.00</h6>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="text_14_1 text-blue_gray_400">GST (Tax 28%)</h6>
                                    <h6 className="text_14_1 text-blue_gray_600">$2.00</h6>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="text_14_1 text-blue_gray_400">
                                        Discount
                                    </h6>
                                    <h6 className="text_14_1 text-light_primary">
                                        - $20.00
                                    </h6>
                                </div>

                                <div className="flex justify-between">
                                    <h6 className="text_14_1 text-blue_gray_400">
                                        Delivery Charges
                                    </h6>
                                    <h6 className="text_14_1 text-blue_gray_600">Free</h6>
                                </div>
                                <div className="flex justify-between border-t-[1px] pt-[18px] ">
                                    <h6 className="text_14_1 text-blue_gray_400">
                                        Apply Coupon
                                    </h6>
                                    <h6 className="text_14_1 text-blue_gray_600">
                                        See Offers
                                    </h6>
                                </div>
                                <div className="flex justify-between border-t-[1px] pt-[10px]">
                                    <h6 className="text-blue_gray_700 text_16_2">Total</h6>
                                    <h6 className="text-blue_gray_700 text_16_2">$22.00</h6>
                                </div>
                                <div className='p-[8px] bg-[#02A77D14] text-center rounded-[8px] ' >
                                    <h3 className='text-light_secondary_main text_16_2_14 ' >You Will Saving $20.00 On This Order </h3>
                                </div>
                                <Solidbutton className="uppercase py-6 px-4 rounded-md text-lg leading-[26px] font-semibold">
                                    add items in cart
                                </Solidbutton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center  md:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px]  fixed z-40 bottom-0 w-[95%]  left-[50%] right-0 transform translate-x-[-50%] py-[6px] " >
                    <Link href="#" >
                        <div onClick={() => { handleClick(1) }} className={`btn ${activeButton === 1 ? 'active' : ''}  pb-[1px]  gap-[10px] py-[10px] `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">

                                <path d="M10.5003 4.74167L14.667 8.49167V15H13.0003V10H8.00033V15H6.33366V8.49167L10.5003 4.74167ZM10.5003 2.5L2.16699 10H4.66699V16.6667H9.66699V11.6667H11.3337V16.6667H16.3337V10H18.8337L10.5003 2.5Z" fill={activeButton === 1 ? "#F57E5D" : "#FFFFFF"} />
                            </svg>
                        </div>
                        <p className={`text_10  pt-[2px] ${activeButton === 1 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}  >Home </p>
                    </Link>
                    <span className='border-[#FFFFFF] opacity-10  h-[18px] border-[1px] ' ></span>
                    <Link href="#" >
                        <div onClick={() => { handleClick(2) }} className={`btn ${activeButton === 2 ? 'active' : ''}  pb-[1px]  gap-[10px] py-[10px] `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">

                                <path d="M14.2503 2.5C12.8003 2.5 11.4087 3.175 10.5003 4.24167C9.59199 3.175 8.20033 2.5 6.75033 2.5C4.18366 2.5 2.16699 4.51667 2.16699 7.08333C2.16699 10.2333 5.00033 12.8 9.29199 16.7L10.5003 17.7917L11.7087 16.6917C16.0003 12.8 18.8337 10.2333 18.8337 7.08333C18.8337 4.51667 16.817 2.5 14.2503 2.5ZM10.5837 15.4583L10.5003 15.5417L10.417 15.4583C6.45033 11.8667 3.83366 9.49167 3.83366 7.08333C3.83366 5.41667 5.08366 4.16667 6.75033 4.16667C8.03366 4.16667 9.28366 4.99167 9.72533 6.13333H11.2837C11.717 4.99167 12.967 4.16667 14.2503 4.16667C15.917 4.16667 17.167 5.41667 17.167 7.08333C17.167 9.49167 14.5503 11.8667 10.5837 15.4583Z" fill={activeButton === 2 ? "#F57E5D" : "#FFFFFF"} />
                            </svg>
                        </div>
                        <p className={`text_10  pt-[2px] ${activeButton === 2 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}  >Home </p>
                    </Link>
                    <span className='border-[#FFFFFF] opacity-10  h-[18px] border-[1px] ' ></span>
                    <Link href="#" >
                        <div onClick={() => { handleClick(3) }} className={`btn ${activeButton === 3 ? 'active' : ''}  pb-[1px]  gap-[10px] py-[10px] `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M13.458 10.8333C14.083 10.8333 14.633 10.4916 14.9163 9.97496L17.8997 4.56663C18.208 4.01663 17.808 3.33329 17.1747 3.33329H4.84134L4.05801 1.66663H1.33301V3.33329H2.99967L5.99967 9.65829L4.87467 11.6916C4.26634 12.8083 5.06634 14.1666 6.33301 14.1666H16.333V12.5H6.33301L7.24967 10.8333H13.458ZM5.63301 4.99996H15.758L13.458 9.16663H7.60801L5.63301 4.99996ZM6.33301 15C5.41634 15 4.67467 15.75 4.67467 16.6666C4.67467 17.5833 5.41634 18.3333 6.33301 18.3333C7.24967 18.3333 7.99967 17.5833 7.99967 16.6666C7.99967 15.75 7.24967 15 6.33301 15ZM14.6663 15C13.7497 15 13.008 15.75 13.008 16.6666C13.008 17.5833 13.7497 18.3333 14.6663 18.3333C15.583 18.3333 16.333 17.5833 16.333 16.6666C16.333 15.75 15.583 15 14.6663 15Z" fill={activeButton === 3 ? "#F57E5D" : "#FFFFFF"} />

                            </svg>
                        </div>
                        <p className={`text_10  pt-[2px] ${activeButton === 3 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}  >Home </p>
                    </Link>
                    <span className='border-[#FFFFFF] opacity-10  h-[18px] border-[1px] ' ></span>

                    <Link href="#" >
                        <div onClick={() => { handleClick(4) }} className={`btn ${activeButton === 4 ? 'active' : ''}  pb-[1px]  gap-[10px] py-[10px] `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M10.4997 4.91671C11.4663 4.91671 12.2497 5.70004 12.2497 6.66671C12.2497 7.63337 11.4663 8.41671 10.4997 8.41671C9.53301 8.41671 8.74967 7.63337 8.74967 6.66671C8.74967 5.70004 9.53301 4.91671 10.4997 4.91671ZM10.4997 12.4167C12.9747 12.4167 15.583 13.6334 15.583 14.1667V15.0834H5.41634V14.1667C5.41634 13.6334 8.02467 12.4167 10.4997 12.4167ZM10.4997 3.33337C8.65801 3.33337 7.16634 4.82504 7.16634 6.66671C7.16634 8.50837 8.65801 10 10.4997 10C12.3413 10 13.833 8.50837 13.833 6.66671C13.833 4.82504 12.3413 3.33337 10.4997 3.33337ZM10.4997 10.8334C8.27467 10.8334 3.83301 11.95 3.83301 14.1667V16.6667H17.1663V14.1667C17.1663 11.95 12.7247 10.8334 10.4997 10.8334Z" fill={activeButton === 4 ? "#F57E5D" : "#FFFFFF"} />

                            </svg>
                        </div>
                        <p className={`text_10  pt-[2px] ${activeButton === 4 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}  >Home </p>
                    </Link>
                </div>
            </div>
            {/* <Blogpostcard/> */}
            {/* <Commoncard card={1} /> */}

        </>
    )
}

export default Mycart


// fill={activeButton === 1 ? "#F57E5D" : "#FFFFFF"}

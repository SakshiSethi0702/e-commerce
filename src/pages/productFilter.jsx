import React, { Fragment, useContext, useState } from 'react'
import Filter from '../commponents/snippets/sections/filter'
import Dropdown from '../commponents/snippets/dropdown/dropdown'
import Productcard from '../commponents/snippets/card/productcard'
import { Link } from 'react-router-dom'
import Overlay from '../contextfils/overlay'
import Products from '../contextfils/product'

const ProductFilter = () => {
    const [active, setactive] = useState(false)
    const [activeButton, setActiveButton] = useState(2);
    const handleClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };
    const [filteractive, setfilteractive] = useState(false)
    function overflow(e) {
        let body = document.getElementsByTagName('body')
        console.log(typeof e, "==============================")
        if (e === 1) {

            body[0].style.overflow = "hidden"
        }
        else {
            body[0].style.overflow = "auto"
        }
    }

    const { overlaypage, setoverlay } = useContext(Overlay)
    const { productsdata } = useContext(Products)

    return (
        <>
            <div className="md:mt-[200px] mt-[94px] container flex  gap-[30px] relative ">
                <div onClick={() => overflow()} className={` ${active === 1 ? "top-[-33px] left-0 z-[51] duration-500 md:static fixed overflow-y-scroll  overscroll-y-auto	h-[100vh] pb-[150px] " : "top-[-200%]"} left-0 absolute lg:static lg:block max-w-[375px] w-full`}>
                    <Filter active={activeButton} />
                </div>
                <div className='flex flex-col gap-[30px] w-full  '>
                    <div className=' hidden md:flex gap-[30px] p-[20px]  items-center ' >
                        <span className='w-full max-w-[827px] text-blue_gray_400 text_16_3 ' >Showing - (2800 Products)</span>
                        <div className='border-[1px] py-[14px] px-[18px]  max-w-[200px] w-full'>
                            <Dropdown classname={"text-blue_gray_400 text-[18px] leading-[26px] font-semibold  "} heading={"Sort By"}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </Dropdown>
                        </div>
                        <div className='flex gap-[10px]'>
                            <svg onClick={() => setactive(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM7 19H21V17H7V19ZM7 13H21V11H7V13ZM7 5V7H21V5H7Z" fill="#B0BEC5" />
                            </svg>
                            <svg onClick={() => setactive(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM8 20H4V16H8V20ZM8 14H4V10H8V14ZM8 8H4V4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM20 20H16V16H20V20ZM20 14H16V10H20V14ZM20 8H16V4H20V8Z" fill="#78909C" />
                            </svg>
                        </div>
                    </div>
                    <div className='  md:hidden flex gap-[14px] justify-between fixed top-0 left-0 right-0 z-10 py-[20px] px-[16px] bg-white ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#78909C" />
                        </svg>
                        <span className='text_20 text-blue_gray_600' >Man's Fashion</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#78909C" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#78909C" />
                        </svg>
                    </div>
                    <div className={` ${active === true ? "grid grid-cols-2  md:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 " : "grid grid-cols-1 xl:grid-cols-2 "} `}>
                        {
                            productsdata?.map((item, index) => {
                                return (<Fragment key={index}>
                                    <Productcard data={item} flex={active} />

                                </Fragment>)
                            })
                        }
                    </div>
                    <div>pagination</div>
                </div>
                <div className="items-center  md:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px]  fixed z-40 bottom-0 w-[95%]  left-[50%] right-0 transform translate-x-[-50%] py-[6px] " >
                    <div onClick={() => { handleClick(1); overflow(1); setoverlay(true) }} className={`btn ${activeButton === 1 ? 'active' : ''} btn pb-[1px] flex gap-[10px] py-[10px] `}>
                        <Link href="#" className={`text_10 ${activeButton === 1 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}>Filter By</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M7.16667 12H9.83333V10.6667H7.16667V12ZM2.5 4V5.33333H14.5V4H2.5ZM4.5 8.66667H12.5V7.33333H4.5V8.66667Z" fill={activeButton === 1 ? "#F57E5D" : "#FFFFFF"} />
                        </svg>
                    </div>
                    <span className='border-[#FFFFFF] opacity-10  h-[18px] border-[1px] ' ></span>
                    <div onClick={() => { handleClick(2); overflow(2); setoverlay(false); setactive(!active) }} className={`btn ${activeButton === 2 ? 'active' : ''} btn pb-[1px] flex gap-[10px] py-[10px] items-center`}>
                        <Link href="#" className={`text_10 ${activeButton === 2 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}>Grid View</Link>
                        {
                            active === true ? (<>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M0 0V5.33333H5.33333V0H0ZM4 4H1.33333V1.33333H4V4ZM0 6.66667V12H5.33333V6.66667H0ZM4 10.6667H1.33333V8H4V10.6667ZM6.66667 0V5.33333H12V0H6.66667ZM10.6667 4H8V1.33333H10.6667V4ZM6.66667 6.66667V12H12V6.66667H6.66667ZM10.6667 10.6667H8V8H10.6667V10.6667Z" fill={activeButton === 2 ? "#F57E5D" : "#FFFFFF"} />
                                </svg>
                            </>) : (<>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM7 19H21V17H7V19ZM7 13H21V11H7V13ZM7 5V7H21V5H7Z" fill={activeButton === 2 ? "#F57E5D" : "#FFFFFF"} />
                                </svg>
                            </>)
                        }
                    </div>
                    <span className='border-[#FFFFFF] opacity-10  h-[18px] border-[1px] ' ></span>
                    <div onClick={() => handleClick(3)} className={`btn ${activeButton === 3 ? 'active' : ''} btn pb-[1px] flex gap-[10px] py-[10px] `}>
                        <Link href="#" className={`text_10 ${activeButton === 3 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}>Sort By</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M6.49992 2L3.83325 4.66H5.83325V9.33333H7.16659V4.66H9.16659L6.49992 2ZM11.1666 11.34V6.66667H9.83325V11.34H7.83325L10.4999 14L13.1666 11.34H11.1666Zs" fill={activeButton === 3 ? "#F57E5D" : "#FFFFFF"} />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFilter


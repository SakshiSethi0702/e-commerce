import React, { useState } from 'react'
import Liquidbutton from '../commponents/common/liquidbutton'
import Swipercardsectioncommon from '../commponents/snippets/swiper/swipercardsectioncommon'
import Input from '../commponents/snippets/input/input';
import Solidbutton from '../commponents/common/solidbutton';

const BlogDetails = () => {
    const [activeButton, setActiveButton] = useState(1);
    const handleClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };
    return (
        <>
            <div className='   mt-[100px]   md:mt-[200px] ' >
                <img className='m-auto hidden md:block ' src="/images/blogdetailspageimage.png" alt="blog" />
                <img className=' w-full md:hidden  ' src="/images/blogbannerimageres.png" alt="blog" />
                <div className=' container md:max-w-[1240px] m-auto  ' >
                    <div className='flex gap-[60px]  py-[20px] md:p-[40px] overflow-hidden     md:mt-[-100px] bg-white rounded-[20px] relative z-9 '>
                        <div className='w-[180px] md:block hidden ' >
                            <h4 onClick={() => { handleClick(1) }} className={` w-fit whitespace-nowrap  ${activeButton === 1 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"}  uppercase  w-full py-[11px] px-2 text_16_3 `}>My Orders</h4>
                            <h4 onClick={() => { handleClick(2) }} className={` w-fit whitespace-nowrap  ${activeButton === 2 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"}  uppercase w-full py-[11px] px-2 text_16_3 `}>Products Help</h4>
                            <h4 onClick={() => { handleClick(3) }} className={` w-fit whitespace-nowrap  ${activeButton === 3 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"}  uppercase w-full py-[11px] px-2 text_16_3 `}>Payment Options</h4>
                            <h4 onClick={() => { handleClick(4) }} className={` w-fit whitespace-nowrap  ${activeButton === 4 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"}  uppercase w-full py-[11px] px-2 text_16_3 `}>Wallet Status</h4>
                            <h4 onClick={() => { handleClick(5) }} className={` w-fit whitespace-nowrap  ${activeButton === 5 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"}  uppercase w-full py-[11px] px-2 text_16_3 `}>Order Status</h4>
                            <h4 onClick={() => { handleClick(6) }} className={` w-fit whitespace-nowrap  ${activeButton === 6 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"}  uppercase w-full py-[11px] px-2 text_16_3 `}>Return Center</h4>
                            <h4 onClick={() => { handleClick(7) }} className={` w-fit whitespace-nowrap  ${activeButton === 7 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"}  uppercase w-full py-[11px] px-2 text_16_3 `}>Gift Cards</h4>
                            <h4 onClick={() => { handleClick(8) }} className={` w-fit whitespace-nowrap  ${activeButton === 8 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"}  uppercase w-full py-[11px] px-2 text_16_3 `}>Order Management</h4>
                            <h4 onClick={() => { handleClick(9) }} className={` w-fit whitespace-nowrap  ${activeButton === 9 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"}  uppercase w-full py-[11px] px-2 text_16_3 `}>Pricing</h4>
                            <h4 onClick={() => { handleClick(10) }} className={` w-fit whitespace-nowrap ${activeButton === 10 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"} uppercase  w-full py-[11px] px-2 text_16_3 `}>Product Pricing</h4>
                            <h4 onClick={() => { handleClick(11) }} className={` w-fit whitespace-nowrap ${activeButton === 11 ? "text-[#F57E5D] border-r-[1px] border-light_primary   pb-[10px] " : "text-blue_gray_400"} uppercase  w-full py-[11px] px-2 text_16_3 `}>Refund Help</h4>
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
                        <div>
                            <section className='border-b-[1px]  mb-[40px] pb-[40px] ' >
                                <div className='flex flex-col ' >
                                    <div className='flex justify-between ' >
                                        <h2 className='text_24_20 text-light_primary' >20 September. 2022</h2>
                                        <div className='flex gap-[10px]' >
                                            <Liquidbutton className={"py-[3px] md:px-[10px] w-[64px] text-[13px] h-[33px] px-[0px] rounded-[16px]"}>
                                                Culture
                                            </Liquidbutton>
                                            <Liquidbutton className={"py-[3px] md:px-[10px] w-[64px] text-[13px] h-[33px] px-[0px] rounded-[16px]"} >
                                                Fashion
                                            </Liquidbutton>
                                        </div>
                                    </div>
                                    <h3 className='text_48_24 text-blue_gray_800  py-[20px] md:py-[30px] ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</h3>
                                    <h4 className='text_24_16 text-blue_gray_700 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </h4>
                                    <p className='text-blue_gray_500 text_16_2_14  md:pt-[20px] pt-[14px] ' >Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                                </div>
                            </section>
                            <section className='pb-[40px]' >
                                <h2 className='pb-[30px] text_24_20 text-blue_gray_700 ' >Payment Processor Features</h2>
                                <p className='text_16_1_14 text-blue_gray_500' >Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                                <p className='text_16_1_14 text-blue_gray_500  mt-[10px] md:pt-[14] ' >Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                            </section>
                            <section className='p-[30px] bg-light_primary_shades_4p  rounded-[10px] mb-[40px] ' >
                                <div className='' >
                                    <h2 className='text-blue_gray_700  text_20_16 ' >“ Ac scelerisque ante pulvinar. Donec. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ”</h2>
                                    <p className='text-blue_gray_700 text_20_14 text-end ' >By- John Watson</p>
                                </div>
                            </section>
                            <div className='mb-[40px] rounded-[20px] overflow-hidden ' >
                                <img className='w-full' src="/images/blogdetalsimage.png" alt="blogdetalsimage" />
                            </div>
                            <section className='mb-[40px] ' >
                                <h2 className='text_24_20 text-blue_gray_700  pb-[30px] ' >
                                    Platform Costs and Fees
                                </h2>
                                <ul className='flex gap-[14px] flex-col' >
                                    <li className='text_20_16 text-blue_gray_500 ' >- Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </li>
                                    <li className='text_20_16 text-blue_gray_500 ' >- Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </li>
                                    <li className='text_20_16 text-blue_gray_500 ' >- Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </li>
                                    <li className='text_20_16 text-blue_gray_500 ' >- Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </li>
                                    <li className='text_20_16 text-blue_gray_500 ' >- Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </li>
                                </ul>
                            </section>
                            <section className='mb-[40px] border-b-[1px]  pb-[40px]' >
                                <h2 className='text_24_20 text-blue_gray_700  pb-[30px] ' >
                                    Security & Returns
                                </h2>
                                <p className='text-blue_gray_500 text_16_2_14 pb-[14px]' >Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                                <ul className='flex gap-[14px] flex-col' >
                                    <li className='text_20_16 text-blue_gray_500 ' >- Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </li>
                                    <li className='text_20_16 text-blue_gray_500 ' >- Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </li>
                                </ul>
                            </section>
                            <div className='flex  gap-[20px] pb-[40px]  justify-center items-center text-center md:justify-between flex-col md:flex-row' >
                                <div className='flex gap-[8px]' >
                                    <img src="/svg/userimage.svg" alt="useimage" />
                                    <p className='text-blue_gray_700 text_16_2' >By- Ramson Grace</p>
                                </div>
                                <div>
                                    <p></p>
                                    <div className='flex gap-[16px]' >
                                        <img src="/svg/Facebook.svg" alt="Facebook" />
                                        <img src="/svg/Instagram.svg" alt="Instagram" />
                                        <img src="/svg/Pinterest.svg" alt="Pinterest" />
                                        <img src="/svg/Twitter.svg" alt="Twitter" />
                                    </div>

                                </div>
                            </div>
                            <div className='' >
                                <div className=' bg-hf_extra  border-b-[1px] md:p-[30px] p-[10px] ' >
                                    <div className='border-b-[1px] mb-[30px] pb-[30px]' >
                                        <h2 className='text-blue_gray_800 text_34_24' >Comments</h2>
                                    </div>
                                    <div className="pb-[30px]">
                                        <div className='flex  gap-[20px]  justify-between ' >
                                            <div className='flex gap-[8px]' >
                                                <img src="/svg/userimage.svg" alt="useimage" />
                                                <p className='text-blue_gray_700 text_16_2' >Ady Johnson</p>
                                            </div>
                                            <span className='text_12 text-blue_gray_500  ' >2 Days Agos</span>
                                        </div>
                                        <p className="text_14_1_12 text-blue_gray_300 pt-2 pb-5">
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <h5 className="flex items-center gap-x-1 text-blue_gray_300">
                                                <img src="/svg/shareleftside.svg" alt="" />
                                                Share
                                            </h5>
                                            <div className="flex items-center gap-x-4">
                                                <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_400">
                                                    <img src="/svg/likeup.svg" alt="" />
                                                    21 Likes
                                                </p>
                                                <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_200">
                                                    <img src="/svg/likedown.svg" alt="" />
                                                    21 Likes
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-[30px]">
                                        <div className='flex  gap-[20px]  justify-between ' >
                                            <div className='flex gap-[8px]' >
                                                <img src="/svg/userimage.svg" alt="useimage" />
                                                <p className='text-blue_gray_700 text_16_2' >Ady Johnson</p>
                                            </div>
                                            <span className='text_12 text-blue_gray_500  ' >2 Days Agos</span>
                                        </div>
                                        <p className="text_14_1_12 text-blue_gray_300 pt-2 pb-5">
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <h5 className="flex items-center gap-x-1 text-blue_gray_300">
                                                <img src="/svg/shareleftside.svg" alt="" />
                                                Share
                                            </h5>
                                            <div className="flex items-center gap-x-4">
                                                <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_400">
                                                    <img src="/svg/likeup.svg" alt="" />
                                                    21 Likes
                                                </p>
                                                <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_200">
                                                    <img src="/svg/likedown.svg" alt="" />
                                                    21 Likes
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-hf_extra md:p-[30px] p-[10px]' >
                                    <h2 className='text-blue_gray_800 text_24_20 pt-[30px] ' > Add Comments</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[30px] gap-[20px]  py-[20px] md:py-[30px]' >
                                        <Input className={"w-full"} lableclass={"text-blue_gray_600 text_16_1 border-none"} inputtext={"Raj Kumar"} >
                                            Full Name
                                        </Input>
                                        <Input className={"w-full"} lableclass={"text-blue_gray_600 text_16_1 border-none"} inputtext={"dummyemail@gmail.com"} >
                                            Email Address
                                        </Input>
                                        <div className=' md:col-[1_/_span_2]' >
                                            <Input className={"w-full  "} lableclass={"text-blue_gray_600 text_16_1 border-none"} inputtext={"Type Here"} >
                                                Your Comment
                                            </Input>
                                        </div>
                                    </div>
                                    <div className=' flex  md:justify-end' >
                                        <Solidbutton className={" w-full md:w-auto  rounded-[10px] py-[14px] px-[18px]"}>
                                            Submit Comment
                                        </Solidbutton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container' >
                    <Swipercardsectioncommon
                        custombttombtnclass={"block md:hidden pt-[30px]"}
                        customtopbtnclass={"md:block hidden "}
                        bottombtn={true}
                        topbtn={true} card={"blogcard"} smallHeading={"Blog"} mainHeading={"Related Blog Posts"} />
                </div>
            </div>
        </>
    )
}

export default BlogDetails  
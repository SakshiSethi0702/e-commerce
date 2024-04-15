import React from 'react'
import Banner from '../commponents/snippets/sections/banner'
import Brandtag from '../commponents/home/brandtag'
import Swipersection from '../commponents/snippets/sections/swipersection'
import Accordion from '../commponents/snippets/accordion'
import { Link } from 'react-router-dom'
const Career = () => {
    function sidebarAccordion(e) {
        let sibbling = e.currentTarget.nextSibling;
        let getheight = sibbling.scrollHeight;
        if (!sibbling.getAttribute("style")) {
            sibbling.style.height = `${getheight}px`;
        } else {
            sibbling.removeAttribute("style");
        }
    }
    function rotate(e) {
        let currentvalue = e.currentTarget.lastChild;
        if (!currentvalue.getAttribute("style")) {
            currentvalue.style.transform = "rotate(180deg)";
        } else {
            currentvalue.removeAttribute("style");
        }
    }
    return (
        <>
            <div className=' ' >
                <div className='bg-[#F57E5D0A]'>

                <div className='container'>
                <Banner smallheading={"We Are Hiring"} maintextfirst={"Start"} spantext={"Your Career"} maintextlast={"WithFashionCart"} ptext={"We Try Our Best Product For Shipping, Along With Tracking Info. We Inform Order Within 24hours In Your Email Address."} btndata={"Find Best Job"} image={"careerimage.png"} />
                </div>
                </div>
                <Brandtag />
                <div className=' bg-hf_extra '>
                <div className='container py-10 md:py-[60px] xl:py-[80px]'>
                <div className='flex justify-center  md:justify-start ' >
                    <Swipersection className={"  text-center md:text-start"} smallHeading={"Career"} mainHeading={"Our Popular Jobs"} />
                </div>
                <div className= ' grid gap-[13px] md:gap-5 lg:gap-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[60px]' >
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
                    <div className=' flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path d="M35 10.5H29.75V7C29.75 5.0575 28.1925 3.5 26.25 3.5H15.75C13.8075 3.5 12.25 5.0575 12.25 7V10.5H7C5.0575 10.5 3.5 12.0575 3.5 14V33.25C3.5 35.1925 5.0575 36.75 7 36.75H35C36.9425 36.75 38.5 35.1925 38.5 33.25V14C38.5 12.0575 36.9425 10.5 35 10.5ZM15.75 7H26.25V10.5H15.75V7ZM35 33.25H7V29.75H35V33.25ZM35 24.5H7V14H12.25V17.5H15.75V14H26.25V17.5H29.75V14H35V24.5Z" fill="#F57E5D" />
                        </svg>
                        <Link to="/job-apply">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='text_24_16 text-blue_gray_700 ' >Lead Manager</h2>
                            <span className='text_16_1_14 text-blue_gray_400 ' >16 Jobs</span>
                        </div>
                        </Link>
                    
                    </div>
             
              
                </div>
                </div>
                </div>
                <div className='  my-[80px] py-[40px] px-[16px] md:p-[60px]'>
                    <div className='justify-center flex' >
                        <Swipersection className={" items-center text-center"} smallHeading={"FashionCart"} mainHeading={"Frequently Asked Questions"} />
                    </div>
                    <div className=' mt-[60px] flex flex-col md:flex-row gap-[14px]  md:gap-[30px]' >
                        <div className='flex flex-col gap-y-[14px] md:gap-y-[30px]' >
                            <Accordion className={"py-[10px] px-[8px] md:p-5 "} question={"How I Track The Progress of An My Orders?"} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus laudantium, earum animi quaerat delectus natus inventore vel eius exercitationem. Magni deserunt asperiores, porro odio provident modi quaerat nisi ut ullam cupiditate! Dolorem quod vero, obcaecati esse officiis eius perferendis ducimus asperiores aut.
                                </p>
                            </Accordion>
                            <Accordion className={"py-[10px] px-[8px] md:p-5 "} question={"How I Track The Progress of An My Orders?"} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus laudantium, earum animi quaerat delectus natus inventore vel eius exercitationem. Magni deserunt asperiores, porro odio provident modi quaerat nisi ut ullam cupiditate! Dolorem quod vero, obcaecati esse officiis eius perferendis ducimus asperiores aut.
                                </p>
                            </Accordion>
                            <Accordion className={"py-[10px] px-[8px] md:p-5 "} question={"How I Track The Progress of An My Orders?"} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus laudantium, earum animi quaerat delectus natus inventore vel eius exercitationem. Magni deserunt asperiores, porro odio provident modi quaerat nisi ut ullam cupiditate! Dolorem quod vero, obcaecati esse officiis eius perferendis ducimus asperiores aut.
                                </p>
                            </Accordion>
                            <Accordion className={"py-[10px] px-[8px] md:p-5 "} question={"How I Track The Progress of An My Orders?"} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus laudantium, earum animi quaerat delectus natus inventore vel eius exercitationem. Magni deserunt asperiores, porro odio provident modi quaerat nisi ut ullam cupiditate! Dolorem quod vero, obcaecati esse officiis eius perferendis ducimus asperiores aut.
                                </p>
                            </Accordion>
                        </div>
                        <div className='flex flex-col  gap-y-[14px] md:gap-y-[30px]' >

                            <Accordion className={"py-[10px] px-[8px] md:p-5 "} question={"How I Track The Progress of An My Orders?"} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus laudantium, earum animi quaerat delectus natus inventore vel eius exercitationem. Magni deserunt asperiores, porro odio provident modi quaerat nisi ut ullam cupiditate! Dolorem quod vero, obcaecati esse officiis eius perferendis ducimus asperiores aut.
                                </p>
                            </Accordion>
                            <Accordion className={"py-[10px] px-[8px] md:p-5 "} question={"How I Track The Progress of An My Orders?"} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus laudantium, earum animi quaerat delectus natus inventore vel eius exercitationem. Magni deserunt asperiores, porro odio provident modi quaerat nisi ut ullam cupiditate! Dolorem quod vero, obcaecati esse officiis eius perferendis ducimus asperiores aut.
                                </p>
                            </Accordion>
                            <Accordion className={"py-[10px] px-[8px] md:p-5 "} question={"How I Track The Progress of An My Orders?"} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus laudantium, earum animi quaerat delectus natus inventore vel eius exercitationem. Magni deserunt asperiores, porro odio provident modi quaerat nisi ut ullam cupiditate! Dolorem quod vero, obcaecati esse officiis eius perferendis ducimus asperiores aut.
                                </p>
                            </Accordion>
                            <Accordion className={"py-[10px] px-[8px] md:p-5 "} question={"How I Track The Progress of An My Orders?"} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus laudantium, earum animi quaerat delectus natus inventore vel eius exercitationem. Magni deserunt asperiores, porro odio provident modi quaerat nisi ut ullam cupiditate! Dolorem quod vero, obcaecati esse officiis eius perferendis ducimus asperiores aut.
                                </p>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career
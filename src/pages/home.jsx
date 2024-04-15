import React from "react";
import BiggestSalecard from "../commponents/common/biggestSalecard";
import Dealscard from "../commponents/snippets/card/dealscard";
import FeaturedSwiper from "../commponents/snippets/swiper/commonSwiper";
import Wearcollection from "../commponents/home/wearcollection";
import Explore from "../commponents/home/explore";
import Brandtag from "../commponents/home/brandtag";
import DiscountRange from "../commponents/home/discountRange";
import BudgetDeals from "../commponents/home/budgetDeals";
import Salebanner from "../commponents/home/salebanner";
import Banner from "../commponents/snippets/sections/banner";
import BestsellingProducts from "../commponents/home/bestsellingProducts";
import Featuredsection from "../commponents/home/Featuredsection";
import UserThoughts from "../commponents/common/userThoughts";
const Home = () => {
    return (
        <>
            <Banner smallheading={"Hurry Up Grab 40% Off"} maintextfirst={"New"} spantext={"Arrivals"} maintextlast={"For Summer Wear"} ptext={"We Try Our Best Product For Shipping, Along With Tracking Info. We Inform Order Within 24hours In Your Email Address."} btndata={"Shop Now"} banner={true} image={"bannergirlimage.png"} />
            <Brandtag />
            <Wearcollection />
            <BestsellingProducts />
            {/* <BiggestSalecard /> */}
         <Explore />
               <DiscountRange />
            <BudgetDeals /> 
           {/* <Dealscard />
            {/*  <Salebanner />*/}
            <UserThoughts />
            {/* <Featuredsection />  */}
        </>
    );
};

export default Home;



/*
             <div className='md:max-w-[300px] lg:max-w-[375px] w-full p-[14px] group cursor-pointer relative' >
                <div className='bg-extra_bg lg:px-[35px] lg:pt-[28px] lg:pb-[18px] pt-[23px] pr-[15px] pl-[16px] pb-[10px]   md:w-full' >
                    <img className=' max-w-[277px] w-full' src={cardimage} alt="cardimage" />
                    <span className=' absolute lg:top-[34px] lg:left-[29px]  md:top-[24px] md:left-[19px]  top-[14px] left-[14px]  bg-light_primary rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast block text-center w-[44px] md:w-[48px] lg:w-[53px] ' >
                        new
                    </span>
                    <div className='absolute lg:right-[29px] lg:top-[29px] md:right-[24px] md:top-[19px] right-[14px] top-[14px] bg-white  p-[8px] rounded-[90px]    w-[28px] md:w-[28px] ' >
                        <img src="/svg/Like.svg" alt="Like" />
                    </div>
                    <span className='group-hover:block hidden duration-500 absolute bottom-[10px] right-[50%]' >......</span>
                </div>
                <div className='md:flex md:gap mt-[14px] justify-between ' >
                    <h3 className='text_20_14_medium text-blue_gray_600  group-hover:text-light_primary duration-300 whitespace-nowrap overflow-hidden text-ellipsis ' >Grey Cotton T-Shirt</h3>
                    <div className='md:flex gap-[4px] items-center hidden ' >
                        <img src="/svg/star.svg" alt="star" />
                        <span className='whitespace-nowrap  text-blue_gray_400'> 4.5 (200) </span>
                    </div>
                </div>
                <div className='flex gap-[8px] py-[10px] ' >
                    <span className='text_14_1_12 text-blue_gray_400 '  >Colors-</span>
                    <ul className='flex gap-[6px]' >
                        <li className='md:w-[20px] w-[10px] md:h-[20px] h-[10px] rounded-[50%]' style={{ backgroundColor: "#F57E5D" }} ></li>
                        <li className='md:w-[20px] w-[10px] md:h-[20px] h-[10px] rounded-[50%]' style={{ backgroundColor: "#02A77D" }} ></li>
                        <li className='md:w-[20px] w-[10px] md:h-[20px] h-[10px] rounded-[50%]' style={{ backgroundColor: "#D32F2F" }} ></li>
                        <li className='md:w-[20px] w-[10px] md:h-[20px] h-[10px] rounded-[50%]' style={{ backgroundColor: "#ED6C02" }} ></li>
                        <li className='md:w-[20px] w-[10px] md:h-[20px] h-[10px] rounded-[50%]' style={{ backgroundColor: "#0288D1" }} ></li>
                    </ul>
                </div>
                <div>
                    <div className='flex md:gap-[6px] gap-[4px] items-center ' >
                        <span className='text_24_14 ' >$ 20.00</span>
                        <span className='text_16_2_10   text-blue_gray_400  ' > $32.00 </span>
                        <span className=' text-blue_gray_500 text_12' >(15% Off)</span>
                    </div>
                </div>
            </div>
*/

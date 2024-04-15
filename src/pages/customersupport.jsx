import React, { useState } from 'react'
import Policytittle from "../commponents/snippets/policiesheading/policytittle";
import Solidbutton from '../commponents/common/solidbutton';
import Faq from '../commponents/snippets/faq/faq';
import Productcard from '../commponents/snippets/card/productcard';
import Commoncard from '../commponents/snippets/card/commoncard';

const Customersupport = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <section className='mt-[159px]'>
      <div className=" py-[30px] bg-extra_bg">
        <Policytittle className="mt-[60px]">Customer Support</Policytittle>
      </div>
      <div className='container py-10 md:py-[60px] xl:py-[80px]'>
        <div className='flex justify-between'>
          <h3 className='text-blue_gray_800 text_34_24 hidden lg:block'>Customer Support</h3>
          <div className='flex lg:max-w-[510px] gap-x-5 w-full'>
            <div className='py-4 px-[14px] border-[1px] border-blue_gray_50 rounded-md flex gap-x-[6px] w-full flex-row-reverse lg:flex-row'>
              <input className='placeholder:text-blue_gray_400 placeholder:text_16_2 w-full' type="text" placeholder='Type Here What You Want to Know? ' />
              <img src="/svg/darksearch.svg" alt="" />
            </div>
            <Solidbutton className="py-4 px-6 rounded-lg hidden lg:block">Search</Solidbutton>
          </div>
        </div>
        <div className='flex gap-x-[30px] mt-[60px] flex-col xl:flex-row'>
          <div className='flex flex-row gap-y-[10px] gap-x-[13px]  p-[10px] xl:max-w-[240px] w-full  xl:flex-col overflow-y-auto'>
            <h4 onClick={() => { handleClick(1) }} className={` w-fit whitespace-nowrap  ${activeButton === 1 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}   w-full py-[11px] px-2 text_16_3 `}>My Orders</h4>
            <h4 onClick={() => { handleClick(2) }} className={` w-fit whitespace-nowrap  ${activeButton === 2 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Products Help</h4>
            <h4 onClick={() => { handleClick(3) }} className={` w-fit whitespace-nowrap  ${activeButton === 3 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Payment Options</h4>
            <h4 onClick={() => { handleClick(4) }} className={` w-fit whitespace-nowrap  ${activeButton === 4 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Wallet Status</h4>
            <h4 onClick={() => { handleClick(5) }} className={` w-fit whitespace-nowrap  ${activeButton === 5 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Order Status</h4>
            <h4 onClick={() => { handleClick(6) }} className={` w-fit whitespace-nowrap  ${activeButton === 6 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Return Center</h4>
            <h4 onClick={() => { handleClick(7) }} className={` w-fit whitespace-nowrap  ${activeButton === 7 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Gift Cards</h4>
            <h4 onClick={() => { handleClick(8) }} className={` w-fit whitespace-nowrap  ${activeButton === 8 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Order Management</h4>
            <h4 onClick={() => { handleClick(9) }} className={` w-fit whitespace-nowrap  ${activeButton === 9 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Pricing</h4>
            <h4 onClick={() => { handleClick(10) }} className={` w-fit whitespace-nowrap   ${activeButton === 10 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Product Pricing</h4>
            <h4 onClick={() => { handleClick(11) }} className={` w-fit whitespace-nowrap   ${activeButton === 11 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Refund Help</h4>
          </div>
          <div className='w-full mt-5'>
            {
              activeButton === 1 && (<>
                <Faq />
              </>)
            }
            {
              activeButton === 2 && (<>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
                  {/* <Productcard />
                  <Productcard />
                  <Productcard />
                  <Productcard />
                  <Productcard />
                  <Productcard /> */}
                </div></>)
            }
            {
              activeButton === 3 && (<>
                <div className='grid grid-cols-1' >
                  {/* <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} /> */}
                </div></>)
            }
            {
              activeButton === 4 && (<>
                <div className='grid gap-x-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
                  {/* <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} /> */}
                </div></>)
            }
            {
              activeButton === 5 && (<>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
                  {/* <Productcard />
                  <Productcard />
                  <Productcard />
                  <Productcard />
                  <Productcard />
                  <Productcard /> */}
                </div></>)
            }
            {
              activeButton === 6 && (<>
                <div className='grid grid-cols-1' >
                  {/* <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} /> */}
                </div></>)
            }
            {
              activeButton === 7 && (<>
                <div className='grid gap-x-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
                  {/* <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} /> */}
                </div></>)
            }
            {
              activeButton === 8 && (<>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
                  {/* <Productcard />
                  <Productcard />
                  <Productcard />
                  <Productcard />
                  <Productcard />
                  <Productcard /> */}
                </div></>)
            }
            {
              activeButton === 9 && (<>
                <div className='grid grid-cols-1' >
                  {/* <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} />
                  <Commoncard card={2} /> */}
                </div></>)
            }
            {
              activeButton === 10 && (<>
                <div className='grid gap-x-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
                  {/* <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} /> */}
                </div></>)
            }
            {
              activeButton === 11 && (<>
                <div className='grid grid-cols-1' >
                  {/* <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} /> */}
                </div></>)
            }
            {
              activeButton === 12 && (<>
                <div className='grid gap-x-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
                  {/* <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} />
                  <Commoncard card={1} /> */}
                </div></>)
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default Customersupport



/*
<h4 onClick={() => { handleClick(1) }} className={`xl:max-w-[220px] ${activeButton === 1 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}   w-full py-[11px] px-2 text_16_3 `}>My Orders</h4>
                <h4 onClick={() => { handleClick(2) }} className={`xl:max-w-[220px] ${activeButton === 2 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Products Help</h4>
                <h4 onClick={() => { handleClick(3) }} className={`xl:max-w-[220px] ${activeButton === 3 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Payment Options</h4>
                <h4 onClick={() => { handleClick(4) }} className={`xl:max-w-[220px] ${activeButton === 4 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Wallet Status</h4>
                <h4 onClick={() => { handleClick(5) }} className={`xl:max-w-[220px] ${activeButton === 5 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Order Status</h4>
                <h4 onClick={() => { handleClick(6) }} className={`xl:max-w-[220px] ${activeButton === 6 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Return Center</h4>
                <h4 onClick={() => { handleClick(7) }} className={`xl:max-w-[220px] ${activeButton === 7 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Gift Cards</h4>
                <h4 onClick={() => { handleClick(8) }} className={`xl:max-w-[220px] ${activeButton === 8 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Order Management</h4>
                <h4 onClick={() => { handleClick(9) }} className={`xl:max-w-[220px] ${activeButton === 9 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Pricing</h4>
                <h4 onClick={() => { handleClick(10) }} className={`xl:max-w-[220px] ${activeButton === 10 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Product Pricing</h4>
                <h4 onClick={() => { handleClick(11) }} className={`xl:max-w-[220px] ${activeButton === 11 ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px] " : "text-blue_gray_400"}  w-full py-[11px] px-2 text_16_3 `}>Refund Help</h4>




*/
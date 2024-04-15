import React from 'react'
import Solidbutton from '../../common/solidbutton'
import { stopScrolling } from '../../../utils/utils';

const Discountpopup = ({ className, setoff, setoverlay }) => {

    return (
        <>
            <div className={`fixed z-[51] top-[30%]  left-0 right-0 ${className} transform translate-y-[-50% ,-50%]   w-full  m-auto flex   justify-center `}>
                <div className='grid  md:gap-[30px]  max-w-[343px]  gap-[20px]  grid-cols-1 md:grid-cols-2 object-none md:max-w-[840px]  bg-white relative z-[51]   top-[-12pc] p-[20px]' >
                    <img className='md:block hidden' src="/images/popupgirl.png" alt="popupgirl" />
                    <img className=' h-[343px] md:pt-[10px] md:px-[20px] object-none md:hidden' src="/images/popresponsive.png" alt="popupgirl" />
                    <div className='flex flex-col gap-[20px] md:gap-[40px] md:w-[440px] justify-center ' >
                        <div className='flex gap-[30px] ' >
                            <img src="/svg/popupshortsimage.svg" alt="popupshortsimage" />
                            <img src="/svg/popupshortsimage2.svg" alt="popupshortsimage" />
                        </div>
                        <div>
                            <h2 className='text-blue_gray_600 text_24_16  h-[65px]' >
                                Get Upto
                                <span className='text_60_48 text-blue_gray_800 ' >50% Off</span>
                            </h2>
                        </div>
                        <Solidbutton className={"py-[10px] px-[16px] w-[172px] rounded-[8px] "} >
                            Start Shopping
                        </Solidbutton>
                    </div>
                    <img onClick={() => { setoff(false); setoverlay(false); stopScrolling(false) }} className=' cursor-pointer absolute top-[30px] right-[30px] ' src="/svg/CloseFilled.svg" alt="close" />
                </div>
            </div>
        </>
    )
}

export default Discountpopup
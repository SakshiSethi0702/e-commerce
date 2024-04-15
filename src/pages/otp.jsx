import React from 'react'
import Solidbutton from '../commponents/common/solidbutton'

const Otp = () => {

    return (
        <>
            <section className='bg-hf_extra h-[100vh]' >
                <h1 className='text-light_primary text-center  text_28 pt-[40px] ' >FashionCart</h1>
                <div className='md:mt-[295px] mt-[194px] ' >
                    <div className=' py-[20px] px-[16px] md:p-[30px] bg-white  max-w-[343px] md:max-w-[510px] w-full m-auto  text-center' >
                        <div>
                            <h2 className=' text-start text_24_20 text-blue_gray_700' > Login Via OTP</h2>
                            <p className='py-[20px] text_16_2_14 text-blue_gray_400 ' >Enter otp, we sent on your mobile number on (1234567890)</p>
                        </div>
                        <div>
                            <ul className='flex gap-[18px] justify-between py-[30px] ' >
                                <li className='py-[12px] px-[16px] w-[60px] h-[56px] rounded-[4px] border-[1px] border-blue_gray_100 text-blue_gray_400 text_16_2 ' >1</li>
                                <li className='py-[12px] px-[16px] w-[60px] h-[56px] rounded-[4px] border-[1px] border-blue_gray_100 text-blue_gray_400 text_16_2 ' >1</li>
                                <li className='py-[12px] px-[16px] w-[60px] h-[56px] rounded-[4px] border-[1px] border-blue_gray_100 text-blue_gray_400 text_16_2 ' >1</li>
                                <li className='py-[12px] px-[16px] w-[60px] h-[56px] rounded-[4px] border-[1px] border-blue_gray_100 text-blue_gray_400 text_16_2 ' >1</li>
                                <li className='py-[12px] px-[16px] w-[60px] h-[56px] rounded-[4px] border-[1px] border-blue_gray_100 text-blue_gray_400 text_16_2 ' >1</li>

                            </ul>
                        </div>
                        <Solidbutton className={"w-full py-[14px] px-[16px] rounded-[6px] mb-[20px] "} >
                            Verify
                        </Solidbutton>
                        <p> <span className='text-light_primary text_16_2' >Resend Code</span>  After (40 Sec)</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Otp
import React from 'react'
import Input from '../commponents/snippets/input/input'
import Solidbutton from '../commponents/common/solidbutton'

const ResetPassword = () => {
    return (
        <>
            {/* <section className=' h-full bg-hf_extra' >
                
            </section> */}
            <section className='bg-hf_extra h-[100vh]' >
                <h1 className='text-light_primary text-center  text_28 pt-[40px] ' >FashionCart</h1>
                <div className='md:mt-[295px] mt-[194px] ' >
                    <div className=' py-[20px] px-[16px] md:p-[30px] bg-white  max-w-[343px] md:max-w-[510px] w-full m-auto  text-center' >

                        <h2 className=' pb-[30px] text_24_20 text-blue_gray_700' > Reset Your Password</h2>
                        <Input
                            className={" border-[1px] outline w-full "}
                            inputtext={"+91 98765 43210"}
                            inputmainclass={" rounded-[6px] border-[1px]"}
                            lableclass={" pb-[30px] text_16_1 text-blue_gray_600 text-start"}
                            inputtype={"text"}
                        >
                            Email or Phone
                        </Input>
                        <Solidbutton className={"w-full py-[14px] px-[16px] rounded-[6px] mb-[20px] "} >
                            Forgot
                        </Solidbutton>
                        <span className='text-light_primary text_16_2' >Resend Code</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPassword
import React, { useState } from 'react'
import Input from '../commponents/snippets/input/input'
import { Link } from 'react-router-dom'
import Solidbutton from '../commponents/common/solidbutton'

const Login = () => {
    const [show, setshow] = useState(false)
    return (
        <>
            <section className='bg-hf_extra pb-[70px] ' >
                <h1 className='text-light_primary text-center  text_28 pt-[40px] ' >FashionCart</h1>
                <div className=' bg-white roumded-[10px] max-w-[343px] md:max-w-[510px] w-full m-auto ' >
                    <div className=" md:mt-[144px] mt-[100px] text-center ">
                        <div className='md:p-[30px] py-[20px] px-[16px] flex gap-[30px]  flex-col   ' >
                            <h2 className='text_24_20 text-blue_gray_700' >Hi, Welcome Back!</h2>
                            <div className='flex gap-[30px] flex-col' >
                                <Input
                                    className={" border-[1px] outline w-full  "}
                                    inputtext={"+91 98765 43210"}

                                    inputmainclass={" rounded-[6px] border-[1px]"}
                                    lableclass={"  text_16_1 text-blue_gray_600 text-start"}
                                    inputtype={"text"}
                                >
                                    Email or Phone
                                </Input>
                                <Input
                                    className={" border-[1px] outline w-full "}
                                    inputtext={"xxxxxxx"}
                                    inputmainclass={" rounded-[6px] border-[1px]"}
                                    lableclass={"  text_16_1 text-blue_gray_600 text-start"}
                                    inputtype={`${show === true ? "text" : "password"}`}
                                    show={true}
                                    showtype={show}
                                    setshow={setshow}
                                >
                                    Password
                                </Input>
                                <Link className='text-end' to="/reset-password" >
                                    Forgot password?
                                </Link>
                            </div>
                            <Solidbutton className={"w-full py-[14px] rounded-[6px] "} >
                                Login
                            </Solidbutton>
                            <span className='text-light_primary' ><Link to="/otp">Request OTP</Link> </span>
                            <div className='flex justify-between' >
                                <div className='md:max-w-[130px] max-w-[92px]  rounded-[6px]  w-full border-[1px]  flex justify-center  ' >
                                    <img className=' py-[14px] px-[20px]  ' src="/svg/applelogo.svg" alt="apple" />
                                </div>
                                <div className='md:max-w-[130px] max-w-[92px]  rounded-[6px]  w-full border-[1px]  flex justify-center ' >
                                    <img className=' py-[14px] px-[20px]  ' src="/svg/fasebooklogo.svg" alt="fase" />
                                </div>
                                <div className='md:max-w-[130px] max-w-[92px] rounded-[6px]   w-full border-[1px]  flex justify-center ' >
                                    <img className=' py-[14px] px-[20px]  ' src="/svg/googlelogo.svg" alt="google" />
                                </div>
                            </div>
                            <p className='text_16_2' >
                                Don't Have An Account ? <span className='text-light_primary' ><Link to="/register"> Register </Link> </span> here.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
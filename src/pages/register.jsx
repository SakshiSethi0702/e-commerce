import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Solidbutton from '../commponents/common/solidbutton'
import Input from '../commponents/snippets/input/input'
import Checkbox from '../commponents/snippets/inputs/checkbox'

const Register = () => {
    const [show, setshow] = useState(false)
    return (
        <>
            <div className='bg-hf_extra pb-[124px] ' >
                <h1 className='text-light_primary text-center  text_28 pt-[40px] ' >FashionCart</h1>
                <div className=' bg-white  roumded-[10px] max-w-[343px] md:max-w-[510px]  w-full m-auto ' >
                    <div className=" md:mt-[47px] mt-[52px] text-center ">
                        <div className='md:p-[30px] py-[20px] px-[16px] flex gap-[30px]  flex-col   ' >
                            <h2 className='text_24_20 text-blue_gray_700' >Register Here</h2>
                            <div className='grid grid-cols-2 gap-[30px] ' >
                                <Input
                                    className={" border-[1px] outline w-full "}
                                    inputtext={"John"}
                                    inputmainclass={" rounded-[6px] border-[1px]"}
                                    lableclass={"  text_16_1 text-blue_gray_600 text-start"}
                                    inputtype={"text"}
                                >
                                    First Names
                                </Input>
                                <Input
                                    className={" border-[1px] outline w-full "}
                                    inputtext={"Doe"}
                                    inputmainclass={" rounded-[6px] border-[1px]"}
                                    lableclass={"  text_16_1 text-blue_gray_600 text-start"}
                                    inputtype={"text"}
                                >
                                    Last name
                                </Input>
                                <div className='col-[1_/_span_2]' >
                                    <Input
                                        className={" border-[1px] outline w-full "}
                                        inputtext={"dummyemail@gmail.com"}
                                        inputmainclass={" rounded-[6px] border-[1px]"}
                                        lableclass={"  text_16_1 text-blue_gray_600 text-start"}
                                        inputtype={"text"}
                                    >
                                        Email Address
                                    </Input>
                                </div>
                                <div className='col-[1_/_span_2]'  >
                                    <Input
                                        className={" border-[1px] outline w-full "}
                                        inputtext={"+91 12345 67890"}
                                        inputmainclass={" rounded-[6px] border-[1px]"}
                                        lableclass={"  text_16_1 text-blue_gray_600 text-start"}
                                        inputtype={"text"}
                                    >
                                        Mobile
                                    </Input>
                                </div>
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
                                <Input
                                    className={" border-[1px] outline w-full "}
                                    inputtext={"xxxxxxx"}
                                    inputmainclass={" rounded-[6px] border-[1px]"}
                                    lableclass={"  text_16_1 text-blue_gray_600 text-start"}
                                    inputtype={"text"}
                                >
                                    Confirm Password
                                </Input>
                                <div className='col-[1_/_span_2] ' >
                                    <Checkbox flexdirection={"flex-row-reverse items-center "} >
                                        <p className='text-blue_gray_300 text_16_2' >Privacy Policy and Terms of Service apply</p>
                                    </Checkbox>
                                </div>
                            </div>
                            <Solidbutton className={"w-full py-[14px] rounded-[6px] "} >
                                Login

                            </Solidbutton>
                            <span className='text-light_primary' ><Link to="/otp">Request OTP </Link> </span>
                            <div className='flex justify-between gap-[14px] ' >
                                <div className='md:max-w-[130px] rounded-[6px]  w-[97px] md:w-full border-[1px]  flex justify-center  ' >
                                    <img className=' py-[14px] px-[20px]  ' src="/svg/applelogo.svg" alt="apple" />
                                </div>
                                <div className='md:max-w-[130px]  rounded-[6px] w-[97px] md:w-full border-[1px]  flex justify-center ' >
                                    <img className=' py-[14px] px-[20px]  ' src="/svg/fasebooklogo.svg" alt="fase" />
                                </div>
                                <div className='md:max-w-[130px] rounded-[6px]  w-[97px] md:w-full border-[1px]  flex justify-center ' >
                                    <img className=' py-[14px] px-[20px]  ' src="/svg/googlelogo.svg" alt="google" />
                                </div>
                            </div>
                            <p>
                                Already A Member?  <span className='text-light_primary' ><Link to="/login"> Sign In</Link> </span> here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
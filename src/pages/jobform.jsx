import React from 'react'
import Policytittle from '../commponents/snippets/policiesheading/policytittle'
import Input from '../commponents/snippets/input/input'
import Solidbutton from '../commponents/common/solidbutton'



const Jobform = () => {
  return (
    <>
    <section className='container py-10 md:py-[60px] xl:py-[80px] mt-[159px]'>
    <div className="p-3 md:p-[30px]">
        <div className="">
          <Policytittle className=" text_34_24 text-blue_gray_800">
            Software Dev Engineer Job, FashionCart Bussiness (India)
          </Policytittle>
            </div>
          <div className="container">
            <div className="grid grid-cols-2 gap-y-[10px]  md:flex items-center justify-center gap-x-5 mt-5 mb-[30px]">
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Location - </p>
                New Delhi, India
              </h4>
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Job Type -</p>
                Full Time
              </h4>
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Experience -</p>
                0 to 4 Years
              </h4>
              <h4 className="text-blue_gray_600 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                <p className="text-blue_gray_500 text_16_1_12 ">Posted on -</p>
                20 Aug, 2022
              </h4>
            </div>
          </div>
        </div>
        <div className='mt-[30px] md:mt-10 lg:mt-[50px] xl:mt-[60px] grid md:grid-cols-2 gap-[30px]'>
         <Input className={"w-full py-[14px] px-4 border-[1px] border-blue_gray_100"} inputtext={"Raj"} id={"firstname"}>First Name</Input>
         <Input className={"w-full py-[14px] px-4 border-[1px] border-blue_gray_100"} inputtext={"Kumar"} id={"lastname"}>Last Name</Input>
         <Input className={"w-full py-[14px] px-4 border-[1px] border-blue_gray_100"} inputtext={"dummyemail@gmail.com"} id={"email"}>Email Address</Input>
         <Input className={"w-full py-[14px] px-4 border-[1px] border-blue_gray_100"} inputtext={"+91 98765 43210"} id={"mobile"}>Mobile</Input>
         <Input className={"w-full py-[14px] px-4 border-[1px] border-blue_gray_100"} inputtext={"3rd Floor, Sarv Elanza, Abohar - Hanumangarh Rd, Abohar, Punjab 152116"} id={"location"}>Current Location</Input>
         <Input className={"w-full py-[14px] px-4 border-[1px] border-blue_gray_100"} inputtext={"Male"} id={"gender"}>Gender</Input>
         <label htmlFor="" className='text-blue_gray_200 text_12 flex flex-col py-[30px] items-center border-[1px] border-dashed border-blue_gray_200  p-[10px]  text-center'>
         <input type="file" className='file:text-red-600  file:border-none file:bg-transparent file:text_16_3 file:uppercase file:py-[10px] file:px-4 '  name="" id="" />
         For best results, upload *.doc/*.docx/*.pdf/*.txt format files only (File size should be = 2MB)
         </label>
         <label htmlFor="" className='text-blue_gray_200 text_12 flex flex-col py-[30px] items-center border-[1px] border-dashed border-blue_gray_200 p-[10px] text-center'>
         <input type="file" className='file:text-red-600  file:border-none file:bg-transparent file:text_16_3 file:uppercase file:py-[10px] file:px-4  '  name="" id="" />
         For best results, upload *.doc/*.docx/*.pdf/*.txt format files only (File size should be = 2MB)
         </label>
        </div>
        <div className="mt-[30px]">
                <Input className={"w-full "}  inputtext={"Type Here"} id={"description"}>Description (Optional)</Input>
              </div>
              <div className="flex flex-col  items-center mt-[30px]">
                <img src="/images/captcha.png" alt="" />
              <Solidbutton className="uppercase py-4 px-6 rounded-lg xl:max-w-[240px] w-full mt-10">
                Apply This Job
              </Solidbutton>
            </div>
    </section>
    </>
  )
}

export default Jobform
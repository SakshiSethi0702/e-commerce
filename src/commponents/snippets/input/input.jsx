import React, { useState } from 'react'

const Input = ({ className, inputtext, id, name, children, lableclass, inputtype, inputmainclass, show, setshow, showtype }) => {

  return (
    <>
      <label htmlFor={`${id}`} className={`${lableclass} flex flex-col gap-y-[6px]  `}>
        {children}
        <div className={` relative flex justify-between items-center   ${inputmainclass} `}>
          <input
            type={`${inputtype}`}
            name={`${name}`}
            id={`${id}`}
            placeholder={`${inputtext}`}
            className={` ${className} placeholder:text_16_1 placeholder:text-blue_gray_300  outline-none   rounded-md`}
          />
          {
            show === true && (<>
              <span onClick={() => setshow(!showtype)} className='text-light_primary' > {
                showtype === true ? "Hide" : " Show"
              } </span>
            </>)
          }
        </div>
      </label>
    </>
  )
}

export default Input
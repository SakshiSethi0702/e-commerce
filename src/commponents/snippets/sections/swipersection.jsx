import React from "react";

const Swipersection = (props) => {
  const { children, smallHeading, mainHeading, className, mainh_class, mainClass } = props;
  return (
    <>
      <div className={` flex ${mainClass} justify-between`}>
        <div>
          <h3
            className={`${className} text-light_primary text_24_20 text-center  `}
          >
            {smallHeading}
          </h3>
          <h2
            className={`${className}  ${mainh_class} text_60_32_sec_heading text-blue_gray_800 text-center `}
          >
            {mainHeading}
          </h2>
        </div>
        {children}
      </div>
    </>
  );
};

export default Swipersection;

/*
//  swiper children
        <div className='flex md:gap-[20px] items-center ' >
          <svg className='rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] ' xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path fill-rule="evenodd" clipRule="evenodd" d="M14.3575 20.15L21.8992 27.9601C22.3798 28.4578 23.159 28.4578 23.6396 27.9601C24.1201 27.4624 24.1201 26.6554 23.6396 26.1577L16.8902 19.1657L23.6396 12.1756C24.1201 11.6779 24.1201 10.871 23.6396 10.3733C23.159 9.87558 22.3798 9.87558 21.8992 10.3733L14.3575 18.1833C14.139 18.4096 14 18.7 14 19.1261C14 19.5606 14.1325 19.917 14.3575 20.15Z" fill="#546E7A" />
          </svg>
          <svg className='rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] ' xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path fill-rule="evenodd" clipRule="evenodd" d="M23.6425 20.15L16.1008 27.9601C15.6202 28.4578 14.841 28.4578 14.3604 27.9601C13.8799 27.4624 13.8799 26.6554 14.3604 26.1577L21.1098 19.1657L14.3604 12.1756C13.8799 11.6779 13.8799 10.871 14.3604 10.3733C14.841 9.87558 15.6202 9.87558 16.1008 10.3733L23.6425 18.1833C23.861 18.4096 24 18.7 24 19.1261C24 19.5606 23.8675 19.917 23.6425 20.15Z" fill="#546E7A" />
          </svg>
        </div>
*/

// use ker lai with the help of children
/*

          <Swipersection>
        <div className='flex md:gap-[20px] items-center ' >
          <svg className='rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] ' xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path fill-rule="evenodd" clipRule="evenodd" d="M14.3575 20.15L21.8992 27.9601C22.3798 28.4578 23.159 28.4578 23.6396 27.9601C24.1201 27.4624 24.1201 26.6554 23.6396 26.1577L16.8902 19.1657L23.6396 12.1756C24.1201 11.6779 24.1201 10.871 23.6396 10.3733C23.159 9.87558 22.3798 9.87558 21.8992 10.3733L14.3575 18.1833C14.139 18.4096 14 18.7 14 19.1261C14 19.5606 14.1325 19.917 14.3575 20.15Z" fill="#546E7A" />
          </svg>
          <svg className='rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] ' xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path fill-rule="evenodd" clipRule="evenodd" d="M23.6425 20.15L16.1008 27.9601C15.6202 28.4578 14.841 28.4578 14.3604 27.9601C13.8799 27.4624 13.8799 26.6554 14.3604 26.1577L21.1098 19.1657L14.3604 12.1756C13.8799 11.6779 13.8799 10.871 14.3604 10.3733C14.841 9.87558 15.6202 9.87558 16.1008 10.3733L23.6425 18.1833C23.861 18.4096 24 18.7 24 19.1261C24 19.5606 23.8675 19.917 23.6425 20.15Z" fill="#546E7A" />
          </svg>
        </div>
      </Swipersection>
*/

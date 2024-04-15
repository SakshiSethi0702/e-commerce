import React from "react";

const Dropdown = ({ heading, children, classname }) => {
  return (
    <div className=" relative inline-block  w-full ">
      <div className="flex justify-between w-full max-w-[100%]  ">
        <p className={`${classname}`}>{heading}</p>
        <img
          className="group-hover:rotate-180 duration-200"
          src="/svg/Arrowdown.svg"
          alt="Arrowdown"
        />
      </div>
      <div className="hidden absolute  z-1 group-hover:block duration-1000 ">
        {children}
      </div>
    </div>
  );
};

export default Dropdown;

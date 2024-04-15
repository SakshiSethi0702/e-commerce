import React from "react";
import downarrow from "/svg/downarrow.svg";
const Footerbutton = (props) => {
  const { children, onClick } = props;
  return (
    <>
      <button className="footerbtn flex items-center gap-x-" onClick={onClick}>
        {children}
        <img src={downarrow} className="w-[18px]" alt="" />
      </button>
    </>
  );
};

export default Footerbutton;

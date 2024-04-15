import React from "react";

const Liquidbutton = (props) => {
  const { onClick, children, className } = props;
  return (
    <>
      <button className={`liquid_btn ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Liquidbutton;

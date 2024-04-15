import React from "react";

const Solidbutton = (props) => {
  const { children, onClick, className } = props;
  return (
    <>
      <button className={`solid_btn ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Solidbutton;

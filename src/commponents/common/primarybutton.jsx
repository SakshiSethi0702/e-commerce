import React from "react";

const Primarybutton = (props) => {
  const { onClick, children, className } = props;
  return (
    <>
      <button className={`primary_btn text_34_16`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Primarybutton;

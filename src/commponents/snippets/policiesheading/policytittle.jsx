import React from "react";

const Policytittle = (props) => {
  const { children, className } = props;
  return (
    <>
      <div>
        <h2
          className={`text_48_24 text-blue_gray_800 text-center ${className}`}
        >
          {children}
        </h2>
      </div>
    </>
  );
};

export default Policytittle;

import React from "react";

const Checkbox = ({ children, flexdirection, color }) => {
  return (
    <>
      <form className={`inline-flex relative  items-center  ${flexdirection} `}>
        <label
          className="flex flex-row-reverse items-center p-3 text_16_2 text-blue_gray_500 rounded-full cursor-pointer"
          htmlFor="indigo"
        >
          {children}
        </label>
        <div className="relative ">
          <input
            type="checkbox"
            className={`m-[10px] before:content[''] before:z-20  relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity ${color === "green" ? "checked:bg-green-600 checked:before:bg-green-600 checked:border-blue_gray_500  checked:border-[2px]  " : "checked:bg-light_primary checked:before:bg-light_primary"}   hover:before:opacity-10`}
            defaultChecked=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[13px] right-[13px]  h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth={1}
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </form>
    </>
  );
};

export default Checkbox;



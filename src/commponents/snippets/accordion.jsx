import React from "react";

const Accordion = ({ question, children, className }) => {
  function sidebarAccordion(e) {
    let sibbling = e.currentTarget.nextSibling;
    let getheight = sibbling.scrollHeight;
    if (!sibbling.getAttribute("style")) {
      sibbling.style.height = `${getheight}px`;
    } else {
      sibbling.removeAttribute("style");
    }
  }
  function rotate(e) {
    let currentvalue = e.currentTarget.lastChild;
    if (!currentvalue.getAttribute("style")) {
      currentvalue.style.transform = "rotate(180deg)";
    } else {
      currentvalue.removeAttribute("style");
    }
  }

  return (
    <>
      <div className={`${className} bg-white cursor-pointer `}>
        <div
          className="flex justify-between items-center"
          onClick={(e) => {
            sidebarAccordion(e);
            rotate(e);
          }}
        >
          <p className="text_20_14 text-blue_gray_600">
            {
              question
            }
          </p>
          <img className=" duration-500 select-none  " src="/svg/downarrow.svg" alt="downarrow" />
        </div>
        <div className="h-0 overflow-hidden duration-500 ">
          {children}
        </div>
      </div>
    </>
  );
};

export default Accordion;

import React from "react";
import Primarybutton from "../../common/primarybutton";
import Solidbutton from "../../common/solidbutton";
import Liquidbutton from "../../common/liquidbutton";
import { Link } from "react-router-dom";

const Blogpostcard = ({ data }) => {
  // console.log(data, " tdadta")
  return (
    <>
      <div className=" w-full p-[20px] ">
        <div>
          <Link to="/blog-details">
          <img
            className="rounded-[15px]"
            src="/images/postcardimage2.png"
            alt="postcardimage"
          />
          </Link>
       
        </div>
        <div className="flex justify-between pt-[20px] pb-[15px] lg:pt-[30px] lg:pb-[20px] ">
          <p className="text-light_primary">{data.date}</p>
          <div>
            <Liquidbutton className={"py-[7px] px-[10px] rounded-[16px] text_13"}>
              Fashion
            </Liquidbutton>
          </div>
        </div>
        <div className="text_34_24 text-blue_gray_800">
          {
            data.description
          }
        </div>
      </div>
    </>
  );
};

export default Blogpostcard;

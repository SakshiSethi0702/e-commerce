import React from "react";
import ExploreCard from "../commponents/snippets/card/exploreCard";
import Swipersection from "../commponents/snippets/sections/swipersection";
import WearfashionCard from "../commponents/snippets/card/wearfashionCard";

const ExploreByCategories = () => {
  return (
    <>
      <div className=" container mt-[300px]">
        <div className=" flex text-center justify-center items-center ">
          <Swipersection
            smallHeading={"Categories"}
            mainHeading={"Explore By Categories"}
            className="text-center"
          ></Swipersection>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[13px] lg:gap-y-[30px] lg:gap-x-[60px] mt-[60px]">
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>
        <WearfashionCard />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[13px] lg:gap-y-[30px] lg:gap-x-[60px] ">
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>
      </div>
    </>
  );
};

export default ExploreByCategories;

import React from "react";
import BestsellingProducts from "../commponents/home/bestsellingProducts";
import Dealscard from "../commponents/snippets/card/dealscard";

const DealsOnSale = () => {
  return (
    <>
      <div className="mt-[200px]">
        <Dealscard />
        <div className=" my-[40px] lg:my-[80px]  ">
          <BestsellingProducts />
        </div>
      </div>
    </>
  );
};

export default DealsOnSale;

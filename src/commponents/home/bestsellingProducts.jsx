import React, { Fragment, useContext, useEffect, useState } from "react";
import Swipersection from "../snippets/sections/swipersection";
import { Link } from "react-router-dom";
import FeaturedSwiper from "../snippets/swiper/commonSwiper";
import Productcard from "../snippets/card/productcard";
import Products from "../../contextfils/product";
import Solidbutton from "../common/solidbutton";


const BestsellingProducts = () => {
  const { productsdata } = useContext(Products)
  const [list,setList] = useState([]);

  
  useEffect(()=>{
getAllProducts()
   },[])

   const getAllProducts=async(e)=>{
    try {
    let res=  await fetch('https://dummyjson.com/products?limit=100')
    res= await res.json()
    res= res.products.filter(elem => elem.category=="mens-shirts" || elem.category==="tops")
    setList(res)
    } catch (error) {
      
    }
  }

  return (
    <>
      <section className="bg-light_primary_shades_4p  py-[40px] md:py-[60px] xl:py-[80px] " >
        <div className="container">
          <div className="flex justify-center md:justify-between items-center w-full">
            <Swipersection
              smallHeading={"Products"}
              mainHeading={"Best Selling Products"}
              className="md:text-start"
            ></Swipersection>
            <Link className="text-light_primary  hidden md:block ">View All</Link>
          </div>
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4   md:mt-[60px] mt-[30px]  gap-[13px] md:gap-[30px]">
            {
              list?.map((item, index) => {
                return (
                  <Fragment key={Date.now() + item.Date} >
                    <Productcard star={true} data={item} />
                  </Fragment>
                )
              })
            }
          </div>
          <div className="flex justify-center items-center">

          <Solidbutton className={" mt-[30px] py-[10px] rounded-[4px] px-[16px] w-full md:hidden"} >View More Products</Solidbutton>
          </div>
        </div>
     
      </section>
    </>
  );
};

export default BestsellingProducts;

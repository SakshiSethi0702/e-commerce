import React, { Fragment, useContext, useEffect, useState } from "react";
import Swipersection from "../snippets/sections/swipersection";
import Commonswiper from "../snippets/swiper/commonSwiper";
import Swipercardsectioncommon from "../snippets/swiper/swipercardsectioncommon";
import Productcard from "../snippets/card/productcard";
import Products from "../../contextfils/product";
import Liquidbutton from "../common/liquidbutton";
import Primarybutton from "../common/primarybutton";
import Solidbutton from "../common/solidbutton";
import { Link } from "react-router-dom";
const Featuredsection = () => {
  const { productsdata } = useContext(Products)
  const [list,setList] = useState([]);
  useEffect(()=>{
    getAllProducts()
       },[])
    
       const getAllProducts=async(e)=>{
        try {
          console.log("heererer");
        let res=  await fetch('https://dummyjson.com/products?limit=100')
        res= await res.json()
        res= res.products.filter(elem => elem.category=="mens-shirts" || elem.category==="tops")
        console.log(res,"==djgfjdg5555");
        setList(res)
        } catch (error) {
          
        }
      }
  return (
    <>
      <section className="py-[40px] container " >
        <div className="hidden md:block pb-[30px1] " >
          <Swipercardsectioncommon
            topbtn={true}
            card={"productcard"}
            smallHeading={"Featured"}
            mainHeading={"Featured Products"} />
        </div>
        <div>
          <div className="flex justify-center md:hidden " >
            <Swipersection smallHeading={"Featured"} mainHeading={"Featured Products"} />
          </div>
          <div className="mt-[60px] md:hidden grid grid-cols-2" >
            {
              list?.map((item, index) => {
                return (<Fragment>
                  <Productcard data={item} />

                </Fragment>)
              })
            }
          </div>
          <div className="md:hidden mt-[30px] w-full" >
            <Solidbutton className={" py-[10px] px-[16px] w-full rounded-[4px] "} >
              View More Products
            </Solidbutton>
          </div>
        </div>
      </section>
    </>

  );
};

export default Featuredsection;

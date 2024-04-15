import React from "react";
import Swipersection from "../commponents/snippets/sections/swipersection";
import Brandtag from "../commponents/home/brandtag";
import UserThoughts from "../commponents/common/userThoughts";
import Blogsection from "../commponents/snippets/sections/blogsection";
import Solidbutton from "../commponents/common/solidbutton";
import Swipercardsectioncommon from "../commponents/snippets/swiper/swipercardsectioncommon";
const Aboutus = () => {
  return (
    <>
      <section className="container py-10 md:py-[60px] xl:py-[80px] mt-[159px]">
        <div>
          <h2 className="text_60_32_sec_heading text-blue_gray_800 text-center">
            FashionCart is India's Best For The Latest Fashion.
          </h2>
          <p className="text_20_16 text-blue_gray_400 text-center pt-5 md:pt-[30px]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="my-[30px] md:my-[60px]">
            <img
              className=" w-full rounded-lg  min-h-[200px] "
              src="/images/aboutbanner.png"
              alt=""
            />
          </div>
        </div>
        <div className="py-10 md:py-[60px] xl:py-[80px]">
          <div>
            <Swipersection
              smallHeading={"FashionCart"}
              mainHeading={"About Us FashionCart"}
              className="md:text-start"
            ></Swipersection>
          </div>
          <p className="pt-5 md:pt-10 text_24_16 text-blue_gray_600">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard Mc Clintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage.
          </p>
          <div className="grid grid-cols-2 gap-y-[10px] gap-x-[13px] md:gap-y-[20px] md:gap-x-[20px] xl:gap-[30px] mt-[14px] md:mt-[25px] xl:mt-10">
            <li className="text_20_14 text-blue_gray_400 ">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              More recently desktop publishing software like PageMaker including
              versions Lorem Ipsum.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              It is a long established fact that a reader will be distracted by
              the readable content.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              More recently desktop publishing software like Aldus PageMaker
              versions of Lorem Ipsum.
            </li>
          </div>
        </div>
        <div>
          <Brandtag />
        </div>
        <div className="py-10 md:py-[60px] xl:py-[80px] grid lg:grid-cols-2 gap-x-[120px]">
          <div className=" xl:max-w-[535px] 2xl:py-[57px] flex flex-col ">
            <Swipersection
              smallHeading={"FashionCart"}
              mainHeading={"Our Manufacture Process"}
              className="md:text-start"
            ></Swipersection>
            <p className="text_20_16 text-blue_gray_600 text-center lg:text-justify mt-5 xl:mt-[30px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusanti doloremque laudantium, totam rem aperiam, eaque ipsa
              quae architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text_20_16 text-blue_gray_600 text-center lg:text-justify mt-[10px] xl:mt-5">
              Neque porro quisquam est, qui dolorem ipsum dolor sit amet,
              consectetur, tempora incidunt ut labore et dolore magnam.
            </p>
          </div>
          <div className="mt-5">
            <img
              className="max-w-[915px] w-full"
              src="/images/processbg.png"
              alt="img"
            />
          </div>
        </div>
        <div className="py-10 md:py-[60px] xl:py-[80px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] mg:gap-5 xl:gap-[30px]">
          <div className="p-[10px] max-w-[375px]">
            <h2 className="text_90_34 2xl:text-[96px] font-bold  text-light_primary leading-[100px] ">
              5M+
            </h2>
            <h5 className="text-blue_gray_700 text_24_16 mt-5 ">
              Registered Users
            </h5>
            <p className="text-blue_gray_500 mt-[10px] text_16_1_12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="p-[10px] max-w-[375px]">
            <h2 className="text_90_34 2xl:text-[96px] font-bold  text-light_primary leading-[100px] ">
              200M+
            </h2>
            <h5 className="text-blue_gray_700 text_24_16 mt-5 ">
              Cities Covered
            </h5>
            <p className="text-blue_gray_500 mt-[10px] text_16_1_12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="p-[10px] max-w-[375px]">
            <h2 className="text_90_34 2xl:text-[96px] font-bold  text-light_primary leading-[100px] ">
              80M+
            </h2>
            <h5 className="text-blue_gray_700 text_24_16  mt-5">
              Stores in India
            </h5>
            <p className="text-blue_gray_500 mt-[10px] text_16_1_12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="p-[10px] max-w-[375px]">
            <h2 className="text_90_34 2xl:text-[96px] font-bold  text-light_primary leading-[100px] ">
              500M+
            </h2>
            <h5 className="text-blue_gray_700 text_24_16 mt-5 ">Top Brands</h5>
            <p className="text-blue_gray_500 mt-[10px] text_16_1_12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="py-10 md:py-[60px] xl:py-[80px]">
          <div>
            <div className="flex justify-center md:justify-start">
              <Swipersection
                smallHeading={"FashionCart"}
                mainHeading={"FashionCart Goals"}
                className="md:text-start"
              ></Swipersection>
            </div>
            <p className="text-blue_gray_600 text_20_16 mt-5 xl:mt-10">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam. Quis autem eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
            </p>
            <p className="text-blue_gray_600 text_20_16 mt-[10px] xl:mt-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="mt-10 md:mt-[60px] xl:mt-[80px] grid  md:grid-cols-2 xl:grid-cols-3 md:gap-x-[20px] xl:gap-x-[30px]">
            <div className="border-b-[1px] pb-[10px] mb-[10px] md:border-none md:pb-0 md:mb-0">
              <h4 className="text-blue_gray_700 text_34_20 text-center md:text-center">
                Our Mission
              </h4>
              <p className="text-blue_gray_500 text_16_1_14  mt-[10px] xl:mt-5">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness.
              </p>
            </div>
            <div className="border-b-[1px] pb-[10px] mb-[10px] md:border-none md:pb-0 md:mb-0">
              <h4 className="text-blue_gray_700 text_34_20 text-center md:text-center">
                Our Vission
              </h4>
              <p className="text-blue_gray_500 text_16_1_14  mt-[10px] xl:mt-5">
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it's pain, because occasionally
                circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of ever
                undertakes laborious physical exercise.
              </p>
            </div>
            <div className="border-b-[1px] pb-[10px] mb-[10px] md:border-none md:pb-0 md:mb-0">
              <h4 className="text-blue_gray_700 text_34_20 text-center md:text-center">
                Our Approach
              </h4>
              <p className="text-blue_gray_500 text_16_1_14 mt-[10px] xl:mt-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti corrupti quos dolores
                et quas molestias excepturi sint occaecati cupiditate non
                provident, similique in culpa qui officia deserunt mollitia
                animi, est laborum et dolorum fuga.
              </p>
            </div>
          </div>
        </div>
        <div>
          <UserThoughts />
        </div>
        <div  >
          {/* <Blogsection /> */}
          <Swipercardsectioncommon
            card={"blogcard"}
            mainHeading={"Newly Blog Posts"}
            bottombtn={true}
            topbtn={true}
            smallHeading={"Blog"}
            custombttombtnclass={"md:hidden block "}
            customtopbtnclass={"hidden md:block"}
            mainClass={"justify-center md:justify-between "}
            className={"text-center"}
          />
        </div>
        <div className="py-10 md:py-[60px]  xl:py-[80px">
          <div className="relative">
            <img src="/images/subscribebg.png" className="rounded-lg" alt="" />
            <div className="max-w-[855px] absolute  top-[104px] left-[60px]">
              <div>
                <Swipersection
                  smallHeading={"Newsletter"}
                  mainHeading={"Get Updated Every Time With Our Blog Posts"}
                ></Swipersection>
              </div>
              <div className="max-w-[450px] mt-[60px] flex gap-x-[10px]">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="py-3 px-[14px] placeholder:text_16_2 placeholder:text-blue_gray_400 rounded-lg w-full"
                />
                <Solidbutton className="uppercase py-[14px] px-[18px] rounded-lg ">
                  Subscribe
                </Solidbutton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;

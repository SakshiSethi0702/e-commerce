import React from 'react'
import Checkbox from '../inputs/checkbox';

const leadmanagerFilter = (props) => {
    function sidebarAccordion(e) {
        let sibbling = e.currentTarget.nextSibling;
        let getheight = sibbling.scrollHeight;
        if (!sibbling.getAttribute("style")) {
            sibbling.style.height = `${getheight}px`;
        } else {
            sibbling.removeAttribute("style");
        }
    }
    return (
        <>
            <div
                className={`flex flex-col ${props.className} w-full max-w-[375px] bg-white border-[1px] border-blue_gray_100 rounded-[10px]  ${props.active === 1
                    ? "fixed top-[60px]  left-0  z-10 bg-white h-[100vh] pb-[150px]  overflow-scroll"
                    : ""
                    } `}
            >
                <div className="p-[20px] flex gap-[20px] flex-col  border-b-[1px]  border-[blue_gray_5]  ">
                    <h2 className="text_20 text-blue_gray_800 ">Filters</h2>

                </div>
                <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
                    <div
                        onClick={(e) => sidebarAccordion(e)}
                        className="flex justify-between cursor-pointer "
                    >
                        <h2 className="text_16_2 text-blue_gray_500 ">Job Type</h2>
                        <img className="select-none" src="/svg/Arrowdown.svg" alt="Arrow" />
                    </div>
                    <div className=" h-0 overflow-hidden duration-500 flex flex-col gap-[8px]">
                        <div className="pr-[4px]">
                            <div className="grid grid-cols-1 ">
                                <Checkbox flexdirection="flex-row-reverse justify-center" >
                                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                </Checkbox>
                                <Checkbox flexdirection="flex-row-reverse justify-center" >
                                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                </Checkbox>
                                <Checkbox flexdirection="flex-row-reverse justify-center" >
                                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                </Checkbox>
                                <Checkbox flexdirection="flex-row-reverse justify-center" >
                                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                </Checkbox>
                                <Checkbox flexdirection="flex-row-reverse justify-center" >
                                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                </Checkbox>
                                <Checkbox flexdirection="flex-row-reverse justify-center" >
                                    <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
                    <div
                        onClick={(e) => sidebarAccordion(e)}
                        className="flex justify-between cursor-pointer "
                    >
                        <h2 className="text_16_2 text-blue_gray_500 ">Job Categories</h2>
                        <img className="select-none" src="/svg/Arrowdown.svg" alt="Arrow" />
                    </div>
                    <div className='h-0 overflow-hidden duration-500  ' >
                        <Checkbox flexdirection="flex-row-reverse justify-center" >
                            <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                        </Checkbox>
                        <Checkbox flexdirection="flex-row-reverse justify-center" >
                            <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                        </Checkbox>
                        <Checkbox flexdirection="flex-row-reverse justify-center" >
                            <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                        </Checkbox>
                        <Checkbox flexdirection="flex-row-reverse justify-center" >
                            <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                        </Checkbox>
                        <Checkbox flexdirection="flex-row-reverse justify-center" >
                            <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                        </Checkbox>
                        <Checkbox flexdirection="flex-row-reverse justify-center" >
                            <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                        </Checkbox>
                    </div>
                </div>

                <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
                    <div
                        onClick={(e) => sidebarAccordion(e)}
                        className="flex justify-between cursor-pointer "
                    >
                        <h2 className="text_16_2 text-blue_gray_500 ">Location</h2>
                        <img className="select-none" src="/svg/Arrowdown.svg" alt="Arrow" />
                    </div>
                    <div className="h-0 overflow-hidden duration-500  ">
                        <form className="   flex gap-[6px] py-[6px] px-[12px] mb-[14px]">
                            <input
                                className="text-blue_gray_400 text_16_2 w-full outline-none border-none "
                                type="search"
                                placeholder="Search Brands..."
                                name=""
                                id=""
                            />
                            <img
                                className="select-none"
                                src="/svg/grayiconsearch.svg"
                                alt="search"
                            />
                        </form>
                        <div className="  flex flex-col gap-[8px]">
                            <div className="pr-[4px]">
                                <div className="grid grid-cols-1 ">
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
                    <div
                        onClick={(e) => sidebarAccordion(e)}
                        className="flex justify-between cursor-pointer "
                    >
                        <h2 className="text_16_2 text-blue_gray_500 ">City / State</h2>
                        <img className="select-none" src="/svg/Arrowdown.svg" alt="Arrow" />
                    </div>
                    <div className="h-0 overflow-hidden duration-500  ">
                        <form className="   flex gap-[6px] py-[6px] px-[12px] mb-[14px]">
                            <input
                                className="text-blue_gray_400 text_16_2 w-full outline-none border-none "
                                type="search"
                                placeholder="Search Brands..."
                                name=""
                                id=""
                            />
                            <img
                                className="select-none"
                                src="/svg/grayiconsearch.svg"
                                alt="search"
                            />
                        </form>
                        <div className="  flex flex-col gap-[8px]">
                            <div className="pr-[4px]">
                                <div className="grid grid-cols-1 ">
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                    <Checkbox flexdirection="flex-row-reverse justify-center" >
                                        <p className="text_16_2 text-blue_gray_500">60-80% Below</p>
                                    </Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default leadmanagerFilter


/**
 <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div>
 */
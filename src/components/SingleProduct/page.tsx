import React from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 sm:px-6 lg:px-20 py-10">
      {/* Image Section */}
      <div className="w-full lg:w-[55%] flex justify-center items-center ml-[70px]">
        <div className="w-full h-auto max-w-[450px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[550px]">
          <Image
            src="/assets/image1.png"
            alt="Library School Chair"
            width={675}
            height={607}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Text and Buttons Section */}
      <div className="flex flex-col w-full lg:w-[45%] mt-8 lg:mt-0 lg:pl-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-Inter font-bold text-black leading-tight mb-4">
          Library School <br /> Chair
        </h1>
        <button className="w-[144px] h-[44px] rounded-full bg-[#029FAE] text-white font-medium text-sm sm:text-base mb-6">
          $20.00 USD
        </button>
        <p className="text-base sm:text-lg lg:text-xl font-Inter text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
          adipiscing.
        </p>
        <div className="w-full max-w-[212px] h-[63px]">
          <button className="flex items-center justify-center gap-2 w-full h-full rounded-lg bg-[#029FAE] text-white font-Inter font-semibold text-lg">
            <FiShoppingCart className="w-6 h-6" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

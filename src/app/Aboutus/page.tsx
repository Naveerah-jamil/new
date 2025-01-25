import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Section 1 */}
      <div className="flex grid-cols-1 w-full h-full">
        {/* Left Section */}
        <div className="md:w-full bg-[#007580] p-4 flex justify-center items-center  sm:w-[300px] sm:h-[300px] mx-auto ml-[150px] xl:w-[672px] xl:h-[478px]">
  <div className="md:w-full max-w-[495px] h-auto">
    <div className="md:w-full text-left">
      <div className="font-[Inter] lg:text-[32px] sm:text-[20px] font-bold leading-[38.73px] text-white">
        About Us - Comforty
      </div>
      <div className="font-[Inter] md:text-[18px] font-normal leading-[21.7px] text-white mt-4">
        At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
      </div>
      <Link href="/">
        <div className="w-[179px] h-[56px] px-[32px] py-[16px] bg-green-700 text-white mt-4 mx-auto text-center">
          View
        </div>
      </Link>
    </div>
  </div>
</div>


        {/* Right Section */}
        <div className="relative w-[619px] h-[478px] mr-[170px] ml-[10px] flex lg:w-[672px] lg:h-[478px] md:w-[500px] md:h-[478px] sm:w-[300px] sm:h-[300px]">
          <Image
            src="/assets/image.png"
            alt="loading"
            width={619}
            height={478}
            className="object-cover"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-10 text-center">
        <p className="font-[Inter] font-semibold text-[32px] leading-[35.2px]">
          What makes our Brand Different
        </p>
        <div className="grid lg:grid-cols-4 gap-4 w-full max-w-[1050px] mx-auto mt-10">
          {/* Card 1 */}
          <div className="w-[309.45px] h-[244px] bg-[#F9F9F9] flex flex-col items-center pt-[48px] gap-[10px] text-center">
            <div className="w-[202px] h-[28px] font-[Inter] font-normal text-[20px] leading-[28px] text-[#007580]">
              Next day as standard
            </div>
            <div className="w-[213.45px] h-[72px] font-[Inter] font-normal text-[16px] leading-[24px] text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </div>
          </div>

          {/* Repeat Cards */}
          <div className="w-[309.45px] h-[244px] bg-[#F9F9F9] flex flex-col items-center pt-[48px] gap-[10px] text-center">
            <div className="w-[202px] h-[28px] font-[Inter] font-normal text-[20px] leading-[28px] text-[#007580]">
              Next day as standard
            </div>
            <div className="w-[213.45px] h-[72px] font-[Inter] font-normal text-[16px] leading-[24px] text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </div>
          </div>

          <div className="w-[309.45px] h-[244px] bg-[#F9F9F9] flex flex-col items-center pt-[48px] gap-[10px] text-center">
            <div className="w-[202px] h-[28px] font-[Inter] font-normal text-[20px] leading-[28px] text-[#007580]">
              Next day as standard
            </div>
            <div className="w-[213.45px] h-[72px] font-[Inter] font-normal text-[16px] leading-[24px] text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </div>
          </div>

          <div className="w-[309.45px] h-[244px] bg-[#F9F9F9] flex flex-col items-center pt-[48px] gap-[10px] text-center">
            <div className="w-[202px] h-[28px] font-[Inter] font-normal text-[20px] leading-[28px] text-[#007580]">
              Next day as standard
            </div>
            <div className="w-[213.45px] h-[72px] font-[Inter] font-normal text-[16px] leading-[24px] text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mt-10 text-left pt-[30px] pl-[150px]">
        <p className="font-[Inter] text-[32px] font-semibold leading-[35.2px] decoration-skip-ink-none">
          Our Popular Products
        </p>
      </div>
      <div className="flex justify-between items-center  ml-[160px] mr-[100px] mt-[50px] space-x-5">
  {/* First Image */}
  <div className="w-[608px] h-[375px] ">
    <Image
      src="/assets/couch.png"
      alt="loading"
      width={608}
      height={375}
      className="object-cover"
    />
    <div className="w-full mt-2">
      <p className="font-[Inter] font-normal text-[20px] leading-[28px]">
        The Poplar suede sofa
      </p>
      <p className="font-[Inter] font-normal text-[18px] leading-[27px]">
        $99.00
      </p>
    </div>
  </div>

  {/* Second Image */}
  <div className="w-[305px] h-[375px]">
    <Image
      src="/assets/image2.png"
      alt="loading"
      width={305}
      height={375}
      className="object-cover"
    />
    <div className="w-full mt-2">
      <p className="font-[Inter] font-normal text-[20px] leading-[28px]">
      The Dandy chair
      </p>
      <p className="font-[Inter] font-normal text-[18px] leading-[27px]">
        $99.00
      </p>
    </div>
  </div>

  {/* Third Image */}
  <div className="w-[305px] h-[375px]">
    <Image
      src="/assets/image2.png"
      alt="loading"
      width={305}
      height={375}
      className="object-cover"
    />
    <div className="w-full mt-2">
      <p className="font-[Inter] font-normal text-[20px] leading-[28px]">
      The Dandy chair
      </p>
      <p className="font-[Inter] font-normal text-[18px] leading-[27px]">
        $99.00
      </p>
    </div>
  </div>
</div>

    </div>
  
  );
};

export default page;

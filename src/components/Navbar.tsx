import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#272343] flex justify-between items-center h-[45px] px-[175px] text-white">
        <div>Free shipping on all orders over $50</div>
        <div className="flex items-center space-x-8">
          <Link href="/">Eng</Link>
          <Link href="/FAQs">FAQs</Link>
          <Link href="/">Need Help</Link>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="w-full bg-[#F0F2F3] flex justify-between items-center h-[84px] px-[175px]">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Image src="/assets/Logo Icon.png" alt="Logo Image" width={50} height={50} />
          <span className="text-2xl font-bold">Comforty</span>
        </div>

        {/* Right Section */}
        <div className="text-lg">Cart</div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full bg-white flex justify-between items-center px-[175px] py-4 border-t border-gray-300">
        {/* Navigation Links */}
        <ul className="flex space-x-8 text-gray-500">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/ProductPage">Product</Link>
          </li>
          <li>
            <Link href="/">Pages</Link>
          </li>
          <li>
            <Link href="/Aboutus">About</Link>
          </li>
        </ul>

        {/* Contact Info */}
        <Link href="Contact us">
        <div className="flex items-center space-x-2 text-gray-500">
          <span>Contact:</span>
          <p>(080) 234516</p>
        </div>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;

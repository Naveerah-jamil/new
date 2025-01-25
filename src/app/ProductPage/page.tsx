import React from 'react';
import Image from 'next/image';
import { CiShoppingCart } from 'react-icons/ci';
import Link from 'next/link';

const products = [
  [
    { src: '/assets/Image.png', name: 'Library stool chair', price: '$20' },
    { src: '/assets/Image copy.png', name: 'Library stool chair', price: '$20' },
    { src: '/assets/Image3.png', name: 'Library stool chair', price: '$20' },
    { src: '/assets/Image4.png', name: 'Library stool chair', price: '$20' },
  ],
  [
    { src: '/assets/Image.png', name: 'Library stool chair', price: '$20' },
    { src: '/assets/Image copy.png', name: 'Library stool chair', price: '$20' },
    { src: '/assets/Image3.png', name: 'Library stool chair', price: '$20' },
    { src: '/assets/Image4.png', name: 'Library stool chair', price: '$20' },
  ],
  [
    { src: '/assets/Image.png', name: 'Library stool chair', price: '$20' },
    { src: '/assets/Image copy.png', name: 'Library stool chair', price: '$20' },
    { src: '/assets/Image3.png', name: 'Library stool chair', price: '$20' },
    { src: '/assets/Image4.png', name: 'Library stool chair', price: '$20' },
  ],
];

const ProductList = ({ products}: any) => (
  <div className="w-full flex flex-wrap justify-center gap-6">
    {products.map((product:any, index: any) => (
      <div key={index} className="w-[312px] h-[377px] rounded-[6px]">
        <Link href="/">
          <Image
            src={product.src}
            alt="Product Image"
            width={312}
            height={312}
            className="rounded-[6px]"
          />
          <div className="text-green-400 flex justify-between items-center mt-2">
            {product.name}
            <div
              className={`${
                index === 0 ? 'bg-[#029FAE]' : 'bg-[#F0F2F3]'
              } flex justify-center items-center rounded-[6px] w-[44px] h-[44px]`}
            >
              <CiShoppingCart className="text-black w-[18.5px] h-[18.5px]" />
            </div>
          </div>
          <p className="font-bold text-black">{product.price}</p>
        </Link>
      </div>
    ))}
  </div>
);

const Page = () => (
  <div className="max-w-screen-xl mx-auto p-4">
    <h1 className="text-2xl font-bold text-center mb-8">ALL Products</h1>
    {products.map((productSet, index) => (
      <div key={index} className="mb-12">
        <ProductList products={productSet} />
      </div>
    ))}
    <div className="bg-gray-200 py-12 flex flex-col items-center">
      <h2 className="text-xl font-medium text-center mb-4">
        Or Subscribe to the Newsletter
      </h2>
      <h2 className="text-xl font-medium text-center mb-8">
        Follow Products and Discounts on Instagram
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {Array(6)
          .fill('')
          .map((_, index) => (
            <div key={index} className="w-[200px] h-[200px] rounded-[6px]">
              <Image
                src="/image1.png"
                alt={`Instagram Product ${index + 1}`}
                width={200}
                height={200}
                className="object-cover rounded-[6px]"
              />
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default Page;

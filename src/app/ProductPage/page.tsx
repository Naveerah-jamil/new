"use client";

import { useEffect, useState } from "react";

// Define Product Interface (TypeScript)
interface Product {
  _id: string;
  title: string;
  slug: string;
  price: number;
  imageUrl: string;
  description: string;
  tags: string[];
  isNew: boolean;
  isSale: boolean;
}

// Client Component
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products?category=Electronics&start=0&limit=5");
        const data = await res.json();
        setProducts(data.products);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Total Products: {totalCount}</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.title} width={200} />
            <p>{product.description}</p>
            {product.isNew && <span>New</span>}
            {product.isSale && <span>Sale</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

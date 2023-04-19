import Link from 'next/link';
import React from 'react';

const products = ['pants', 'skirts', 'shoes', 'skirt'];

const ProductsPage = () => {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;

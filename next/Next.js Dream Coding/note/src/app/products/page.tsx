import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

const ProductsPage = async () => {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줌
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;

// 서버 컴포넌트는 async 함수로 정의 가능(즉, 서버 컴포넌트를 async 함수로 정의 하는 것은 전혀 이상하지 않음)
// 다만, 서버 컴포넌트 "자체"가 아직은 실험적 기능으로 자주 보이는 패턴이 아님

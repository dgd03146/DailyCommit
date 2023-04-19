import React from 'react';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

const PantsPage = ({ params }: Props) => {
  if (params.slug === 'nothing') {
    notFound();
  }
  return <h1>{params.slug} 제품 설명 페이지</h1>;
};

export default PantsPage;

export async function generateStaticParams() {
  const products = ['pants', 'skirts'];

  return products.map((product) => ({
    slug: product
  }));
}

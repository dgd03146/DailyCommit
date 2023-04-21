import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';
import { Metadata } from 'next';
import Image from 'next/image';
import GoProductsButton from '@/components/GoProductsButton';
export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { slug } = params;

  const product = await getProduct(slug);

  return {
    title: `Wonderful Items | ${product?.name.toUpperCase()}`,
    description: `Check our wonderful ${product?.name}!`,
    metadataBase: null
  };
};

const PantsPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    // notFound();
  }

  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width="300"
        height="300"
      />
      <GoProductsButton />
    </>
  );
};

export default PantsPage;

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id
  }));
}

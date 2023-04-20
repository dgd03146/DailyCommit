import MeowArticle from '@/components/MeowArticle';
import { getProducts, Product } from '@/service/products';
import Link from 'next/link';

type Props = {
  products: Product[];
};

export default function SSGPage({ products }: Props) {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}

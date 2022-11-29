import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

type PostsType = {
  body: string;
  date: string;
  slug: string;
  title: string;
};

type Posts = {
  posts: PostsType[];
};

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts }
  };
}

export default function Home({ posts }: Posts) {
  console.log('[HomePage] render', posts);
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

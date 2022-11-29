import Head from 'next/head';
import React from 'react';
import { getPost, getSlugs } from '../../lib/posts';
import { GetStaticProps, GetStaticPropsContext } from 'next';

// there's nothing in here about how to get data
// in this page only intrested in getting the data so we can display it

type PostType = {
  post: {
    title: string;
    body: string;
    date: string;
  };
};

export const getStaticPaths = async () => {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const { slug } = params!;
  console.log('[PostPage] getStaticProps()', slug);
  const post = await getPost(slug as string);
  return {
    props: {
      post
    }
  };
};

const PostPage = ({ post }: PostType) => {
  console.log('PostPage render: ', post);

  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
};

export default PostPage;

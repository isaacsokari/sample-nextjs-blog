import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>My First Post</title>
      </Head>

      <h1>First Post</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </Layout>
  );
};

export default FirstPost;

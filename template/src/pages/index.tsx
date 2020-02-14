import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

import { Layout } from '../components';
import { Button } from '../ui';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Button>button</Button>
      </p>
    </Layout>
  );
};

export default IndexPage;

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  title?: string;
};

export const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a data-cy="header-home-link">Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a data-cy="header-about-link">About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a data-cy="header-users-link">Users List</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

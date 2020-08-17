import { NextPage } from 'next';
import Link from 'next/link';

import { Layout, List } from '../../components';
import { User } from '../../models';
import { sampleFetchWrapper } from '../../utils/sample-api';

type Props = {
  items: User[];
  pathname: string;
};

const WithInitialProps: NextPage<Props> = ({ items, pathname }) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1 data-cy="users-header">Users List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <div data-cy="users-list">
      <List items={items} />
    </div>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

WithInitialProps.getInitialProps = async ({ pathname }) => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = await sampleFetchWrapper('http://localhost:3000/api/users');

  return { items, pathname };
};

export default WithInitialProps;

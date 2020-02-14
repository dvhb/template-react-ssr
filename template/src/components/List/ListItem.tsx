import * as React from 'react';
import Link from 'next/link';

import { User } from '../../models';

type Props = {
  data: User;
};

export const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

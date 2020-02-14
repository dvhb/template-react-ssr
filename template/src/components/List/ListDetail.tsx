import React from 'react';

import { User } from '../../models';

type ListDetailProps = {
  item: User;
};

export const ListDetail: React.FunctionComponent<ListDetailProps> = ({ item: user }) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

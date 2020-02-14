import React from 'react';

import { ListItem } from './ListItem';
import { User } from '../../models';

type Props = {
  items: User[];
};

export const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

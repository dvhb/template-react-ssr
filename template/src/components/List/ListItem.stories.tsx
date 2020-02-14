import React from 'react';

import { sampleUserData } from '../../utils/sample-data';
import { ListItem } from './ListItem';

export default {
  title: 'Components/ListItem',
};

export const Default = () => <ListItem data={sampleUserData[0]} />;

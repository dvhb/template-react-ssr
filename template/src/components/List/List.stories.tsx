import React from 'react';

import { List } from './List';
import { sampleUserData } from '../../utils/sample-data';

export default {
  title: 'Components/List',
};

export const Default = () => <List items={sampleUserData} />;

import React from 'react';

import { sampleUserData } from '../../utils/sample-data';
import { ListDetail } from './ListDetail';

export default {
  title: 'Components/ListDetail',
};

export const Default = () => <ListDetail item={sampleUserData[0]} />;

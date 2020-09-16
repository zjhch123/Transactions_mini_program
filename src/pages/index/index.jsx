import React from 'react';
import { View } from '@tarojs/components';
import { TopBar, NavigationBar } from '../../controls';

import './index.less';

const Transactions = () => {
  return (
    <View>
      <NavigationBar />
      <TopBar />
    </View>
  );
};

export default Transactions;

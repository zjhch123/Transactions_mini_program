import React from 'react';
import { View } from '@tarojs/components';
import { TopBar, NavigationBar, TransactionGroup } from '../../controls';

import './index.less';

const Transactions = () => {
  return (
    <View>
      <NavigationBar />
      <TopBar />
      <View className="items-list">
        <TransactionGroup />
        <TransactionGroup />
        <TransactionGroup />
      </View>
    </View>
  );
};

export default Transactions;

import React from 'react';
import { View } from '@tarojs/components';

import { TransactionGroupSummary } from './summary';
import { TransactionItem } from './item';

import './index.less';

export const TransactionGroup = () => (
  <View className="transaction-group">
    <TransactionGroupSummary />
    <View className="transaction-items">
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
    </View>
  </View>
);

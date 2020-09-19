import React from 'react';
import { View, Text } from '@tarojs/components';

export const TransactionGroupSummary = () => (
  <View className="transaction-item-summary">
    <View className="transaction-item-summary-date">
      <Text>9月18日</Text>
      <Text>今天</Text>
    </View>
    <View className="transaction-item-summary-money">
      <Text className="mark">支</Text>
      <Text className="amount">130.00</Text>
      <Text className="mark">收</Text>
      <Text className="amount">130.00</Text>
    </View>
  </View>
);

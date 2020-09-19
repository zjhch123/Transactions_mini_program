import React from 'react';
import { View, Text } from '@tarojs/components';

export const TransactionItem = () => (
  <View className="transaction-item">
    <View className="transaction-item-icon">
      <View className="temp-icon" />
    </View>
    <View className="transaction-item-details">
      <View className="details">
        <View className="name">
          <Text>餐饮</Text>
        </View>
        <View className="description">
          <Text>13:34</Text>
          <Text className="comment">这是备注</Text>
        </View>
      </View>
      <View className="amount"><Text>-33.00</Text></View>
    </View>
  </View>
);

import React from 'react';
import { View, Text } from '@tarojs/components';
import { TopBar, NavigationBar } from '../../controls';

import './index.less';

const TransactionItemSumamry = () => (
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

const TransactionItem = () => (
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

const TransactionGroup = () => (
  <View className="transaction-group">
    <TransactionItemSumamry />
    <View className="transaction-items">
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
    </View>
  </View>
);


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

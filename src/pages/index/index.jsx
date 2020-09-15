import React from 'react';
import { Button, View, Picker, Text } from '@tarojs/components';
import { NavigationBar } from '../../controls/navigation-bar';

import './index.less';

const Transactions = () => {
  return (
    <View>
      <NavigationBar />
      <View className="top-bar">
        <View className="type-filter">
          <Button size="mini" className="type-filter-btn" plain>
            <Text>全部类型</Text>
          </Button>
        </View>
        <View className="history-simple-info">
          <View className="history">
            <Picker>2020年 第n个周期</Picker>
          </View>
          <View className="info">
            <View className="outgo">
              <Text>总支出</Text>
              <Text>￥30.00</Text>
            </View>
            <View className="income">
              <Text>总收入</Text>
              <Text>￥30.00</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Transactions;

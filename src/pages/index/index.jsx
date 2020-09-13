import React from 'react';
import { Button, View, Picker, Text } from '@tarojs/components';
import './index.less';

const Transactions = () => {
  return (
    <View>
      <View className="top-bar">
        <View className="type-filter">
          <Button size="mini" className="type-filter-btn" plain>
            <Text>全部类型</Text>
          </Button>
        </View>
        <View className="history-simple-info">
          <View className="history">
            <Picker>2020年 第n周期</Picker>
          </View>
          <View className="info">
            <View className="outgo">
              <Text>总支出</Text>
              <Text>￥xxx</Text>
            </View>
            <View className="income">
              <Text>总收入</Text>
              <Text>￥xxx</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Transactions;

import React, { useState, useEffect } from 'react';
import { Button, View, Picker, Text } from '@tarojs/components';
import { useLayout } from '../../context/layout';

import './index.less';

const NavigationBar = () => {
  const layout = useLayout();

  return layout && layout.menu && (
    <View style={{ paddingTop: layout.menu.top, textAlign: 'center', backgroundColor: '#0078d4' }}>
      <Text style={{ lineHeight: layout.menu.height + 'px', color: 'white' }}>记账本</Text>
    </View>
  );
};

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

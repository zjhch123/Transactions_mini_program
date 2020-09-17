import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Button, View, Picker, Text } from '@tarojs/components';
import { useLayout } from '../../contexts';

import './index.less';

export const TopBar = ({ className }) => {
  const { topBar, navigationBar } = useLayout();
  
  return (
    <View className={classnames('top-bar', className)} style={{ height: topBar.height }}>
      <View className="top-bar-inner" style={{ height: topBar.height, top: navigationBar.height }}>
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

TopBar.propTypes = {
  className: PropTypes.string,
};

TopBar.defaultProps = {
  className: null,
};

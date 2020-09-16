import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { View, Text } from '@tarojs/components';

import { useLayout } from '../../context';

import './index.less';

export const NavigationBar = ({ className }) => {
  const { menu, navigationBar } = useLayout();
  const height = navigationBar ? navigationBar.height : 0;

  return menu && (
    <View className={classnames('navigation-bar', className)}>
      <View className="navigation-bar-inner" style={{ paddingTop: menu.top }}>
        <Text className="navigation-bar-text" style={{ lineHeight: menu.height + 'px' }}>记账本</Text>
      </View>
      <View style={{ height }} />
    </View>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,
};

NavigationBar.defaultProps = {
  className: null,
};

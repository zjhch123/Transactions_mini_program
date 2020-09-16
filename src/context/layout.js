import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useApp } from './app';

const defaultValue = Object.freeze({ height: 0, width: 0, left: 0, right: 0 });

const LayoutContext = createContext(null);

export const useLayout = () => useContext(LayoutContext);

export const LayoutContextProvider = ({ children }) => {
  const [layout, setLayout] = useState({
    menu: defaultValue,
    navigationBar: defaultValue,
    topBar: defaultValue,
  });
  const { systemInfo } = useApp();

  const rpxToPx = rpx => rpx * systemInfo.windowWidth / 750;

  useEffect(() => {
    const menu = wx.getMenuButtonBoundingClientRect();

    setLayout({
      ...layout,
      topBar: {
        height: rpxToPx(200),
      },
      navigationBar: {
        height: menu.height + menu.top,
      },
      menu,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>;
};

LayoutContextProvider.propTypes = {
  children: PropTypes.node,
};

LayoutContextProvider.defaultProps = {
  children: null,
};

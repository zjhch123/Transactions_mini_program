import React, { createContext, useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useApp } from './app';
import { useMenuButton } from '../hooks';

const LayoutContext = createContext(null);

export const useLayout = () => useContext(LayoutContext);

export const LayoutContextProvider = ({ children }) => {
  const { systemInfo } = useApp();
  const menu = useMenuButton();
  const rpxToPx = useCallback(rpx => rpx * systemInfo.windowWidth / 750, [systemInfo.windowWidth]);

  const layout = useMemo(() => ({
    topBar: {
      height: rpxToPx(184),
    },
    navigationBar: {
      height: menu.height + menu.top,
    },
    menu,
  }), [menu, rpxToPx]);

  return <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>;
};

LayoutContextProvider.propTypes = {
  children: PropTypes.node,
};

LayoutContextProvider.defaultProps = {
  children: null,
};

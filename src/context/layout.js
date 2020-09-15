import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LayoutContext = createContext(null);

export const useLayout = () => useContext(LayoutContext);

export const LayoutContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    setMenu(wx.getMenuButtonBoundingClientRect());
  }, []);

  return <LayoutContext.Provider value={{ menu }}>{children}</LayoutContext.Provider>;
};

LayoutContextProvider.propTypes = {
  children: PropTypes.node,
};

LayoutContextProvider.defaultProps = {
  children: null,
};

import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext(null);

export const useApp = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const systemInfo = useMemo(() => wx.getSystemInfoSync(), []);

  return <AppContext.Provider value={{ systemInfo }}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};

AppContextProvider.defaultProps = {
  children: null,
};

import React, { createContext, useContext, useEffect, useState } from 'react';

const LayouContext = createContext(null);

export const useLayout = () => useContext(LayouContext);

export const LayoutContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    setMenu(wx.getMenuButtonBoundingClientRect());
  }, []);

  return <LayouContext.Provider value={{ menu }}>{children}</LayouContext.Provider>;
};

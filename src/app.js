import React from 'react';
import { LayoutContextProvider } from './context/layout';
import './app.less';

export default ({ children }) => (
  <LayoutContextProvider>
    {children}
  </LayoutContextProvider>
);

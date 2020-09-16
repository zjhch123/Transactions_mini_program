import React from 'react';
import PropTypes from 'prop-types';
import { AppContextProvider, LayoutContextProvider } from './context';
import './app.less';

const App = ({ children }) => (
  <AppContextProvider>
    <LayoutContextProvider>
      {children}
    </LayoutContextProvider>
  </AppContextProvider>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;

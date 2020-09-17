import { useState, useEffect } from 'react';
import { DefaultLayout } from '../constants';

export const useMenuButton = () => {
  const [status, setStatus] = useState(DefaultLayout);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        const menu = wx.getMenuButtonBoundingClientRect() || DefaultLayout;

        if (menu.top === 0) {
          setRetryCount(retryCount + 1);
          console.log('getMenuButtonBoundingClientRect failed, Retry...');
          return;
        }

        setStatus(menu);
      } catch (e) {
        console.log('getMenuButtonBoundingClientRect error, Retry...', e);
        setRetryCount(retryCount + 1);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [retryCount]);

  return status;
};

import React, { useCallback, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkSession } from 'Utils';
import { useLoading } from 'Utils/LoadingManager';
import MainLayoutPresenter from './MainLayoutPresenter';

const MainLayoutContainer = () => {
  const { handleLoadingTimer } = useLoading();
  /* Router */
  const navigate = useNavigate();
  /* State */

  /* Functions */
  const handleSession = useCallback(() => {
    const token = checkSession();
    console.log(token);
    if (token) {
      return;
    }

    handleLoadingTimer(1000, () => {
      navigate('/login');
    });
  }, [navigate, handleLoadingTimer]);

  /* Hooks */
  useLayoutEffect(() => {
    handleSession();
  }, [handleSession]);

  /* Render */
  return <MainLayoutPresenter />;
};

export default MainLayoutContainer;

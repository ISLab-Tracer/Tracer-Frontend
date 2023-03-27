import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSession } from 'Utils';
import { useLoading } from 'Utils/LoadingManager';
import MainLayoutPresenter from './MainLayoutPresenter';

const MainLayoutContainer = () => {
  const { handleLoadingTimer } = useLoading();
  /* Router */
  const navigate = useNavigate();
  /* State */

  /* Functions */
  const handleSession = useCallback(() => {
    if (getSession()) {
      return;
    }

    handleLoadingTimer(1000, () => {
      navigate('/login');
    });
  }, [navigate, handleLoadingTimer]);

  /* Hooks */
  useEffect(() => {
    handleSession();
  }, [handleSession]);

  /* Render */
  return <MainLayoutPresenter />;
};

export default MainLayoutContainer;

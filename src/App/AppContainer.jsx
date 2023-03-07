import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from 'Utils/LoadingManager';
import Loading from '../Components/Loading/Loading';
import AppPresenter from './AppPresenter';

const AppContainer = () => {
  const { handleLoadingTimer } = useLoading();
  /* Router */
  const path = useLocation();
  /* State */
  /* Functions */
  const handleLoadingPage = useCallback(() => {
    if (path) {
      handleLoadingTimer(500);
    }
    // eslint-disable-next-line
  }, [path]);

  /* Hooks */
  useEffect(() => {
    handleLoadingPage();
  }, [handleLoadingPage]);

  /* Render */
  return (
    <>
      <Loading isLoading={false} />
      <AppPresenter />
    </>
  );
};

export default AppContainer;

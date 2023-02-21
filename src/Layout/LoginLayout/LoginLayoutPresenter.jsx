import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Components';
import '../../Css/main.css';

const LoginLayoutPresenter = () => {
  /* Router */
  /* State */
  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <div className="mainlayout-container">
      <Header />
      <div className="mainlayout-body-container">{<Outlet />}</div>
    </div>
  );
};

export default LoginLayoutPresenter;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginLayout, MainLayout } from '../Layout';
import { Login, Main, SignUp } from './Pages';

const index = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default index;

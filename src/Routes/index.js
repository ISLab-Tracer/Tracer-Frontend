import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginLayout, MainLayout } from '../Layout';
import {
  Equipment,
  EquipmentRegister,
  Login,
  Main,
  Profile,
  SignUp,
} from './Pages';

const index = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="equipment">
          <Route index element={<Equipment />} />
          <Route path="register" element={<EquipmentRegister />} />
        </Route>
      </Route>
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<Login />}>
          <Route index element={<Login />} />
          <Route path=":login_id" element={<Login />} />
        </Route>
        <Route path="/register">
          <Route index element={<SignUp />} />
          <Route path=":signup_id" element={<SignUp />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default index;

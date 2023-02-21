import React, { useState } from 'react';
import Logo from '../Assets/img/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  /* Router */
  /* State */
  const navigate = useNavigate();
  const [info, setInfo] = useState(false);
  const [mouse, setMouse] = useState(false);
  /* Hooks */
  /* Functions */
  const changeInfo = () => {
    if (info) {
      setInfo(false);
    } else {
      setInfo(true);
    }
  };
  const onMouseOver = (e) => {
    setMouse(e.target.id);
  };
  const onMouseLeave = () => {
    setMouse();
  };
  /* Render */
  const infoMenuRender = () => {
    return (
      <div className="info-menu-container">
        <div className="info-name">이름</div>
        <div
          className="info-menu"
          id="info"
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          style={{ backgroundColor: mouse === 'info' ? '#eff6ff' : '#fff' }}
        >
          <SettingsOutlinedIcon
            fontSize="small"
            id="info"
            sx={{ marginRight: 2, color: '#8f91a0' }}
          />
          <span id="info">회원정보</span>
        </div>
        <div
          className="info-menu"
          id="logout"
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          style={{ backgroundColor: mouse === 'logout' ? '#eff6ff' : '#fff' }}
        >
          <LogoutOutlinedIcon
            id="logout"
            fontSize="small"
            sx={{ marginRight: 2, color: '#8f91a0' }}
          />
          <span id="logout">로그아웃</span>
        </div>
      </div>
    );
  };

  return (
    <header className="header-container">
      <img
        src={Logo}
        alt="logo"
        style={{ width: 40 }}
        onClick={() => navigate('/')}
      />
      <div className="profile-container">
        <NotificationsIcon sx={{ marginRight: 3 }} />
        <AccountCircleIcon
          fontSize="large"
          sx={{ color: '#8f91a0', cursor: 'pointer' }}
          onClick={changeInfo}
        />
        {info && infoMenuRender()}
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import Logo from '../Assets/img/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import DropdownProfile from './DropdownProfile';
const Header = () => {
  /* Router */
  /* State */
  const navigate = useNavigate();
  const [info, setInfo] = useState(false);
  /* Hooks */
  /* Functions */
  /**
   * profile 메뉴 on/off
   */
  const changeInfo = () => {
    if (info) {
      setInfo(false);
    } else {
      setInfo(true);
    }
  };
  /* Render */
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
        {info && <DropdownProfile info={info} setInfo={setInfo} />}
      </div>
    </header>
  );
};

export default Header;

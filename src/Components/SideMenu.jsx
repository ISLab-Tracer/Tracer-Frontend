import React, { useState } from 'react';
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const SideMenu = () => {
  /* Router */
  /* State */
  const navigate = useNavigate();
  const location = useLocation();
  const [mouse, setMouse] = useState('');

  /* Hooks */
  /* Functions */
  /**
   * menuItem 클릭시 색상 변경
   * @param {*} e
   */
  const changeItemColor = (e) => {
    navigate(`/${e.target.id}`);
  };

  /**
   * 마우스 온/오버 이벤트 핸들러
   * @param {*} e
   */
  const onMouseOver = (e) => {
    setMouse(e.target.id);
  };
  const onMouseLeave = () => {
    setMouse();
  };
  /* Render */
  return (
    <div className="sidemenu-container">
      <nav>
        <div
          className="sidemenu-item"
          id="equipment"
          style={{
            backgroundColor:
              location.pathname === '/equipment' || mouse === 'equipment'
                ? '#edefff'
                : '',
            color: location.pathname === '/equipment' ? '#4f67ff' : '',
          }}
          onClick={(e) => changeItemColor(e)}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <ImportantDevicesOutlinedIcon
            id="equipment"
            fontSize="small"
            sx={{ margin: 2 }}
          />
          <span id="equipment">기자재 조회</span>
        </div>

        <div
          className="sidemenu-item"
          id="register"
          style={{
            backgroundColor:
              location.pathname === '/register' || mouse === 'register'
                ? '#edefff'
                : '',
            color: location.pathname === '/register' ? '#4f67ff' : '',
          }}
          onClick={(e) => changeItemColor(e)}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <ImportantDevicesOutlinedIcon
            id="login"
            fontSize="small"
            sx={{ margin: 2 }}
          />
          <span id="equipment">회원가입</span>
        </div>

        <div
          className="sidemenu-item"
          id="login"
          style={{
            backgroundColor:
              location.pathname === '/login' || mouse === 'login'
                ? '#edefff'
                : '',
            color: location.pathname === '/login' ? '#4f67ff' : '',
          }}
          onClick={(e) => changeItemColor(e)}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <ImportantDevicesOutlinedIcon
            id="equipment"
            fontSize="small"
            sx={{ margin: 2 }}
          />
          <span id="equipment">로그인</span>
        </div>




      </nav>
    </div>
  );
};

export default SideMenu;

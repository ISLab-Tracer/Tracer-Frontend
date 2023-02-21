import React from "react";
import Logo from "../Assets/img/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header = () => {
  /* Router */
  /* State */
  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <header className="header-container">
      <img src={Logo} alt="logo" style={{ width: 40 }} />
      <div className="profile-container">
        <NotificationsIcon sx={{ marginRight: 3 }} />
        <AccountCircleIcon fontSize="large" sx={{ color: "#8f91a0" }} />
      </div>
    </header>
  );
};

export default Header;

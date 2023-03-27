import { Divider } from '@mui/material';
import React from 'react';
import './equipheader.css';

const EquipHeader = ({ title, subTitle, maxWidth = '100%', right = '' }) => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="equipment-header-container" style={{ maxWidth }}>
      <div className="header-left">
        <div className="header-subtitle">{subTitle}</div>
        <div className="header-title">{title}</div>
      </div>
      <div className="header-right">{right}</div>
    </div>
  );
};

export default EquipHeader;

import { Button } from '@mui/material';
import { EquipHeader } from 'Components';
import React from 'react';
import { EquipmentThumbnail } from './components';

import './equipment-register.css';

const EquipmentRegisterPresenter = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="equipment-register-container">
      <EquipHeader
        title="제품 추가"
        subTitle="제품 목록"
        right={
          <Button variant="outlined" size="large">
            초기화
          </Button>
        }
      />
      {/* <EquipmentThumbnail /> */}
    </div>
  );
};

export default EquipmentRegisterPresenter;

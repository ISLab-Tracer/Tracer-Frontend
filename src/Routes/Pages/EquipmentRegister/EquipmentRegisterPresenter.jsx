import { Button } from '@mui/material';
import { EquipInfo, PageHeader } from 'Components';
import React from 'react';
import './equipment-register.css';

const EquipmentRegisterPresenter = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="equipment-register-container">
      <PageHeader
        title="제품 추가"
        subTitle="제품 목록"
        right={
          <Button variant="outlined" size="large">
            초기화
          </Button>
        }
      />
      <div className="equipment-register-form">
        <EquipInfo title="제품 정보">
          <EquipInfo.Input label="제품명" />
        </EquipInfo>
        <EquipInfo title="제품 속성">
          <EquipInfo.Input />
        </EquipInfo>
      </div>
    </div>
  );
};

export default EquipmentRegisterPresenter;

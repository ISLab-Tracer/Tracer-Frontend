import { Button } from '@mui/material';
import { EquipInfo, PageHeader } from 'Components';
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
        <div className="equipinfo-wrapper">
          <EquipInfo title="제품 정보">
            <EquipInfo.Input label="제품명" />
          </EquipInfo>
          <div className="right">
            <EquipmentThumbnail />
          </div>
        </div>
        <EquipInfo title="제품 속성">
          <EquipInfo.Input />
        </EquipInfo>
      </div>
    </div>
  );
};

export default EquipmentRegisterPresenter;

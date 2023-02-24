import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const EquipmentPresenter = () => {
  return (

    <div class="equip-page">
      <div class="flex equip-page-title">
        <div class="equip-page-first">
          <p class="equip-page-frist-title">
            제품 목록
          </p>
          <div class="equip-page-first-buttonbox">
            <button class="equip-page-first-button equip-page-first-add">
              <AddIcon />제품추가
            </button>
            <button class="equip-page-first-button">
              데이터 관리
            </button>
          </div>
        </div>
        <div class="equip-page-second">
          <div>
            <input type="text" class="equip-page-second-input" placeholder="이름, 바코드, 속성 검색"/>
            <FormGroup class="equip-page-second-check">
              <FormControlLabel control={<Checkbox defaultChecked />} sx={ { '& .MuiSvgIcon-root': { fontSize: 20 } } } label="Label" />
            </FormGroup>
          </div>
        </div>
        <div>
          제품 리스트
        </div>
      </div>
    </div>
  );
};

export default EquipmentPresenter;

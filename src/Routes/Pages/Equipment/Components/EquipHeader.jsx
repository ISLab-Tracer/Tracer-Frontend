import { Add, ViewList } from '@mui/icons-material';
import React from 'react';

const EquipHeader = ({}) => {
  /* Router */
  /* State */
  /* Hooks */
  /* Functions */

  /* Render */
  return (
    <div className="equip-page-titlebox">
      <h4 className="equip-page-title-h4">제품 목록</h4>
      <div className="equip-page-buttonbox">
        <div className="equip-page-button-firsthover">
          <div className="equip-page-button equip-page-button-first">
            <Add />
            <p>제품 추가</p>
            {/* <KeyboardArrowDownIcon /> */}
          </div>
        </div>
        <div className="equip-page-button-secondhover">
          <div className="equip-page-button equip-page-button-second">
            <ViewList />
            <p>데이터 관리</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipHeader;

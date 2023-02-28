import React from 'react';
import '../../../Css/equipment.css'
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const EquipmentPresenter = () => {
  return (
    <div className="equip-page">
      <div className="equip-page-titlebox">
        <h4 className="equip-page-title-h4">
          제품 목록
        </h4>
        <div className="equip-page-buttonbox">
          <div className="equip-page-button-firsthover">
            <div className="equip-page-button equip-page-button-first">
              <AddIcon />
              <p>
                제품 추가
              </p>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className="equip-page-button-secondhover">
            <div className="equip-page-button equip-page-button-second">
              <ViewListIcon />
              <p>
                데이터 관리
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="equip-page-searchbox">
        <div className="equip-page-search-inputbox">
          <SearchIcon />
          <input 
            type="text"
            className="equip-page-search-input"
            placeholder="이름, 바코드, 속성 검색"
          />
        </div>
        <div className="equip-page-search-codebox">
          <QrCodeScannerIcon style={{ color: '#8f91a0' }}/>
        </div>
        <div className="equip-page-search-checkbox">
          <input
            type="checkbox"
            className="equip-page-search-checkbox-check"
          />
          <p className="equip-page-search-checkbox-input">
            재고 보유
          </p>
        </div>
      </div>
      <div className="equip-page-mainbox">
        <div>

        </div>
      </div>
    </div>
  );
};

export default EquipmentPresenter;

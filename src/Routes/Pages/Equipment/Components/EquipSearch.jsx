import React, { useState } from 'react';
import { QrCodeScanner, Search } from '@mui/icons-material';

const EquipSearch = ({ setSearch, setEmptycheck }) => {
  /* Router */

  /* State */
  const [inputClick, setInputClick] = useState(true);

  /* Hooks */

  /* Functions */
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnFocus = () => {
    setInputClick(!inputClick);
  };

  /* Render */
  return (
    <div className="equip-page-searchbox">
      <div
        className={
          inputClick
            ? 'equip-page-search-inputbox'
            : 'equip-page-search-inputbox-focus'
        }
      >
        <Search />
        <input
          type="text"
          className="equip-page-search-input"
          placeholder="이름, 바코드, 속성 검색"
          onFocus={handleOnFocus}
          onBlur={handleOnFocus}
          onChange={handleOnChange}
        />
      </div>
      <div className="equip-page-search-codebox">
        <QrCodeScanner style={{ color: '#8f91a0' }} />
      </div>
    </div>
  );
};

export default EquipSearch;

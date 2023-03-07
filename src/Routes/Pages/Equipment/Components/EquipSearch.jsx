import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const EquipSearch = (props) => {

    /* Router */

    /* State */
    const { check, handleOnFocus, setSearch, emptycheck, setEmptycheck } = props;

    /* Hooks */

    /* Functions */
    const handleOnChange = e => {

        setSearch( e.target.value );
    }

    const handleOnCheck = () => {

        setEmptycheck( !emptycheck );
    }
    
    /* Render */
    return (
        <div className="equip-page-searchbox">
            <div className={
            check ? 'equip-page-search-inputbox' : 'equip-page-search-inputbox-focus'
            }
            >
            <SearchIcon />
            <input 
                type="text"
                className="equip-page-search-input"
                placeholder="이름, 바코드, 속성 검색"
                onFocus={ handleOnFocus }
                onBlur={ handleOnFocus }
                onChange={ handleOnChange }
            />
            </div>
            <div className="equip-page-search-codebox">
            <QrCodeScannerIcon style={{ color: '#8f91a0' }}/>
            </div>
            <div className="equip-page-search-checkbox">
            <input
                type="checkbox"
                className="equip-page-search-checkbox-check"
                onChange={ handleOnCheck }
            />
            <p className="equip-page-search-checkbox-input">
                재고 없는 항목 제외
            </p>
            </div>
        </div>
    );
}

export default EquipSearch;
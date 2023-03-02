import React from 'react';
import '../../../Css/equipment.css'
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';


import { EquipHeader, EquipMain, EquipSearch } from './Components';

const EquipmentPresenter = (props) => {

  const { check, handleOnFocus } = props;

  return (
    <div className="main-content-container">
      <EquipHeader
        ViewListIcon={ViewListIcon}
        AddIcon={AddIcon}
        KeyboardArrowDownIcon={KeyboardArrowDownIcon}
      />      

      <EquipSearch
        check={ check }
        handleOnFocus={ handleOnFocus }
      />
      
      <EquipMain
        AddIcon={AddIcon}
        KeyboardArrowDownIcon={KeyboardArrowDownIcon}
        FormatListNumberedRtlIcon={FormatListNumberedRtlIcon}
      />
    </div>
  );
};

export default EquipmentPresenter;

import React from 'react';
import '../../../Css/equipment.css'
import EquipmentHeader from './Components/EquipHeader'
import EquipMain from './Components/EquipMain'
import EquipSearch from './Components/EquipSearch';


const EquipmentPresenter = (props) => {

  const { check, handleOnFocus } = props;

  return (
    <div className="main-content-container">
      <EquipmentHeader />      

      <EquipSearch
        check={ check }
        handleOnFocus={ handleOnFocus }
      />
      
      <EquipMain />
    </div>
  );
};

export default EquipmentPresenter;

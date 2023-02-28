import React, { useState } from 'react';
import EquipmentPresenter from './EquipmentPresenter';

const EquipmentContainer = () => {

  
  /* Router */


  /* State */
  const [ check, setCheck ] = useState(true);


  /* Hooks */
  
  
  /* Functions */
  const handleOnFocus = () => {

    setCheck( !check );
  }


  /* Render */
  return (
    <EquipmentPresenter
    handleOnFocus = { handleOnFocus }
    check = { check }
    />
  );
};

export default EquipmentContainer;

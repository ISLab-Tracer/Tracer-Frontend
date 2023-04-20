import React, { useCallback, useEffect, useState } from 'react';
import EquipmentDataPresenter from './EquipmentDataPresenter';
import { EquipAPI } from 'API';

const EquipmentDataContainer = () => {
  /* Router */
  /* State */
  const [equipmentList, setEquipmentList] = useState();
  /* Functions */
  const handleGetEquipmentList = useCallback(async () => {
    const list = await EquipAPI.getEquipList();
    console.log(list);
    if (list) {
      setEquipmentList(list);
      return true;
    }

    return false;
  }, []);
  /* Hooks */
  useEffect(() => {
    handleGetEquipmentList();
  }, [handleGetEquipmentList]);
  console.log(equipmentList);
  /* Render */
  return (
    equipmentList && <EquipmentDataPresenter equipmentList={equipmentList} />
  );
};

export default EquipmentDataContainer;

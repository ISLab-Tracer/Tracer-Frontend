import { EquipAPI } from 'API';
import { useCommonData } from 'Hooks/CommonDataManager';
import React from 'react';
import EquipmentRegisterPresenter from './EquipmentRegisterPresenter';
import { useLoading } from 'Utils/LoadingManager';

const EquipmentRegisterContainer = () => {
  /* Router */
  /* State */
  const { handleLoading, handleLoadingTimer } = useLoading();
  const { projectList, userList, categoryTree, categoryOptions } =
    useCommonData();
  /* Functions */
  /**
   * 장비 등록
   * --
   * @param {*} equipInfo
   * @returns
   */
  const handleRegister = async (equipInfo) => {
    handleLoading(true);
    const formData = new FormData();

    const keys = Object.keys(equipInfo);

    for (let i = 0; i < keys.length; i++) {
      const element = keys[i];
      formData.append(element, equipInfo[element]);
    }

    const result = await EquipAPI.createEquip(formData);
    if (result) {
      handleLoadingTimer(1500);
      return true;
    }

    handleLoadingTimer(1500);

    return false;
  };
  /* Hooks */
  /* Render */
  return (
    <EquipmentRegisterPresenter
      projectList={projectList}
      userList={userList}
      categoryTree={categoryTree}
      categoryOptions={categoryOptions}
      handleRegister={handleRegister}
    />
  );
};

export default EquipmentRegisterContainer;

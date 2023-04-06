import React, { useEffect, useState } from 'react';
import EquipmentModifyPresenter from './EquipmentModifyPresenter';
import { useNavigate, useParams } from 'react-router-dom';
import { CommonAPI, EquipAPI } from 'API';
import { v4 } from 'uuid';
import { useLoading } from 'Utils/LoadingManager';
import { uncomma } from 'Utils';

const UPDATE_EQUIP = [
  { key: 'equipment_id', type: 'string' },
  { key: 'equipment_nm', type: 'string' },
  { key: 'equipment_desc', type: 'string' },
  { key: 'equipment_thumbnail', type: 'string' },
  { key: 'equipment_price', type: 'number' },
  { key: 'equipment_qty', type: 'number' },
  { key: 'equipment_barcode', type: 'string' },
  { key: 'category_id', type: 'string' },
  { key: 'project_id', type: 'string' },
];

const EquipmentModifyContainer = () => {
  const { handleLoading, handleLoadingTimer } = useLoading();
  /* Router */
  const { equipment_id } = useParams();
  const navigate = useNavigate();
  /* State */
  const [equipment, setEquipment] = useState(null);
  /* Functions */
  /**
   * 기자재 정보 핸들러
   * --
   * @param {*} key
   * @param {*} value
   */
  const handleEquipment = (key, value) => {
    setEquipment({ ...equipment, [key]: value });
  };

  const updateEquipment = async (equip, file = null) => {
    if (file && typeof file === 'object') {
      handleLoading(true);
      const uploadRes = await handleUpload(file);
      if (uploadRes) {
        equip = {
          ...equip,
          equipment_thumbnail: uploadRes,
        };
      } else {
        return false;
      }
    }

    const temp = UPDATE_EQUIP.map((item) => {
      const { key, type } = item;
      if (equip[key] !== equipment[key]) {
        return [
          [key],
          type === 'number' ? Number(uncomma(equip[key])) : equip[key],
        ];
      }
      return false;
    }).filter((item) => item);
    const postData = {
      ...Object.fromEntries(temp),
      equipment_id: equip.equipment_id,
    };

    const result = await EquipAPI.updateEquipment(postData);
    if (result) {
      handleLoadingTimer(1000);
      navigate('/equipment');
      return true;
    }
    return false;
  };

  const handleUpload = async (file) => {
    if (!file) {
      handleLoadingTimer(500);
      return false;
    }

    const fileData = {
      file,
      upload_path: 'uploads/equipment',
      file_name: v4(),
    };
    const fileFormData = new FormData();
    Object.keys(fileData).forEach((i) => {
      console.log(i, fileData[i]);
      fileFormData.append(i, fileData[i]);
    });

    const result = await CommonAPI.singleUpload(fileFormData);
    if (result) {
      handleLoadingTimer(1000);
      return result;
    }
    return false;
  };

  /* Hooks */
  useEffect(() => {
    if (!equipment_id) {
      navigate('/equipment');
      return;
    }
    const fetchEquip = async () => {
      const result = await EquipAPI.getEquipInfo(equipment_id);
      if (result) {
        setEquipment(result);
        return true;
      }
      navigate('/equipment');
      return false;
    };

    fetchEquip();
  }, [navigate, equipment_id]);

  /* Render */
  return (
    equipment && (
      <EquipmentModifyPresenter
        equipment={equipment}
        setEquipment={handleEquipment}
        updateEquipment={updateEquipment}
      />
    )
  );
};

export default EquipmentModifyContainer;

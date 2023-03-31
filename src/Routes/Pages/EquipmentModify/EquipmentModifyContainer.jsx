import React, { useEffect, useState } from 'react';
import EquipmentModifyPresenter from './EquipmentModifyPresenter';
import { useNavigate, useParams } from 'react-router-dom';
import { EquipAPI } from 'API';

const EquipmentModifyContainer = () => {
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
      />
    )
  );
};

export default EquipmentModifyContainer;

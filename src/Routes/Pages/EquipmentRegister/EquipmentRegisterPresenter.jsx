import { Button, Stack } from '@mui/material';
import { EquipInfo, PageHeader } from 'Components';
import React, { useEffect, useState } from 'react';
import { EquipmentThumbnail } from './components';
import './equipment-register.css';

const EquipmentRegisterPresenter = () => {
  /* Router */
  /* State */
  const initialState = {
    category_id: '',
    project_id: '',
    equipment_nm: '기자재 #1',
    equipment_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni praesentium tempora expedita aperiam deserunt unde, provident voluptate quasi a quam ipsam eveniet dolorum accusantium enim dolore cumque? Molestias, at.',
    equipment_thumbnail: '',
    equipment_price: '50000',
    equipment_qty: 1,
  };
  const [equipInfo, setEquipInfo] = useState(initialState);
  const [thumbnail, setThumbnail] = useState(null);
  /* Functions */
  /**
   * 제품 정보 핸들러
   * --
   * @param {string} name
   * @param {string} value
   */
  const handleEquipinfo = (name, value) => {
    setEquipInfo({ ...equipInfo, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(equipInfo);
  };

  const handleImg = (f) => {
    if (!f) {
      return;
    }
    setThumbnail(f);
  };

  /* Hooks */
  useEffect(() => {
    if (thumbnail === null) {
      return;
    }
    setEquipInfo({ ...equipInfo, equipment_thumbnail: thumbnail });
    setThumbnail(null);
    // eslint-disable-next-line
  }, [thumbnail]);

  /* Render */
  return (
    <div className="equipment-register-container">
      <PageHeader
        title="제품 추가"
        subTitle="제품 목록"
        right={
          <Button variant="outlined" size="large">
            초기화
          </Button>
        }
      />
      <form className="equipment-register-form" onSubmit={onSubmit}>
        <div className="equipinfo-wrapper">
          <div className="left">
            <EquipInfo title="제품 정보">
              <EquipInfo.Input
                label="제품명"
                property="equipment_nm"
                value={equipInfo.equipment_nm}
                setValue={handleEquipinfo}
              />
              <EquipInfo.Input
                label="제품 가격"
                property="equipment_price"
                value={equipInfo.equipment_price}
                setValue={handleEquipinfo}
                type="number"
              />
              <EquipInfo.Input
                label="제품 수량"
                property="equipment_qty"
                value={equipInfo.equipment_qty}
                setValue={handleEquipinfo}
                type="number"
              />
              <EquipInfo.Input
                label="제품 설명"
                multiline={true}
                property="equipment_desc"
                value={equipInfo.equipment_desc}
                setValue={handleEquipinfo}
              />
            </EquipInfo>
          </div>
          <div className="right">
            <EquipmentThumbnail img={thumbnail} setImg={handleImg} />
          </div>
        </div>
        <EquipInfo title="제품 속성">
          <EquipInfo.Input />
          <EquipInfo.Input />
        </EquipInfo>
        <div className="btn-group">
          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained">
              입력 완료
            </Button>
            <Button type="cancel" variant="outlined">
              취소
            </Button>
          </Stack>
        </div>
      </form>
    </div>
  );
};

export default EquipmentRegisterPresenter;

import React, { useState } from 'react';
import './equipment-modify.css';
import { useCommonData } from 'Hooks/CommonDataManager';
import { EquipInfo, EquipmentThumbnail, PageHeader } from 'Components';
import { Button, MenuItem, Stack } from '@mui/material';
import { MyListSubheader } from 'Components/Equips/EquipInfo/EquipInfo';
const EquipmentModifyPresenter = ({ equipment, updateEquipment }) => {
  /* Router */
  /* State */
  const { categoryOptions, projectList, userList } = useCommonData();
  //   const [img, setImg] = useState(null);
  const [thumbnail, setThumbnail] = useState(equipment.equipment_thumbnail);
  const [equipInfo, setEquipInfo] = useState(equipment);

  /* Functions */
  const handleEquipinfo = (name, value) => {
    setEquipInfo({ ...equipInfo, [name]: value });
  };
  /**
   * Form 핸들러
   * --
   * @param {*} e
   * @returns
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateEquipment(equipInfo, thumbnail);
  };

  const handleImg = (f) => {
    if (!f) {
      return;
    }
    setThumbnail(f);
  };

  const onReset = () => {
    setEquipInfo(equipment);
  };
  /* Hooks */
  /* Render */
  const categoryRender = categoryOptions.map((item) => {
    const { parent_id, category_id, category_nm } = item;
    if (parent_id) {
      return (
        <MenuItem key={category_id} value={category_id}>
          {category_nm}
        </MenuItem>
      );
    }
    return (
      <MyListSubheader muiSkipListHighlight key={category_id}>
        {category_nm}
      </MyListSubheader>
    );
  });
  return (
    <div className="equipment-modify-container">
      <PageHeader
        title="제품 추가"
        subTitle="제품 목록"
        right={
          <Button variant="outlined" size="large" onClick={onReset}>
            초기화
          </Button>
        }
      />
      <form
        className="equipment-modify-form"
        onSubmit={onSubmit}
        onKeyPress={(e) => {
          e.key === 'Enter' && e.preventDefault();
        }}
      >
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
          <EquipInfo.Select
            label="카테고리"
            name="category_id"
            property="category_id"
            value={equipInfo.category_id}
            setValue={handleEquipinfo}
          >
            {categoryRender}
          </EquipInfo.Select>
          <EquipInfo.Select
            label="관련 사업"
            name="project_id"
            property="project_id"
            setValue={handleEquipinfo}
            value={equipInfo.project_id}
            items={projectList}
            render={(item) => (
              <MenuItem key={item.project_id} value={item.project_id}>
                {item.project_title}
              </MenuItem>
            )}
          />
          <EquipInfo.Select
            label="구매자"
            name="user_id"
            property="user_id"
            disabled
            setValue={handleEquipinfo}
            value={equipInfo.user_id}
            items={userList}
            render={(item) => (
              <MenuItem key={item.user_id} value={item.user_id}>
                {item.user_nm}
              </MenuItem>
            )}
          />
          <EquipInfo.Select
            label="담당자"
            name="user_id"
            property="user_id"
            disabled
            setValue={handleEquipinfo}
            value={equipInfo.user_id}
            items={userList}
            render={(item) => (
              <MenuItem key={item.user_id} value={item.user_id}>
                {item.user_nm}
              </MenuItem>
            )}
          />
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

export default EquipmentModifyPresenter;

import { Button, MenuItem, Stack } from '@mui/material';
import { EquipInfo, EquipmentThumbnail, PageHeader } from 'Components';
import React, { useEffect, useState } from 'react';
import { uncomma } from 'Utils';
import './equipment-register.css';
import { MyListSubheader } from 'Components/Equips/EquipInfo/EquipInfo';

const EquipmentRegisterPresenter = ({
  categoryOptions,
  projectList,
  categoryTree,
  userList,
  handleRegister,
}) => {
  /* Router */
  /* State */
  const initialState = {
    category_id: '',
    project_id: '',
    equipment_nm: '',
    equipment_desc: '',
    equipment_price: null,
    equipment_qty: null,
    user_id: '',
    charger_id: '',
    files: null,
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

  /**
   * Form 핸들러
   * --
   * @param {*} e
   * @returns
   */
  const onSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...equipInfo,
      equipment_price: Number(uncomma(equipInfo.equipment_price)),
      equipment_qty: Number(uncomma(equipInfo.equipment_qty)),
    };

    const result = await handleRegister(postData);
    if (result) {
      setEquipInfo(initialState);
      setThumbnail(null);
      return true;
    }

    return false;
  };

  const handleImg = (f) => {
    if (!f) {
      return;
    }
    setThumbnail(f);
  };

  const onReset = () => {
    setEquipInfo(initialState);
  };

  /* Hooks */
  useEffect(() => {
    if (thumbnail === null) {
      return;
    }
    setEquipInfo({ ...equipInfo, files: thumbnail });
    // eslint-disable-next-line
  }, [thumbnail]);

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

  /* Render */
  return (
    <div className="equipment-register-container">
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
        className="equipment-register-form"
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
            items={categoryTree}
            setValue={handleEquipinfo}
            children={categoryRender}
          />
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
            name="charger_id"
            property="charger_id"
            setValue={handleEquipinfo}
            value={equipInfo.charger_id}
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

export default EquipmentRegisterPresenter;

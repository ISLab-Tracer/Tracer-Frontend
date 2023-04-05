import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { Fragment } from 'react';

const EditCategoryModal = ({
  editData,
  setEditData,
  parentCategory,
  handleUpdate,
  categoryList,
  dataList,
  setDataList,
  setEditOpen,
}) => {
  /* Router */
  /* State */
  /* Hooks */
  /* Functions */
  /**
   * 부모 카테고리 변경
   * @param {*} e
   */
  const handleParentChange = (e) => {
    setEditData({ ...editData, parent_category: e.target.value });
  };
  /**
   * 카테고리명 변경
   * @param {*} e
   */
  const handleCategoryChange = (e) => {
    setEditData({ ...editData, category_nm: e.target.value });
  };
  /**
   * 카테고리 설명 변경
   * @param {*} e
   */
  const handleCategoryDesc = (e) => {
    setEditData({ ...editData, category_desc: e.target.value });
  };
  /**
   * 카테고리 수정 등록
   * @param {*} e
   */
  const handleUpdateCategory = (e) => {
    e.preventDefault();
    // 부모 카테고리명 추출
    const parent = categoryList.filter(
      (i) => i.category_nm === editData.parent_category
    );
    // 업데이트 내용 반영
    const data = {
      category_id: editData.category_id,
      category_nm: editData.category_nm,
      category_desc: editData.category_desc,
      parent_id: parent[0].category_id,
      category_level: parent[0].category_level + 1,
    };
    // 등록
    handleUpdate(data);
    // 카테고리 리스트 상태 변경
    setDataList(
      dataList.map((item) =>
        item.category_id === editData.category_id
          ? {
              ...item,
              category_nm: editData.category_nm,
              category_desc: editData.category_desc,
              parent_id: parent[0].category_id,
              category_level: parent[0].category_level + 1,
            }
          : item
      )
    );
    // 모달 닫기
    setEditOpen(false);
  };
  console.log(editData);
  /* Render */
  return (
    <Fragment>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        카테고리 수정
      </Typography>
      <Typography id="transition-modal-description" sx={{ color: '#cecece' }}>
        제품 카테고리 정보를 입력해주세요.
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 3 }} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10,
        }}
      >
        <h4 style={{ width: 100 }}>상위 카테고리</h4>
        <div>
          <FormControl sx={{ ml: 5, minWidth: 150 }} size="small">
            <InputLabel id="demo-select-small">상위 카테고리</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={editData.parent_category}
              label="상위 카테고리"
              onChange={handleParentChange}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              {parentCategory.map((i) => {
                return (
                  <MenuItem value={i.category_nm} key={i.category_id}>
                    {i.category_nm}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10,
        }}
      >
        <h4 style={{ width: 100 }}>카테고리명</h4>
        <div>
          <TextField
            id="outlined-basic"
            label="카테고리명"
            variant="outlined"
            size="small"
            value={editData.category_nm}
            onChange={handleCategoryChange}
            sx={{ my: 2, ml: 5, minWidth: 150 }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10,
        }}
      >
        <h4 style={{ width: 100 }}>설명</h4>
        <div>
          <TextField
            id="ou"
            label="설명"
            variant="outlined"
            size="small"
            value={editData.category_desc}
            onChange={handleCategoryDesc}
            sx={{ ml: 5, minWidth: 150 }}
          />
        </div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30 }}
      >
        <Button variant="contained" onClick={handleUpdateCategory}>
          등록
        </Button>
      </div>
    </Fragment>
  );
};

export default EditCategoryModal;

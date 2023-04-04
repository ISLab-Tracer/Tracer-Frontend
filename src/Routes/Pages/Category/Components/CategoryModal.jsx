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

const CategoryModal = ({
  handleRegister,
  categoryList,
  parentCategory,
  categoryState,
  setCategoryState,
}) => {
  /* Router */
  /* State */
  /* Hooks */
  /* Functions */
  const handleCategoryChange = (e) => {
    setCategoryState({ ...categoryState, category_nm: e.target.value });
  };

  const handleCategoryDesc = (e) => {
    setCategoryState({ ...categoryState, category_desc: e.target.value });
  };
  const handleParentChange = (e) => {
    setCategoryState({ ...categoryState, parent: e.target.value });
  };
  const handleCategoryRegister = (e) => {
    e.preventDefault();
    const parentId = categoryList.filter(
      (i) => i.category_nm === categoryState.parent
    );
    const data = {
      category_nm: categoryState.category_nm,
      category_desc: categoryState.category_desc,
      parent_id: parentId[0].category_id,
      category_level: parentId[0].category_level + 1,
    };
    handleRegister(data);
  };
  /* Render */
  return (
    <Fragment>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        카테고리 추가
      </Typography>
      <Typography id="transition-modal-description" sx={{ color: '#cecece' }}>
        추가할 제품 카테고리 정보를 입력해주세요.
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
              value={categoryState.parent}
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
            value={categoryState.category_nm}
            onChange={handleCategoryChange}
            sx={{ ml: 5, minWidth: 150 }}
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
            id="outlined-basic"
            label="설명"
            variant="outlined"
            size="small"
            value={categoryState.category_desc}
            onChange={handleCategoryDesc}
            sx={{ ml: 5, minWidth: 150 }}
          />
        </div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30 }}
      >
        <Button variant="contained" onClick={handleCategoryRegister}>
          등록
        </Button>
      </div>
    </Fragment>
  );
};

export default CategoryModal;

import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ModalLayout, PageHeader } from 'Components';
import { useCommonData } from 'Hooks/CommonDataManager';
import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const columns = [
  {
    field: 'parent_category',
    headerName: '상위카테고리',
    width: 200,
    editable: true,
  },
  {
    field: 'category_nm',
    headerName: '카테고리명',
    width: 200,
    editable: true,
  },
  {
    field: 'category_desc',
    headerName: '설명',
    width: 300,
    editable: true,
  },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CategoryPresenter = ({ handleRegister }) => {
  /* Router */
  /* State */

  const [open, setOpen] = useState(false);
  const { categoryList } = useCommonData();
  const parentCategory = categoryList.filter((i) => i.category_level === 0);
  console.log(parentCategory);
  const dataList = categoryList.map((item) => {
    const { category_id, parent_id } = item;
    const parentCategory = categoryList.filter(
      (i) => i.category_id === parent_id
    );
    const parent_nm = parentCategory.map((i) => i.category_nm);
    return {
      ...item,
      id: category_id,
      parent_category: parent_nm[0],
    };
  });
  /* Hooks */
  /* Functions */

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  /* Render */
  const ModalBox = () => {
    const [parent, setParent] = useState('None');
    const [category, setCategory] = useState('');
    const [categoryDesc, setCategoryDesc] = useState('');
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
      console.log(category);
    };

    const handleCategoryDesc = (e) => {
      setCategoryDesc(e.target.value);
    };
    const handleParentChange = (e) => {
      setParent(e.target.value);
    };
    const handleCategoryRegister = (e) => {
      e.preventDefault();
      const parentId = categoryList.filter((i) => i.category_nm === parent);
      const initialState = {
        category_id: uuidv4(),
        category_nm: category,
        category_desc: categoryDesc,
        parent_id: parentId[0].category_id,
      };
      console.log(initialState);
      handleRegister(initialState);
    };
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
                value={parent}
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
              value={category}
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
              value={categoryDesc}
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
  return (
    <div className="main-content-container">
      <PageHeader
        title="카테고리"
        subTitle="데이터 관리"
        right={
          <Button
            variant="outlined"
            size="middium"
            //   onClick={handleAttributeAdd}
            sx={{ marginRight: 1 }}
            onClick={handleOpenModal}
          >
            카테고리 추가
          </Button>
        }
      />
      <Divider sx={{ marginTop: 1, marginBottom: 3 }} />
      <Box sx={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={dataList}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          //   onRowSelectionModelChange={(id) => handleSelect(id)}
        />
      </Box>
      <ModalLayout open={open} close={handleCloseModal} style={style}>
        <ModalBox />
      </ModalLayout>
    </div>
  );
};

export default CategoryPresenter;

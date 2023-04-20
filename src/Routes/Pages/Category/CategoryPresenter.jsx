import { Box, Button, Divider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ModalLayout, PageHeader } from 'Components';
import { useCommonData } from 'Hooks/CommonDataManager';
import React, { useState } from 'react';
import { CategoryModal, EditCategoryModal } from './Components';
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
  height: 340,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialState = {
  category_nm: '',
  category_desc: '',
  parent: 'None',
};

const CategoryPresenter = ({ handleRegister, handleDelete, handleUpdate }) => {
  /* Router */
  /* State */
  const [categoryState, setCategoryState] = useState(initialState);
  const [selectId, setSelectId] = useState();
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState();
  const { categoryList, categoryTree } = useCommonData();
  console.log(categoryTree);
  // 부모 카테고리 항목 추출
  const parentCategory = categoryList.filter((i) => i.category_level === 0);
  // 카테고리 리스트에 DataGrid id, 부모 카테고리명 추가
  const data = categoryList.map((item) => {
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
  const [dataList, setDataList] = useState(data);
  /* Hooks */
  /* Functions */
  /**
   * 카테고리 항목 선택
   * @param {*} id
   */
  const handleSelect = (id) => {
    setSelectId(id);
    console.log(selectId);
  };
  /**
   * 선택 카테고리 삭제
   */
  const handleDeleteCategory = () => {
    const result = dataList.filter((i) => !selectId.includes(i.id));
    setDataList(result);
    // selectId.map((i) => handleDelete(i));
    // handleDelete(selectId[0]);
  };
  /**
   * 모달창 오픈
   */
  const handleOpenModal = () => {
    setOpen(true);
  };
  /**
   * 모달창 닫기
   */
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenEditModal = (e) => {
    setEditOpen(true);
    setEditData(e.row);
  };
  const handleCloseEditModal = () => {
    setEditOpen(false);
  };
  console.log(editOpen);
  /* Render */
  return (
    <div className="main-content-container">
      <PageHeader
        title="카테고리"
        subTitle="데이터 관리"
        right={
          <>
            <Button
              variant="outlined"
              size="middium"
              sx={{ marginRight: 1 }}
              onClick={handleOpenModal}
            >
              카테고리 추가
            </Button>
            <Button
              variant="outlined"
              size="middium"
              onClick={handleDeleteCategory}
            >
              선택항목 삭제
            </Button>
          </>
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
          isCellEditable={() => false}
          onRowDoubleClick={(e) => handleOpenEditModal(e)}
          onRowSelectionModelChange={(id) => handleSelect(id)}
        />
      </Box>
      <ModalLayout open={open} close={handleCloseModal} style={style}>
        <CategoryModal
          handleRegister={handleRegister}
          categoryList={categoryList}
          parentCategory={parentCategory}
          categoryState={categoryState}
          setCategoryState={setCategoryState}
          setOpen={setOpen}
          dataList={dataList}
          setDataList={setDataList}
        />
      </ModalLayout>
      <ModalLayout open={editOpen} style={style} close={handleCloseEditModal}>
        <EditCategoryModal
          editData={editData}
          dataList={dataList}
          setEditOpen={setEditOpen}
          setDataList={setDataList}
          setEditData={setEditData}
          parentCategory={parentCategory}
          categoryList={categoryList}
          handleUpdate={handleUpdate}
        />
      </ModalLayout>
    </div>
  );
};

export default CategoryPresenter;

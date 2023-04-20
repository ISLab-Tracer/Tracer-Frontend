import { Box, Button, Divider } from '@mui/material';
import { PageHeader } from 'Components';
import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { BUCKET_URL } from 'Utils';
import moment from 'moment';

const columns = [
  {
    field: 'equipment_nm',
    headerName: '제품명',
    width: 250,
    editable: true,
  },
  {
    field: 'equipment_thumbnail',
    headerName: '제품 사진',
    width: 150,
    editable: true,
    renderCell: (params) => (
      <img src={params.value} style={{ width: 40 }} alt={params.value} />
    ),
  },
  {
    field: 'category_nm',
    headerName: '카테고리명',
    width: 150,
    editable: true,
  },
  {
    field: 'project_title',
    headerName: '과제명',
    width: 150,
    editable: true,
  },
  {
    field: 'user_nm',
    headerName: '사용자',
    width: 100,
    editable: true,
  },
  {
    field: 'team_nm',
    headerName: '팀명',
    width: 100,
    editable: true,
  },
  {
    field: 'equipment_price',
    headerName: '제품 가격',
    width: 150,
    type: 'number',
    editable: true,
  },
  {
    field: 'equipment_qty',
    headerName: '수량',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'created_at',
    headerName: '등록일자',
    type: 'time',
    width: 200,
    renderCell: (val) => {
      return moment(val).format('lll');
    },
  },
];

const EquipmentDataPresenter = ({ equipmentList }) => {
  /* Router */
  /* State */
  const [list, setList] = useState();
  /* Hooks */
  useEffect(() => {
    const data = equipmentList.map((item) => {
      const {
        equipment_id,
        user,
        team,
        category,
        project,
        equipment_thumbnail,
      } = item;
      return {
        ...item,
        id: equipment_id,
        user_nm: user.user_nm,
        team_nm: team.team_nm,
        category_nm: category.category_nm,
        project_title: project.project_title,
        equipment_thumbnail: `${BUCKET_URL}${equipment_thumbnail}`,
      };
    });
    setList(data);
  }, [equipmentList]);

  /* Functions */
  /* Render */
  return (
    <div className="main-content-container">
      <PageHeader
        title="제품"
        subTitle="데이터 관리"
        right={
          <>
            <Button variant="outlined" size="middium" sx={{ marginRight: 1 }}>
              액셀 내보내기
            </Button>
            <Button variant="outlined" size="middium">
              액셀 가져오기
            </Button>
          </>
        }
      />
      <Divider sx={{ marginTop: 1, marginBottom: 3 }} />
      <Box sx={{ height: 800, width: '100%' }}>
        {list && (
          <DataGrid
            rows={list}
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
            slots={{ toolbar: GridToolbar }}
            //   onRowSelectionModelChange={(id) => handleSelect(id)}
          />
        )}
      </Box>
    </div>
  );
};

export default EquipmentDataPresenter;

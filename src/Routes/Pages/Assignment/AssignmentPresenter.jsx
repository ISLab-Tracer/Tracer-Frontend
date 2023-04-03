import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { PageHeader } from 'Components';
import { useCommonData } from 'Hooks/CommonDataManager';
import React from 'react';

const columns = [
  { field: 'project_id', headerName: 'ID', width: 100 },
  {
    field: 'project_title',
    headerName: '과제명',
    width: 200,
    editable: true,
  },
  {
    field: 'project_desc',
    headerName: '설명',
    width: 300,
    editable: true,
  },
];

const AssignmentPresenter = () => {
  /* Router */
  /* State */
  const { projectList } = useCommonData();
  const dataList = projectList.map((item) => {
    const { project_id } = item;
    return { ...item, id: project_id };
  });

  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <div className="main-content-container">
      <PageHeader title="과제" subTitle="데이터 관리" />
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
          // onRowSelectionModelChange={(id) => handleSelect(id)}
        />
      </Box>
    </div>
  );
};

export default AssignmentPresenter;

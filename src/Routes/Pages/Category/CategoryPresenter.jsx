import { PageHeader } from 'Components';
import { useCommonData } from 'Hooks/CommonDataManager';
import React from 'react';

const CategoryPresenter = () => {
  /* Router */
  /* State */
  const { categoryList, projectList, userList } = useCommonData();
  console.log(categoryList);
  console.log(projectList);
  console.log(userList);
  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <div className="main-content-container">
      <PageHeader title="카테고리" subTitle="데이터 관리" />
    </div>
  );
};

export default CategoryPresenter;

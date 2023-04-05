import React from 'react';
import CategoryPresenter from './CategoryPresenter';
import { useLoading } from 'Utils/LoadingManager';
import CategoryAPI from 'API/module/CategoryAPI';

const CategoryContainer = () => {
  /* Router */
  /* State */
  const { handleLoading, handleLoadingTimer } = useLoading();
  /* Hooks */
  /* Functions */
  /**
   * 카테고리 추가
   * @param {*} categoryInfo
   * @returns
   */
  const handleRegister = async (categoryInfo) => {
    handleLoading(true);

    const result = await CategoryAPI.createCategory(categoryInfo);
    console.log(result);
    if (result) {
      handleLoadingTimer(1500);
      return true;
    }
    handleLoadingTimer(1500);
    return false;
  };
  /**
   * 카테고리 삭제
   * @param {*} category_id
   * @returns
   */
  const handleDelete = async (category_id) => {
    console.log(category_id);
    handleLoading(true);

    const result = await CategoryAPI.deleteCategory(category_id);
    console.log(result);
    if (result) {
      handleLoadingTimer(1500);
      return true;
    }
    handleLoadingTimer(1500);
    return false;
  };
  /**
   * 카테고리 수정
   * @param {*} categoryInfo
   * @returns
   */
  const handleUpdate = async (categoryInfo) => {
    handleLoading(true);

    const result = await CategoryAPI.updateCategory(categoryInfo);
    console.log(result);
    if (result) {
      handleLoadingTimer(1500);
      return true;
    }
    handleLoadingTimer(1500);
    return false;
  };
  /* Render */
  return (
    <CategoryPresenter
      handleRegister={handleRegister}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  );
};

export default CategoryContainer;

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
  /* Render */
  return <CategoryPresenter handleRegister={handleRegister} />;
};

export default CategoryContainer;

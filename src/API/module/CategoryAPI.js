import APIConstant from 'API/APIConstant';

const { default: ApiManager } = require('Utils/APIManager');

const $http = new ApiManager();

const CategoryAPI = {
  createCategory: async (categoryInfo) => {
    try {
      const url = APIConstant.CREATE_CATEGORY;
      const result = await $http.post(url, categoryInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  updateCategory: async (categoryInfo) => {
    try {
      const url = APIConstant.UPDATE_CATEGORY;
      const result = await $http.put(url, categoryInfo);
      console.log(result);
      const { status, message } = result;
      if (status === 200) {
        return message;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  deleteCategory: async (category_id) => {
    try {
      const url = APIConstant.DELETE_CATEGORY;
      const result = await $http.delete(url, category_id);
      console.log(result);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
};

export default CategoryAPI;

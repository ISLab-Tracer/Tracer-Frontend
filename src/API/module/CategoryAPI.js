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
};

export default CategoryAPI;

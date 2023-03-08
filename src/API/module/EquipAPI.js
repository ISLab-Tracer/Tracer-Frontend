import APIConstant from 'API/APIConstant';

const { default: ApiManager } = require('Utils/APIManager');

const $http = new ApiManager();

const EquipAPI = {
  /**
   * 장비 등록
   * --
   * @param {*} equipInfo
   * @returns
   */
  createEquip: async (equipInfo) => {
    try {
      const url = APIConstant.CREATE_EQUIPMENT;
      const result = await $http.post(url, equipInfo);
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

export default EquipAPI;

import { APIManager } from 'Utils';
import APIConstant from '../APIConstant';
const $http = new APIManager();

const AuthAPI = {
  /**
   * 회원가입 메일 전송
   * --
   * @param { Object } userInfo
   * @returns
   */
  createSignup: async (userInfo) => {
    try {
      const url = APIConstant.CREATE_SIGNUP;
      const result = await $http.post(url, userInfo);
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
  /**
   * 회원가입 정보 조회
   * --
   * @param {string} signup_id
   * @returns
   */
  getSignup: async (signup_id) => {
    try {
      const url = APIConstant.GET_SIGNUP.replace(':signup_id', signup_id);
      const result = await $http.get(url);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  /**
   * 회원가입 요청
   * --
   * @param {*} userInfo
   * @returns
   */
  requestSignup: async (userInfo) => {
    try {
      const url = APIConstant.REQUEST_SIGNUP;
      const result = await $http.post(url, userInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};

export default AuthAPI;

// commonDataContext.js

import { createContext, useReducer, useEffect, useContext } from 'react';
import { CommonAPI } from 'API';
import { getSession } from 'Utils';
import { useSession } from './SessionManager';

const CommonDataContext = createContext();

const initialState = {
  categoryList: null,
  projectList: null,
  userList: null,
  categoryTree: null,
  categoryOptions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return { ...state, ...action.payload };
    case 'GENERATE_CATEGORY_OPTIONS':
      const _options = [];
      action.payload.map((item) => {
        const { child, ...cate } = item;
        _options.push(cate);
        child.map((item) => {
          _options.push(item);
          return item;
        });
        return item;
      });
      return { ...state, categoryOptions: _options };
    case 'FETCH_DATA_FAILURE':
      return { ...state };
    default:
      return state;
  }
};

export const useCommonData = () => {
  const context = useContext(CommonDataContext);
  if (!context) {
    throw new Error('Cannot find SessionContext');
  }
  return context;
};

const CommonDataManager = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { session } = useSession();

  useEffect(() => {
    const s = getSession();
    if (!s) {
      return;
    }
    const fetchData = async () => {
      try {
        const result = await CommonAPI.getCommonData();

        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: result });
        dispatch({
          type: 'GENERATE_CATEGORY_OPTIONS',
          payload: result.categoryTree,
        });
      } catch (error) {
        console.log(error);
        // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      }
    };
    fetchData();
  }, [session]);

  return (
    <CommonDataContext.Provider value={state}>
      {children}
    </CommonDataContext.Provider>
  );
};

export default CommonDataManager;

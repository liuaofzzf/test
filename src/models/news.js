import * as Api from "@/services/news";
import { getPageQuery } from '@/utils/utils';
import { routerRedux } from 'dva/router';
export default {
  namespace: "news",

  state: {
      list:[],
      slide:[]
  },

  effects: {
    *fetch({ payload,callback }, { call, put }) {
      const response = yield call(Api.getNews, payload);
      if(response){
        yield put({
        type: "save",
        payload: response
         });
      }
    },
  },

  reducers: {
    save(state, action) {
      console.log(action)
      return {
        ...state,
        list: action.payload.data.list,
        slide:action.payload.data.slide
      };
    },
  }
};

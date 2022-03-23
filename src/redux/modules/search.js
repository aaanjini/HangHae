import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { searchApis } from "../../shared/apis";

const GET_SEARCH = "GET_SEARCH";
const GET_RECOMMEND = "GET_RECOMMEND";

const getSearch = createAction(GET_SEARCH, (search_list, page) => ({
  search_list,
  page,
}));
const getRecommend = createAction(GET_RECOMMEND, (recommend_list) => ({
  recommend_list,
}));

const initialState = {
  list: [],
  recommend: [],
  page: 0,
  has_next: false,
  is_loading: false,
  totalCnt: 0,
};

const getSearchDB = (word, page, size) => {
  return function (dispatch, getState, { history }) {
    console.log("검색어", word);
    searchApis
      .getSearch(word, page, size)
      .then((res) => {
        //console.log("검색어 불러오기",res);
        dispatch(getSearch(res.data, page + 1));
      })
      .catch((err) => {
        console.log("검색어 에러", err);
      });
  };
};

const getRecommendDB = () => {
  return function (dispatch, getState, { history }) {
    searchApis
      .recommend()
      .then((res) => {
        //console.log("추천 검색어 불러오기",res);
        dispatch(getRecommend(res.data));
      })
      .catch((err) => {
        console.log("추천 검색어 에러", err);
      });
  };
};

export default handleActions(
  {
    [GET_SEARCH]: (state, action) =>
      produce(state, (draft) => {
        if (action.payload.page > 1) {
          draft.list.push(...action.payload.search_list);
        } else {
          draft.list = action.payload.search_list;
        }

        draft.page = action.payload.page;
        draft.has_next = action.payload.search_list.next;
        draft.totalCnt = action.payload.search_list.totalCnt;
        draft.is_loading = false;
      }),
    [GET_RECOMMEND]: (state, action) =>
      produce(state, (draft) => {
        draft.recommend = action.payload.recommend_list;
      }),
  },
  initialState
);

const actionCreators = {
  //액션 생성자 내보내기
  getRecommendDB,
  getSearchDB,
};

export { actionCreators };

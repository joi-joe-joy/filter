import {lectures} from "../mocks/lectures";

const initialState = {
  lectures,
  languages: [],
  levels: [],
  searchText: ``
};

export const ActionType = {
  CHANGE_LANGUAGE: `CHANGE_LANGUAGE`,
  CHANGE_LEVEL: `CHANGE_LEVEL`,
  GET_SEARCH_TEXT: `GET_SEARCH_TEXT`,
  RESET: `RESET`,
};

export const ActionCreator = {
  changeLanguage: (payload) => ({
    type: ActionType.CHANGE_LANGUAGE,
    payload
  }),

  changeLevel: (payload) => ({
    type: ActionType.CHANGE_LEVEL,
    payload
  }),

  getSearchText: (payload) => ({
    type: ActionType.GET_SEARCH_TEXT,
    payload
  }),

  reset: () => ({
    type: ActionType.RESET,
    payload: null
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        languages: action.payload
      });
    case ActionType.CHANGE_LEVEL:
      return Object.assign({}, state, {
        levels: action.payload
      });
    case ActionType.GET_SEARCH_TEXT:
      return Object.assign({}, state, {
        searchText: action.payload
      });
    case ActionType.RESET:
      return initialState;
    default:
      return state;
  }
};

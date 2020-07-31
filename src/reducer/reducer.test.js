import {reducer, ActionType, ActionCreator} from "./reducer";
import {lectures} from "../mocks/lectures";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      lectures,
      languages: [],
      levels: [],
      searchText: ``
    });
  });

  it(`Reducer should change languages`, () => {
    expect(reducer({
      lectures,
      languages: [],
      levels: [],
      searchText: ``
    }, {
      type: ActionType.CHANGE_LANGUAGE,
      payload: [`RU`, `EN`]
    })).toEqual({
      lectures,
      languages: [`RU`, `EN`],
      levels: [],
      searchText: ``
    });
  });

  it(`Reducer should change levels`, () => {
    expect(reducer({
      lectures,
      languages: [],
      levels: [],
      searchText: ``
    }, {
      type: ActionType.CHANGE_LEVEL,
      payload: [`HOT`, `ADVANCED`]
    })).toEqual({
      lectures,
      languages: [],
      levels: [`HOT`, `ADVANCED`],
      searchText: ``
    });
  });

  it(`Reducer should change search text`, () => {
    expect(reducer({
      lectures,
      languages: [],
      levels: [],
      searchText: ``
    }, {
      type: ActionType.GET_SEARCH_TEXT,
      payload: `text`
    })).toEqual({
      lectures,
      languages: [],
      levels: [],
      searchText: `text`
    });
  });

  it(`Reducer should return to initial state after reset`, () => {
    expect(reducer({
      lectures,
      languages: [`RU`, `EN`],
      levels: [`HOT`, `ADVANCED`],
      searchText: ``
    }, {
      type: ActionType.RESET,
      payload: null
    })).toEqual({
      lectures,
      languages: [],
      levels: [],
      searchText: ``
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change language correct action`, () => {
    expect(ActionCreator.changeLanguage([`RU`, `EN`])).toEqual({
      type: ActionType.CHANGE_LANGUAGE,
      payload: [`RU`, `EN`],
    });
  });

  it(`Action creator for change level correct action`, () => {
    expect(ActionCreator.changeLevel([`HOT`, `ADVANCED`])).toEqual({
      type: ActionType.CHANGE_LEVEL,
      payload: [`HOT`, `ADVANCED`],
    });
  });

  it(`Action creator for change search text correct action`, () => {
    expect(ActionCreator.getSearchText(`text`)).toEqual({
      type: ActionType.GET_SEARCH_TEXT,
      payload: `text`,
    });
  });

  it(`Action creator for reset correct action`, () => {
    expect(ActionCreator.reset()).toEqual({
      type: ActionType.RESET,
      payload: null,
    });
  });
});

import {createSelector} from "reselect";

const getLectures = (state) => {
  return state.lectures;
};

const getLanguages = (state) => {
  return state.languages;
};

const getLevels = (state) => {
  return state.levels;
};

const getSearchText = (state) => {
  return state.searchText;
};

const filterByLanguage = (arr, languages) => {
  if (languages.length) {
    return arr.filter((item) => {
      return languages.indexOf(item.language) !== -1;
    });
  }
  return arr;
};

const filterByLevel = (arr, levels) => {
  if (levels.length) {
    return arr.filter((item) => {
      return levels.indexOf(item.level) !== -1;
    });
  }
  return arr;
};

const filterByText = (arr, text) => {
  let regexp = new RegExp(text, `i`);
  if (text.length) {
    return arr.filter((item) => {
      return regexp.test(item.title) || regexp.test(item.author);
    });
  }
  return arr;
};

export const getFilteredLectures = createSelector(
    getLectures,
    getLanguages,
    getLevels,
    getSearchText,
    (lectures, languages, levels, searchText) => {
      let filteredLectures = lectures.slice(0);
      filteredLectures = filterByLanguage(filteredLectures, languages);
      filteredLectures = filterByLevel(filteredLectures, levels);
      filteredLectures = filterByText(filteredLectures, searchText);
      return filteredLectures;
    }
);

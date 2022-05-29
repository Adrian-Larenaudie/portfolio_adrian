/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-nested-ternary */
import { CHANGE_IS_LOADING_GITHUB_DATA, CHANGE_THEME, SET_GITHUB_REPOS_IN_THE_STATE } from '../actions';

// This is a reducer, its purpose is to set a initial application state
// and change its state when actions are played

export const initialState = {
// get local storage give string, manage this by using a nested ternary to change it in bool value
  isDarkTheme: localStorage.getItem('isThemeDark') != null ? (localStorage.getItem('isThemeDark') === 'false' ? false : true) : true,
  githubRepos: {},
  isLoadingGithubRepos: false,
};

// A switch to know wich action is played and what to do in this action case.
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        isDarkTheme: action.isDarkTheme,
      };
    case SET_GITHUB_REPOS_IN_THE_STATE:
      return {
        ...state,
        githubRepos: action.reposData,
      };
    case CHANGE_IS_LOADING_GITHUB_DATA:
      return {
        ...state,
        isLoadingGithubRepos: action.isLoadingGithubRepos,
      };
    default:
      return state;
  }
};

export default reducer;

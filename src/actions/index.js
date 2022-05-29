// This file defines all the actions that there are in this application
// The names assigned to these actions make it possible to strongly identify their purpose

export const CHANGE_THEME = 'CHANGE_THEME';
export const FETCH_GITHUB_REPOS = 'FETCH_GITHUB_REPOS';
export const SET_GITHUB_REPOS_IN_THE_STATE = 'SET_GITHUB_REPOS_IN_THE_STATE';
export const CHANGE_IS_LOADING_GITHUB_DATA = 'CHANGE_IS_LOADING_GITHUB_DATA';

export const changeIsLoadingStatus = (bool) => ({
  type: CHANGE_THEME,
  isDarkTheme: bool,
});

export const fetchGithubRepos = () => ({
  type: FETCH_GITHUB_REPOS,
});

export const setGithubReposInTheState = (reposData) => ({
  type: SET_GITHUB_REPOS_IN_THE_STATE,
  reposData: reposData,
});

export const changeIsLoadingGithubData = (bool) => ({
  type: CHANGE_IS_LOADING_GITHUB_DATA,
  isLoadingGithubRepos: bool,
});

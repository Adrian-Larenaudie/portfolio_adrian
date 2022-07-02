import axios from 'axios';
import { changeIsLoadingGithubData, FETCH_GITHUB_REPOS, setGithubReposInTheState } from '../actions/index';

const githubRepos = (store) => (next) => (action) => {
  // When the action go throught this middleware, we fetch data from github
  switch (action.type) {
    case FETCH_GITHUB_REPOS:
      // Active loading when starting to fetch data
      store.dispatch(changeIsLoadingGithubData(true));
      // a setTimout to prevent the user from experiencing a flash,
      // when displaying the loader element
      setTimeout(() => {
        axios
          .get('https://api.github.com/users/adrian-larenaudie/repos?')
          .then((response) => {
            // fetch, filter, store data in the state
            console.log(response);
            const filteredData = response.data.filter((repo) => repo.description !== null && repo.description.includes('PortfolioPresence.'));
            store.dispatch(setGithubReposInTheState(filteredData));
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            // When data are fetch and store n the state, loading is over
            store.dispatch(changeIsLoadingGithubData(false));
          });
      }, 1200);
      break;
    default:
  }
  next(action);
};

export default githubRepos;

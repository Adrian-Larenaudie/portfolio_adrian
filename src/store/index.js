import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import githubRepos from '../middleware/githubReposMiddleware';

// The store holds the whole state tree of the application.
// The only way to change the state inside it is to dispatch an action on it.
const middlewares = applyMiddleware(githubRepos);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(reducer, enhancer);

export default store;

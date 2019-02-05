Reference :- 

https://github.com/supasate/connected-react-router

Step 1 :-
reducers/index.js

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
});


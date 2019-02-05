Reference :- 

https://github.com/supasate/connected-react-router

Usage : - 
npm install 

Change path in the browser address bar /second or /third

Step 1 :-
reducers/index.js
- Create router from history objects

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
});



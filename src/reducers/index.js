import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

/* Creating Router using history objects */

export default (history) => combineReducers({
  router: connectRouter(history),
});

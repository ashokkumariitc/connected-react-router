import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

 /*
    Create a history object.
    Provide the created history to the root reducer creator.
    Use routerMiddleware(history) if you want to dispatch history actions
         (e.g. to change URL with push('/path/to/somewhere')).
 */
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  );

  return store;
};
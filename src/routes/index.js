import React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Home from '../components/Home';
import Second from '../components/Second';
import Third from '../components/Third';
import configureStore, { history } from '../configureStore';

const store = configureStore();

const routes = (
  <div>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Second" component={Second} />
                <Route path="/Third" component={Third} />
            </Switch>
        </ConnectedRouter>
    </Provider>
  </div>
);

export default routes;
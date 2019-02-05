import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import routes from './routes';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
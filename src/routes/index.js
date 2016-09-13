import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import Auth from '../components/Auth/Auth.jsx';
import Charts from '../components/Charts/Charts';
import NotFound from '../components/NotFound';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/home" component={App} />
    <Route path="/dashboard" component={App} />
    <Route path="/login" component={Auth} />
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;

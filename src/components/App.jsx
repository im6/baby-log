import React, { Component, PropTypes } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Layout from './Layout/Layout';
import Home from './Home/Home.jsx'

const App = ({ location }) => {
    let currentElem = null;
    switch (location.pathname) {
        case '/home':
            currentElem = <Home/>;
            break;
        case '/dashboard':
            currentElem = <Dashboard />;
            break;
        default :
            currentElem = <Home/>;
            break;
    }
  return (
    <Layout>
        {currentElem}
    </Layout>
  );
};

App.propTypes = {
};

export default App;

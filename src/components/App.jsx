import React, { Component, PropTypes } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Layout from './Layout/Layout';
import Sidebar from './Sidebar/Sidebar.jsx';

const App = ({ location }) => {
  return (
    <Layout>
        <Sidebar location={location} />
        <Dashboard location={location} />
    </Layout>
  );
};

App.propTypes = {
};

export default App;

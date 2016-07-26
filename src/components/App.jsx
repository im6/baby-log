import React, { Component, PropTypes } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Layout from './Layout/Layout';
import Sidebar from './Sidebar/Sidebar.jsx';

const App = ({ location }) => {
  return (
    <div>
        <Sidebar location={location} />
        <Dashboard location={location} />
    </div>
  );
};

App.propTypes = {
};

export default App;

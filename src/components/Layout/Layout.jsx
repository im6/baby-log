import React, { Component, PropTypes } from 'react';
import styles from './Layout.less';
import Header from './Header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Layout;

import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './Layout.less';

const Layout = ({ children }) => {
    return (
        <div className={styles.normal}>
            <div className={styles.head}>
                <h1>Weasel</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.side}>
                    <h2>Menu:</h2>
                    <Link to="/new">Create New</Link><br />
                    <Link to="/dashboard">Dashboard</Link><br />
                </div>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
            <div className={styles.foot}>
                You personal data visualization in your pocket
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Layout;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './Dashboard.less';

const Dashboard = ({ list, p2 }) => {
    debugger;
    return (
        <div>
            This is dashbaord
        </div>
    );
};

Dashboard.propTypes = {

};

function mapStateToProps({ list1 }, { location }) {
    return {
        list2: [1,2],
        p2: 'test'
    };
}

export default connect(mapStateToProps)(Dashboard);


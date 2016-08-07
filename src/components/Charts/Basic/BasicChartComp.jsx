import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './BasicChart.less';
import BasicChart from './BasicChart.jsx';

class BasicChartComp extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render(){
        return (
            <div></div>
        );
    }

}

BasicChartComp.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.arrayOf(PropTypes.shape({
        appName: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired).isRequired
};

function createHcJson(raw, pathname) {
    return { ...todos, list: [] };
}

function mapStateToProps({ todos }, { location }) {
    return {
        data: createHcJson(todos, location.pathname),
    };
}

export default connect(mapStateToProps)(BasicChartComp);


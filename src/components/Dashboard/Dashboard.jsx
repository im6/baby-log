import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './Dashboard.less';
import BasicChart from '../Charts/Basic/BasicChart.jsx';
import ChartTable from '../Charts/Table/ChartTable.jsx';

const Dashboard = ({chartData}) => {

    debugger;
    let localData = { series: [{
        data: [1, 3, 2, 4]
    }] };
    return (
        <div>
            This is dashbaord
            <BasicChart data={localData}/>
            <ChartTable/>
        </div>
    );
};

Dashboard.propTypes = {

};

function mapStateToProps({charts}, { location }) {
    return {
        chartData: charts
    };
}

export default connect(mapStateToProps)(Dashboard);


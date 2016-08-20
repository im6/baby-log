import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './ReportUnit.less';
import BasicChart from '../../Charts/Basic/BasicChart.jsx';
import ChartTable from '../../Charts/Table/ChartTable.jsx';
import {Row, Col, Card } from 'antd';
const ReportUnit = ({data, info}) => {

    return (
        <div>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <BasicChart className={styles.chart} data={data}/>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <Card title="Card title">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>

            <ChartTable/>
        </div>
    );
};

ReportUnit.propTypes = {
    data: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired
};

export default ReportUnit;


import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './ReportUnit.less';
import BasicChart from '../../Charts/Basic/BasicChart.jsx';
import ChartTable from '../../Charts/Table/ChartTable.jsx';
import {Row, Col, Card, Button, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

const ReportUnit = ({data, info}) => {
    return (
        <div>
            <Row>
                <Card title="Chart Info">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Chart" key="1">
                            <BasicChart data={data}/>
                        </TabPane>
                        <TabPane tab="Info" key="2">
                            <Card title="Chart Info">
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                                <Button type="primary">Toggle</Button>
                            </Card>
                        </TabPane>
                        <TabPane tab="Data" key="3">
                            This is the table
                        </TabPane>
                    </Tabs>
                </Card>

                <Col xs={24} sm={24} md={12} lg={12}>
                    <div className={styles.chart}>

                    </div>
                </Col>
            </Row>

            <ChartTable/>
        </div>
    );
};

ReportUnit.propTypes = {
    data: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired,
};

export default ReportUnit;


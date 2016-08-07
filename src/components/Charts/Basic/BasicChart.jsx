import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './BasicChart.less';
import Highcharts from "highcharts";
import {Row, Col} from 'antd';
import chartExport from 'highcharts/modules/exporting';
chartExport(Highcharts);


class BasicChart extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
        let me = this;
        let {c} = this.refs;
        Highcharts.chart(c,  me.props.data);
    }

    render(){
        return (
            <div className = {styles.border}>
                <Row>
                    <Col span={24}>
                        <div ref="c"></div>
                    </Col>
                </Row>
            </div>
        );
    }

}

BasicChart.propTypes = {
    data: PropTypes.object.isRequired
};


export default BasicChart;


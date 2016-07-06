import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Charts.less';
import Highcharts from "highcharts";
require('highcharts/modules/exporting')(Highcharts);

class Charts extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
        let {c} = this.refs;
        Highcharts.chart(c, { series: [{
            data: [1, 3, 2, 4]
        }] });
    }

    render(){
        return (
            <div>
                <h1>this is chart 1 </h1>
                <div ref="c"></div>
            </div>
        );
    }

}

export default Charts;


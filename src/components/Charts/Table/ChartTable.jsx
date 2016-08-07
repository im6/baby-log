import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './ChartTable.less';
import {Row, Col, Table} from 'antd';


class ChartTable extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
        let me = this;
        let {c} = this.refs;
    }

    render(){
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address'
        }];
        return (
            <div className = {styles.border}>
                <Row>
                    <Col span={24}>
                        <Table dataSource={dataSource} columns={columns} />
                    </Col>
                </Row>
            </div>
        );
    }

}

ChartTable.propTypes = {
};


export default ChartTable;


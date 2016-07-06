import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './ChartSelection.less';
import { Select, Button } from 'antd';
const Option = Select.Option;




class ChartSelection extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
    }


    _handleChange(value) {
        console.log(`selected ${value}`);
    }

    _buttonClick(){
        console.log('click the button');
    }

    render(){
        let me = this;
        return (
            <div>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={me._handleChange.bind(me)}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="yiminghe">yiminghe</Option>
                </Select>
                <Button type="primary" onClick={me._buttonClick.bind(me)}>Default</Button>
            </div>
        );
    }

}

export default ChartSelection;


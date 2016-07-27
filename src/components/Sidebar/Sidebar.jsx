import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {Icon, Button, Radio, Row, Col } from 'antd';
import styles from './Sidebar.jsx';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Sidebar = ({ children }) => {
    var me = this;
    debugger;
    return (
        <div>
            <Button type="primary" icon="home">Home</Button><br/>
            <Button icon="plus">Add New</Button><br/>
            <Button icon="folder">Dashboard</Button><br/>

            <br/>

            <RadioGroup defaultValue="a" size="large">
                <RadioButton value="bar">
                    <Icon type="bar-chart" />
                    Bar
                </RadioButton>
                <RadioButton value="line">
                    <Icon type="line-chart" />
                    Line
                </RadioButton>
                <RadioButton value="area">
                    <Icon type="area-chart" />
                    Area
                </RadioButton>
                <RadioButton value="pie">
                    <Icon type="pie-chart" />
                    Pie
                </RadioButton>
            </RadioGroup>

        </div>
    );
};

Sidebar.propTypes = {

};

export default Sidebar;

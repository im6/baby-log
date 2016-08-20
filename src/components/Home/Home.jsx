import { Router, Route, IndexRoute, Link } from 'react-router';
import React, { Component, PropTypes } from 'react';
import { Row, Col, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './Home.less';
import Banner1 from './assets/banner3.png';

const Home = () => {
    return (
    <Row type="flex" justify="start">
        <Col span={4}></Col>
        <Col span={8}>
            <img src={Banner1} className={styles.banner}/></Col>
        <Col span={8}>
            <div className={styles.textContainer}>
                <QueueAnim delay={500} style={{ height: 150 }}>
                    <div key="a">
                        <h1 className={styles.bigTitle}>
                            <Icon type="bar-chart" />&nbsp;&nbsp;
                            Data by your side
                        </h1>
                        <br/>
                    </div>
                    <div key="b">
                        <h1 className={styles.bigTitle}>
                            <Icon type="appstore-o" />&nbsp;&nbsp;
                            Model in your mind
                        </h1>
                        <br/>

                    </div>
                    <div key="c">
                        <h1 className={styles.bigTitle}>
                            <Icon type="picture" />&nbsp;&nbsp;
                            Visualization in your pocket
                        </h1>
                        <br/>
                    </div>
                    <div key="d">
                        <h3>

                            <Link to="/dashboard">
                                <Icon type="caret-right" />&nbsp;&nbsp;
                                Go to dashbaord
                            </Link>
                        </h3>
                        <br/>
                    </div>
                </QueueAnim>
            </div>

        </Col>
        <Col span={4}></Col>
    </Row>
    );
};
Home.propTypes = {

};

export default Home;
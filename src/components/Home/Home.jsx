import { Router, Route, IndexRoute, Link } from 'react-router';
import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './Home.less';
import Banner1 from './assets/banner1.png';

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
                        <h1>Next generation zhuangbi liqi</h1>
                        <br/>

                    </div>
                    <div key="b">
                        <h1>Your own visualization notebook in your pocket</h1>
                        <br/>

                    </div>
                    <div key="c">
                        <h1>Based by most zhuangbi tech</h1>
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
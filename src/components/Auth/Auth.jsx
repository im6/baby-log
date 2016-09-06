import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './Auth.less';

import {Row,Col, Input, Form, Button, Checkbox, Card} from 'antd';
const FormItem = Form.Item;


const Auth = ({auth, onSubmit}) => {
    return (
        <Row>
            <Col span={8}>
            </Col>
            <Col span={8}>
                <Card title="User Login" extra={<a href="#">Register</a>} style={{ width: 400 }}>
                    <Form horizontal onSubmit={onLogin}>
                        <FormItem label="Username">
                            <Input placeholder="username/Email" />
                        </FormItem>
                        <FormItem label="Password">
                            <Input type="password" placeholder="please password"/>
                        </FormItem>
                        <FormItem>
                            <Checkbox>Remember me</Checkbox>
                        </FormItem>
                        <Button type="primary" htmlType="submit">Login</Button>

                        <Button type="default" htmlType="submit">weibo Login</Button>
                    </Form>
                </Card>

            </Col>
            <Col span={8}>
            </Col>
        </Row>

    );
};

Auth.propTypes = {

};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (username, password) => {

            dispatch(id)
        }
    }
};

function mapStateToProps({auth}, { location }) {
    return {
        auth: auth
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);


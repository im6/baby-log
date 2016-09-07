import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {createAction} from '../../actions/actionCreator.jsx';
import styles from './Auth.less';
import {Row,Col, Input, Form, Button, Checkbox, Card} from 'antd';
const FormItem = Form.Item;



let Auth = ({auth, onSubmit, form}) => {
    const {getFieldProps, getFieldsValue} = form;

    return (
        <Row>
            <Col span={8}>
            </Col>
            <Col span={8}>
                <Card title="User Login" extra={<a href="#">Register</a>} style={{ width: 400 }}>
                    <Form horizontal onSubmit={onSubmit.bind(null, getFieldsValue())}>
                        <FormItem label="Username">
                            <Input placeholder="username/Email" {...getFieldProps('username')}/>
                        </FormItem>
                        <FormItem label="Password">
                            <Input type="password" placeholder="please password" {...getFieldProps('password')}/>
                        </FormItem>
                        <FormItem>
                            <Checkbox {...getFieldProps('remember')}>Remember me</Checkbox>
                        </FormItem>
                        <Button type="primary" htmlType="submit">Login</Button>

                        <Button type="default">weibo Login</Button>
                    </Form>
                </Card>

            </Col>
            <Col span={8}>
            </Col>
        </Row>

    );
};

Auth = Form.create()(Auth);

Auth.propTypes = {

};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (payload) => {
            var action = createAction('auth/login', {
                ...payload
            });
            dispatch(action);
        }
    }
};

function mapStateToProps({auth}, { location }) {
    return {
        auth: auth
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);


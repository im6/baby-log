import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {createAction} from '../../actions/actionCreator.jsx';
import styles from './Auth.less';
import {Row,Col, Input, Form, Button, Checkbox, Card} from 'antd';

import img from './assets/user1.png';

const FormItem = Form.Item;



let Auth = ({auth, form, dispatch}) => {
    const {getFieldProps, getFieldsValue} = form;

    const onSubmit = (e) =>{
        let payload = getFieldsValue();
        e.preventDefault();
        var action = createAction('auth/login', {
            ...payload
        });
        dispatch(action);
    };

    const weiboLogin = ()=>{
        const client_id = "806813820",
            redirect_uri = "http://127.0.0.1:8989/login",
            state = "9cea2e9021e86796b74cc",
            scope = "email";

        let url = "https://api.weibo.com/oauth2/authorize?" +
                "client_id=" + client_id +
                "&scope=" + scope +
                "&state=" + state +
                "&redirect_uri=" + redirect_uri;

        window.location = url;
    };

    return (
        <div className={styles.background}>


            <Card title="Welcome to Weasel" extra={<a href="#">Register</a>} style={{ width: 400 }} className={styles.loginCard}>
                <img src={img} className={styles.iconStyle}/>
                <Form horizontal onSubmit={onSubmit}>
                    <FormItem label="Username">
                        <Input placeholder="username/Email" {...getFieldProps('username')}/>
                    </FormItem>
                    <FormItem label="Password">
                        <Input type="password" placeholder="please password" {...getFieldProps('password')}/>
                    </FormItem>
                    <FormItem>
                        <Checkbox {...getFieldProps('remember')}>Remember me</Checkbox>
                    </FormItem>

                    <Button type="default" htmlType="submit">
                        Login
                    </Button>

                    <Button type="primary" onClick={weiboLogin} style={{'float':'right'}}>
                        weibo Login
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

Auth = Form.create()(Auth);

Auth.propTypes = {

};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (e) => {

        }
    }
};

function mapStateToProps({auth}, { location }) {
    return {
        auth: auth
    };
}

export default connect(mapStateToProps)(Auth);


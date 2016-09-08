import { Router, Route, IndexRoute, Link } from 'react-router';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import styles from './Header.less';
import Logo from './assets/logo2.png';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Header = ({auth}) => {
    return (
    <div className={styles.headers}>
        <Row type="flex" align="bottom">
            <Col span={1}></Col>
            <Col span={3}>
                <img className={styles.logo} src={Logo} />
            </Col>
            <Col span={20}>
                <Menu mode="horizontal" className={styles.menu}>
                    <Menu.Item key="home">
                        <Link to="/home">
                            <h3>
                                <Icon type="home" />Home
                            </h3>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="dashboard">
                        <Link to="/dashboard">
                            <h3>
                                <Icon type="appstore" />
                                Dashboard
                            </h3>
                        </Link>
                    </Menu.Item>
                    <SubMenu title={<h3><Icon type="setting" />Report Types</h3>}>
                        <MenuItemGroup title="分组1">
                            <Menu.Item key="setting:1">选项1</Menu.Item>
                            <Menu.Item key="setting:2">选项2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="分组2">
                            <Menu.Item key="setting:3">选项3</Menu.Item>
                            <Menu.Item key="setting:4">选项4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="javascript:alert('go')" target="_blank">
                            <h3>
                                <Icon type="setting" />
                                Setting
                            </h3>
                        </a>


                    </Menu.Item>
                    <Menu.Item key="contact">
                        <h3>
                        <Icon type="heart-o" />Contact
                        </h3>
                    </Menu.Item>
                    <Menu.Item key="login">

                                {(function(){
                                    if(auth.isAuthenticated){
                                        return (<h3><Icon type="logout" /> LogOff</h3>)
                                    }else{
                                        return (<h3><Icon type="user" />Login</h3>)
                                    }
                                })()}

                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>



    );
};
Header.propTypes = {

};

function mapStateToProps({auth}, { location }) {
    return {
        auth: auth
    };
}
export default connect(mapStateToProps)(Header);




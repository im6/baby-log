import { Router, Route, IndexRoute, Link } from 'react-router';
import React, { Component, PropTypes } from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import styles from './Header.less';
import Logo from './assets/logo.png';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Header = () => {
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
                        <Link to="/home"><Icon type="home" />Home</Link>
                    </Menu.Item>
                    <Menu.Item key="dashboard">
                        <Link to="/dashboard"><Icon type="appstore" />Dashboard</Link>
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="setting" />Report Types</span>}>
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
                            <Icon type="setting" />
                            Setting</a>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Icon type="heart-o" />Contact
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>



    );
};
Header.propTypes = {

};

export default Header;
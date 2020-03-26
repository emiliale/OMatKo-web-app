import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header style={{backgroundColor: "#ffffff"}}>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px', backgroundColor: "#ffffff"}}
                >

                <Menu.Item key="3">
                    <img
                    width={200}
                    alt="logo"
                    src="https://www.math.uni.lodz.pl/wp-content/uploads/2017/03/logo-1024x250.jpg" />
                </Menu.Item>

                {
                    this.props.isAuthenticated ?


                    <SubMenu
                        key="sub1"
                        title={
                          <span>
                            <UserOutlined />
                            Konto
                          </span>
                        }
                      >
                        <Menu.Item key="4" onClick={this.props.logout}>Wyloguj</Menu.Item>
                        <Menu.Item key="3" ><Link to="/password">Zmień hasło</Link></Menu.Item>
                      </SubMenu>


                    :

                    <Menu.Item key="1">
                        <Link to="/login">Zaloguj</Link>
                    </Menu.Item>
                }

                    <Menu.Item key="2">
                        <Link to="/">Aktualności</Link>
                    </Menu.Item>

                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/">Strona Główna</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/">Aktualności</Link></Breadcrumb.Item>
                </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));

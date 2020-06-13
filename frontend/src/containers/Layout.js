import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

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
                <Link to="/main">
                    <img
                    width={200}
                    alt="logo"
                    src="https://www.math.uni.lodz.pl/wp-content/uploads/2017/03/logo-1024x250.jpg" />
                    </Link>
                </Menu.Item>

                {
                    this.props.isAuthenticated ?


                    <SubMenu style={{float: 'right'}}
                        key="sub1"
                        title={
                          <span>
                            <UserOutlined />
                            Konto
                          </span>
                        }
                      >
                        <Menu.Item key="4" ><Link to="/password">Zmień hasło</Link></Menu.Item>
                        <Menu.Item key="5" ><Link to="/vote">Głosuj</Link></Menu.Item>
                        <Menu.Item key="6" onClick={this.props.logout}>Wyloguj</Menu.Item>
                      </SubMenu>
                    :

                    <Menu.Item style={{float: 'right'}} key="1"  >
                        <Link to="/login">Zaloguj się</Link>
                    </Menu.Item>
                }

                    <Menu.Item key="2">
                        <Link to="/">Aktualności</Link>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <Link to="/schedule">Harmonogram</Link>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <Link to="/organisers">Organizatorzy</Link>
                    </Menu.Item>

                    <Menu.Item key="6">
                        <Link to="/sponsors">Partnerzy</Link>
                    </Menu.Item>

                    <Menu.Item key="7">
                        <Link to="/contact">Kontakt</Link>
                    </Menu.Item>


                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/main">Strona Główna</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Tutaj</Breadcrumb.Item>
                </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
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

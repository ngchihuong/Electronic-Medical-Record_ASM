import  { useContext, useState } from 'react';
import { HomeOutlined, LaptopOutlined, NotificationOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Layout, Menu, notification, theme } from 'antd';
import Home from '../../pages/home';
import "../Users.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';


export default function Header() {
    const { Header, Content, Footer, Sider } = Layout;
    const context = useContext(AuthContext);
    console.log(context);

    const navigate = useNavigate()
    const items1: MenuProps['items'] = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: `Welcome ${context?.auth?.user?.fullName ?? "*Not Log In"}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                ...(context?.auth?.isAuthenticated && context.auth.user?.email ? [
                    {
                        label:
                            <span
                                onClick={() => {
                                    localStorage.removeItem("access_token")
                                    // setCurrent('home')
                                    // navigate('/')
                                    context.setAuth({
                                        isAuthenticated: false,
                                        user: {
                                            email: '',
                                            fullName: ''
                                        }
                                    }),
                                        notification.success({
                                            message: "Invalid",
                                            description: "Log Out!"
                                        })
                                }}
                            >Log Out</span>,
                        key: 'logout',
                    },
                ] : [
                    {
                        label: <Link to="login-register">Sign In</Link>,
                        key: 'login-register'
                    }
                ])
            ],
        },
    ]

    const items2: MenuProps['items'] = [
        {
            label: <Link to={"/"}>Users</Link>,
            key: 'home',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={"/overview"}>Overview</Link>,
            key: 'overview',
            icon: <LaptopOutlined />,
        },
        {
            label: <Link to={"/notification"}>Notification</Link>,
            key: 'notification',
            icon: <NotificationOutlined />,
        },
    ]
    const [current, setCurrent] = useState('mail');
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <div className="container">
            <div className="users">
                <Layout style={{ minHeight: "80vh" }}>
                    <Header style={{ display: 'flex', alignItems: 'center', marginBottom: "1px", backgroundColor: "rgb(255 255 255)", boxShadow: "0px 1px 1px grey" }}>
                        <div className="demo-logo" />
                        <Menu
                            // theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            items={items1}
                            style={{ flex: 1, minWidth: 0 }}
                        />
                    </Header>
                    <Content style={{ padding: '0 48px' }}>

                        <Layout
                            style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
                        >
                            <Sider style={{ background: colorBgContainer }} width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                    items={items2}
                                />
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Home />
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center', height: "100%" }}>
                        Ant Design ©{new Date().getFullYear()} Created by .....
                    </Footer>
                </Layout>
            </div>
        </div>
    );
};
/*
 * @Author: zhou teng
 * @Date: 2021-03-09 18:55:04
 * @LastEditTime: 2021-03-09 19:24:30
 */
import React from 'react'
import './index.less'
import { Menu, PageHeader } from 'antd'
import { MessageOutlined, BookOutlined } from '@ant-design/icons';
import { AppConfig } from './../config/main.config'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './../router'

const { SubMenu } = Menu

const Layout = () => {

  return (
    <Router>
      <div className="layoutContainer">
        <div className="layoutHeader">
          <PageHeader
            className="site-page-header"
            title={AppConfig.name}
            subTitle={AppConfig.describtion}
          ></PageHeader>
        </div>
        <div className="layoutContent">
          <div className="layoutMenu">
            <Menu
              style={{ width: '12vw', minWidth: '200px', height: '100%' }}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<MessageOutlined />} title="Message">
                <Menu.Item key="1">
                  <Link to="/message">message</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<BookOutlined />} title="Documents">
                <Menu.Item key="2">
                  <Link to="/documents">documents</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className="layoutBox">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Layout

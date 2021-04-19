/*
 * @Author: zhou teng
 * @Date: 2021-03-09 18:55:04
 * @LastEditTime: 2021-03-13 11:26:23
 */
import React, { Fragment } from 'react'
import './index.less'
import { Menu, PageHeader, Dropdown } from 'antd'
import { MessageOutlined, BookOutlined, PieChartOutlined, DownOutlined } from '@ant-design/icons';
import { AppConfig } from './../config/main.config'
import { Link, useHistory } from "react-router-dom";
import Routes from './../router'
import { connect } from 'react-redux'
import { setWebTheme } from './../store/action'

import ES6 from './../assets/markdwon/ES6.md'
import Interview from './../assets/markdwon/InterView.md'
import REACT from './../assets/markdwon/REACT.md'
import RESUME from './../assets/markdwon/RESUME.md'

const { SubMenu } = Menu
const Layout = (props: any) => {
  const history = useHistory()

  const renderMenu = () => {
    const themeList = ['#F5222D', '#FA541C', '#FA8C16', '#FAAD14', '#FADB14', '#A0D911', '#52C41A', '#13C2C2']
    return <Menu>
      {!!themeList && themeList.map((item) => {
        return <Menu.Item key={`${item}`}><div style={{
          backgroundColor: item,
          height: '20px'
        }} onClick={() => { props.dispatch(setWebTheme(item)) }}></div></Menu.Item>
      })}
    </Menu>
  }

  const renderDocumentMenu = () =>{
    const documentsMenu = [
      { id: 0, title: 'zes6', name: 'es6', compoonent: ES6 },
      { id: 1, title: 'Interview', name: 'Interview', compoonent: Interview },
      { id: 2, title: 'react', name: 'react', compoonent: REACT },
      { id: 3, title: 'resume', name: 'resume', compoonent: RESUME },
    ]
    return <Fragment>
      {!!documentsMenu && documentsMenu.map((item: any) => {
        return <Menu.Item key={`${item?.id}`}>
           <Link to={{ pathname:'/documents', component: item?.component }} >{item?.name}</Link>
        </Menu.Item>
      })}
    </Fragment>
  }

  return (
    <div className="layoutContainer">
      <div className="layoutHeader" style={{
        backgroundColor: props.mainState.theme
      }}>
        <div className="headerContainer" onClick={() => { history.push('/') }}>
          <PageHeader
            className="site-page-header"
            title={AppConfig.name}
            subTitle={AppConfig.describtion}
          ></PageHeader>
        </div>
        <div className="themeContainer">
          <Dropdown overlay={renderMenu()} trigger={['click']}>
            <span>Theme color <DownOutlined /></span>
          </Dropdown>
        </div>
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
              {renderDocumentMenu()}
            </SubMenu>
          </Menu>
        </div>
        <div className="layoutBox">
          <Routes />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    mainState: state.MainReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch
  }
}

export default connect((state: any) => {
  return {
    mainState: state.MainReducer
  }
}, mapDispatchToProps)(Layout)

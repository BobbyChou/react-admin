import React from 'react'
import styles from './index.less'
import { Menu, PageHeader, Tag, Button, Statistic, Descriptions, Row } from 'antd'
import { AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layoutHeader}>
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
        </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
            <Descriptions.Item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
      <div className={styles.layoutContent}>
        <div className={styles.layoutMenu}>
          <Menu
            onClick={() => { }}
            style={{ width: 256, height: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Navigation One">
              <Menu.Item key="1">Option 1</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="1">Option 1</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className={styles.layoutBox}>
          123
        </div>
      </div>
    </div>
  )
}

export default Layout

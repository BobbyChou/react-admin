import React from 'react'
import { Breadcrumb } from 'antd'
import './index.less'

type Props = {}

const BreadCrumb = (props: Props) => {
  return (
    <Breadcrumb separator="">
      <Breadcrumb.Item>Location</Breadcrumb.Item>
      <Breadcrumb.Separator>:</Breadcrumb.Separator>
      <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadCrumb

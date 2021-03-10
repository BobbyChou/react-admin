import React from 'react'
import './index.less'

type Props = {
  msgList: Array<Object>
}
type RowData = {
  userInfo: {
    avartar?: String,
    userName?: String,
    time: String | Date,
    content: String | undefined
  }
}

const ListRow = (props: RowData) => {

  const { userName, time, content, avartar } = props.userInfo

  return (
    <div className="message-list-row">
      <div className="message-user-avartar">
        <img src={avartar || require("../../assets/img/user_default.png")} alt="" />
      </div>
      <div className="message-info">
        <div className="message-info-top">
          <div className="message-title">{userName || ''}</div>
          <div className="message-time">{time || ''}</div>
        </div>
        <div className="message-info-bottom">
          <div className="message-info-content">{content || ''}</div>
          <div className="message-info-tips"></div>
        </div>
      </div>
    </div>
  )
}

const MessageList = (props: Props) => {

  const { msgList } = props

  return (
    <div className="message-list-container">
      {msgList && msgList.map((item: any) => {
        return <div key={`${item.userName}`}>
          <ListRow userInfo={item} />
        </div>
      })}
    </div>


  )
}

export default MessageList

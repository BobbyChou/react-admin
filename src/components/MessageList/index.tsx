import './index.less'
import { Input, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';


type Props = {
  msgList: Array<Object>,
  onPressItem: (val: any) => void,
  selectedUser: any
}
type RowData = {
  userInfo: {
    avartar?: any,
    userName?: String,
    time: String | Date,
    content: String | undefined
  },
}

const ListRow = (props: RowData) => {

  const { userName, time, content, avartar } = props.userInfo

  return (
    <div className="message-list-row">
      <div className="message-user-avartar">
        {/* <img src={avartar || require("../../assets/img/user_default.png")} alt="" /> */}
        {avartar ? <img src={avartar} alt="" /> : <Avatar size={46} icon={<UserOutlined />} />}
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

  const { msgList, selectedUser } = props

  return (
    <div className="message-list-container">
      <div className="search-container">
        <Input style={{
          borderRadius: '10px'
        }} placeholder="input with clear icon" allowClear />
      </div>
      {msgList && msgList.map((item: any, index: number) => {
        return <div
          key={`${item.userName}`}
          className={selectedUser.userName === item.userName ? "message-list-item active" : "message-list-item"}
          onClick={() => { props.onPressItem(item) }}
        >
          <ListRow userInfo={item} />
        </div>
      })}
    </div>


  )
}

export default MessageList

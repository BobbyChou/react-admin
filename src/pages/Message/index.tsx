import { useState } from 'react'
import './index.less'
import { connect } from 'react-redux'
import MessageList from './../../components/MessageList'
import { Avatar, Empty } from 'antd'
import { UserOutlined } from '@ant-design/icons';

const Message = (props: any) => {

  const msgList = [
    { userName: "周杰伦", avartar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1201763652,2375968906&fm=26&gp=0.jpg", content: "你最有时间吗？能不能帮我写一首歌，曲子我已经写好了", time: "16:16" },
    { userName: "张学友", avartar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F295%2Fw1080h815%2F20180911%2FsPWw-hiycyfx3961688.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617956405&t=c590d0811b8e7d51b2dc4c912176afbf", content: "你上次写给我的歌非常不错，demo我已经录好了，发给你听一下", time: "16:16" },
    { userName: "范冰冰", avartar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.caishimv.com%2Fsop%2Fuploads%2Fallimg%2F180907%2F15363228392222.jpg&refer=http%3A%2F%2Fwww.caishimv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617956425&t=22ac5dc784842de4e6b2c5349f2c8db9", content: "最近在忙吗？有时间一起约饭", time: "16:16" },
  ]
  const [selectedUser, setSelectedUser]: any = useState({})

  const onPressItem = (info: any) => {
    setSelectedUser(info)
  }

  return (
    <div className="message-content">
      <div className="message-list">
        <MessageList
          msgList={msgList}
          onPressItem={(value: any) => { onPressItem(value) }}
          selectedUser={selectedUser}
        />
      </div>
      {
        selectedUser && JSON.stringify(selectedUser) !== '{}' ? <div className="message-info">
          <div className="message-to-user">
            {selectedUser.avartar ? <img src={selectedUser.avartar} alt="" /> : <Avatar size={46} icon={<UserOutlined />} />}
            {selectedUser.userName}
          </div>
          <div className="message-record"></div>
          <div className="move-line"></div>
          <div className="message-textarea">
            456
        </div>
        </div> : <div className="empty-message-content">
          <Empty description={
            <span>
              Choose a friend to chat
            </span>
          } />
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    msgData: state.MessageReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)

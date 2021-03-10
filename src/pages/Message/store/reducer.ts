import { USER_LOGIN } from './constans'

const MsgInitState = {
  isUserLogin: false
}

type Action = {
  type: String,
  result: any
}

const MessageReducer = (state = MsgInitState, action: Action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log(1111)
      return state
    default:
      return state
  }
}

export default MessageReducer

import { WEB_THEME } from './constans'

const MainInitialState = {
  theme: '#fff'
}

type Action = {
  type: String,
  result: any
}

const MessageReducer = (state = MainInitialState, action: Action) => {
  switch (action.type) {
    case WEB_THEME:
      return Object.assign({}, state, { theme: action.result })
    default:
      return state
  }
}

export default MessageReducer

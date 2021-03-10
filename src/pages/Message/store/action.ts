import { USER_LOGIN } from './constans'

export const addCount = (result: any) => {
  return {
    type: USER_LOGIN,
    result
  }
}

import { WEB_THEME } from './constans'

export const setWebTheme = (result: any) => {
  return {
    type: WEB_THEME,
    result
  }
}

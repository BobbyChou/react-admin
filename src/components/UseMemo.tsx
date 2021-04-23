/*
 * @Author: zhou teng
 * @Date: 2021-04-20 15:48:56
 * @LastEditTime: 2021-04-20 16:00:55
 */
import { useState, useMemo } from 'react'
function _UseMemo() {
  const [name, setName] = useState<number | string>('名称')
  const [content, setContent] = useState<number | string>('内容')
  return (
    <>
      <button onClick={() => setName(new Date().getTime())}>name</button>
      <button onClick={() => setContent(new Date().getTime())}>content</button>
      <Button name={name}>{content}</Button>
    </>
  )
}

type ButtonType = {
  name: string | number,
  children?: any
}

function Button({ name, children }: ButtonType) {
  function changeName(name: any) {
    console.log(1)
    return name + '改变name的方法'
  }

  const otherName = useMemo(() => changeName(name), [name])
  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>

  )
}

export default _UseMemo
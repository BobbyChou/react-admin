/*
 * @Author: zhou teng
 * @Date: 2021-04-20 15:13:07
 * @LastEditTime: 2021-04-20 15:47:24
 */
import React, { useContext } from 'react'

const ThemeContext = React.createContext('light');
const _UseContext = () => {
    return (
        <Toolbar />
    )
}
const Toolbar = (props: any) => {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}
const ThemedButton = (props: any) => {
    // 第三步：使用共享 Context
    const theme = useContext(ThemeContext);
    console.log(theme)
    return <div>123</div>
}

export default _UseContext
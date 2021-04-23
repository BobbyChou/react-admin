/*
 * @Author: zhou teng
 * @Date: 2021-04-20 15:48:56
 * @LastEditTime: 2021-04-20 17:22:00
 */
import { useState, useCallback } from 'react'
function _UseCallback() {
    const handleClick = useCallback(() => {
        console.log(11)
        // handle the click event
    }, []);
    return (
        <div onClick={() => { handleClick() }}>123</div>
    )
}

export default _UseCallback
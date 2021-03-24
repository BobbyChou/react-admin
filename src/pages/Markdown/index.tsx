/*
 * @Author: zhou teng
 * @Date: 2021-03-13 11:17:05
 * @LastEditTime: 2021-03-20 00:20:27
 */

import './index.less'
import ReactMarkdown from 'react-markdown'

import Main from './files/main.md'

type MarkdownType = {}
const Markdown = (props: MarkdownType) => {
    return (
        <div className="markdown-container">
            <ReactMarkdown source={Main} escapeHtml={false} />
        </div>
    )
}

export default Markdown

/*
 * @Author: zhou teng
 * @Date: 2021-03-13 11:27:15
 * @LastEditTime: 2021-03-13 11:40:53
 */
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./index.less";
import ppHOC from "./../../components/HightOrderComponent";

// type DocumentsType = {};

// const Documents = (props: DocumentsType) => {
//   const params = useHistory();
//   return <div className="documents-container">Documents</div>;
// };

// export default Documents;

class Test extends React.Component {
  componentDidMount() {
    console.log('原组件didmount')
  }
  render() {
    return <div>123</div>;
  }
}

export default  ppHOC('1221121212')(Test)

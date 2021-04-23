/*
 * @Author: zhou teng
 * @Date: 2021-03-13 11:27:15
 * @LastEditTime: 2021-04-20 17:22:25
 */
import React, { Fragment } from "react";
import { useEffect, useState, useCallback, useContext } from "react";
import "./index.less";
// import ppHOC from "./../../components/HightOrderComponent";
import _UseContext from '../../components/UseContext'
import _UseMemo from '../../components/UseMemo'
import _UseCacllback from '../../components/useCallback'

// type DocumentsType = {};

// const Documents = (props: DocumentsType) => {
//   const params = useHistory();
//   return <div className="documents-container">Documents</div>;
// };

// export default Documents;

// class Test extends React.Component {
//   componentDidMount() {
//     console.log('原组件didmount')
//   }
//   render() {
//     return <div>123</div>;
//   }
// }

// const _UseState = () => {
//   const [count, setCount] = useState({
//     name: 'zhouteng'
//   })

//   useEffect(() => {
//     console.log(count)
//   }, [count])

//   return (
//     <Fragment>
//       {/* <div>{count}</div> */}
//       <button onClick={() => { setCount((prevstate) => {
//         return {
//           ...prevstate,
//           ...{
//             age: 26
//           }
//         }
//       }) }}> + </button>
//     </Fragment>
//   )
// }

// const _UseCallback = () => {
//   const [count, setCount] = useState(0)
//   const memoizedCallback = useCallback(
//     (count) => {
//       console.log(count)
//     },
//     [count],
//   );
//   return <Fragment>
//     <div>
//     {count}
//   </div>
//   <button onClick={() => { setCount(count + 1) }}>
//     +
//   </button>
//   </Fragment>
// }

// const _UseConText = () => {
//   return <div>
//     123
//   </div>
// }

// const _UseEffect = () => {

//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log('componentDidMount')
//   }, [])

//   useEffect(() => {
//     console.log('componentDidUpdate--------count:', count)
//   }, [count])

//   useEffect(() => {
//     return () => {
//       console.log(count)
//     }
//   }, [count])

//   return <Fragment>
//     <div>
//       {count}
//     </div>
//     <button onClick={() => { setCount(count + 1) }}> + </button>
//   </Fragment>
// }

// export default  ppHOC('1221121212')(Test)
export default _UseCacllback

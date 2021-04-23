/*
 * @Author: zhou teng
 * @Date: 2021-04-20 08:39:27
 * @LastEditTime: 2021-04-20 10:48:46
 */
import React, { Fragment } from "react";
// function ppHOC(WrappedComponent: any) {
//   // 返回一个无状态的函数组件
//   // const newProps = { type: 'HOC' };
//   // return (props: any) => <WrappedComponent {...props} {...newProps}/>;

//   // 返回一个有状态的 class 组件
//   return class extends React.Component {
//     componentDidMount() {
//       console.log("高阶组件didmount");
//     }
//     render() {
//       const newProps = { type: "HOC" };
//       return <WrappedComponent {...this.props} {...newProps} />;
//     }
//   };
// }

// export default ppHOC;

const HighOrderComponnet = (title: string) => {
  return function ppHOC(WrappedComponent: any) {
    // 返回一个无状态的函数组件
    // const newProps = { type: 'HOC' };
    // return (props: any) => <WrappedComponent {...props} {...newProps}/>;

    // 返回一个有状态的 class 组件
    return class extends React.Component {
      componentDidMount() {
        console.log("高阶组件didmount");
      }
      render() {
        const newProps = { type: "HOC" };
        return <Fragment>
          <div>{`${title || ''}`}</div>
          <WrappedComponent {...this.props} {...newProps} />;
        </Fragment>
      }
    };
  };
}
export default HighOrderComponnet
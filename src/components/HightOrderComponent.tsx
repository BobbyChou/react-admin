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

export default function (title: string) {
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

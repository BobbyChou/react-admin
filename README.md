<!--
 * @Author: zhou teng
 * @Date: 2021-03-06 15:56:06
 * @LastEditTime: 2021-03-06 16:40:42
-->

- cli command (antd, typescript)

```
  npx create-react-app antd-demo

  yarn create react-app antd-demo-ts --template typescript
```

- react-app-env.d.ts
> [https://segmentfault.com/a/1190000038874526](https://segmentfault.com/a/1190000038874526)

###### 配置 less-loader 之后提示 is not a function

- less-loader 的版本过高，less-loader@5.0.0

###### <img src={require('')} alt="" />图片无法显示
```
...,
options: {
  ....,
  esModule: false,
}
```

- `useHistory() return undefined`

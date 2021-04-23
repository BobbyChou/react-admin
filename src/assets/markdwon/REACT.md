<!--
 * @Author: zhou teng
 * @Date: 2021-04-20 08:39:27
 * @LastEditTime: 2021-04-20 14:19:43
-->
#### React


1. <font color='#73D8FF'>React事件和普通的HTML事件的差异</font>
   - 对于事件名称命名方式，原生事件为全小写，react 事件采用小驼峰
   - 对于事件函数处理语法，原生事件为字符串，react事件为函数
   - React事件不能采用return false的方式组织浏览器的默认行为，必须要明确地调用preventDefault()来阻止默认行为
   - 事件的执行顺序为原生事件先执行，合成事件后执行，合成事件会冒泡绑定到 document 上，所以尽量避免原生事件与合成事件混用，如果原生事件阻止冒泡，可能会导致合成事件不执行，因为需要冒泡到document 上合成事件才会执行
    ```
      onClick={() => { 优先执行的函数 }}
      document.getElementByClassName(‘’)[0].addEventListener(‘click’, function() { 最后执行的函数 })
    ```

2. <font color='#73D8FF'>setState</font>
   - React中setState后发生了什么
      - 在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程(Reconciliation)。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。
   - setState 是同步还是异步的
      * 假如所有setState是同步的，意味着每执行一次setState时（有可能一个同步代码中，多次setState），都重新vnode diff + dom修改，这对性能来说是极为不好的。如果是异步，则可以把一个同步代码中的多个setState合并成一次组件更新。所以默认是异步的，但是在一些情况下是同步的。setState 并不是单纯同步/异步的，它的表现会因调用场景的不同而不同。在源码中，通过 isBatchingUpdates 来判断setState 是先存进 state 队列还是直接更新，如果值为 true 则执行异步操作，为 false 则直接更新。
          > 在React的setState函数实现中，会根据一个变量 isBatchingUpdate 来判断是直接同步更新this.state还是放到队列中异步更新 。React使用了事务的机制，React的每个生命周期和合成事件都处在一个大的事务当中。在事务的前置钩子中调用batchedUpdates方法修改isBatchingUpdates变量为true，在后置钩子中将变量置为false。原生绑定事件和setTimeout异步的函数没有进入到React的事务当中，或者当他们执行时，刚刚的事务已近结束了，后置钩子触发了，所以此时的setState会直接进入非批量更新模式，表现在我们看来成为了同步SetState
3. <font color='#73D8FF'>HOC（High Order Component）</font>
   - React 中两种 HOC 的实现方法：Props Proxy (PP) and Inheritance Inversion (II)。两种方法都可以操作 WrappedComponent。
4. <font color='#73D8FF'>react-router</font>
   - hash模式
      - 改变#不触发网页重载
      - 浏览器不会重新向服务器请求index.html
      - 改变#会改变浏览器的访问历史
      - onhashchange事件去监测hash的变更
   - HTML5 history
      - 新增的历史记录 API 可以实现无刷新更改地址栏链接，配合 AJAX 可以做到无刷新跳转。
      - popstate 事件
      - replaceState
5. Hooks
   - hooks规则
      - eslint-plugin-react-hooks
      - 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们
      - 只在 React 函数中调用 Hook
         - 在 React 的函数组件中调用 Hook
         - 在自定义 Hook 中调用其他 Hook
   - useState （this.setState），模式是数组的解构赋值
      - 如果setState的值需要依赖之前state的值，setState可以传入一个函数。函数的参数为更新前的state的值
   - useEffect：如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：
      - React 会在组件卸载的时候执行清除操作
      - effect 在每次渲染的时候都会执行。这就是为什么 React 会在执行当前 effect 之前对上一个 effect 进行清除
      - 不传第二个参数的时候，数据更新，都会执行操作，数据没有变化的时候不会执行操作，功能类似于componentDidUpdate
      - 第二个参数为空数组的时候，功能类似于componentDidMount
      - useEffect可以返回一个函数，功能类似于componentWillUnmount，返回的函数内部获取到的数据是更新前的数据
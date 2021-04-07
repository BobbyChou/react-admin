#### ES6

1. ##### var、let、const
   - let
     - 它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
     - 下面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10
        ```
        var a = [];
        for (var i = 0; i < 10; i++) {
          a[i] = function () {
            console.log(i);
          };
        }
        a[6](); // 10
        ```
        ***
     - var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。
     - 上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
        ```
          var tmp = 123;
          if (true) {
            tmp = 'abc'; // ReferenceError
            let tmp;
          }
        ```
        ***
     - 不允许重复声明
   - const
     - const声明一个只读的常量。一旦声明，常量的值就不能改变。
     - const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
     - const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
        ```
          const a = [];
          a.push('Hello'); // 可执行
          a.length = 0;    // 可执行
          a = ['Dave'];    // 报错
        ```
***
1. ##### 字符串的新增方法 (_这三个方法都支持第二个参数，表示开始搜索的位置。_)
   - includes(), startsWith(), endsWith()
   - includes()：返回布尔值，表示是否找到了参数字符串。
   - startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
   - endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
      ***
   - repeat(n)
     - repeat方法返回一个新字符串，表示将原字符串重复n次。
     - 参数如果是小数，会被取整。
     - 如果repeat的参数是负数或者Infinity，会报错。
     - 但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
     - 参数NaN等同于 0。
     - 如果repeat的参数是字符串，则会先转换成数字。
      ***
   - padStart(), apdEnd()
     - 下面代码中，padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
        ```
        'x'.padStart(5, 'ab') // 'ababx'
        'x'.padStart(4, 'ab') // 'abax'
        'x'.padEnd(5, 'ab') // 'xabab'
        'x'.padEnd(4, 'ab') // 'xaba'
        ```
     - 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
     - 如果省略第二个参数，默认使用空格补全长度。
     - 另一个用途是提示字符串格式。
        ```
        '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
        '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
        ```
***
1. ##### 对象的新增方法
   - Object.is()
     - ES5 比较两个值是否相等，只有两个运算符：相等运算符（\==）和严格相等运算符（\===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。
     - 不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
     - ES5 可以通过下面的代码，部署Object.is
        ```
        Object.defineProperty(Object, 'is', {
          value: function(x, y) {
          if (x === y) {
            // 针对+0 不等于 -0的情况
            return x !== 0 || 1 / x === 1 / y;
          }
          // 针对NaN的情况
          return x !== x && y !== y;
        },
        configurable: true,
          enumerable: false,
          writable: true
        });
        ```
   - Object.assign()
***
4. ##### <font color='#e4393c'>Proxy</font>
    > Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

    > Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

    ```
      var obj = new Proxy({}, {
        get: function (target, propKey, receiver) {
          console.log(`getting ${propKey}!`);
          return Reflect.get(target, propKey, receiver);
        },
        set: function (target, propKey, value, receiver) {
          console.log(`setting ${propKey}!`);
          return Reflect.set(target, propKey, value, receiver);
        }
      });
    ```
   - get(target, propKey, reciever)
     - 拦截对象属性的读取
   - set(target, propKey, value, reciever)
     - 拦截对象属性的设置
   - has(target, propKey)
     - 拦截propKey in proxy的操作，返回一个布尔值
   - deleteProperty(target, propKey)
     - 拦截delete proxy[propKey]的操作，返回一个布尔值
   - ownKeys(target)
     - 拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组
   - getOwnPropertyDescriptor(target, propKey)
     - 拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
   - defineProperty(target, propKey, propDesc)
     - 拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
   - preventExtensions(target)
     - 拦截Object.preventExtensions(proxy)，返回一个布尔值。
   - getPrototypeOf(target)
     - 拦截Object.getPrototypeOf(proxy)，返回一个对象。
   - isExtensible(target)
     - 拦截Object.isExtensible(proxy)，返回一个布尔值。
   - setPrototypeOf(target, proto)
     - 拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
   - apply(target, object, args)
     - 拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
   - construct(target, args)
     - 拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
***
5. ##### <font color='#e4393c'>Promise</font>
    > 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
   - 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
   - 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
   - 下面代码中，使用Promise包装了一个图片加载的异步操作。如果加载成功，就调用resolve方法，否则就调用reject方法。
      ```
      function loadImageAsync(url) {
        return new Promise(function(resolve, reject) {
          const image = new Image();
          image.onload = function() {
            resolve(image);
          };
          image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
          };
          image.src = url;
        });
      }
      ```
      ***
   - 上面代码中，getJSON是对 XMLHttpRequest 对象的封装，用于发出一个针对 JSON 数据的 HTTP 请求，并且返回一个Promise对象。需要注意的是，在getJSON内部，resolve函数和reject函数调用时，都带有参数。
      ```
        const getJSON = function(url) {
          const promise = new Promise(function(resolve, reject){
            const handler = function() {
              if (this.readyState !== 4) {
                return;
              }
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error(this.statusText));
              }
            };
            const client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();

          });

          return promise;
        };

        getJSON("/posts.json").then(function(json) {
          console.log('Contents: ' + json);
        }, function(error) {
          console.error('出错了', error);
        });
      ```
      ***
   - 下面代码中，p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。
      ```
        const p1 = new Promise(function (resolve, reject) {
          setTimeout(() => reject(new Error('fail')), 3000)
        })

        const p2 = new Promise(function (resolve, reject) {
          setTimeout(() => resolve(p1), 1000)
        })

        p2
          .then(result => console.log(result))
          .catch(error => console.log(error))
        // Error: fail
      ```
      ***
   - Promise.prototype.then()
     - then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。
   - Promise.prototype.catch()
     - 用于指定发生错误时候的回调函数
     - 下面代码中，getJSON()方法返回一个 Promise 对象，如果该对象状态变为resolved，则会调用then()方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch()方法指定的回调函数，处理这个错误。另外，then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获。
        ```
          getJSON('/posts.json').then(function(posts) {
            // ...
          }).catch(function(error) {
            // 处理 getJSON 和 前一个回调函数运行时发生的错误
            console.log('发生错误！', error);
          });
        ```
        ***
     - 上面代码中，Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。
        ```
          const promise = new Promise(function(resolve, reject) {
            resolve('ok');
            throw new Error('test');
          });
          promise
            .then(function(value) { console.log(value) })
            .catch(function(error) { console.log(error) });
          // ok
        ```
        ***
        ```
          const someAsyncThing = function() {
            return new Promise(function(resolve, reject) {
              // 下面一行会报错，因为x没有声明
              resolve(x + 2);
            });
          };

          someAsyncThing().then(function() {
            console.log('everything is great');
          });

          setTimeout(() => { console.log(123) }, 2000);
          // Uncaught (in promise) ReferenceError: x is not defined
          // 123
        ```
     - 跟传统的try/catch代码块不同的是，如果没有使用catch()方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。上面代码中，someAsyncThing()函数产生的 Promise 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示ReferenceError: x is not defined，但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。
        ***
   - Promise.prototype.finally()
     - finally()方法用于指定不管Promise对象最后状态如何，都会执行的操作。该方法是ES2018引入标准的
     - 下面代码中，不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
        ```
          let _promise = (num) => {
            return new Promise((resolve, reject) => {
              resolve(++num)
            })
          }
          _promise(1).then((num) => {
            console.log(num)
          }).catch((e) => {

          }).finally(() => { console.log('finally handles') })
          // 2
          // finally handles
        ```
        ***
     - 下面代码中，如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。有了finally方法，则只需要写一次。==finally本质上是then方法的特例==
        ```
          promise
          .finally(() => {
            // 语句
          });

          // 等同于
          promise
          .then(
            result => {
              // 语句
              return result;
            },
            error => {
              // 语句
              throw error;
            }
          );
        ```
        ***

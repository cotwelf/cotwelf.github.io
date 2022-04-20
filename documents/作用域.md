# 作用域

创建函数或者块 `{}` 的时候都会开辟一个内存空间，产生一个作用域。作用域是变量与函数的可访问范围，可以在全局作用域访问的叫做全局变量，只能在局部作用域访问的叫做局部变量。

js 采用词法作用域（静态作用域），即函数的作用域在定义的时候就决定了（而不是调用的时候）

```JavaScript
var a = 1

function logA(){
	console.log(a)
}

function printA(){
	var a = 2
	logA()
}

printA()
```
函数创建后，保存所有⽗变量对象到内部属性[[scope]]，创建其执⾏上下⽂（执⾏环境）。压⼊环境栈，复制函数[[scope]]属性创建其作⽤域链，随后使⽤arguments和其他命名参数的值、内部的函数声明、变量声明去初始化活动对象，并将活动对象压⼊作⽤域链顶端。开始执⾏函数，代码执⾏阶段修改活动对象的值，结束后环境栈弹出函数执⾏上下⽂。

延长作用域
```JavaScript
function buildUrl() {
  var qs = "?debug=true";
    with(location){
      var url = href + qs;
      /*  相当于 url = location.href + qs
       *  因为 buildUrl 中有 qs 变量，所以会使用 qs
       *  但没有 href，所以会在 location 中找到 location.href
       *  注意，这个 url 是在 buildUrl 中定义的局部变量，并不会绑到 location 上
       */
    }
  console.log(location.url, url)
}
buildUrl() // undefined '{location.href}?debug=true'
```
进入新环境 -> 创建作用域链

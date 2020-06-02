(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{179:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"优化"}},[t._v("优化")]),t._v(" "),a("h2",{attrs:{id:"图片加载卡顿优化"}},[t._v("图片加载卡顿优化")]),t._v(" "),a("h4",{attrs:{id:"_1-懒加载"}},[t._v("1. 懒加载")]),t._v(" "),a("p",[t._v("常见的图片懒加载是指加载时只渲染屏幕可见区域及周围的图片，当页面滚动时再加载需要显示的图片。")]),t._v(" "),a("h4",{attrs:{id:"_2-缩略图-预加载-懒加载"}},[t._v("2. 缩略图+预加载+懒加载")]),t._v(" "),a("p",[t._v("当用户滚动图片时，改变下一站预渲染的图片为用户可见区域的第一张，对图片进行逐个的预加载，\n但用户的滚动条匀速直线不停的往下运动时，效果依然很差。而结合使用缩略图，性能几乎可以满足用户需求。")]),t._v(" "),a("h2",{attrs:{id:"spa应用的首屏加载速度优化"}},[t._v("SPA应用的首屏加载速度优化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将公用的JS库通过script标签外部引入，减少"),a("code",[t._v("app.bundel")]),t._v("的大小，让浏览器并行下载资源文件，提高下载速度。")])]),t._v(" "),a("li",[a("p",[t._v("在配置路由时，页面和组件使用懒加载的方式引入，进一步缩小"),a("code",[t._v("app.bundel")]),t._v("的体积，在调用某个组件时再加载对应的js文件。")])]),t._v(" "),a("li",[a("p",[t._v("加一个首屏loading图，提升用户体验。")])])]),t._v(" "),a("h2",{attrs:{id:"前端性能优化"}},[t._v("前端性能优化")]),t._v(" "),a("h4",{attrs:{id:"_1-使用局部变量"}},[t._v("1. 使用局部变量")]),t._v(" "),a("p",[t._v("查找变量会从作用域链的顶端开始一层一层的向下找。显然，查找的层数越多，花费的时间越多。\n所以为了提高查找的速度，应该尽量使用局部变量(到目前为止，局部变量是JavaScript读写最快的标识符)。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("jQuery")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jQuery "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这样写的优势：")]),t._v(" "),a("ul",[a("li",[t._v("window和undefined都是为了减少变量查找所经过的scope作用域。\n当window通过传递给闭包内部之后，在闭包内部，可以把它当成一个局部变量使用，\n显然比window scope(作用域链最顶端)下查找快一些。")]),t._v(" "),a("li",[t._v("在jQuery压缩版本的jquery.min.js中可以将局部变量window替换成单个字母，\n减少文件大小，提高加载速度"),a("code",[t._v("(function(e,undefined){ var t,n,r=typeof undefined,i=e.location,o=e.document")]),t._v("。")]),t._v(" "),a("li",[t._v("undefined也是JavaScript种的全局属性。将undefined作为参数传递给闭包，因为没给它传递值，它的值就是undefined，这样闭包内部在使用它的时候就可以把它当做局部变量使用，从而提高查找速度。undefined并不是JavaScript的保留字或关键字。")]),t._v(" "),a("li",[t._v("undefined在某些低版本浏览器(IE8及以下)中值是可以被修改的(在ECMAScript中，\nundefined是可读/写的变量，可以给它赋任意值，这个错误在ECMAScript5中做了修正)，\n将undefined作为参数并且不给它传值可以防止因undefined的值被修改而产生的错误。")])]),t._v(" "),a("h4",{attrs:{id:"_2-避免增长作用域链"}},[t._v("2. 避免增长作用域链")]),t._v(" "),a("p",[t._v("在JavaScript中，有两种语句可以临时增加作用域链：with、try-catch\nwith可以使对象的属性可以像全局变量来使用，它实际上是将一个新的变量对象添加到执行环境\n作用域的顶部，这个变量对象包含了指定对象的所有属性，因此可以直接访问。\n这样看似很方便，但是增长了作用域链，原来函数中的局部变量不在处于作用域链的顶端，\n因此在访问这些变量的时候要查找到第二层才能找到它。当with语句块结束后，作用域链将回到原来的状态。鉴于with的这个缺点，所以不推荐使用。\ntry-catch中的catch从句和with类似，也是在作用域链的顶端增加了一个对象，该对象包含了由catch指定命名的异常对象，但是因为catch语句只有错误的时候才执行，因此影响比较少。")]),t._v(" "),a("h4",{attrs:{id:"_3-字符串连接优化"}},[t._v("3. 字符串连接优化")]),t._v(" "),a("p",[t._v("由于字符串是不可变的，多以在进行字符串连接时，需要创建临时字符串。频繁创建、销毁临时字符串会导致性能低下。IE8+中该问题得到了优化，在低版本浏览器中，可以用数组的join来代替。")]),t._v(" "),a("h4",{attrs:{id:"_4-条件判断"}},[t._v("4. 条件判断")]),t._v(" "),a("p",[t._v("条件分支层数比较深时，switch性能比if会更好。或者使用数组。其他方面的优化，譬如：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改成")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v2\n")])])]),a("h4",{attrs:{id:"_5-快速循环"}},[t._v("5. 快速循环")]),t._v(" "),a("ul",[a("li",[t._v("循环总次数使用局部变量")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" divList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsBtTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" divList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样写避免了每次循环的属性查找")]),t._v("\n")])])]),a("ul",[a("li",[t._v("如果可以，递减代替递增")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改成")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("len"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改成")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i=0时会直接跳出，循环次数比较多时还是很有用的")]),t._v("\n")])])]),a("h4",{attrs:{id:"_6-高效存取数据"}},[t._v("6. 高效存取数据")]),t._v(" "),a("p",[t._v("JavaScript中4种地方可以存取数据：字面量值；数组元素；变量；对象属性。\n字面量值和变量中存取数据是最快的，从数组元素和对象属性中存取数据相对较慢，并且\n随着深度增加，存取速度会越来越慢，譬如obj.item.value就比obj.item慢。\n某些情况下我们可以将对象、数组属性存成局部变量来提高速度，例如：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改成")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" divList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsBtTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("divList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改成")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" divList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsBtTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" divList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_7-事件委托"}},[t._v("7. 事件委托")]),t._v(" "),a("p",[t._v("事件委托就是利用冒泡的原理，将原本应该添加在某些元素身上的监听事件，添加到其父元素身上，\n来达到提高性能的效果。")]),t._v(" "),a("h4",{attrs:{id:"_8-减少http请求数量"}},[t._v("8. 减少http请求数量")]),t._v(" "),a("p",[t._v("在浏览器与服务器进行通信时，主要是通过http进行通信。浏览器与服务器需要经过三次握手，每次握手需要花费大量时间。而且不同浏览器对资源文件并发请求数量有限（不同浏览器允许并发数），一旦http请求数量达到一定数量，资源请求就存在等待状态，这是很致命的，因此减少http的请求数量可以很大程度上对网站性能进行优化。")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("CSS Sprites")]),t._v(" 俗称CSS精灵，这是将多张图片合并成一张图片达到减少http请求的一种解决方案，可以通过css的background属性来访问图片内容，这种方案同时还可以减少图片总字节数。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("合并CSS和JS文件")]),t._v(" 现在前端有很多工程化打包工具，如：grunt、gulp、webpack等。为了减少http请求数量，可以通过这些工具在发布前将多个CSS或者多个JS合并成一个文件。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("采用lazyload")]),t._v(" 俗称懒加载，可以在控制网页上的内容在一开始无需加载，不需要发请求，等到用户操作真正需要的时候立即加载出内容。这样就控制了网页资源一次性请求数量。")])])]),t._v(" "),a("h4",{attrs:{id:"_9-控制资源文件加载优先级"}},[t._v("9. 控制资源文件加载优先级")]),t._v(" "),a("p",[t._v("浏览器在加载HTML内容时，是将HTML内容从上至下一次解析，解析到link或者script标签就会加载href或者src对应链接内容，为了第一时间展示页面给用户，就需要将css提前加载，不要受js加载影响。")]),t._v(" "),a("p",[t._v("一般情况下都是css在头部，js在底部。")]),t._v(" "),a("h4",{attrs:{id:"_10-利用浏览器缓存"}},[t._v("10. 利用浏览器缓存")]),t._v(" "),a("p",[t._v("浏览器缓存是将网络资源存储在本地，等待下次请求该资源时，如果资源已经存在就不需要到服务器重新请求该资源，直接在本地读取该资源。")]),t._v(" "),a("h4",{attrs:{id:"_11-减少重排（reflow）"}},[t._v("11. 减少重排（Reflow）")]),t._v(" "),a("p",[t._v("基本原理：重排是DOM的变化影响到元素的几何属性（宽和高），浏览器会重新计算元素的几何属性，会使渲染树中受到影响的部分失效，浏览器会验证DOM树上的所有其它结点的visibility属性，这也是Reflow的过于频繁，CPU使用率就会急剧上升。")]),t._v(" "),a("p",[t._v("减少Reflow，如果需要在DOM操作时添加样式，尽量使用class属性，而不是通过style操作样式。")])])}],!1,null,null,null);s.default=r.exports}}]);
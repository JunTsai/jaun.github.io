import{_ as c,r as n,o as s,c as r,a as e,t as o,b as l,d,e as a}from"./app-A7gWX81E.js";const u={},p=a('<h2 id="微信小程序底层框架实现原理" tabindex="-1"><a class="header-anchor" href="#微信小程序底层框架实现原理" aria-hidden="true">#</a> 微信小程序底层框架实现原理</h2><h3 id="双线程架构" tabindex="-1"><a class="header-anchor" href="#双线程架构" aria-hidden="true">#</a> 双线程架构</h3><p>微信小程序的渲染层与逻辑层分别由两个线程管理，渲染层的界面使用 <code>webview</code> 进行渲染；逻辑层采用 <code>JSCore运行JavaScript代码。</code><img src="" alt="avatar"></p><ul><li><strong>渲染层</strong><ul><li>一个小程序有多个界面，所以渲染层对应存在多个<code>webview</code>.两个线程之间由<code>Native层</code>进行统一处理。无论是线程之间的通讯、数据的传递、网络请求都由<code>Native层</code>做转发。</li><li>为什么要做多个webview呢，为了更加接近原生应用APP的用户体验。多个webview可以理解为多页面应用，有别于单页面应用SPA.多页面应用的新页面直接滑动出来并且覆盖在旧页面上即可，这样的用户体验是非常好的。</li></ul></li><li><strong>逻辑层</strong><ul><li>为了解决安全管控问题，小程序阻止开发者使用一些浏览器提供的比如跳转页面、操作DOM、动态执行脚本的开放性接口,同时小程序提供了一个纯JavaScript 的解释执行环境的沙箱。</li><li>得益于客户端系统有javaScript 的解释引擎（在<code>iOS</code>下使用内置的 <code>javaScriptCore框架</code>，在<code>安卓</code>则是用腾讯x5内核提供的<code>JsCore环境</code>），可以创建一个单独的线程去执行 javaScript，在这个环境下执行的都是有关小程序业务逻辑的代码，也就是<code>逻辑层</code>。</li></ul></li></ul><h3 id="wxml标签设计思路" tabindex="-1"><a class="header-anchor" href="#wxml标签设计思路" aria-hidden="true">#</a> WXML标签设计思路</h3>',5),h=e("p",null,[e("strong",null,"WXML语法结构"),e("img",{src:"",alt:"avater"})],-1),_=e("ul",null,[e("li",null,"行内属性")],-1),m=e("blockquote",null,[e("p",null,"id style class data-* hidden bind*/catch*")],-1),b=e("ul",null,[e("li",null,"数据绑定")],-1),v=e("ul",null,[e("li",null,"逻辑语法")],-1),w=a("<ul><li>条件逻辑</li></ul><blockquote><p>if-else</p></blockquote><ul><li>列表渲染</li></ul><blockquote><p>wx:for</p></blockquote><ul><li>模板</li></ul><blockquote><p>WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。使用 name 属性，作为模板的名字。然后在<template></template>内定义代码片段。</p></blockquote><ul><li>import&amp;include</li></ul>",7),x=e("template",null,null,-1),S=e("template",null,null,-1),f=e("li",null,[e("p",null,[e("strong",null,"WXML设计思路"),l(" 1.Exparser是微信小程序的组件组织框架，内置在小程序基础库中，为小程序的各种组件提供基础的支持。小程序内的所有组件，包括内置组件和自定义组件，都由Exparser组织管理。 2.Exparser的组件模型与WebComponents标准中的Shadow DOM高度相似。Exparser会维护整个页面的节点树相关信息，包括节点的属性、事件绑定等，相当于一个简化版的Shadow DOM实现。")])],-1);function k(t,g){const i=n("wxs");return s(),r("div",null,[p,e("ul",null,[e("li",null,[h,_,m,b,e("blockquote",null,[e("p",null,"WXML 通过 "+o(t.变量名)+" 来绑定 WXML 文件和对应的javaScript文件中的data对象属性",1)]),v,e("blockquote",null,[e("p",null,o(t.变量名)+" 语法可以使得 WXML 拥有动态渲染的能力，除此外还可以在 "+o()+" 内进行简单的逻辑运算。 三元运算 算数运算 字符串的拼接 放置常量（数字、字符串或者是数组）",1)]),w,e("blockquote",null,[e("p",null,[l("import可以在该文件中使用目标文件定义的 "),x,l(", import 不具有递归的特性。include 可以将目标文件中除了"),S,l("、"),d(i),l("外的整个代码引入，相当于是拷贝到include位置")])])]),f])])}const M=c(u,[["render",k],["__file","miniprogress.html.vue"]]);export{M as default};

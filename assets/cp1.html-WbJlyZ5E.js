import{_ as e,o as i,c as l,e as t}from"./app-A7gWX81E.js";const r={},o=t('<h2 id="为什么出现vite-解决什么痛点" tabindex="-1"><a class="header-anchor" href="#为什么出现vite-解决什么痛点" aria-hidden="true">#</a> 为什么出现vite，解决什么痛点？</h2><h3 id="前端工程的痛点" tabindex="-1"><a class="header-anchor" href="#前端工程的痛点" aria-hidden="true">#</a> <code>前端工程的痛点：</code></h3><ul><li><strong>前端的模块化需求</strong>，一方面需要落实这些模块规范，保证模块正常加载。另一方面需要兼容不同的模块规范，以适应不同的执行环境。</li><li><strong>兼容浏览器，编译高级语法</strong>,只要高级语言/语法（TypeScript、 JSX 等）想要在浏览器中正常运行，就必须被转化为浏览器可以理解的形式。</li><li><strong>线上代码的质量</strong>,生产环境中,不仅要考虑代码的安全性、兼容性问题，保证线上代码的正常运行，也需要考虑代码运行时的性能问题</li><li><strong>开发效率</strong>,项目的冷启动/二次启动时间、热更新时间都可能严重影响开发效率。</li></ul><h3 id="前端构建工具是如何解决" tabindex="-1"><a class="header-anchor" href="#前端构建工具是如何解决" aria-hidden="true">#</a> <code>前端构建工具是如何解决？</code></h3><ul><li><strong>模块化方面</strong>，提供模块加载方案，并兼容不同的模块规范。</li><li><strong>语法转译方面</strong>，配合 Sass、TSC、Babel 等前端工具链，完成高级语法的转译功能，同时对于静态资源也能进行处理，使之能作为一个模块正常加载。</li><li><strong>产物质量方面</strong>，在生产环境中，配合 Terser等压缩工具进行代码压缩和混淆，通过 Tree Shaking 删除未使用的代码，提供对于低版本浏览器的语法降级处理等等。</li><li><strong>开发效率方面</strong>，构建工具本身通过各种方式来进行性能优化，包括使用原生语言 Go/Rust、no-bundle等等思路，提高项目的启动性能和热更新的速度。</li></ul><h2 id="vite-是当前最高效的构建工具" tabindex="-1"><a class="header-anchor" href="#vite-是当前最高效的构建工具" aria-hidden="true">#</a> Vite 是当前最高效的构建工具？</h2><p>传统<code>Webpack</code>启动花个几分钟，热更新也经常要等待十秒以上,主要因为：</p><ul><li>项目冷启动时必须递归打包整个项目的依赖树</li><li>JavaScript 语言本身的性能限制，导致构建性能遇到瓶颈，直接影响开发效率</li></ul><p><code>vite</code>解决了这些问题:</p><ol><li>开发效率上：</li></ol><ul><li>Vite 在开发阶段基于浏览器原生 ESM 的支持实现了no-bundle服务</li><li>借助 Esbuild 超快的编译速度来做第三方库构建和 TS/JSX 语法编译，从而能够有效提高开发效率</li></ul><ol start="2"><li><p>模块化方面：Vite 基于浏览器原生 ESM 的支持实现模块加载，并且无论是开发环境还是生产环境，都可以将其他格式的产物(如 CommonJS)转换为 ESM。</p></li><li><p>语法转译方面：Vite 内置了对 TypeScript、JSX、Sass 等高级语法的支持，也能够加载各种各样的静态资源，如图片、Worker 等等。</p></li><li><p>产物质量方面：Vite 基于成熟的打包工具 Rollup 实现生产环境打包，同时可以配合Terser、Babel等工具链，可以极大程度保证构建产物的质量。</p></li></ol>',12),a=[o];function n(s,c){return i(),l("div",null,a)}const h=e(r,[["render",n],["__file","cp1.html.vue"]]);export{h as default};

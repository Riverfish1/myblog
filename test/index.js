var posts = [
    /* 1 */
    {
        "_id" : "56fba528e3940b000d3a4667",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "yujian",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "1.1 Node.js 的安装与使用",
        "tag" : "nodejs",
        "category" : "xwzj",
        "sub_category" : "nodejs",
        "content" : "<h2>1.1.1 安装 Node.js</h2><p>有三种方式安装 Node.js：一是通过安装包安装，二是通过源码编译安装，三是在 Linux 下可以通过 yum|apt-get 安装，在 Mac 下可以通过<a href=\"http://brew.sh/\">Homebrew</a> 安装。对于 Windows 和 Mac 用户，推荐使用安装包安装，Linux 用户推荐使用源码编译安装。</p><h4>Windows 和 Mac 安装：</h4><p><strong>第一步：</strong></p><p>打开<a href=\"https://nodejs.org/en/\">Node.js 官网</a>，可以看到以下两个下载选项：</p><p><img alt=\"\" src=\"./img/1.1.1.png\"/></p><p>左边的是 LTS 版，用过 ubuntu 的同学可能比较熟悉，即长期支持版本，大多数人用这个就可以了。右边是最新版，支持最新的语言特性（比如对 ES6 的支持更全面），想尝试新特性的开发者可以安装这个版本。我们选择左边的 v6.9.1 LTS 点击下载。</p><blockquote><p>小提示：从<a href=\"http://node.green\">http://node.green</a> 上可以看到 Node.js 各个版本对 ES6 的支持情况。</p></blockquote><p><strong>第二步：</strong></p><p>安装 Node.js，这个没什么好说的，一直点击<code>继续</code> 即可。</p><p><img alt=\"\" src=\"./img/1.1.2.png\"/></p><p><strong>第三步：</strong></p><p>提示安装成功后，打开终端输入以下命令，可以看到 node 和 npm 都已经安装好了：</p><p><img alt=\"\" src=\"./img/1.1.3.png\"/></p><h4>Linux 安装：</h4><p>Linux 用户可通过源码编译安装：</p><p><code>curl -O https://nodejs.org/dist/v6.9.1/node-v6.9.1.tar.gztar -xzvf node-v6.9.1.tar.gzcd node-v6.9.1./configuremakemake install</code></p><blockquote><p>注意: 如果编译过程报错，可能是缺少某些依赖包。因为报错内容不尽相同，请读者自行求助搜索引擎或<a href=\"http://stackoverflow.com/\">stackoverflow</a>。</p></blockquote><h2>1.1.2 n 和 nvm</h2><p>通常我们使用稳定的 LTS 版本的 Node.js 即可，但有的情况下我们又想尝试一下新的特性，我们总不能来回安装不同版本的 Node.js 吧，这个时候我们就需要<a href=\"https://github.com/tj/n\">n</a> 或者<a href=\"https://github.com/creationix/nvm\">nvm</a> 了。n 和 nvm 是两个常用的 Node.js 版本管理工具，关于 n 和 nvm 的使用以及区别，<a href=\"http://taobaofed.org/blog/2015/11/17/nvm-or-n/\">这篇文章</a> 讲得特别详细，这里不再赘述。</p><h2>1.1.3 nrm</h2><p><a href=\"https://github.com/Pana/nrm\">nrm</a> 是一个管理 npm 源的工具。用过 ruby 和 gem 的同学会比较熟悉，通常我们会把 gem 源切到国内的淘宝镜像，这样在安装和更新一些包的时候比较快。nrm 同理，用来切换官方 npm 源和国内的 npm 源（如:<a href=\"http://cnpmjs.org/\">cnpm</a>），当然也可以用来切换官方 npm 源和公司私有 npm 源。</p><p>全局安装 nrm:</p><p><code>npm i nrm -g</code></p><p>查看当前 nrm 内置的几个 npm 源的地址：</p><p><img alt=\"\" src=\"./img/1.1.4.png\"/></p><p>切换到 cnpm：</p><p><img alt=\"\" src=\"./img/1.1.5.png\"/></p><p>下一节：<a href=\"https://github.com/nswbmw/N-blog/blob/master/book/1.2%20MongoDB%20%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8.md\">1.2 MongoDB 的安装与使用</a>  &lt;li&gt;在线小游戏&lt;/li&gt;&lt;/ol&gt;&lt;hr /&gt;&lt;p&gt;更多工具，To be continue...&lt;/p&gt;</p>",
        "postSummary" : "1.1 Node.js 的安装与使用.md",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 10,
        "recommend" : true
    },

    /* 2 */
    {
        "_id" : "56fba528e3940b000d3a4668",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "yj",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "1.2 MongoDB 的安装与使用",
        "tag" : "nodejs",
        "category" : "xwzj",
        "sub_category" : "nodejs",
        "content" : "## 1.2.1 安装与启动 MongoDB- Windows 用户向导：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/- Linux 用户向导：https://docs.mongodb.com/manual/administration/install-on-linux/- Mac 用户向导：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/## 1.2.2 Robomongo 和 Mongochef#### Robomongo[Robomongo](https://robomongo.org/) 是一个基于 Shell 的跨平台开源 MongoDB 可视化管理工具，支持 Windows、Linux 和 Mac，嵌入了 JavaScript 引擎和 MongoDB mongo，只要你会使用 mongo shell，你就会使用 Robomongo，它还提了供语法高亮、自动补全、差别视图等。[Robomongo 下载地址](https://robomongo.org/download)下载并安装成功后点击左上角的 `Create` 创建一个连接，给该连接起个名字如: `localhost`，使用默认地址（localhost）和端口（27017）即可，点击 `Save` 保存。![](./img/1.2.1.png)双击 `localhost` 连接到 MongoDB 并进入交互界面，尝试插入一条数据并查询出来，如下所示:![](./img/1.2.2.png)#### MongoChef[MongoChef](http://3t.io/mongochef/) 是另一款强大的 MongoDB 可视化管理工具，支持 Windows、Linux 和 Mac。[MongoChef 下载地址](http://3t.io/mongochef/#mongochef-download-compare)，我们选择左侧的非商业用途的免费版下载。![](./img/1.2.3.png)安装成功后跟 Robomongo 一样，也需要创建一个新的连接的配置，成功后双击进入到 MongoChef 主页面，如下所示:![](./img/1.2.4.png)还可以使用 shell 模式:![](./img/1.2.5.png)> 小提示: MongoChef 相较于 Robomongo 更强大一些，但 Robomongo 比较轻量也能满足大部分的常规需求，所以哪一个适合自己还需读者自行尝试。上一节：[1.1 Node.js 的安装与使用](https://github.com/nswbmw/N-blog/blob/master/book/1.1%20Node.js%20%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8.md)下一节：[2.1 require](https://github.com/nswbmw/N-blog/blob/master/book/2.1%20require.md)",
        "postSummary" : "1.2 MongoDB 的安装与使用",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 15,
        "recommend" : false
    },

    /* 3 */
    {
        "_id" : "56fba528e3940b000d3a4669",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "yujian",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "2.1 require",
        "tag" : "nodejs",
        "category" : "xwzj",
        "sub_category" : "nodejs",
        "content" : "require 用来加载一个文件的代码，关于 require 的机制这里不展开讲解，请仔细阅读 [官方文档](https://nodejs.org/api/modules.html)。简单概括以下几点:- require 可加载 .js、.json 和 .node 后缀的文件- require 的过程是同步的，所以这样是错误的:```setTimeout(() => {  module.exports = { a: 'hello' };}, 0);```require 这个文件得到的是空对象 `{}`- require 目录的机制是:  - 如果目录下有 package.json 并指定了 main 字段，则用之  - 如果不存在 package.json，则依次尝试加载目录下的 index.js 和 index.node- require 过的文件会加载到缓存，所以多次 require 同一个文件（模块）不会重复加载- 判断是否是程序的入口文件有两种方式:  - require.main === module（推荐）  - module.parent === null#### 循环引用循环引用（或循环依赖）简单点来说就是 a 文件 require 了 b 文件，然后 b 文件又反过来 require 了 a 文件。我们用 a->b 代表 b require 了 a。简单的情况:```a->bb->a```复杂点的情况:```a->bb->cc->a```循环引用并不会报错，导致的结果是 require 的结果是空对象 `{}`，原因是 b require 了 a，a 又去 require 了 b，此时 b 还没初始化好，所以只能拿到初始值 `{}`。当产生循环引用时一般有两种方法解决：1. 通过分离共用的代码到另一个文件解决，如上面简单的情况，可拆出共用的代码到 c 中，如下:  ```  c->a  c->b  ```2. 不在最外层 require，在用到的地方 require，通常在函数的内部总的来说，循环依赖的陷阱并不大容易出现，但一旦出现了，对于新手来说还真不好定位。它的存在给我们提了个醒，要时刻注意你项目的依赖关系不要过于复杂，哪天你发现一个你明明已经 exports 了的方法报 `undefined is not a function`，我们就该提醒一下自己：哦，也许是它来了。官方示例: [https://nodejs.org/api/modules.html#modules_cycles](https://nodejs.org/api/modules.html#modules_cycles)上一节：[1.2 MongoDB 的安装与使用](https://github.com/nswbmw/N-blog/blob/master/book/1.2%20MongoDB%20%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8.md)下一节：[2.2 exports 和 module.exports](https://github.com/nswbmw/N-blog/blob/master/book/2.2%20exports%20%E5%92%8C%20module.exports.md)...",
        "postSummary" : "2.1 require",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 20,
        "recommend" : true
    },

    /* 4 */
    {
        "_id" : "56fba528e3940b000d3a4610",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "abc",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "2.2 exports 和 module.exports",
        "tag" : "nodejs",
        "category" : "xwzj",
        "sub_category" : "nodejs",
        "content" : "require 用来加载代码，而 exports 和 module.exports 则用来导出代码。很多新手可能会迷惑于 exports 和 module.exports 的区别，为了更好的理解 exports 和 module.exports 的关系，我们先来巩固下 js 的基础。示例：**test.js**```var a = {name: 1};var b = a;console.log(a);console.log(b);b.name = 2;console.log(a);console.log(b);var b = {name: 3};console.log(a);console.log(b);```运行 test.js 结果为：```{ name: 1 }{ name: 1 }{ name: 2 }{ name: 2 }{ name: 2 }{ name: 3 }```**解释**：a 是一个对象，b 是对 a 的引用，即 a 和 b 指向同一块内存，所以前两个输出一样。当对 b 作修改时，即 a 和 b 指向同一块内存地址的内容发生了改变，所以 a 也会体现出来，所以第三四个输出一样。当 b 被覆盖时，b 指向了一块新的内存，a 还是指向原来的内存，所以最后两个输出不一样。明白了上述例子后，我们只需知道三点就知道 exports 和 module.exports 的区别了：1. module.exports 初始值为一个空对象 {}2. exports 是指向的 module.exports 的引用3. require() 返回的是 module.exports 而不是 exportsNode.js 官方文档的截图证实了我们的观点:![](./img/2.2.1.png)#### exports = module.exports = {...}我们经常看到这样的写法：```exports = module.exports = {...}```上面的代码等价于:```module.exports = {...}exports = module.exports```原理很简单：module.exports 指向新的对象时，exports 断开了与 module.exports 的引用，那么通过 exports = module.exports 让 exports 重新指向 module.exports。> 小提示：ES6 的 import 和 export 不在本文的讲解范围，有兴趣的读者可以去学习阮一峰老师的[《ECMAScript6入门》](http://es6.ruanyifeng.com/)。上一节：[2.1 require](https://github.com/nswbmw/N-blog/blob/master/book/2.1%20require.md)下一节：[2.3 Promise](https://github.com/nswbmw/N-blog/blob/master/book/2.3%20Promise.md)...",
        "postSummary" : "2.2 exports 和 module.exports",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 3,
        "recommend" : true
    },

    /* 5 */
    {
        "_id" : "56fba528e3940b000d3a4611",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "yujian",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "2.3 Promise",
        "tag" : "nodejs",
        "category" : "xwzj",
        "sub_category" : "nodejs",
        "content" : "网上已经有许多关于 Promise 的资料了，这里不在赘述。以下 4 个链接供读者学习：1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise （基础）2. http://liubin.org/promises-book/ （开源 Promise 迷你书）3. http://fex.baidu.com/blog/2015/07/we-have-a-problem-with-promises/ （进阶）4. https://promisesaplus.com/ （官方定义规范）Promise 用于异步流程控制，生成器与 yield 也能实现流程控制（基于 co），但不在本教程讲解范围内，读者可参考我的另一部教程 [N-club](https://github.com/nswbmw/N-club)。async/await 结合 Promise 也可以实现流程控制，有兴趣请查阅 [《ECMAScript6入门》](http://es6.ruanyifeng.com/#docs/async#async函数)。上一节：[2.2 exports 和 module.exports](https://github.com/nswbmw/N-blog/blob/master/book/2.2%20exports%20%E5%92%8C%20module.exports.md)下一节：[2.4 环境变量](https://github.com/nswbmw/N-blog/blob/master/book/2.4%20%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.md)...",
        "postSummary" : "2.3 Promise",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 6,
        "recommend" : true
    },

    /* 6 */
    {
        "_id" : "56fba528e3940b000d3a4612",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "余健",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "环境变量",
        "tag" : "nodejs",
        "category" : "xwzj",
        "sub_category" : "nodejs",
        "content" : "环境变量不属于 Node.js 的知识范畴，只不过我们在开发 Node.js 应用时经常与环境变量打交道，所以这里简单介绍下。环境变量（environment variables）一般是指在操作系统中用来指定操作系统运行环境的一些参数。在 Mac 和 Linux 的终端直接输入 env，会列出当前的环境变量，如：USER=xxx。简单来讲，环境变量就是传递参数给运行程序的。在 Node.js 中，我们经常这么用:```NODE_ENV=test node app```通过以上命令启动程序，指定当前环境变量 `NODE_ENV` 的值为 test，那么在 app.js 中可通过 `process.env` 来获取环境变量:```console.log(process.env.NODE_ENV) //test```另一个常见的例子是使用 [debug](https://www.npmjs.com/package/debug) 模块时:```DEBUG=* node app```Windows 用户需要首先设置环境变量，然后再执行程序：```set DEBUG=*set NODE_ENV=testnode app```或者使用 [cross-env](https://www.npmjs.com/package/cross-env)：```npm i cross-env -g```使用方式：```cross-env NODE_ENV=test node app```上一节：[2.3 Promise](https://github.com/nswbmw/N-blog/blob/master/book/2.3%20Promise.md)下一节：[2.5 packge.json](https://github.com/nswbmw/N-blog/blob/master/book/2.5%20package.json.md)...",
        "postSummary" : "环境变量",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 8,
        "recommend" : false
    },

    /* 7 */
    {
        "_id" : "56fba528e3940b000d3a4166",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "1212",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "性格管理",
        "tag" : "web 前端",
        "category" : "xwzj",
        "content" : "〇、引言关于时间管理的这个系列文章，我已经聊完了时间管理为什么难学的原因以及时间管理到底是做什么的，这一篇，我们来说说基于本质导向的要求下，如何通过抓住时间管理的本质来提高学习效...",
        "postSummary" : "〇、引言 关于时间管理的这个系列文章，我已经",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 10,
        "recommend" : false
    },

    /* 8 */
    {
        "_id" : "56fba528e3940b000d3a4177",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "yujian",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "别告诉我你懂时间管理03——如何把握本质提高时间管理学习效率？",
        "tag" : "javascript",
        "category" : "xwzj",
        "content" : "〇、引言关于时间管理的这个系列文章，我已经聊完了时间管理为什么难学的原因以及时间管理到底是做什么的，这一篇，我们来说说基于本质导向的要求下，如何通过抓住时间管理的本质来提高学习效...",
        "postSummary" : "〇、引言 关于时间管理的这个系列文章，我已经",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 19,
        "recommend" : true
    },

    /* 9 */
    {
        "_id" : "56fba528e3940b000d3a4188",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "2323",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "别告诉我你懂时间管理03——如何把握本质提高时间管理学习效率？",
        "tag" : "node",
        "category" : "xwzj",
        "content" : "〇、引言关于时间管理的这个系列文章，我已经聊完了时间管理为什么难学的原因以及时间管理到底是做什么的，这一篇，我们来说说基于本质导向的要求下，如何通过抓住时间管理的本质来提高学习效...",
        "postSummary" : "〇、引言 关于时间管理的这个系列文章，我已经",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 4,
        "recommend" : true
    },

    /* 10 */
    {
        "_id" : "56fba528e3940b000d3a4199",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "yj",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "别告诉我你懂时间管理03——如何把握本质提高时间管理学习效率？",
        "tag" : "web 前端",
        "category" : "xwzj",
        "content" : "〇、引言关于时间管理的这个系列文章，我已经聊完了时间管理为什么难学的原因以及时间管理到底是做什么的，这一篇，我们来说说基于本质导向的要求下，如何通过抓住时间管理的本质来提高学习效...",
        "postSummary" : "〇、引言 关于时间管理的这个系列文章，我已经",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 70,
        "recommend" : true
    },

    /* 11 */
    {
        "_id" : "56fba528e3940b000d3a2000",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "yujian",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "别告诉我你懂时间管理03——如何把握本质提高时间管理学习效率？",
        "tag" : "javascript",
        "category" : "qwzt",
        "content" : "〇、引言关于时间管理的这个系列文章，我已经聊完了时间管理为什么难学的原因以及时间管理到底是做什么的，这一篇，我们来说说基于本质导向的要求下，如何通过抓住时间管理的本质来提高学习效...",
        "postSummary" : "〇、引言 关于时间管理的这个系列文章，我已经",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 12,
        "recommend" : true
    },

    /* 12 */
    {
        "_id" : "56fba528e3940b000d3a4211",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "1212",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "别告诉我你懂时间管理03——如何把握本质提高时间管理学习效率？",
        "tag" : "node",
        "category" : "xwzj",
        "content" : "〇、引言关于时间管理的这个系列文章，我已经聊完了时间管理为什么难学的原因以及时间管理到底是做什么的，这一篇，我们来说说基于本质导向的要求下，如何通过抓住时间管理的本质来提高学习效...",
        "postSummary" : "〇、引言 关于时间管理的这个系列文章，我已经",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 17,
        "recommend" : true
    },

    /* 13 */
    {
        "_id" : "56fba528e3940b000d3a4624",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "yj",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "别告诉我你懂时间管理03——如何把握本质提高时间管理学习效率？",
        "tag" : "web 前端",
        "category" : "xwzj",
        "content" : "〇、引言关于时间管理的这个系列文章，我已经聊完了时间管理为什么难学的原因以及时间管理到底是做什么的，这一篇，我们来说说基于本质导向的要求下，如何通过抓住时间管理的本质来提高学习效...",
        "postSummary" : "〇、引言 关于时间管理的这个系列文章，我已经",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 10,
        "recommend" : true
    },

    /* 14 */
    {
        "_id" : "56fba528e3940b000d3a4625",
        "img_url" : "images/2016090921524878.jpg",
        "author" : "yj123",
        "time" : {
            "date" : "2016-03-30T10:06:32.354Z",
            "year" : 2016,
            "month" : "2016-3",
            "day" : "2016-3-30",
            "minute" : "2016-3-30 18:06"
        },
        "title" : "别告诉我你懂时间管理03——如何把握本质提高时间管理学习效率？",
        "tag" : "express",
        "category" : "xwzj",
        "content" : "〇、引言关于时间管理的这个系列文章，我已经聊完了时间管理为什么难学的原因以及时间管理到底是做什么的，这一篇，我们来说说基于本质导向的要求下，如何通过抓住时间管理的本质来提高学习效...",
        "postSummary" : "〇、引言 关于时间管理的这个系列文章，我已经",
        "comments" : [],
        "reprint_info" : {},
        "pv" : 10,
        "recommend" : true
    },

    /* 15 */
    {
        "_id" : ObjectId("58803e41a9f3b02058c638d4"),
        "author" : "yujian666",
        "title" : "4.7 注册",
        "content" : "## 4.7.1 用户模型设计\r\n\r\n我们只存储用户的名称、密码（加密后的）、头像、性别和个人简介这几个字段，对应修改 lib/mongo.js，添加如下代码：\r\n\r\n**lib/mongo.js**\r\n\r\n```\r\nexports.User = mongolass.model('User', {\r\n  name: { type: 'string' },\r\n  password: { type: 'string' },\r\n  avatar: { type: 'string' },\r\n  gender: { type: 'string', enum: ['m', 'f', 'x'] },\r\n  bio: { type: 'string' }\r\n});\r\nexports.User.index({ name: 1 }, { unique: true }).exec();// 根据用户名找到用户，用户名全局唯一\r\n```\r\n\r\n我们定义了用户表的 schema，生成并导出了 User 这个 model，同时设置了 name 的唯一索引，保证用户名是不重复的。\r\n\r\n> 小提示：关于 Mongolass 的 schema 的用法，请查阅 [another-json-schema](https://github.com/nswbmw/another-json-schema)。\r\n\r\n> 小提示：Mongolass 中的 model 你可以认为相当于 mongodb 中的 collection，只不过添加了插件的功能。\r\n\r\n## 4.7.2 注册页\r\n\r\n首先，我们来完成注册。新建 views/signup.ejs，添加如下代码：\r\n\r\n**views/signup.ejs**\r\n\r\n```\r\n<%- include('header') %>\r\n\r\n<div class=\"ui grid\">\r\n  <div class=\"four wide column\"></div>\r\n  <div class=\"eight wide column\">\r\n    <form class=\"ui form segment\" method=\"post\" enctype=\"multipart/form-data\">\r\n      <div class=\"field required\">\r\n        <label>用户名</label>\r\n        <input placeholder=\"用户名\" type=\"text\" name=\"name\">\r\n      </div>\r\n      <div class=\"field required\">\r\n        <label>密码</label>\r\n        <input placeholder=\"密码\" type=\"password\" name=\"password\">\r\n      </div>\r\n      <div class=\"field required\">\r\n        <label>重复密码</label>\r\n        <input placeholder=\"重复密码\" type=\"password\" name=\"repassword\">\r\n      </div>\r\n      <div class=\"field required\">\r\n        <label>性别</label>\r\n        <select class=\"ui compact selection dropdown\" name=\"gender\">\r\n          <option value=\"m\">男</option>\r\n          <option value=\"f\">女</option>\r\n          <option value=\"x\">保密</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"field required\">\r\n        <label>头像</label>\r\n        <input type=\"file\" name=\"avatar\">\r\n      </div>\r\n      <div class=\"field required\">\r\n        <label>个人简介</label>\r\n        <textarea name=\"bio\" rows=\"5\" v-model=\"user.bio\"></textarea>\r\n      </div>\r\n      <input type=\"submit\" class=\"ui button fluid\" value=\"注册\">\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<%- include('footer') %>\r\n```\r\n\r\n> 注意：form 表单要添加 `enctype=\"multipart/form-data\"` 属性才能上传文件。\r\n\r\n修改 routes/signup.js 中获取注册页的路由如下：\r\n\r\n**routes/signup.js**\r\n\r\n```\r\n// GET /signup 注册页\r\nrouter.get('/', checkNotLogin, function(req, res, next) {\r\n  res.render('signup');\r\n});\r\n```\r\n\r\n现在访问 `localhost:3000/signup` 看看效果吧。\r\n\r\n## 4.7.3 注册与文件上传\r\n\r\n我们使用 [express-formidable](https://www.npmjs.com/package/express-formidable) 处理 form 表单（包括文件上传）。修改 index.js ，在 `app.use(flash());` 下一行添加如下代码：\r\n\r\n**index.js**\r\n\r\n```\r\n// 处理表单及文件上传的中间件\r\napp.use(require('express-formidable')({\r\n  uploadDir: path.join(__dirname, 'public/img'),// 上传文件目录\r\n  keepExtensions: true// 保留后缀\r\n}));\r\n```\r\n\r\n新建 models/users.js，添加如下代码：\r\n\r\n**models/users.js**\r\n\r\n```\r\nvar User = require('../lib/mongo').User;\r\n\r\nmodule.exports = {\r\n  // 注册一个用户\r\n  create: function create(user) {\r\n    return User.create(user).exec();\r\n  }\r\n};\r\n```\r\n\r\n完善处理用户注册的路由，最终修改 routes/signup.js 如下：\r\n\r\n**routes/signup.js**\r\n\r\n```\r\nvar fs = require('fs');\r\nvar path = require('path');\r\nvar sha1 = require('sha1');\r\nvar express = require('express');\r\nvar router = express.Router();\r\n\r\nvar UserModel = require('../models/users');\r\nvar checkNotLogin = require('../middlewares/check').checkNotLogin;\r\n\r\n// GET /signup 注册页\r\nrouter.get('/', checkNotLogin, function(req, res, next) {\r\n  res.render('signup');\r\n});\r\n\r\n// POST /signup 用户注册\r\nrouter.post('/', checkNotLogin, function(req, res, next) {\r\n  var name = req.fields.name;\r\n  var gender = req.fields.gender;\r\n  var bio = req.fields.bio;\r\n  var avatar = req.files.avatar.path.split(path.sep).pop();\r\n  var password = req.fields.password;\r\n  var repassword = req.fields.repassword;\r\n\r\n  // 校验参数\r\n  try {\r\n    if (!(name.length >= 1 && name.length <= 10)) {\r\n      throw new Error('名字请限制在 1-10 个字符');\r\n    }\r\n    if (['m', 'f', 'x'].indexOf(gender) === -1) {\r\n      throw new Error('性别只能是 m、f 或 x');\r\n    }\r\n    if (!(bio.length >= 1 && bio.length <= 30)) {\r\n      throw new Error('个人简介请限制在 1-30 个字符');\r\n    }\r\n    if (!req.files.avatar.name) {\r\n      throw new Error('缺少头像');\r\n    }\r\n    if (password.length < 6) {\r\n      throw new Error('密码至少 6 个字符');\r\n    }\r\n    if (password !== repassword) {\r\n      throw new Error('两次输入密码不一致');\r\n    }\r\n  } catch (e) {\r\n    // 注册失败，异步删除上传的头像\r\n    fs.unlink(req.files.avatar.path);\r\n    req.flash('error', e.message);\r\n    return res.redirect('/signup');\r\n  }\r\n\r\n  // 明文密码加密\r\n  password = sha1(password);\r\n\r\n  // 待写入数据库的用户信息\r\n  var user = {\r\n    name: name,\r\n    password: password,\r\n    gender: gender,\r\n    bio: bio,\r\n    avatar: avatar\r\n  };\r\n  // 用户信息写入数据库\r\n  UserModel.create(user)\r\n    .then(function (result) {\r\n      // 此 user 是插入 mongodb 后的值，包含 _id\r\n      user = result.ops[0];\r\n      // 将用户信息存入 session\r\n      delete user.password;\r\n      req.session.user = user;\r\n      // 写入 flash\r\n      req.flash('success', '注册成功');\r\n      // 跳转到首页\r\n      res.redirect('/posts');\r\n    })\r\n    .catch(function (e) {\r\n      // 注册失败，异步删除上传的头像\r\n      fs.unlink(req.files.avatar.path);\r\n      // 用户名被占用则跳回注册页，而不是错误页\r\n      if (e.message.match('E11000 duplicate key')) {\r\n        req.flash('error', '用户名已被占用');\r\n        return res.redirect('/signup');\r\n      }\r\n      next(e);\r\n    });\r\n});\r\n\r\nmodule.exports = router;\r\n```\r\n\r\n> 注意：我们使用 sha1 加密用户的密码，sha1 并不是一种十分安全的加密方式，实际开发中可以使用更安全的 [bcrypt](https://www.npmjs.com/package/bcrypt) 或 [scrypt](https://www.npmjs.com/package/scrypt) 加密。\r\n> 注意：注册失败时（参数校验失败或者存数据库时出错）删除已经上传到 public/img 目录下的头像。\r\n\r\n为了方便观察效果，我们先创建主页的模板。修改 routes/posts.js 中对应代码如下：\r\n\r\n**routes/posts.js**\r\n\r\n```\r\nrouter.get('/', function(req, res, next) {\r\n  res.render('posts');\r\n});\r\n```\r\n\r\n新建 views/posts.ejs，添加如下代码：\r\n\r\n**views/posts.ejs**\r\n\r\n```\r\n<%- include('header') %>\r\n这是主页\r\n<%- include('footer') %>\r\n```\r\n\r\n访问 `localhost:3000/signup`，注册成功后如下所示：\r\n\r\n![](./img/4.7.1.png)\r\n\r\n上一节：[4.6 连接数据库](https://github.com/nswbmw/N-blog/blob/master/book/4.6%20%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93.md)\r\n\r\n下一节：[4.8 登出与登录](https://github.com/nswbmw/N-blog/blob/master/book/4.8%20%E7%99%BB%E5%87%BA%E4%B8%8E%E7%99%BB%E5%BD%95.md)",
        "category" : "xwzj",
        "postSummary" : "## 4.7.1 用户模型设计\r\n\r\n我们只存储用户的名称、密码（加密后的）、头像、性别和个人简介这几个字段，对应修改 lib/mongo.js，添加如下代码：\r\n\r\n**lib/mongo.js**...",
        "sub_category" : "nodejs",
        "img_url" : "",
        "tag" : "nodejs",
        "recommend" : false,
        "pv" : 4
    },

    /* 16 */
    {
        "_id" : ObjectId("5880471865ec7119e85a52c1"),
        "author" : "yujian666",
        "title" : "文章",
        "content" : "## 4.9.1 文章模型设计\r\n\r\n我们只存储文章的作者 id、标题、正文和点击量这几个字段，对应修改 lib/mongo.js，添加如下代码：\r\n\r\n**lib/mongo.js**\r\n\r\n```\r\nexports.Post = mongolass.model('Post', {\r\n  author: { type: Mongolass.Types.ObjectId },\r\n  title: { type: 'string' },\r\n  content: { type: 'string' },\r\n  pv: { type: 'number' }\r\n});\r\nexports.Post.index({ author: 1, _id: -1 }).exec();// 按创建时间降序查看用户的文章列表\r\n```\r\n\r\n## 4.9.2 发表文章\r\n\r\n现在我们来实现发表文章的功能。首先创建发表文章页，新建 views/create.ejs，添加如下代码：\r\n\r\n**views/create.ejs**\r\n\r\n```\r\n<%- include('header') %>\r\n\r\n<div class=\"ui grid\">\r\n  <div class=\"four wide column\">\r\n    <a class=\"avatar\"\r\n       href=\"/posts?author=<%= user._id %>\"\r\n       data-title=\"<%= user.name %> | <%= ({m: '男', f: '女', x: '保密'})[user.gender] %>\"\r\n       data-content=\"<%= user.bio %>\">\r\n      <img class=\"avatar\" src=\"/img/<%= user.avatar %>\">\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"eight wide column\">\r\n    <form class=\"ui form segment\" method=\"post\" action=\"/posts\">\r\n      <div class=\"field required\">\r\n        <label>标题</label>\r\n        <input type=\"text\" name=\"title\">\r\n      </div>\r\n      <div class=\"field required\">\r\n        <label>内容</label>\r\n        <textarea name=\"content\" rows=\"15\"></textarea>\r\n      </div>\r\n      <input type=\"submit\" class=\"ui button\" value=\"发布\">\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<%- include('footer') %>\r\n```\r\n\r\n新建 models/posts.js 用来存放与文章操作相关的代码：\r\n\r\n**models/posts.js**\r\n\r\n```\r\nvar Post = require('../lib/mongo').Post;\r\n\r\nmodule.exports = {\r\n  // 创建一篇文章\r\n  create: function create(post) {\r\n    return Post.create(post).exec();\r\n  }\r\n};\r\n```\r\n\r\n修改 routes/posts.js，在文件上方引入 PostModel：\r\n\r\n**routes/posts.js**\r\n\r\n```\r\nvar PostModel = require('../models/posts');\r\n```\r\n\r\n将：\r\n\r\n```\r\n// GET /posts/create 发表文章页\r\nrouter.get('/create', checkLogin, function(req, res, next) {\r\n  res.send(req.flash());\r\n});\r\n\r\n// POST /posts 发表一篇文章\r\nrouter.post('/', checkLogin, function(req, res, next) {\r\n  res.send(req.flash());\r\n});\r\n```\r\n\r\n修改为：\r\n\r\n```\r\n// GET /posts/create 发表文章页\r\nrouter.get('/create', checkLogin, function(req, res, next) {\r\n  res.render('create');\r\n});\r\n\r\n// POST /posts 发表一篇文章\r\nrouter.post('/', checkLogin, function(req, res, next) {\r\n  var author = req.session.user._id;\r\n  var title = req.fields.title;\r\n  var content = req.fields.content;\r\n\r\n  // 校验参数\r\n  try {\r\n    if (!title.length) {\r\n      throw new Error('请填写标题');\r\n    }\r\n    if (!content.length) {\r\n      throw new Error('请填写内容');\r\n    }\r\n  } catch (e) {\r\n    req.flash('error', e.message);\r\n    return res.redirect('back');\r\n  }\r\n\r\n  var post = {\r\n    author: author,\r\n    title: title,\r\n    content: content,\r\n    pv: 0\r\n  };\r\n\r\n  PostModel.create(post)\r\n    .then(function (result) {\r\n      // 此 post 是插入 mongodb 后的值，包含 _id\r\n      post = result.ops[0];\r\n      req.flash('success', '发表成功');\r\n      // 发表成功后跳转到该文章页\r\n      res.redirect(`/posts/${post._id}`);\r\n    })\r\n    .catch(next);\r\n});\r\n```\r\n\r\n现在访问 `localhost:3000/posts/create` 发表篇文章试试吧，发表成功后跳转到了文章页但并没有任何内容，下面我们就来实现文章页及主页。\r\n\r\n## 4.9.3 主页与文章页\r\n\r\n现在我们来实现主页及文章页。修改 models/posts.js 如下：\r\n\r\n**models/posts.js**\r\n\r\n```\r\nvar marked = require('marked');\r\nvar Post = require('../lib/mongo').Post;\r\n\r\n// 将 post 的 content 从 markdown 转换成 html\r\nPost.plugin('contentToHtml', {\r\n  afterFind: function (posts) {\r\n    return posts.map(function (post) {\r\n      post.content = marked(post.content);\r\n      return post;\r\n    });\r\n  },\r\n  afterFindOne: function (post) {\r\n    if (post) {\r\n      post.content = marked(post.content);\r\n    }\r\n    return post;\r\n  }\r\n});\r\n\r\nmodule.exports = {\r\n  // 创建一篇文章\r\n  create: function create(post) {\r\n    return Post.create(post).exec();\r\n  },\r\n\r\n  // 通过文章 id 获取一篇文章\r\n  getPostById: function getPostById(postId) {\r\n    return Post\r\n      .findOne({ _id: postId })\r\n      .populate({ path: 'author', model: 'User' })\r\n      .addCreatedAt()\r\n      .contentToHtml()\r\n      .exec();\r\n  },\r\n\r\n  // 按创建时间降序获取所有用户文章或者某个特定用户的所有文章\r\n  getPosts: function getPosts(author) {\r\n    var query = {};\r\n    if (author) {\r\n      query.author = author;\r\n    }\r\n    return Post\r\n      .find(query)\r\n      .populate({ path: 'author', model: 'User' })\r\n      .sort({ _id: -1 })\r\n      .addCreatedAt()\r\n      .contentToHtml()\r\n      .exec();\r\n  },\r\n\r\n  // 通过文章 id 给 pv 加 1\r\n  incPv: function incPv(postId) {\r\n    return Post\r\n      .update({ _id: postId }, { $inc: { pv: 1 } })\r\n      .exec();\r\n  }\r\n};\r\n```\r\n\r\n需要讲解两点：\r\n\r\n1. 我们使用了 markdown 解析文章的内容，所以在发表文章的时候可使用 markdown 语法（如插入链接、图片等等），关于 markdown 的使用请参考： [Markdown 语法说明](http://wowubuntu.com/markdown/)。\r\n2. 我们在 PostModel 上注册了 `contentToHtml`，而 `addCreatedAt` 是在 lib/mongo.js 中 mongolass 上注册的。\r\n\r\n接下来完成主页的模板，修改 views/posts.ejs 如下：\r\n\r\n**views/posts.ejs**\r\n\r\n```\r\n<%- include('header') %>\r\n\r\n<% posts.forEach(function (post) { %>\r\n  <%- include('components/post-content', { post: post }) %>\r\n<% }) %>\r\n\r\n<%- include('footer') %>\r\n```\r\n\r\n新建 views/components/post-content.ejs 用来存放单篇文章的模板片段：\r\n\r\n**views/components/post-content.ejs**\r\n\r\n```\r\n<div class=\"post-content\">\r\n  <div class=\"ui grid\">\r\n    <div class=\"four wide column\">\r\n      <a class=\"avatar\"\r\n         href=\"/posts?author=<%= post.author._id %>\"\r\n         data-title=\"<%= post.author.name %> | <%= ({m: '男', f: '女', x: '保密'})[post.author.gender] %>\"\r\n         data-content=\"<%= post.author.bio %>\">\r\n        <img class=\"avatar\" src=\"/img/<%= post.author.avatar %>\">\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"eight wide column\">\r\n      <div class=\"ui segment\">\r\n        <h3><a href=\"/posts/<%= post._id %>\"><%= post.title %></a></h3>\r\n        <pre><%- post.content %></pre>\r\n        <div>\r\n          <span class=\"tag\"><%= post.created_at %></span>\r\n          <span class=\"tag right\">\r\n            <span>浏览(<%= post.pv %>)</span>\r\n            <span>留言(<%= post.commentsCount %>)</span>\r\n\r\n            <% if (user && post.author._id && user._id.toString() === post.author._id.toString()) { %>\r\n              <div class=\"ui inline dropdown\">\r\n                <div class=\"text\"></div>\r\n                <i class=\"dropdown icon\"></i>\r\n                <div class=\"menu\">\r\n                  <div class=\"item\"><a href=\"/posts/<%= post._id %>/edit\">编辑</a></div>\r\n                  <div class=\"item\"><a href=\"/posts/<%= post._id %>/remove\">删除</a></div>\r\n                </div>\r\n              </div>\r\n            <% } %>\r\n\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n```\r\n\r\n> 注意：我们用了 `<%- post.content %>`，而不是 `<%= post.content %>`，因为 post.content 是 markdown 转换成的 html 字符串。\r\n\r\n修改 routes/posts.js，将：\r\n\r\n**routes/posts.js**\r\n\r\n```\r\nrouter.get('/', function(req, res, next) {\r\n  res.render('posts');\r\n});\r\n```\r\n\r\n修改为：\r\n\r\n```\r\nrouter.get('/', function(req, res, next) {\r\n  var author = req.query.author;\r\n\r\n  PostModel.getPosts(author)\r\n    .then(function (posts) {\r\n      res.render('posts', {\r\n        posts: posts\r\n      });\r\n    })\r\n    .catch(next);\r\n});\r\n```\r\n\r\n> 注意：主页与用户页通过 url 中的 author 区分。\r\n\r\n现在完成了主页与用户页，访问 `http://localhost:3000/posts` 试试吧，尝试点击用户的头像看看效果。\r\n\r\n接下来完成文章页。新建 views/post.ejs，添加如下代码：\r\n\r\n**views/post.ejs**\r\n\r\n```\r\n<%- include('header') %>\r\n<%- include('components/post-content') %>\r\n<%- include('footer') %>\r\n```\r\n\r\n打开 routes/posts.js，将：\r\n\r\n**routes/posts.js**\r\n\r\n```\r\n// GET /posts/:postId 单独一篇的文章页\r\nrouter.get('/:postId', function(req, res, next) {\r\n  res.send(req.flash());\r\n});\r\n```\r\n\r\n修改为：\r\n\r\n```\r\n// GET /posts/:postId 单独一篇的文章页\r\nrouter.get('/:postId', function(req, res, next) {\r\n  var postId = req.params.postId;\r\n\r\n  Promise.all([\r\n    PostModel.getPostById(postId),// 获取文章信息\r\n    PostModel.incPv(postId)// pv 加 1\r\n  ])\r\n  .then(function (result) {\r\n    var post = result[0];\r\n    if (!post) {\r\n      throw new Error('该文章不存在');\r\n    }\r\n\r\n    res.render('post', {\r\n      post: post\r\n    });\r\n  })\r\n  .catch(next);\r\n});\r\n```\r\n\r\n现在刷新浏览器，点击文章的标题看看浏览器地址的变化吧。\r\n\r\n## 4.9.4 编辑与删除文章\r\n\r\n现在我们来完成编辑与删除文章的功能。修改 models/posts.js，在 module.exports 对象上添加如下 3 个方法：\r\n\r\n**models/posts.js**\r\n\r\n```\r\n// 通过文章 id 获取一篇原生文章（编辑文章）\r\ngetRawPostById: function getRawPostById(postId) {\r\n  return Post\r\n    .findOne({ _id: postId })\r\n    .populate({ path: 'author', model: 'User' })\r\n    .exec();\r\n},\r\n\r\n// 通过用户 id 和文章 id 更新一篇文章\r\nupdatePostById: function updatePostById(postId, author, data) {\r\n  return Post.update({ author: author, _id: postId }, { $set: data }).exec();\r\n},\r\n\r\n// 通过用户 id 和文章 id 删除一篇文章\r\ndelPostById: function delPostById(postId, author) {\r\n  return Post.remove({ author: author, _id: postId }).exec();\r\n}\r\n```\r\n\r\n> 注意：不要忘了在适当位置添加逗号，如 incPv 的结束大括号后。\r\n\r\n> 注意：我们通过新函数 `getRawPostById` 用来获取文章原生的内容，而不是用 `getPostById` 返回将 markdown 转换成 html 后的内容。\r\n\r\n新建编辑文章页 views/edit.ejs，添加如下代码：\r\n\r\n**views/edit.ejs**\r\n\r\n```\r\n<%- include('header') %>\r\n\r\n<div class=\"ui grid\">\r\n  <div class=\"four wide column\">\r\n    <a class=\"avatar\"\r\n       href=\"/posts?author=<%= user._id %>\"\r\n       data-title=\"<%= user.name %> | <%= ({m: '男', f: '女', x: '保密'})[user.gender] %>\"\r\n       data-content=\"<%= user.bio %>\">\r\n      <img class=\"avatar\" src=\"/img/<%= user.avatar %>\">\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"eight wide column\">\r\n    <form class=\"ui form segment\" method=\"post\" action=\"/posts/<%= post._id %>/edit\">\r\n      <div class=\"field required\">\r\n        <label>标题</label>\r\n        <input type=\"text\" name=\"title\" value=\"<%= post.title %>\">\r\n      </div>\r\n      <div class=\"field required\">\r\n        <label>内容</label>\r\n        <textarea name=\"content\" rows=\"15\"><%= post.content %></textarea>\r\n      </div>\r\n      <input type=\"submit\" class=\"ui button\" value=\"发布\">\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<%- include('footer') %>\r\n```\r\n\r\n修改 routes/posts.js，将：\r\n\r\n**routes/posts.js**\r\n\r\n```\r\n// GET /posts/:postId/edit 更新文章页\r\nrouter.get('/:postId/edit', checkLogin, function(req, res, next) {\r\n  res.send(req.flash());\r\n});\r\n\r\n// POST /posts/:postId/edit 更新一篇文章\r\nrouter.post('/:postId/edit', checkLogin, function(req, res, next) {\r\n  res.send(req.flash());\r\n});\r\n\r\n// GET /posts/:postId/remove 删除一篇文章\r\nrouter.get('/:postId/remove', checkLogin, function(req, res, next) {\r\n  res.send(req.flash());\r\n});\r\n```\r\n\r\n修改为：\r\n\r\n```\r\n// GET /posts/:postId/edit 更新文章页\r\nrouter.get('/:postId/edit', checkLogin, function(req, res, next) {\r\n  var postId = req.params.postId;\r\n  var author = req.session.user._id;\r\n\r\n  PostModel.getRawPostById(postId)\r\n    .then(function (post) {\r\n      if (!post) {\r\n        throw new Error('该文章不存在');\r\n      }\r\n      if (author.toString() !== post.author._id.toString()) {\r\n        throw new Error('权限不足');\r\n      }\r\n      res.render('edit', {\r\n        post: post\r\n      });\r\n    })\r\n    .catch(next);\r\n});\r\n\r\n// POST /posts/:postId/edit 更新一篇文章\r\nrouter.post('/:postId/edit', checkLogin, function(req, res, next) {\r\n  var postId = req.params.postId;\r\n  var author = req.session.user._id;\r\n  var title = req.fields.title;\r\n  var content = req.fields.content;\r\n\r\n  PostModel.updatePostById(postId, author, { title: title, content: content })\r\n    .then(function () {\r\n      req.flash('success', '编辑文章成功');\r\n      // 编辑成功后跳转到上一页\r\n      res.redirect(`/posts/${postId}`);\r\n    })\r\n    .catch(next);\r\n});\r\n\r\n// GET /posts/:postId/remove 删除一篇文章\r\nrouter.get('/:postId/remove', checkLogin, function(req, res, next) {\r\n  var postId = req.params.postId;\r\n  var author = req.session.user._id;\r\n\r\n  PostModel.delPostById(postId, author)\r\n    .then(function () {\r\n      req.flash('success', '删除文章成功');\r\n      // 删除成功后跳转到主页\r\n      res.redirect('/posts');\r\n    })\r\n    .catch(next);\r\n});\r\n```\r\n\r\n现在刷新主页，点击文章右下角的小三角，编辑文章和删除文章试试吧。\r\n\r\n上一节：[4.8 登出与登录](https://github.com/nswbmw/N-blog/blob/master/book/4.8%20%E7%99%BB%E5%87%BA%E4%B8%8E%E7%99%BB%E5%BD%95.md)\r\n\r\n下一节：[4.10 留言](https://github.com/nswbmw/N-blog/blob/master/book/4.10%20%E7%95%99%E8%A8%80.md)",
        "category" : "qwzt",
        "postSummary" : "## 4.9.1 文章模型设计\r\n\r\n我们只存储文章的作者 id、标题、正文和点击量这几个字段，对应修改 lib/mongo.js，添加如下代码：\r\n\r\n**lib/mongo.js**\r\n\r\n```...",
        "sub_category" : "nodejs",
        "img_url" : "",
        "tag" : "nodejs",
        "recommend" : true,
        "pv" : 26
    }
]

var Utils = {
    getByProp: function getByProp(options) {
        if (options.data.length > 0) {
            var hasPropArr = [];
            for (var i = 0; i < options.data.length; i++) {
                var cur = options.data[i];
                if (cur[options.key] == options.val) {
                    hasPropArr.push(cur);
                }
            }
            // console.log('hasPropArr', hasPropArr);
            return hasPropArr;
        }
    },

    getSpecialNumObjs: function getSpecialNumObjs(options) {
        var arr = [];
        if (options.data.length && options.data.length > options.num) {
            for (var i = 0; i < options.num; i++) {
                arr.push(options.data[i])
            }
        } else {
            return options.data;
        }
        return arr;
    },
    // 获取当前分类排序后下当前文章的上一篇与下一篇
    getPrevAndNextPost: function getPrevPost(options) {
        if (options.data.length > 0) {
            var data = this.sortByProp({
                data: this.getByProp({
                    data: options.data,
                    key: options.category
                }),
                key: options.sortKey
            })
            var prevPostIndex = 0;
            var nextPostIndex = 1;
            for (var i = 0; i < data.length; i++) {
                var cur = data[i];
                if (cur[options._id] == options.val) {
                    prevPostIndex = i - 1;
                    nextPostIndex = i + 1;
                }
            }
            // console.log('hasPropArr', hasPropArr);
            return {
                prevPost: options.data[prevPostIndex],
                nextPost: options.data[nextPostIndex]
            };
        }
    },

    sortByProp: function sortByProp(options) {
        if (options.data.length && options.data.length > 0) {
            options.data.sort(function (a, b) {
                return a[options.key] - b[options.key];
            });
            return options.data;
        }
    },

    unique: function unique(options) {
        var res = [];
        var json = {};
        for (var i = 0; i < options.data.length; i++) {
            var cur = options.data[i];
            if (!json[cur[options.key]]) {
                res.push({tagName: cur[options.key]});
                json[cur[options.key]] = 1;
            }
        }
        return res;
    }
};

var results = {
    all: all,
    prevAndNextPost: Utils.getPrevAndNextPost({
        data: all,
        category: category,
        sortKey: 'pv',
        _id: postId
    }),
    // post: Utils.getByProp({data: all, key: '_id', val: postId})[0],
    post: result[1],
    sub_categories: Utils.getSpecialNumObjs({
        data: Utils.unique({
            data: Utils.sortByProp({
                data: Utils.getByProp({
                    data: all,
                    key: category
                }),
                key: 'pv'}),
            key: 'sub_category'
        }),
        num: 10
    }),
    recommends: Utils.getSpecialNumObjs({
        data: Utils.getByProp({data: all, key: 'recommend', val: true}),
        num: 8
    }),
    works: Utils.getSpecialNumObjs({
        data: Utils.getByProp({data: all, key: 'category', val: 'works'}),
        num: 5
    }),
    newests: Utils.getSpecialNumObjs({data: all, num: 13}),
    hotests: Utils.getSpecialNumObjs({
        data: Utils.sortByProp({data: all, key: 'pv'}),
        num: 5
    }),
    tags: Utils.getSpecialNumObjs({
        data: Utils.unique({
            data: Utils.sortByProp({data: all, key: 'pv'}),
            key: 'tag'
        }),
        num: 20
    })
}


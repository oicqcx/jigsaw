## 写文章的目的
平时我们可以写一些技术文章发布到社区中以求增加在社区中的曝光度的目的
- 介绍jigsaw的，包括：
    - Jigsaw的各种用法；
    - 绕过已知的坑；
    - 一些最佳使用实践推荐；
- 我们的设计思路、理念，主要说明为何这么做，为何不那么做等；
- 一些实施过程备忘文档，经验总结等；

## 约定
- 所有文章都放在docs目录下，并且全部使用markdown格式编写
- 创建一个独立的文件夹来存放每个文章，文件夹以英文命名且含义贴合其主要内容的名字，比如我这两天写的一个如何快速实现Array<T>接口的文章 _docs/implement-array-interface-of-typescript_ 单词直接尽量都采用小写
- 文章一般都是图文并茂，所有图片，都放在这个目录下。对于一些特别常用的图片，就放在`docs/image`下，比如我们公众号的二维码，几乎每个文章都可能用到
- 文章的主要内容，以`index.md`来命名，比如我上面提到的那个实现Array的文章 _docs/implement-Array-interface-of-typescript/index.md_ 这主要是为了后续把文章自动转为html挂到我们网站上考虑的
- 文章内部的超链接请**特别注意**：一律使用**明文**的方式，并且用尖括号包围起来
    - 正确的做法比如 `这个Breaking Change (<http://t.cn/RKLb9WS>)`  注意链接文字上没有方括号，链接加了尖括号。
    - 错误的做法比如 `[这个Breaking Change](<http://t.cn/RKLb9WS>)` 虽然这是markdown正常写超链的方式，但这是不对的。
    - 这主要是由于这些文章会发布到微信公众号上，微信公众号发布出来的文章上面的超链接会被全部去掉，写成后者的话，在微信上就找不到链接了。而写成前者，在网页上看可以直接点击链接，在微信上看，读者至少还能够拷贝链接文本
    - 文章需要引用很长的链接时，请使用短网址工具压缩一下，推荐使用这个 <http://dwz.wailian.work/>
- 署名请用这个格式 _你的大名@中兴RDK_
- 文章中，一定要尽可能多的提及RDK或者Jigsaw
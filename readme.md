# 开发原因
当前市面上的广告屏蔽插件已经非常丰富，其屏蔽的方法却都是穷举法：统计主流网页的那几个广告位置+广告div常用的id，然后通过插件进行屏蔽。如此就有以下几个弊端：
①小众网页中的一些特色广告无法被屏蔽。
②主流网页上广告的界定问题——一些div可能你认为是广告但插件没有屏蔽/一些你认为可以留下的活动推送被屏蔽了。
而本插件可以实现定制化的广告屏蔽。（当然也可以拿来屏蔽一些不是广告但你不想看到的div）

# 具体使用方法：
1. 油猴先新建一个脚本页面，把里面的内容完全清空，将DelAd.js文件的内容全选复制粘贴进去。
2. 保存后再打开任何网页，右上角都会出现一个半透明的按钮。
3. F12打开开发者工具，用箭头工具选中想要屏蔽的div，复制其id或class
4. 点击半透明按钮弹出输入框，将id或class粘贴进去，再次点击按钮即可完成屏蔽。

# 其它有点用的：
1. 本插件屏蔽的方式是将需要屏蔽的id/class作为localStorage.AdName的值存入localStorage，插件根据这些值对它们的div赋上style="display: none;"。如果失误将一些div屏蔽掉了，在开发者工具中-Application-localStorage中找到它，删除该条目即可。
2. 如果输入的是class，默认只屏蔽这个class的[0]。
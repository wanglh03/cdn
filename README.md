# js

所有网页应当引用 standard.js。

## standard.js

`addLoadEvent(func)`: 页面加载完毕执行 `func`
`insertAfter(newElement, targetElement)`: 在 `targetElement` 后添加 `newElement`
`addClass(element, value)`: 为 `element` 添加 `class = value`
`getNextElement(node)`: 获取 `node` 的下一个元素

## 函数

`highlightRows()`: 鼠标上浮高亮表格整行
`stripeTables()`: 给表格奇数行添加 `class = "table-odd"`，配合`highlightRows()`
`displayAbbreviations()`: 在网页底部显示 abbr
`displayCitations()`: 在 `<blockquote>` 后插入引用超链接
`styleElementSiblings(tag, className)`: 为 `tag` 后一个元素添加 `className`

## js 文件

`image_browsing.js`: 图片浏览

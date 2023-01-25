function styleElementSiblings(tag, className) {
  let el = document.getElementsByTagName(tag);
  for (let i = 0; i < el.length; i++) {
    let el = getNextElement(el[i].nextSibling);
    addClass(el, className);
  }
}

// 示例：
// addLoadEvent(
//   function () {
//     styleElementSiblings("h1", "intro");
//   }
// );
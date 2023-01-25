function styleElementSiblings(tag, className) {
  let headers = document.getElementsByTagName(tag);
  for (let i = 0; i < headers.length; i++) {
    let el = getNextElement(headers[i].nextSibling);
    addClass(el, className);
  }
}

addLoadEvent(
  function () {
    styleElementSiblings("h1", "intro");
  }
);
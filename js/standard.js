function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function addLoadEvent(func) {
    let oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        }
    }
}

function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function isEmptyObj(obj) {
    for (let p in obj) return false;
    return true;
}

function getOffset(el) {
    let parent = el.offsetParent,
        left = el.offsetLeft,
        top = el.offsetTop;

    while (parent !== null) {
        left += parent.offsetLeft;
        top += parent.offsetTop;
        parent = parent.offsetParent;
    }

    return {
        left: left,
        top: top
    };
}
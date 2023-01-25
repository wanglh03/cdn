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

function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        element.className = `${element.className} ${value}`;
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
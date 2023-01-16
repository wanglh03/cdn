document.write(`
    <h1>${document.title}</h1>
    <p>
    <b><a href="./">返回上级目录</a></b>。
    原图若较大，大图加载可能较慢。
    &nbsp;&nbsp;<b>缩略图</b>：<img id="thumb" src=""" width=" 100" height="100">
    </p>
    <div class="box">
    <button id="minus" onclick="minusContent()">上一页</button>
    第<input type="text" id="content" value="1" style="width: 60px">页
    <button id="display-image" onclick="displayImage()">跳转</button>
    <button id="plus" onclick="plusContent()">下一页</button>
    </div>
    <img id="original" src="" onerror=displayImage() > `
);

function plusContent() {
    let content = document.getElementById('content').value;
    if (content >= maximumPage) {
        showIllegalContent();
    } else {
        content++;
    }
    document.getElementById('content').value = content;
    displayImage();
}

function minusContent() {
    let content = document.getElementById('content').value;
    if (content <= 1) {
        showIllegalContent();
    } else {
        content--;
    }
    document.getElementById('content').value = content;
    displayImage();
}

function showIllegalContent() {
    alert(`出错了！页面应该介于 1 到 ${maximumPage} 页！`);
}

function displayImage() {
    let content = document.getElementById('content').value;
    if (content < 1 || content > maximumPage) {
        showIllegalContent();
    } else {
        document.images.original.src = "";
        let content = document.getElementById('content').value;
        let url = ` (${content}).${fileType}`;
        document.images.thumb.src = `${relativeDir}thumb/${url}`;
        document.images.original.src = `${relativeDir}${url}`;
    }
}
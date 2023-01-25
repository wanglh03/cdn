function displayAbbreviations() {
    // get all the abbreviations
    // 取得所有abbr
    let abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    let defs = new Array();
    // loop through the abbreviations
    // 遍历这些abbr
    for (let i = 0; i < abbreviations.length; i++) {
        let currentAbbr = abbreviations[i];
        let definition = currentAbbr.getAttribute("title");
        let key = currentAbbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    let defList = document.createElement("dl"); // 创建定义列表
    // loop through the definitions
    //遍历定义
    for (key in defs) {
        let definition = defs[key];
        // create the definition title
        // 创建定义标题
        let defTitle = document.createElement("dt");
        let defTitleText = document.createTextNode(key);
        defTitle.appendChild(defTitleText);
        // create the definition description
        // 创建定义描述
        let defDescription = document.createElement("dd");
        let defDescriptionText = document.createTextNode(definition);
        defDescription.appendChild(defDescriptionText);
        // add them to the definition list
        // 把它们添加到定义列表
        defList.appendChild(defTitle);
        defList.appendChild(defDescription);
    }
    // create a headline
    // 创建标题
    let header = document.createElement("h2");
    let headerText = document.createTextNode("Abbreviations");
    header.appendChild(headerText);
    document.body.appendChild(header);// 把标题添加到页面主体
    document.body.appendChild(defList);// 把定义列表添加到页面主体
}

addLoadEvent(displayAbbreviations);
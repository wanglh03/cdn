function displayCitations() {
  // get all the blockquotes
  let quotes = document.getElementsByTagName("blockquote");
  // loop through all the blockquotes
  for (let i = 0; i < quotes.length; i++) {
    // if there is no cite attribute, continue the loop
    if (!quotes[i].hasAttribute("cite")) continue;
    // store the cite attribute
    let url = quotes[i].getAttribute("cite");
    // get all the element nodes in the blockquote
    let quoteChildren = quotes[i].getElementsByTagName('*');
    // if there are no element node, continue the loop
    if (quoteChildren.length < 1) continue;
    // get the last element node in the blockquote
    let el = quoteChildren[quoteChildren.length - 1];
    // create the markup
    let link = document.createElement("a");
    let linkText = document.createTextNode("source");
    link.appendChild(linkText);
    link.href = url;
    let superscript = document.createElement("sup");
    superscript.appendChild(link);
    // add the markup to the last element node in the blockquote
    el.appendChild(superscript);
  }
}

addLoadEvent(displayCitations);
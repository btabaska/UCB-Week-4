var images = document.getElementsByTagName("img");
var link = document.getElementsByTagName("a");

for (i = 0; i < images.length; i++) {
  setImage(images[i], i);
}

function setImage(item, index) {
  item.setAttribute(
    "src",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
  );

  item.setAttribute("alt", "A picture of fruit");

  item.style.margin = "50px";
}

for (i = 0; i < link.length; i++) {
  setLink(link[i], i);
}
function setLink(item, index) {
  item.setAttribute(
    "href",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
  );
}

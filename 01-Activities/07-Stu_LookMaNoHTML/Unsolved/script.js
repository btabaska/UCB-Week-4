// Create your HTML Page via DOM Methods here!
var mainHeader = document.createElement("H1");
var mainHeaderText = document.createTextNode("This is a main title");
var subHeader = document.createElement("H2");
var subHeaderText = document.createTextNode("This is a sub title");
var centerImage = document.createElement("img");
var centerImageCaption = document.createElement("h4");
var centerImageCaptionText = document.createTextNode("This is a caption");
var favoriteFoodList = document.createElement("ol");
var favoriteFoodListText = document.createTextNode(
  "These are my favorite foods"
);

var favoriteFoodArray = ["sushi", "tacos", "curry", "pizza", "sushi again"];

subHeader.appendChild(subHeaderText);
mainHeader.appendChild(mainHeaderText);
centerImageCaption.appendChild(centerImageCaptionText);
favoriteFoodList.appendChild(favoriteFoodListText);

centerImage.setAttribute(
  "src",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
);

document.body.appendChild(mainHeader);
document.body.appendChild(subHeader);
document.body.appendChild(centerImage);
document.body.appendChild(centerImageCaption);
document.body.appendChild(favoriteFoodList);

favoriteFoodArray.forEach(favoriteFoodListAppend);

function favoriteFoodListAppend(item, index) {
  var created = document.createElement("li");
  var createdText = document.createTextNode(item);

  created.appendChild(createdText);

  favoriteFoodList.appendChild(created);
}

document.body.style.textAlign = "Center";

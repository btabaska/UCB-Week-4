var selectEl = document.querySelector("#typeface");
var h1El = document.querySelector("#textFun");

var typeface = "";
selectEl.addEventListener("change", function (event) {
  event.preventDefault();
  console.log(selectEl.value);

  h1El.style.fontFamily = selectEl.value;
});

document.addEventListener("keydown", function (event) {
  console.log(event.key);
});

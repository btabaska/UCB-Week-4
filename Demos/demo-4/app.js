var outerDiv = document.querySelector(".outer-div");
var innerDiv = document.querySelector(".inner-div");
var mostInnerDiv = document.querySelector(".most-inner-div");

console.log("hello");

outerDiv.addEventListener("click", function (event) {
  console.log("hello from the outer div");
  event.stopPropagation();
});

innerDiv.addEventListener("click", function (event) {
  console.log("hello from the inner div");
  event.stopPropagation();
});

mostInnerDiv.addEventListener("click", function (event) {
  console.log("hello from the most inner div");
  event.stopPropagation();
});

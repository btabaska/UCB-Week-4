var myImg = document.querySelector("#myImg");

var stateAttr = myImg.getAttribute("data-state");
var animateAddress = myImg.getAttribute("data-animate");
var stillAddress = myImg.getAttribute("data-still");

myImg.addEventListener("click", function () {
  if (stateAttr === "still") {
    console.log("This should now animate");
    stateAttr = "animate";
    myImg.setAttribute("src", animateAddress);
  } else {
    console.log("This should now be still");
    stateAttr = "still";
    myImg.setAttribute("src", stillAddress);
  }
});

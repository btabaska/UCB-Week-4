var inputForm = document.querySelector("#inputForm");
var inputText = document.querySelector("#inputText");
var userVisit = document.querySelector("#userVisit");

inputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var userInput = inputText.value;

  // Sets local storage with key = userName and value = to the users input
  window.localStorage.setItem("userName", userInput);
});

// Get something from local storage with key username
var lastUser = window.localStorage.getItem("userName");

if (lastUser === null) {
  userVisit.textContent = "enter text";
} else {
  userVisit.textContent = lastUser;
}

var number = 10;
window.localStorage.setItem("num", number);
var numFromStorage = parseInt(window.localStorage.getItem("num"));

numFromStorage += 20;

console.log(numFromStorage);

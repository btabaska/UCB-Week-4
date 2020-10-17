var formInput = document.querySelector("#formInput");
var textInput = document.querySelector("#textInput");
var pwInput = document.querySelector("#pwInput");

formInput.addEventListener("submit", function (e) {
  e.preventDefault();
  var userObject = {
    name: textInput.value,
    password: pwInput.value,
  };
  window.localStorage.setItem("user", JSON.stringify(userObject));
});

var userReturnedObject = JSON.parse(window.localStorage.getItem("user"));

console.log(userReturnedObject);

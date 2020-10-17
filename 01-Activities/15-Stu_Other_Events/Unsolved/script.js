var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");
var keyEl = document.querySelector("#key");
var codeEl = document.querySelector("#code");
var statusEl = document.querySelector("#status");
var xEl = document.querySelector("#x");
var yEl = document.querySelector("#y");
var targetEl = document.querySelector("#target");

eventType.addEventListener("change", toggleDisplay);

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  } else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  keyEl.textContent = event.key;
  codeEl.textContent = event.code;
  statusEl.textContent = "Keydown";
});

document.addEventListener("keyup", function (event) {
  event.preventDefault();
  keyEl.textContent = event.key;
  codeEl.textContent = event.code;
  statusEl.textContent = "Keyup";
});

document.addEventListener("click", function (event) {
  event.preventDefault();
  xEl.textContent = event.clientX;
  yEl.textContent = event.clientY;
  targetEl.textContent = event.target.textContent;
});

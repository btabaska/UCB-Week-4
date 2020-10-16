var userSubmit = document.querySelector("#userSubmit")
var userText = document.querySelector("#userText")
var textList = document.querySelector('#textList')
userSubmit.addEventListener("click", function (e) {
  e.preventDefault()
  var li = document.createElement("li")
  li.textContent = userText.value
  textList.appendChild(li)
})
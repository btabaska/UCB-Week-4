var element = document.getElementById("articles");

element.style.fontSize = "50px";
document.getElementById("articles").lastElementChild.style.color = "blue";
document.getElementById("articles").firstElementChild.style.color = "blue";
document.getElementById(
  "articles"
).previousElementSibling.style.backgroundColor = "black";

var main = document.getElementById("main");

main.childNodes[1].style.textDecoration = "underline";
console.log(element.lastElementChild);
main.lastElementChild.style.fontSize = "50px";
main.firstElementChild.style.color = "orange";
main.lastElementChild.parentElement.style.fontSize = "40px";

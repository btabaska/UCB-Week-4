var decrementBtn = document.querySelector("#decrement")
var incrementBtn = document.querySelector("#increment")
var countHTML = document.querySelector("#count")
count = 0;

console.log(incrementBtn)

decrementBtn.addEventListener("click", function () {
    if (count > 0) {
        count--
        countHTML.innerHTML = count
    }
})

incrementBtn.addEventListener("click", function () {
    count += 1
    countHTML.innerHTML = count
})

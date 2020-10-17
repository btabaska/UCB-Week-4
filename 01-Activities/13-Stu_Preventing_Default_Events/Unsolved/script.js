var userMeatCost = document.querySelector("#userMeatCost");
var userTipPercentage = document.querySelector("#userTipPercentage");
var submit = document.querySelector("#submit");
var tipAmount = document.querySelector("#tip-amount");
var newTotal = document.querySelector("#new-total");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  calculatedTipAmount = userMeatCost.value * (userTipPercentage.value / 100);
  tipAmount.textContent = calculatedTipAmount.toFixed(2);
  newTotal.textContent = (
    parseFloat(userMeatCost.value) + parseFloat(calculatedTipAmount)
  ).toFixed(2);
});

function calculateTip() {
  const billAmount = parseFloat(document.getElementById("bill").value);
  const tipPercentage = parseFloat(document.getElementById("tip").value);
  const result = document.getElementById("result");

  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    result.textContent = "Please enter valid numbers.";
    result.style.color = "red";
    return;
  }

  const tipAmount = billAmount * (tipPercentage / 100);
  const total = billAmount + tipAmount;

  result.innerHTML = `Tip: $${tipAmount.toFixed(2)}<br>Total: $${total.toFixed(2)}`;
  result.style.color = "green";
}

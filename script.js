document.getElementById("calculateBtn").addEventListener("click", function () {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const tip = parseFloat(document.getElementById("tipPercent").value);
  const result = document.getElementById("result");

  if (isNaN(bill) || isNaN(tip)) {
    result.textContent = "Please enter valid numbers.";
    result.style.color = "red";
    return;
  }

  const tipAmount = (bill * tip) / 100;
  const total = bill + tipAmount;

  result.textContent = `Tip: $${tipAmount.toFixed(2)} | Total: $${total.toFixed(2)}`;
  result.style.color = "green";
});

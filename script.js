function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercentage = parseFloat(document.getElementById("tip").value);
  const result = document.getElementById("result");

  if (isNaN(bill) || isNaN(tipPercentage)) {
    result.textContent = "Please enter valid numbers.";
    result.style.color = "red";
    return;
  }

  const tipAmount = (bill * tipPercentage) / 100;
  const total = bill + tipAmount;

  result.innerHTML = `
    Tip Amount: $${tipAmount.toFixed(2)} <br>
    Total Amount: $${total.toFixed(2)}
  `;
  result.style.color = "green";
}

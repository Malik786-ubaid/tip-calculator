function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(bill) || isNaN(tipPercent)) {
    resultDiv.textContent = "Please enter valid numbers.";
    resultDiv.style.color = "red";
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;

  resultDiv.innerHTML = `
    Tip Amount: $${tipAmount.toFixed(2)}<br>
    Total Bill: $${total.toFixed(2)}
  `;
  resultDiv.style.color = "green";
}

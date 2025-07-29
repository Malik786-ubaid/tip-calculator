function calculateTip() {
  const billAmount = parseFloat(document.getElementById("bill").value);
  const tipPercentage = parseFloat(document.getElementById("tip").value);

  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    document.getElementById("result").innerText = "Please enter valid inputs.";
    return;
  }

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

  document.getElementById("result").innerText = 
    `Tip: $${tipAmount.toFixed(2)}\nTotal: $${totalAmount.toFixed(2)}`;
}

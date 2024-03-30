// Swap input placeholders and values
document.getElementById('swapArrow').addEventListener('click', function() {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
  
    // Update placeholder of first input field when swapped
    if (fromCurrency.value === "USD") {
        document.getElementById('fromAmount').placeholder = "Enter amount in USD";
    } else {
        document.getElementById('fromAmount').placeholder = "Enter amount in CAD";
    }
  
    convertCurrency(); // Update converted amount after swapping
  });
  
  function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const fromAmount = parseFloat(document.getElementById('fromAmount').value);
  
    // Exchange rates (for demonstration)
    const usdToCadRate = 1.31;
    const cadToUsdRate = 1 / usdToCadRate;
  
    let convertedAmount;
    if (fromCurrency === 'USD' && toCurrency === 'CAD') {
        convertedAmount = fromAmount * usdToCadRate;
    } else if (fromCurrency === 'CAD' && toCurrency === 'USD') {
        convertedAmount = fromAmount * cadToUsdRate;
    } else {
        // If the same currency is selected in both dropdowns
        convertedAmount = fromAmount;
    }
  
    if (fromAmount < 0 || isNaN(fromAmount)) {
        
        document.getElementById('errorMessage').textContent= 'Pleae enter valid amount';
        document.getElementById('toAmount').value = '';
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('toAmount').value = convertedAmount.toFixed(2);
    }
  }
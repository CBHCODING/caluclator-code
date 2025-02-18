function calculatePaycheck() {
    let grossPay = parseFloat(document.getElementById("grossPay").value) || 0;
    let payPeriods = parseInt(document.getElementById("payPeriods").value) || 1;
    let ulPremium = parseFloat(document.getElementById("ulPremium").value) || 0;
    let taxRate = parseFloat(document.getElementById("taxRate").value) / 100 || 0.0765;
    
    let preTaxContribution = 150 * 12 / payPeriods;
    let phpFee = 30 * 12 / payPeriods;
    
    let taxSavings = preTaxContribution * taxRate;
    let adjustedGrossPay = grossPay - preTaxContribution;
    let adjustedPayAfterTaxes = adjustedGrossPay * (1 - taxRate);
    let finalPaycheck = adjustedPayAfterTaxes - ulPremium;
    
    document.getElementById("preTaxPerPay").textContent = preTaxContribution.toFixed(2);
    document.getElementById("taxSavings").textContent = taxSavings.toFixed(2);
    document.getElementById("phpFee").textContent = phpFee.toFixed(2);
    document.getElementById("adjustedGrossPay").textContent = adjustedGrossPay.toFixed(2);
    document.getElementById("adjustedPayAfterTaxes").textContent = adjustedPayAfterTaxes.toFixed(2);
    document.getElementById("finalPaycheck").textContent = finalPaycheck.toFixed(2);
}
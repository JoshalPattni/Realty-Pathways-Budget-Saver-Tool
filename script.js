function calculateResults() {
    const grossIncome = document.getElementById('gross-income').value;
    const totalDebts = parseFloat(document.getElementById('car-loans').value) +
                       parseFloat(document.getElementById('credit-cards').value) +
                       parseFloat(document.getElementById('student-loans').value);
    const housingExpenses = parseFloat(document.getElementById('property-tax').value) +
                            parseFloat(document.getElementById('insurance').value) +
                            parseFloat(document.getElementById('pmi').value) +
                            parseFloat(document.getElementById('hoa-fees').value);
    const availableFunds = parseFloat(document.getElementById('available-funds').value);

    const netIncome = grossIncome - totalDebts - housingExpenses;

    document.getElementById('calculation-output').innerHTML = `Net Income after debts and housing expenses: £${netIncome.toFixed(2)}`;
    
    const tips = "Maximize contributions to your savings account, consider refinancing high-interest debts, and review your monthly budget to find additional savings.";
    document.getElementById('tips').innerText = tips;
}

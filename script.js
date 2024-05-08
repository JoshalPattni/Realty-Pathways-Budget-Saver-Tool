function calculate() {
    // Fetch values from input
    let grossIncome = parseFloat(document.getElementById("gross-income").value);
    let monthlyDebts = parseFloat(document.getElementById("monthly-debts").value);
    let monthlyExpenses = parseFloat(document.getElementById("monthly-expenses").value);
    let availableFunds = parseFloat(document.getElementById("available-funds").value);

    // Example calculation: Simple addition (You can add more complex calculations)
    let totalExpenses = monthlyDebts + monthlyExpenses;
    let netIncome = grossIncome - totalExpenses - availableFunds;

    // Display result
    document.getElementById("result").innerText = `Net Income after expenses and funds: £${netIncome}`;
}

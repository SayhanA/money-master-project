console.log('Table.js is connected')

document.getElementById('saving-btn').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const nameFieldInnerText = nameField.value;

    const incomeField = btnCalculate('input-field');

    const expenses = document.getElementById('expenses');
    const expensesStringValue = expenses.innerText;

    const savingAmount = document.getElementById('saving-amount');
    const savingsAmountString = savingAmount.innerText;

    const remainingAmount = document.getElementById('remaining-amount');
    const remainingAmountString = remainingAmount.innerText;

    const table = document.getElementById('second-table');

    const tr = document.createElement('tr')


    tr.innerHTML = `
        <td>${nameFieldInnerText}</td>
        <td>${incomeField}</td>
        <td>${expensesStringValue}</td>
        <td>${savingsAmountString}</td>
        <td>${remainingAmountString}</td>
    `
    table.appendChild(tr)
    console.log(table.innerHTML)
})
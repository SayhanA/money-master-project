function btnCalculate(idField){
    const nameField = document.getElementById(idField);
    const nameFieldValue = parseInt(nameField.value);
    if(isNaN(nameFieldValue)){
        alert('Please type a number')
    }
    else{
        return nameFieldValue
    }
    return nameFieldValue
}

document.getElementById('btn-calculate').addEventListener('click',function(){
    const incomeField = btnCalculate('input-field');
    const foodField = btnCalculate('food-field');
    const rentField = btnCalculate('rent-field');
    const clothesField = btnCalculate('cloths-field');

    

    const expenseTotal = foodField + rentField + clothesField;
    const remainingCost = incomeField - expenseTotal;
    if(remainingCost>0){
        document.getElementById('expenses').innerText = expenseTotal;
        document.getElementById('balance').innerText = remainingCost;
    }
    return remainingCost;
})

function saveMoney(){
    const saveField = btnCalculate('save-field');
    if((saveField-100)<0){
        const savedAmount = ((document.getElementById('balance').innerText) * saveField)/100;
        document.getElementById('saving-amount').innerText = savedAmount;
        document.getElementById('remaining-amount').innerText = (document.getElementById('balance').innerText) - savedAmount;
    }
    else{
        alert('Please type a valid Percentage(%)')
    }
}
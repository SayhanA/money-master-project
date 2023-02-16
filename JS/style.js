function btnCalculate(idField){
    const nameField = document.getElementById(idField);
    const nameFieldValue = parseInt(nameField.value);
    if(isNaN(nameFieldValue)){
        const name =nameField.parentNode.parentNode.children[0].innerText;
        // alert('(' +name + ')'+ ' ' +'input will be a number',"success")
        swal('(' +name + ')'+ ' ' +'is not a number', "please input a number");
        document.getElementById(idField).value = ''
    }
    else{
        const splitNaveFieldValues = nameField.value.split('');
        for(const splitNaveFieldValue of splitNaveFieldValues ){
            const name =nameField.parentNode.parentNode.children[0].innerText;
            if(isNaN(splitNaveFieldValue)){
                document.getElementById(idField).value = ''
                swal('(' +name + ')'+ ' ' +'is not a number', "please input a number");
            }
            else{
                console.log(false)
            }
        }
        return nameFieldValue
    }
    return nameFieldValue;  
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
        document.getElementById('saving-amount').innerText = parseFloat(savedAmount).toFixed(2);
        document.getElementById('remaining-amount').innerText = parseFloat((document.getElementById('balance').innerText) - savedAmount).toFixed(2);
    }
    else{
        document.getElementById('save-field').value = '';
    }
}


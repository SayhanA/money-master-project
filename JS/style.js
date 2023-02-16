
function input1(inputId){
    document.getElementById(inputId).addEventListener('keydown',function(){
            const userEmail = document.getElementById(inputId)
            const userEmailString = userEmail.value;
            console.log(userEmailString);
            const split = userEmailString.split(' ')
            console.log(split)
            let splitLength = split.length;
            if(splitLength == 1){               
            }
            else{
                document.getElementById(inputId).style.backgroundColor ="pink"
                document.getElementById(inputId).style.color ="Red"
                document.getElementById(inputId).style.border ="1px solid red"
                document.getElementById(inputId).style.outline ="1px solid red"              
            }
        })
}
const incomeField = input1('input-field');
const foodField = input1('food-field');
const rentField = input1('rent-field');
const clothesField = input1('cloths-field');   




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

document.getElementById('saving-btn').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const nameFieldInnerText = nameField.value;
    console.log(nameFieldInnerText)

    const incomeField = btnCalculate('input-field');
    console.log(incomeField);

    const expenses = document.getElementById('expenses');
    const expensesStringValue = expenses.innerText;
    console.log(expensesStringValue);

    const savingAmount = document.getElementById('saving-amount');
    const savingsAmountString = savingAmount.innerText;
    console.log(savingsAmountString)

    const remainingAmount = document.getElementById('remaining-amount');
    const remainingAmountString = remainingAmount.innerText;
    console.log(remainingAmountString)

    const table = document.getElementById('second-table');

    const tr = document.createElement('tr')
    console.log(tr)

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
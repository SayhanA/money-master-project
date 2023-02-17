console.log('Table.js is connected')

document.getElementById('saving-btn').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const nameFieldInnerText = nameField.value;

    const incomeField = btnCalculate('input-field');

    const expenses = document.getElementById('expenses');
    const expensesStringValue = expenses.innerText;

    const balance = document.getElementById('balance');
    const balanceStringValue = balance.innerText;

    const savingAmount = document.getElementById('saving-amount');
    const savingsAmountString = savingAmount.innerText;

    const remainingAmount = document.getElementById('remaining-amount');
    const remainingAmountString = remainingAmount.innerText;

    const table = document.getElementById('second-table');

    const tr = document.createElement('tr')


    tr.innerHTML = `
        <td class="new">${nameFieldInnerText}</td>
        <td>${incomeField}</td>
        <td>${expensesStringValue}</td>
        <td>${balanceStringValue}</td>
        <td>${savingsAmountString}</td>
        <td>${remainingAmountString}</td>
    `
    table.appendChild(tr);

    function call(){
         // input Field value removing
    nameField.value=''
    document.getElementById('input-field').value = ''
    document.getElementById('food-field').value = ''
    document.getElementById('rent-field').value = ''
    document.getElementById('cloths-field').value = ''
    document.getElementById('save-field').value = ''

    // innerText value removing
    expenses.innerText = ''
    balance.innerText = ''
    savingAmount.innerText = ''
    remainingAmount.innerText = ''
    }

    // // input Field value removing
    // nameField.value=''
    // document.getElementById('input-field').value = ''
    // document.getElementById('food-field').value = ''
    // document.getElementById('rent-field').value = ''
    // document.getElementById('cloths-field').value = ''
    // document.getElementById('save-field').value = ''

    // // innerText value removing
    // expenses.innerText = ''
    // balance.innerText = ''
    // savingAmount.innerText = ''
    // remainingAmount.innerText = ''


    // remove duplicate Name form the list
    const newUser = []
        
    const nameLists = []
    const lists = document.querySelectorAll('.new');
    for(i = 0; i<lists.length; i++){
        const InputUsers = lists[i].innerText;
        if(nameLists.includes(InputUsers)){           
            alert ("User is already Exist")
            alert("Please inter New user")
            nameLists.push(InputUsers)
            console.log(lists[i].parentNode.classList.add('hidden'))
            call()
        }
        else{
            nameLists.push(InputUsers)
            console.log(lists[i].parentNode)
        }
    }
    console.log(nameLists.parents)

})
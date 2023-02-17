function btnCalculate(idField){
    const nameField = document.getElementById(idField);
    const nameFieldValue = parseInt(nameField.value);
    if(isNaN(nameFieldValue)){
        const name =nameField.parentNode.parentNode.children[0].innerText;
        alert('(' +name + ')'+ ' ' +'input will be a number',"success")
        // swal('(' +name + ')'+ ' ' +'is not a number', "please input a number");
        document.getElementById(idField).value = ''
    }
    else{
        const splitNaveFieldValues = nameField.value.split('');
        for(const splitNaveFieldValue of splitNaveFieldValues ){
            const name =nameField.parentNode.parentNode.children[0].innerText;
            if(isNaN(splitNaveFieldValue)){
                document.getElementById(idField).value = '';
                document.getElementById(idField).focus()
                // swal('(' +name + ')'+ ' ' +'is not a number', "please input a number");
                alert('(' +name + ')'+ ' ' +'input will be a number')
                console.log(document.getElementById(idField).classList)
                console.log(document.getElementById(idField).classList.replace('input-error','input-success')) 
                console.log(document.getElementById(idField).classList)
            }
            else{

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
    else{
        alert('cut your coat according to your cloth')
        return 
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
        if(saveField === 100){
            return alert('You can not save 100% of Your BalanceF')
        }
        else{
            return alert('Please a type a valid percentage(%)')
        }
    }
}


/* ---------------------------input character spell checker starts here------------------------------*/
function input1(inputId){
    document.getElementById(inputId).addEventListener('keyup',function(){
            const userEmail = document.getElementById(inputId)
            const userEmailString = userEmail.value;
            const split = userEmailString.split(' ');
            // console.log(split)

            // character(NaN) finding section starts
            const stringCharacter = userEmailString[userEmailString.length - 1]
            const firstCharacter =  parseInt(userEmailString[0])
            // character(NaN) finding section ends

            let splitLength = split.length;
            if(splitLength == 1 && isNaN(parseInt(stringCharacter)) == false && isNaN(firstCharacter) === false){   
                console.log(document.getElementById(inputId).classList.replace('input-error','input-primary'))            
            }
            else{
                console.log(document.getElementById(inputId).classList.add("input-error"))              
            }
        })
}
const incomeField = input1('input-field');
const foodField = input1('food-field');
const rentField = input1('rent-field');
const clothesField = input1('cloths-field');   
const saveField = input1('save-field');   

/* ---------------------------input character spell checker ends here------------------------------*/
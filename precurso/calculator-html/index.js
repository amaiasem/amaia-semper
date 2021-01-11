const screenHistory = document.getElementById("history");
const screenResult = document.getElementById("result");


let history = [];
let joinHistory = "";
let finalResult= "";
let operation;
let operationTrue = false;
let decimalTrue = false;

showResult();
function showResult(){
    if(history.length === 0){
        screenHistory.innerText = '';
        screenResult.innerText = 0;
    }else{
        showHistory(history);
        finalResult = eval(joinHistory);
        screenResult.innerText = Math.round(finalResult*1000)/1000;

    }
}

function showHistory(history){
    joinHistory = history.join('');
    screenHistory.innerText = joinHistory;
}


const numbersButtons = document.getElementsByClassName("number");
for(let i = 0; i < numbersButtons.length; i++){
    numbersButtons[i].addEventListener('click', function (){
        const num = this.id;
        if(history.length === 11){
            return;
        }else if(num === '.'){
            if(history.length === 0){
                history.push('0');
                history.push(num);
                decimalTrue = true;
                showResult();
            }else if (decimalTrue){
                return;
            }else{
                  history.push(num);
                  decimalTrue = true;
                  showResult();
            }
        }else{
            history.push(num);
            showResult();
        }
    })
}


const operatorButtons = document.getElementsByClassName("operator");
for(let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click', function() { 
        operation = this.id;

        switch(operation){
            case 'AC':
                allClear();
                break;
            case 'delete':
                deleteLast();
                break;
            case 'equal':
                equal();
                break;
            default:
                operand(operation);
                showResult();
                
        }
    })
    
}   

function allClear(){
    operationTrue = false;
    decimalTrue = false;
    history = [];
    showResult();
}

function deleteLast(){
    let typeOperations = ['*','/','-','+'];
    let valueDeleted = [history.pop()];
    let deletedOperator = valueDeleted.some(value => typeOperations.includes(value));
    if(deletedOperator){
        operationTrue = false;
        if(history.includes('.')){
            decimalTrue = true;
        }else{
            decimalTrue = false;
        }
    }else if(valueDeleted.toString() === '.'){
        decimalTrue = false;
    }
    showResult();
}

function equal(){
    if(isNaN(history[history.length-1])){
        let removeOperator = history.pop();
        showResult();
    }
    history = [];
    history.push(Math.round(finalResult*1000)/1000);
    operationTrue = false; 
    showResult();
    finalResult = '';
}

function operand(operation){
    if(operationTrue === true && !isNaN(history[history.length-1])){
        equal();
        history.push(operation);
        operationTrue = true;
        decimalTrue = false;
    }else if(operationTrue === true){
        return;
    }else{
        operationTrue = true;
        decimalTrue = false;
        history.push(operation);
    }
}
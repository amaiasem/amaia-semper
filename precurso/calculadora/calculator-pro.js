var totalResult = [];

function raizcuadrada(){
  var num = Math.sqrt(arguments[0]);
        num = Math.round(num*1000)/1000;
        totalResult.push('The square root is ' + num);
        console.log(num);
  }

function sum() {     
  var resultSum = 0;
  for (let i = 0; i < arguments.length; i++){
    resultSum += arguments[i]; 
  }
  if(!isNaN(resultSum)){
    if(arguments.length > 1){ 
      resultSum = Math.round(resultSum*1000)/1000;
      totalResult.push('Sum result is ' + resultSum);
      console.log(resultSum);
    }else{
      raizcuadrada(resultSum);
    }
  }else{
    console.log('Error. Type a number and try again.');
  }     
}

function sub(){
  var resultSub = arguments[0];
  for (let i = 1; i < arguments.length; i++){
    resultSub -= arguments[i];
  }
  if(!isNaN(resultSub)){
    if(arguments.length > 1){
      resultSub = Math.round(resultSub*1000)/1000;
      totalResult.push('Substraction result is ' + resultSub);
      console.log(resultSub);
    }else{
     raizcuadrada(resultSub);
    }
  }else{
    console.log('Error. Type a number and try again.');
  }
}

function mult(){
  var resultMult = 1;
  for(let i = 0; i < arguments.length; i++){
    resultMult *= arguments[i];
  } 
  if(!isNaN(resultMult)){
    if(arguments.length > 1){
      resultMult = Math.round(resultMult*1000)/1000;
      totalResult.push('Multiplication result is ' + resultMult);
      console.log(resultMult);
    }else{
     raizcuadrada(resultMult);
    }
  }else{
    console.log('Error. Type a number and try again.');
  }
} 

function div(){
  var resultDiv = arguments[0];
  for(let i = 1; i < arguments.length; i++){
    resultDiv /= arguments[i];
  } 
  if(!isNaN(resultDiv)){
    if (arguments.length > 1){
      resultDiv = Math.round(resultDiv*1000)/1000;
      totalResult.push('Division result is ' + resultDiv);
      console.log(resultDiv);
    }else{
      raizcuadrada(resultDiv);
    }
  }else{
    console.log('Error. Type a number and try again.');
  }
}
/*
sum(123.5648846,5);
sub(5,4,'/');
mult(5);
div('d');
*/
console.log(totalResult);

/*Después de hacer todas las operaciones, el programa deberá preguntar al usuario 
si desea volver a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.
*/


function calculator(n1, n2, operation) {
  operation(n1, n2);
  console.log(totalResult);
}

function operationType(name) {
  switch (name) {
    case "sum":
      return sum;
    case "sub":
      return sub;
    case "mult":
      return mult;
    case "div":
    default:
      return div;
  }
}

var answer = prompt('Would you like to do another operation? Yes/No');
switch(answer){
  case 'Yes':
    calculator(
      parseFloat(prompt("Type the first number,")),
      parseFloat(prompt("Type the second number")),
      operationType(prompt("Type the operation name: (sum/sub/mult/div)"))
    );
    break;
  case 'No':
    alert('Thanks! Bye!');
    break;
  default:
    alert('I don\'t understand.');
    break;
}

    
  
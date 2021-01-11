

let rulesPoints =`Welcome to Bingo!

System of points:
You will start the game with 350 points.
If the bingo number does not match the card, 
15 points will be deducted. 
On the other hand, if the number matches the one on the card, 
your points will remain the same.
If you sing a line, 20 points will be added.
If you achieve BINGO! 50 points will be added.
Good luck!`;

//Players ranking
let playersRanking = [];
let showRanking = [];

//Function display players ranking (sort by points)
function displayRanking(){
  playersRanking.sort(sortPoints);
  for(i = 0; i < playersRanking.length; i++){
    showRanking.push(playersRanking[i].name + ' '+ playersRanking[i].points);
  }
  alert(showRanking.join('\n'));
}

function sortPoints(a,b){
  let pointsA = a.points;
  let pointsB = b.points;

  let compare = 0;
  if(pointsA < pointsB){
    compare = 1;
  }else{
    compare = -1;
  }

  return compare;
}

//Player Name
let playerName;

//Bingo points
let bingoPoints = 350;

//Save card numbers generated randomly
let generatedCardNumbers = [];

//Save generated bingo numbers
let generatedBingoNumbers = [];

//Want to keep playing? Let exit the global function
let keepPlaying = true;

//Bye function
function bye(){
  alert(`Bye ${playerName}, let's play some other time!`);
}

//Function to create the random numbers of the bingo card
let randomNumber = ()=>{
  let num = Math.floor(Math.random()*35);
  
  if(generatedCardNumbers.includes(num) || num === 0){
    return randomNumber();
  }else{
    generatedCardNumbers.push(num);
    return num;
  }
  
}

//Generate random bingo numbers
function randomBingoNumber() {
  let bingoNum = Math.floor(Math.random() * 35);

  if (generatedBingoNumbers.includes(bingoNum) || bingoNum === 0) {
    return randomBingoNumber();
  } else {
    generatedBingoNumbers.push(bingoNum);
    return bingoNum;
  }
}

//Bingo card
let bingoCard;

let createBingoCard = ()=>{
    bingoCard = [

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },
    
    //Next Line

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    //Next Line

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false },

    { number: randomNumber(), matched: false }
]
};


//Ask the player's name
function askName(){
    playerName = prompt('Introduce your player name: ');
    if(playerName){
      alert(`Welcome to Bingo ${playerName}!`);
    }else if(playerName === null){
      alert('Good bye!');
    }else{
      return askName();
    }
}

//Generate and show card numbers
function chooseCard(){
    generatedCardNumbers = [];
    createBingoCard();

    let likeCard = prompt(`Do you want this bingo card? Yes/No \n ${cardObjectToArray()}`);

    if(likeCard === null){
      keepPlaying = false;
      bye();
    }else{
      likeCard = likeCard.toLowerCase();

      if(likeCard === 'yes' || likeCard === ''){
        alert(`This is your card: \n ${cardObjectToArray()} \n Let's start!`);
      }else if(likeCard === 'no'){
        return chooseCard();
      }else{
        return chooseCard();
      }
    
    }
}

//Display card numbers
function cardObjectToArray(){//change lines
  let cardArray = [];
  for(let i = 0; i < bingoCard.length; i++){
    cardArray.push(bingoCard[i].number);
  }
  return cardArray.slice(0,5).join(' ') + ('\n') + cardArray.slice(5,10).join(' ') 
  + ('\n') + cardArray.slice(10,15).join(' '); 
}

//Carton matched on array/ Array of true false
let cardMatchArray = [];

//Card matches split in lines
let lineOne = [];
let lineTwo = [];
let lineThree = [];

function cardMatchToArray(){
  cardMatchArray = [];
  lineOne = [];
  lineTwo = [];
  lineThree = [];
  for(let i = 0; i < bingoCard.length; i++){
    cardMatchArray.push(bingoCard[i].matched);
  }
  lineOne = cardMatchArray.slice(0,5);
  lineTwo = cardMatchArray.slice(5,10);
  lineThree = cardMatchArray.slice(10,15);
}


//Ask to play
function bingoTurn(){

 let wantToPlay = confirm('Do you want to play?'); 

  if(wantToPlay){
    checkBingoNumber();
  }else{
    bye();
  }
   
}

//Single line bingo turned off
let bingoLine = false;

// Generate and check if bingoNumber matches one of the carton
function checkBingoNumber(){
  let bingoNumber = randomBingoNumber();

   let numberMatched = false;
   let matchedIndex;
   for(let i = 0; i < bingoCard.length; i++){
     if(bingoCard[i].number === bingoNumber){
       numberMatched = true;
       matchedIndex = i;
     }
   }
    
   if(numberMatched){
     bingoCard[matchedIndex].number = 'X';
     bingoCard[matchedIndex].matched = true;
     
     cardMatchToArray(); 
     alert(`Yes!! You got the number ${bingoNumber}!\n You have ${bingoPoints}points!\n Your card is now: \n ${cardObjectToArray()}`);   
      
     //If all true stop, Bingo!! 
      if(!cardMatchArray.includes(false)){
        bingoPoints += 50;

        confirm(`BINGO! ${playerName} you won with ${bingoPoints}points!\n 
        You have completed it in ${generatedBingoNumbers.length} turns!`);
        
        playersRanking.push({name: playerName, points: bingoPoints});
        displayRanking();

        let playAgain = confirm('Do you want to play again?');
        if(playAgain){
          bingo();
        }else{
          bye();
        }
        

      }else if(bingoLine === false){
        if(!lineOne.includes(false) || !lineTwo.includes(false) || !lineThree.includes(false)){
          bingoPoints += 20;
          confirm(`LINE!!! You have ${bingoPoints}points!\n ${playerName} you are getting closer! Keep trying!`);
          bingoLine = true;
          return bingoTurn();
        }else{
          return bingoTurn();
        }  
      }else{ 
        return bingoTurn();
      }
      
   }else{
     bingoPoints -= 15;
     alert(`Oh!! You don't have the number ${bingoNumber}.\n You have ${bingoPoints}points!\n Your card is: \n ${cardObjectToArray()}`);
     return bingoTurn();
   }
}  

//Game function
function bingo(){
  playerName = null;
  bingoPoints = 350;
  bingoLine = false;
  generatedBingoNumbers = [];
  showRanking = [];

  confirm(rulesPoints);
  askName();
  if(playerName !== null){
    chooseCard();

    if(keepPlaying === true){
      bingoTurn();
    }  
  }
}

bingo();












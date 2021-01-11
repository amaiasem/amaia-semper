const playButton = document.getElementById('playButton');
let formName = document.getElementById('enterName'); 
let start = document.getElementById('submitName');
let playerName = document.getElementById('userName');
let submitAnswer = document.getElementById('formAnswer');
let questionScreen = document.getElementById('questions');
let alertScreen = document.getElementById('alerts');
let pointsScreen = document.getElementById('userPoints');
let panelLetters = document.getElementsByClassName('letters');
let panelRanking = document.getElementById('rankingOrdered');

document.getElementById('pasapalabra').addEventListener('click', nextQuestion);
document.getElementById('end').addEventListener('click', endGame);

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      nextQuestion();
    }
  })


var questions = [

    { letter: "a", question: [ 
        {letter: "a", answer: 'armario', q: 'CON LA A. Mueble con puertas y estantes o perchas para guardar ropa y otros objectos.' },
        {letter: "a", answer: "abducir", q: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        {letter: "a", answer: 'alcalde', q: 'CON LA A. Presidente del ayuntamiento y primera autoridad gubernativa en un municipio'}
    ]},

    { letter: "b", question: [
        {letter: "b", answer: "bingo", q:"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        {letter: "b", answer: 'botanica', q: 'CON LA B. Ciencia que trata de los vegetales.'},
        {letter: "b", answer: 'breva', q: 'CON LA B. Higo grande de la primera de las dos cosecha que produce la higera'}
    ]},

    { letter: "c", question:[
        {letter: "c", answer: "churumbel", q:"CON LA C. Niño, crío, bebé"},
        {letter: "c", answer: 'cuatrimestre', q: 'CON LA C. Espacio de cuatro meses'},
        {letter: "c", answer:'carisma',q: 'CON LA C. Especial capacidad de algunas personas para atraer o fascinar'}
    ]},

    { letter: "d", question: [
        {letter: "d", answer: "diarrea", q: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        {letter: "d", answer: 'dios', q: 'CON LA D. Deidad a que dan o han dado culto las diversas religiones politeístas.'},
        {letter: "d", answer: 'dinastia', q: 'CON LA D. Serie de reyes o soberanos de un país pertenecientes a una misma familia'}
    ]},

    { letter: "e", question: [
        {letter: "e", answer: "ectoplasma", q: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        {letter: "e", answer: 'esmeralda', q: 'CON LA E. Gema transparente muy apreciada, variedad del berilo, teñida de verde por el óxido de cromo.'},
        {letter: "e", answer: 'economia', q: 'CON LA E. Estado de riqueza de un país, de una persona o de una entidad cualquiera'}
    ]},

    { letter: "f", question: [
        {letter: "f", answer: "facil", q: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
        {letter: "f", answer: 'festin', q: 'CON LA F. Banquete espléndido'},
        {letter: "f", answer: 'fontanero', q: 'CON LA F. Persona que instala y arregla conducciones de agua o grifos'}
    ]},

    { letter: "g", question: [
        {letter: "g", answer: "galaxia", q: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        {letter: "g", answer: 'gingival', q: 'CON LA G. Perteneciente o relativo a las encías'},
        {letter: "g", answer: 'gatazo', q: 'CON LA G. Nombre del territorio donde tuvo lugar la batalla de la guerra civil ecuatoriana que provocó la revolución liberal en 1895'}
    ]},

    { letter: "h",  question: [
        {letter: "h",  answer: "harakiri", q: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
        {letter: "h",  answer: 'homero', q: 'CON LA H. Nombre del poeta griego considerado el autor de la Ilíada y la Odisea'},
        {letter: "h",  answer: 'hervir', q: 'CON LA H. Producir un líquido burbujas por la acción del calor'}
    ]},

    { letter: "i", question: [
        {letter: "i", answer: "iglesia", q:"CON LA I. Templo cristiano"},
        {letter: "i", answer: 'incendio', q: 'CON LA I. Fuego grande que destruye lo que no debería quemarse'},
        {letter: "i", answer: 'indurain', q: 'CON LA I. Apellido del ciclista español que ganó cinco tours de Francia de 1991 a 1995'}
    ]},

    { letter: "j", question: [
        {letter: "j", answer: "jabali", q:"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        {letter: "j", answer: 'jurasico', q: 'CON LA J. Se dice del segundo periodo de la era mesozoica caracterizado por el apogeo de los dinsaurios'},
        {letter: "j", answer: 'joven', q: 'CON LA J. Se aplica a la persona, animal o planta de poca edad que no ha alcanzado la madurez'}
    ]},

    { letter: "k", question: [
        {letter: "k", answer: "kamikaze", q: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
        {letter: "k", answer: 'kefir', q: 'CON LA K. Alimento semejante al yogur, de sabor fuerte y agridulce, que se obtiene por fermentación de leche mediante un hongo específico.'},
        {letter: "k", answer: 'kleenex', q: 'CON LA K. Pañuelo de papel'}
    ]},

    { letter: "l", question: [
        {letter: "l", answer: "licantropo", q:"CON LA L. Hombre lobo"},
        {letter: "l", answer: 'lampara', q: 'CON LA L. Utensilio o aparato que colgado o sostenido sobre un pie sirve de soporte a una o varias luces artificiales'},
        {letter: "l", answer: 'lamento', q: 'CON LA L. Queja con llanto y otras muestras de afección'}
    ]},

    { letter: "m", question: [
        {letter: "m", answer: "misantropo", q: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        {letter: "m", answer: 'moeris', q: 'CON LA M. Antiguo lago de Egipto que estaba situado en la superficie que ocupa actualmente el lago Birket Qarun'},
        {letter: "m", answer: 'menaje', q: 'CON LA M. Conjunto de muebles, utensilios y ropas de que está provista una casa'}
    ]},

    { letter: "n", question: [
        {letter: "n", answer: "necedad", q: "CON LA N. Demostración de poca inteligencia"},
        {letter: "n", answer: 'nudo', q: 'CON LA N. Lazo que se estrecha y cierra de modo que con dificultad se puede soltar por sí solo'},
        {letter: "n", answer: 'nereida', q: 'CON LA N. Cada una de las ninfas del mar que eran jóvenes y hermosas de medio cuerpo arriba y peces en lo restante'}
    ]},

    { letter: "ñ", question: [
        {letter: "ñ", answer: "señal",  q: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        {letter: "ñ", answer: 'albariño', q: 'CONTIENE LA Ñ. Vino blanco afrutado originario de Galicia'},
        {letter: "ñ", answer: 'champiñon', q: 'CONTIENE LA Ñ. Variedad de hongos muy usada como comestible'}
    ]},

    { letter: "o", question: [
        {letter: "o", answer: "orco", q: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        {letter: "o", answer: 'oferta', q: 'CON LA O. Puesta a la venta de un determinado producto rebajado de precio'},
        {letter: "o", answer: 'ovillo', q: 'CON LA O. Bola o lío que se forma devanado hilo de lino, algodón seda o lana'}
    ]},

    { letter: "p", question: [
        {letter: "p", answer: "protoss", q: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        {letter: "p", answer: 'psicofonía', q: 'CON LA P. Grabación de sonidos atribuidos a espíritus del más allá'},
        {letter: "p", answer: 'polka', q: 'CON LA P. Danza de origen polaco de movimiento rápido y en compás de dos por cuatro'}
    ]},

    { letter: "q", question: [
        {letter: "q", answer: "queso", q:"CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
        {letter: "q", answer: 'aquelarre', q: 'CONTIENE LA Q. Reunión nocturna de brujas y brujos'},
        {letter: "q", answer: 'tabaquillo', q: 'CONTIENE LA Q. Movimiento oscilatorio de los automóviles por defecto de la dirección'}
    ]},

    { letter: "r", question: [
        {letter: "r", answer: "raton", q: "CON LA R. Roedor"},
        {letter: "r", answer: 'reeves', q: 'CON LA R. Apellido del actor que interpretó el papel de Neo en la trilogía Matrix'},
        {letter: "r", answer: 'rapido', q: 'CON LA R. Que se mueve, se hace o sucede a gran velocidad, muy deprisa'}
    ]},

    { letter: "s", question: [
        {letter: "s", answer: "stackoverflow", q: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
        {letter: "s", answer: 'sutileza', q: 'CON LA S. Instinto de los animales'},
        {letter: "s", answer: 'saldo', q: 'CON LA S. Cantidad positiva o negativa que resulta de una cuenta'}
    ]},

    { letter: "t", question: [
        {letter: "t", answer: "terminator", q: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        {letter: "t", answer: 'tabasco', q: 'CON LA T. Salsa de color rojo muy picante hecha con pimienta y ají'},
        {letter: "t", answer: 'teatro', q: 'CON LA T. Edificio local destinado a la representación de obras dramáticas'}
    ]},

    { letter: "u", question: [
        {letter: "u", answer: "unamuno", q: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        {letter: "u", answer: 'unplugged', q: 'CON LA U. Se aplica al concierto de música pop o rock en el que no se emplean instrumentos eléctricos'},
        {letter: "u", answer: 'uranio', q: 'CON LA U. Elemento químico metálico que es el primer elemento de una serie radiactiva'}
    ]},

    { letter: "v", question: [
        {letter: "v", answer: "vikingos", q: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        {letter: "v", answer: 'vehiculo', q: 'CON LA V. Medio de transporte de personas o cosas'},
        {letter: "v", answer: 'valades', q: `CON LA V. Apellido del escritor autor del cuento 'Las raízes irritadas'`}
    ]},

    { letter: "w", question: [
        {letter: "w", answer: "sandwich", q: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
        {letter: "w", answer: 'web', q: 'CON LA W. Conjunto de información que se encuentra en una dirección determinada de internet.'},
        {letter: "w", answer: 'whisky', q: 'CON LA W. Bebida alcohólica de alta graduación que se obtiene por destilación de cebada y otros cereales.'}
    ]},

    { letter: "x", question: [
        {letter: "x", answer: "botox", q: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
        {letter: "x", answer: 'complexion', q: 'CONTIENE LA X. Conjunto de las características físicas de un individuo que determina su aspecto, fuerza y vitalidad'},
        {letter: "x", answer: 'extrarradio', q: 'CONTIENE LA X. Parte o zona exterior que rodea el casco y radio de una población'}
    ]},

    { letter: "y", question: [
        {letter: "y", answer: "peyote", q: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
        {letter: "y", answer: 'calypso', q: 'CONTIENE LA Y. Título de la novela de inspiración autobiográfica del humorista David Sedaris y publicada en 2018'},
        {letter: "y", answer: 'ayer', q: 'CONTIENE LA Y. Adverbio que designa el día que precede inmediatamente al de hoy'}
    ]},

    { letter: "z", question: [
        {letter: "z", answer: "zen", q: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
        {letter: "z", answer: 'zurrar', q: 'CON LA Z. Coloquialmente castigar a alguien, especialmente con azotes o golpes'},
        {letter: "z", answer: 'zozobrar', q: 'CON LA Z. Peligrar una embarcación por la fuerza y contraste de los vientos'}
    ]}, ]

let playerPoints = 0;
let playerQuestions = [];
let nameOfPlayer;
let playersRanking = [{name: 'Pepe', points: 11},
    {name: 'Angela', points: 21},
    {name: 'Marta', points: 6},];
let showRanking = [];


function generateQuestions(){
    for(let i = 0; i < questions.length; i++){
        let questionNumber = Math.floor(Math.random()*3);
        playerQuestions.push(questions[i].question[questionNumber]);
    }
}


playButton.addEventListener('click',showFormName); 

function showFormName(){
    nameOfPlayer = undefined;   
    displayRanking();
    questionScreen.innerHTML = 'Introduce tu nombre para empezar a jugar a PASAPALABRA.';
    playerPoints = 0;
    playerQuestions = [];

    playButton.style.display = 'none';
    formName.style.display='block';
}

formName.onsubmit = startGame;

function startGame(event){
    event.preventDefault();
    document.getElementById('panelLetters').style.opacity = "1";
    enableDisableAnswerButtons();
    timeInterval = setInterval(startCountDown, 1000); 

    playerPoints = 0;
    playerQuestions = [];
    let name = document.getElementById('inputName');
    playerName.innerHTML = name.value;
    nameOfPlayer = name.value;
    playerName.style.display= 'flex';
    formName.style.display='none';
    generateQuestions();
    remainingQuestions();
}

//Check if there are questions remaining
function remainingQuestions(){
    if(playerQuestions.length === 0){
        endGame();
    }else{
        askQuestion();
    }
}

//Ask a question and change letter color
function askQuestion(){
    document.getElementById("playerAnswer").focus();
    let question = playerQuestions[0].q;
    questionScreen.innerHTML = question;
    //let letter = playerQuestions[0].letter;
    //document.getElementById(letter).style.background = "#FFB400";
    intermittentLetterColor();
    
}

submitAnswer.onsubmit = checkAnswer;

function checkAnswer(event){
    event.preventDefault();
    let playerAnswer = document.getElementById('playerAnswer').value;
    playerAnswer = playerAnswer.toLowerCase();
  
    let correctAnswer = playerQuestions[0].answer;
    let letter = playerQuestions[0].letter;

    if(playerAnswer === correctAnswer){
        alertScreen.innerHTML= 'CORRECTO!';
        playerPoints ++;
        document.getElementById(letter).style.background = "#7FB800";
        pointsScreen.innerHTML = `${playerPoints}`;
        document.getElementById('playerAnswer').value = '';
        playerQuestions.shift();
        remainingQuestions();

    }else{
        alertScreen.innerHTML= 'INCORRECTO! La respuesta correcta es ' + playerQuestions[0].answer;
        document.getElementById(letter).style.background = "#F6511D";
        pointsScreen.innerHTML = `${playerPoints}`;
        document.getElementById('playerAnswer').value = '';
        playerQuestions.shift();
        remainingQuestions();
    }

}

function nextQuestion(){
    alertScreen.innerHTML= '';
    let letter = playerQuestions[0].letter;
    document.getElementById(letter).style.background = "#0E3269";
    document.getElementById('playerAnswer').value = '';
    playerQuestions.push(playerQuestions.shift());
    remainingQuestions();
}

function setLetterColorToDefault(){
    for(let i = 0; i < panelLetters.length; i++){
        document.getElementsByClassName('letters')[i].style.background = "#0E3269";
    }
}

function displayRanking(){
    if(playerQuestions.length === 0 && nameOfPlayer){
        playersRanking.push({name: nameOfPlayer, points: playerPoints});
    }
    
    showRanking = [];
    playersRanking.sort(sortPoints);

    for(let i = 0; i < playersRanking.length; i++){
        showRanking.push(`${playersRanking[i].name} Aciertos: ${playersRanking[i].points}`)
    }

    const rankingList = document.getElementById('playersRanking');
    while(rankingList.firstChild){
        rankingList.removeChild(rankingList.lastChild);
    }

    for(let i = 0; i < showRanking.length; i++){
        let newP = document.createElement('p');
        let newPText = document.createTextNode(showRanking[i]);
        newP.appendChild(newPText);
        rankingList.appendChild(newP);
    }
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

function endGame(){
    clearInterval(timeInterval);
    totalTime = 200;
    countDown.innerHTML = totalTime + 's';

    displayRanking();
    enableDisableAnswerButtons();   
    document.getElementById('panelLetters').style.opacity = "0.5";
    questionScreen.innerHTML = `${nameOfPlayer} tu puntuación es de ${playerPoints}!`;
    alertScreen.innerHTML = 'Hasta pronto!';
    playerPoints = 0;
    playerQuestions = [];

    document.getElementById('inputName').value = '';
    playerName.innerHTML = '';
    document.getElementById('playerAnswer').value = '';
    setLetterColorToDefault();

    formName.style.display='none';
    playButton.style.display = 'flex';
    
}

function enableDisableAnswerButtons(){
    const submitAnswerButton = document.getElementById('submitAnswer');
    const pasapalabraButton = document.getElementById('pasapalabra');
    const endButton = document.getElementById('end');

    if(endButton.disabled === true){
        submitAnswerButton.disabled = false;
        pasapalabraButton.disabled = false;
        endButton.disabled = false;
    }else{
        submitAnswerButton.disabled = true;
        pasapalabraButton.disabled = true;
        endButton.disabled = true;
    }
}

displayRanking();


//Countdown 
let totalTime = 200;
let countDown = document.getElementById('countDown');
let timeInterval;

function startCountDown(){
    countDown.innerHTML = totalTime + 's';
    totalTime--;

    if(totalTime === -1){
        endGame();
        clearInterval(timeInterval);
    }
}


//Intermittent question letter color !*Intermitencia rara
let letterColor = false;
let colorInterval;
function intermittentLetterColor(){
    letterColor = !letterColor;
    let letter = playerQuestions[0].letter;
    document.getElementById(letter).style.background = letterColor ? "#0E3269" : "#FFB400";
    setTimeout("intermittentLetterColor()", 1000);  
}

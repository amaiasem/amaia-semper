//Pasapalabra Questions

var questions = [

    { letter: "a", status: 0, question: [ 
        {answer: 'armario', q: 'CON LA A. Mueble con puertas y estantes o perchas para guardar ropa y otros objectos.' },
        {answer: "abducir", q: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        {answer: 'alcalde', q: 'CON LA A. Presidente del ayuntamiento y primera autoridad gubernativa en un municipio'}
    ]},

    { letter: "b", status: 0, question: [
        {answer: "bingo", q:"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        {answer: 'botanica', q: 'CON LA B. Ciencia que trata de los vegetales.'},
        {answer: 'breva', q: 'CON LA B. Higo grande de la primera de las dos cosecha que produce la higera'}
    ]},

    { letter: "c", status: 0, question:[
        {answer: "churumbel", q:"CON LA C. Niño, crío, bebé"},
        {answer: 'cuatrimestre', q: 'CON LA C. Espacio de cuatro meses'},
        {answer:'carisma',q: 'CON LA C. Especial capacidad de algunas personas para atraer o fascinar'}
    ]},

    { letter: "d", status: 0, question: [
        {answer: "diarrea", q: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        {answer: 'dios', q: 'CON LA D. Deidad a que dan o han dado culto las diversas religiones politeístas.'},
        {answer: 'dinastia', q: 'CON LA D. Serie de reyes o soberanos de un país pertenecientes a una misma familia'}
    ]},

    { letter: "e", status: 0, question: [
        {answer: "ectoplasma", q: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        {answer: 'esmeralda', q: 'CON LA E. Gema transparente muy apreciada, variedad del berilo, teñida de verde por el óxido de cromo.'},
        {answer: 'economia', q: 'CON LA E. Estado de riqueza de un país, de una persona o de una entidad cualquiera'}
    ]},

    { letter: "f", status: 0, question: [
        {answer: "facil", q: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
        {answer: 'festin', q: 'CON LA F. Banquete espléndido'},
        {answer: 'fontanero', q: 'CON LA F. Persona que instala y arregla conducciones de agua o grifos'}
    ]},

    { letter: "g", status: 0, question: [
        {answer: "galaxia", q: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        {answer: 'gingival', q: 'CON LA G. Perteneciente o relativo a las encías'},
        {answer: 'gatazo', q: 'CON LA G. Nombre del territorio donde tuvo lugar la batalla de la guerra civil ecuatoriana que provocó la revolución liberal en 1895'}
    ]},

    { letter: "h",  status: 0, question: [
        {answer: "harakiri", q: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
        {answer: 'homero', q: 'CON LA H. Nombre del poeta griego considerado el autor de la Ilíada y la Odisea'},
        {answer: 'hervir', q: 'CON LA H. Producir un líquido burbujas por la acción del calor'}
    ]},

    { letter: "i", status: 0, question: [
        {answer: "iglesia", q:"CON LA I. Templo cristiano"},
        {answer: 'incendio', q: 'CON LA I. Fuego grande que destruye lo que no debería quemarse'},
        {answer: 'indurain', q: 'CON LA I. Apellido del ciclista español que ganó cinco tours de Francia de 1991 a 1995'}
    ]},

    { letter: "j", status: 0, question: [
        {answer: "jabali", q:"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        {answer: 'jurasico', q: 'CON LA J. Se dicedel segundo periodo de la era mesozoica caracterizado por el apogeo de los dinsaurios'},
        {answer: 'joven', q: 'CON LA J. Se aplica a la persona, animal o planta de poca edad que no ha alcanzado la madurez'}
    ]},

    { letter: "k", status: 0, question: [
        {answer: "kamikaze", q: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
        {answer: 'kefir', q: 'CON LA K. Alimento semejante al yogur, de sabor fuerte y agridulce, que se obtiene por fermentación de leche mediante un hongo específico.'},
        {answer: 'kleenex', q: 'CON LA K. Pañuelo de papel'}
    ]},

    { letter: "l", status: 0, question: [
        {answer: "licantropo", q:"CON LA L. Hombre lobo"},
        {answer: 'lampara', q: 'CON LA L. Utensilio o aparato que colgado o sostenido sobre un pie sirve de soporte a una o varias luces artificiales'},
        {answer: 'lamento', q: 'CON LA L. Queja con llanto y otras muestras de afección'}
    ]},

    { letter: "m", status: 0, question: [
        {answer: "misantropo", q: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        {answer: 'moeris', q: 'CON LA M. Antiguo lago de Egipto que estaba situado en la superficie que ocupa actualmente el lago Birket Qarun'},
        {answer: 'menaje', q: 'CON LA M. Conjunto de muebles, utensilios y ropas de que está provista una casa'}
    ]},

    { letter: "n", status: 0, question: [
        {answer: "necedad", q: "CON LA N. Demostración de poca inteligencia"},
        {answer: 'nudo', q: 'CON LA N. Lazo que se estrecha y cierrade modo que con dificultad se puede soltar por sí solo'},
        {answer: 'nereida', q: 'CON LA N. Cada una de las ninfas del mar que eran jóvenes y hermosas de medio cuerpo arriba y peces en lo restante'}
    ]},

    { letter: "ñ", status: 0, question: [
        {answer: "señal",  q: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        {answer: 'albariño', q: 'CONTIENE LA Ñ. Vino blanco afrutado originario de Galicia'},
        {answer: 'champiñon', q: 'CON LA Ñ. Variedad de hongos muy usada como comestible'}
    ]},

    { letter: "o", status: 0, question: [
        {answer: "orco", q: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        {answer: 'oferta', q: 'CON LA O. Puesta a la venta de un determinado producto rebajado de precio'},
        {answer: 'ovillo', q: 'CON LA O. Bola o lío que se forma devanado hilo de lino, algodón seda o lana'}
    ]},

    { letter: "p", status: 0, question: [
        {answer: "protoss", q: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        {answer: 'psicofonía', q: 'CON LA P. Grabación de sonidos atribuidos a espíritus del más allá'},
        {answer: 'polka', q: 'CON LA P. Danza de origen polaco de movimiento rápido y en compás de dos por cuatro'}
    ]},

    { letter: "q", status: 0, question: [
        {answer: "queso", q:"CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
        {answer: 'aquelarre', q: 'CONTIENE LA Q. Reunión nocturna de brujas y brujos'},
        {answer: 'tabaquillo', q: 'CONTIENE LA Q. Movimiento oscilatorio de los automóviles por defecto de la dirección'}
    ]},

    { letter: "r", status: 0, question: [
        {answer: "raton", q: "CON LA R. Roedor"},
        {answer: 'reeves', q: 'CON LA R. Apellido del actor que interpretó el papel de Neo en la trilogía Matrix'},
        {answer: 'rapido', q: 'CON LA R. Que se mueve, se hace o sucede a gran velocidad, muy deprisa'}
    ]},

    { letter: "s", status: 0, question: [
        {answer: "stackoverflow", q: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
        {answer: 'sutileza', q: 'CON LA S. Instinto de los animales'},
        {answer: 'saldo', q: 'CON LA S. Cantidad positiva o negativa que resulta de una cuenta'}
    ]},

    { letter: "t", status: 0, question: [
        {answer: "terminator", q: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        {answer: 'tabasco', q: 'CON LA T. Salsa de color rojo muy picante hecha con pimienta y ají'},
        {answer: 'teatro', q: 'CON LA T. Edificio local destinado a la representación de obras dramáticas'}
    ]},

    { letter: "u", status: 0, question: [
        {answer: "unamuno", q: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        {answer: 'unplugged', q: 'CON LA U. Se aplica al concierto de música pop o rock en el que no se emplean instrumentos eléctricos'},
        {answer: 'uranio', q: 'CON LA U. Elemento químico metálico que es el primer elemento de una serie radiactiva'}
    ]},

    { letter: "v", status: 0, question: [
        {answer: "vikingos", q: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        {answer: 'vehiculo', q: 'CON LA V. Medio de transporte de personas o cosas'},
        {answer: 'valades', q: `CON LA V. Apellido del escritor autor del cuento 'Las raízes irritadas'`}
    ]},

    { letter: "w", status: 0, question: [
        {answer: "sandwich", q: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
        {answer: 'web', q: 'CON LA W. Conjunto de información que se encuentra en una dirección determinada de internet.'},
        {answer: 'whisky', q: 'CON LA W. Bebida alcohólica de alta graduación que se obtiene por destilación de cebada y otros cereales.'}
    ]},

    { letter: "x", status: 0, question: [
        {answer: "botox", q: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
        {answer: 'complexion', q: 'CONTIENE LA X. Conjunto de las características físicas de un individuo que determina su aspecto, fuerza y vitalidad'},
        {answer: 'extrarradio', q: 'CONTIENE LA X. Parte o zona exterior que rodea el casco y radio de una población'}
    ]},

    { letter: "y", status: 0, question: [
        {answer: "peyote", q: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
        {answer: 'calypso', q: 'CONTIENE LA Y. Título de la novela de inspiración autobiográfica del humorista David Sedaris y publicada en 2018'},
        {answer: 'ayer', q: 'CONTIENE LA Y. Adverbio que designa el día que precede inmediatamente al de hoy'}
    ]},

    { letter: "z", status: 0, question: [
        {answer: "zen", q: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
        {answer: 'zurrar', q: 'CON LA Z. Coloquialmente castigar a alguien, especialmente con azotes o golpes'},
        {answer: 'zozobrar', q: 'CON LA Z. Peligrar una embarcación por la fuerza y contraste de los vientos'}
    ]}, ]

//Players details

let playerName;
let playerPoints;
let rightAnswers;
let wrongAnswers;

let playersRanking = [];
let showRanking = [];

//Ranking with names and right answers(sort)

function displayRanking(){
    showRanking = [];
    playersRanking.sort(sortRight);

    for(let i = 0; i < playersRanking.length; i++){
        showRanking.push(`${playersRanking[i].name} Aciertos: ${playersRanking[i].right}`)
    }
    alert(showRanking.join('\n'));
}

//sort ranking by number of right answers

function sortRight(a,b){
    let rightA = a.right;
    let rightB = b.right;

    let compare = 0;
    if(rightA < rightB){
        compare = 1;
    }else{
        compare = -1;
    }

    return compare;
}

//Game ended?
let completeGame = false;

//Preguntar nombre de jugador
function askName(){
    playerName = prompt('Bienvenido a Pasapalabra. Porfavor, introduce tu nombre a continuación:');
    if(isNaN(playerName)){
        alert(`Empecemos a jugar ${playerName}!`);
      }else if(playerName === null){
        alert('Juguemos en otro momento. Hasta pronto!');
      }else{
        return askName();
      }
}

//bye funtion
function bye(){
    alert(`Juguemos en otro momento ${playerName}. Hasta pronto!`);
}


function play(){
    //one question for each letter, if status === 0, ask question else no
    //switch prompt answers
    //update playerDetails (if right: playerPoints +1, rightAnswer +1, status = 1/ if wrong, wrongAnswer +1 )
    //if pasapalabra or aceptar, next question
    //if end, finish the game, bye no ranking

    let questionsAnswered = 0;

    do{
        for(let i = 0; i < questions.length; i++){
            if(questions[i].status === 0){
                let questionNumber = Math.floor(Math.random()*3); //3 posible questions

                let playerAnswer = prompt(questions[i].question[questionNumber].q);
                
                if(playerAnswer !== null){
                    playerAnswer = playerAnswer.toLowerCase();
                }
                switch(playerAnswer){
                    case questions[i].question[questionNumber].answer:
                        questions[i].status = 1;
                        questionsAnswered ++;

                        playerPoints ++; //same but who knows
                        rightAnswers ++;

                        alert('Correcto!');
                        break;
                    
                    case '':
                    case 'pasapalabra':
                        alert('Pasemos a la siguiente pregunta.');
                        break;
                        
                    case 'end':
                    case null:
                        alert(`${playerName} acertaste ${rightAnswers} preguntas.`);
                        bye();
                        return;

                    default:
                        questions[i].status = 1;
                        questionsAnswered ++;
                        wrongAnswers ++;
                        alert('Respuesta incorrecta.');
                        break;
                    
                }
            }
            
        }
    }while(questionsAnswered < questions.length);

    completeGame = true;
}

function pasapalabra(){
    //reset before start playing
     playerName = null;
     playerPoints = 0;
     rightAnswers = 0;
     wrongAnswers = 0;
     for(let i= 0; i < questions.length; i++){
        questions[i].status = 0;
      }

    askName();
    if(playerName !== null){
        play();
        
        if(completeGame){
            //show ranking
            alert(`${playerName} has acertado ${rightAnswers} y fallaste ${wrongAnswers}.`);
            playersRanking.push({name: playerName, points: playerPoints, right: rightAnswers, wrong: wrongAnswers});
            displayRanking();

            let playAgain = confirm(`Quieres jugar otra vez?`);
            if(playAgain){
                pasapalabra();
            }else{
                bye();
            }
        }
    
    }
}

pasapalabra();


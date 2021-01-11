/*Programa una interfaz de usuario para una aerolínea (por consola...). Esta aerolínea dispondrá de
10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global, 
cuando se llame a la función: (Una funcion?)
*/  

//Todos los vuelos
var flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
  
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
  
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
  
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
  
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
  
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
  
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
  
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
  
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
  
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
  
  ];
  
  var userName;
  var newFlight;
  var screenFlights =[];
  
  
  //  *All in one function*
  function airlines(){     
      
    askName();
    if(userName !== undefined){
       displayFlights(onAlert);
       calcAverageCost();
       scaleFlights()
       lastFlights();
       isAdmin();
    }
   
}
  
  //Se preguntará por el nombre de usuario y dará la bienvenida.
    //Prompt()?  
  function askName(){
      var name = prompt('Skylab Airlines. Nombre de usuario?','usuario');
      if(name === null){
          alert('Skylab airlines le desea un buen día!')
          return;    
      }else{
      userName = name;
      alert('Hola ' + name + '! Bienvenido a Skylab Airlines!');
      }
  }
  
  //El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, 
  //y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
    //alert() or console.log()?? Both?
  
  function onConsole(){
      console.log(screenFlights.join('\n'));
  }
    
  function onAlert(){
     alert(screenFlights.join('\n'));
  }
  
  function displayFlights(functionDisplay){
    screenFlights =[];
    for(let i = 0; i < flights.length; i++){  
      if(flights[i].scale === false){
          screenFlights.push('El vuelo con ID: ' + flights[i].id + ' tiene origen en: ' + flights[i].from + ' y destino: ' +
          flights[i].to + ' tiene un coste de ' + flights[i].cost + '€. ' + ' No realiza escalas.');
      }else{
          screenFlights.push('El vuelo con ID: ' + flights[i].id + ' tiene origen en: ' + flights[i].from + ' y destino: ' +
          flights[i].to + ' tiene un coste de ' + flights[i].cost + '€. ' + ' Realiza escalas.');
      }
    }
       functionDisplay();
  }
  
  //A continuación, el usuario verá el coste medio de los vuelos.
  
  function calcAverageCost(){
  
    var totalCost = 0;
    for(let i = 0; i < flights.length; i++){
        totalCost += flights[i].cost;
    }
  
    var avarageCost = totalCost / (flights.length - 1);
    avarageCost = Math.round(costeMedio*100)/100;
    alert('El coste medio de los vuelos es de: ' + avarageCost + '€');
  }
  
  //También podrá ver cuántos vuelos efectúan escalas.
  
  function scaleFlights(){
    var withScale = [];
    for(let i = 0; i < flights.length; i++ ){
      if(flights[i].scale === true){
        withScale.push('Origen: ' + flights[i].from + ' y Destino: ' + flights[i].to);
      }
    }
    alert('Los vuelos con escalas son:\n' + withScale.join('\n'));
    
  }
  
  //Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
   
  function lastFlights(){
  
    var lastFlightsAre = [];
    for(let i = flights.length -1; i >= flights.length - 5; i--){
        lastFlightsAre.push(flights[i].to);
    }
    alert('Los ultimos cinco vuelos son con destino a:\n' + lastFlightsAre);
    
  }
  
  //airlines();
  
  /*Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, 
  dependiendo de la elección, el programa se comportará de la siguiente manera:
  
  Si eres ADMIN, la función debería permitir:
  ● Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos,
   si se intenta introducir uno más, saltará un alert().
  ● Poder eliminar vuelos mediante el ID.
  */
  
  function isAdmin(){
      var isUser = prompt('Eres administrador o usuario? Type Admin or User');
  
      if(isUser !== null){
          isUser = isUser.toLowerCase();
        
          if(isUser === 'admin'){
              admin();
          }else if(isUser === 'user'){
              user();
          }else{
          isAdmin();
          }
      }else{
          goodbye();
      }   
  }
  
  //Bye function
  function goodbye(){
    if (userName !== undefined){
      alert('Hasta pronto ' + userName + '!'); 
    }else{
      alert('Hasta pronto!');
    }
  }
  
  //Admin functions
  function admin(){
    createFlights();
    if(newFlight === undefined){
    askDeleteFlights();
    }
  }
  
  function createFlights(){
      newFlight = prompt('Quieres crear un nuevo vuelo? Si/No');
      if (newFlight !== null){
        newFlight = newFlight.toLowerCase();
          
         if(newFlight === 'si'){
  
          if(flights.length < 15){
                          //Function to check null and isNaN. How to exit the outside function? true/false 
              var newFlightID = prompt('ID del Vuelo? Ejemplo: 10'); 
                if(newFlightID === null){
                  goodbye();
                  return;
                }else if(isNaN(newFlightID)){
                  alert('Error. Inserte un número.')
                  return createFlights();
                }else{
                  newFlightID = parseFloat(newFlightID);
                }
            
              var newFlightTo = prompt('Destino?');
                if(newFlightTo === null){
                  goodbye();
                  return;
                }else if(!isNaN(newFlightTo)){
                  alert('Error. Inserte un destino.')
                  return createFlights();
                }
            
              var newFlightFrom = prompt('Origen?');
                if(newFlightFrom === null){
                  goodbye();
                  return;
                }else if(!isNaN(newFlightFrom)){
                  alert('Error. Inserte un origen.')
                  return createFlights();
                }
            
              var newFlightCost = prompt('Coste del vuelo? (Solo números)');
                if(newFlightCost === null){
                  goodbye();
                  return;
                }else if(isNaN(newFlightCost)){
                  alert('Error. Inserte un número.')
                  return createFlights();
                }else{
                  newFlightCost = parseFloat(newFlightCost);
                }
            
              var newFlightScale = prompt('Realiza escalas? Si/No');
                if(newFlightScale !== null){
                  newFlightScale = newFlightScale.toLowerCase();
                }else{
                  goodbye();
                  return;
                }
                  switch(newFlightScale){
                    case 'si': 
                    case 'true':
                      newFlightScale = true;
                      break;
                    case 'no':
                    case 'false':
                    default:
                      newFlightScale = false;
                      break;                      
                  }
                
               
              flights.push({id: newFlightID, to: newFlightTo, from: newFlightFrom, 
                            cost: newFlightCost, scale: newFlightScale });
              
            createFlights();
            }else{
            alert('No se pueden añadir más vuelos');
            askDeleteFlights();
            }
        }else if (newFlight === 'no'){
            askDeleteFlights();
        }
      }else if(newFlight === null){
        goodbye();
      }   
  }
  
  function askDeleteFlights(){
      var removeFlight = prompt('Quieres eliminar un vuelo?');
      if(removeFlight !== null){
          removeFlight = removeFlight.toLowerCase();
  
          switch(removeFlight){
            case 'si':
              deleteByID();   
              break;
            case 'no':
              changeUser();
              break;
            default:
              alert('No le he entendido.')
              askDeleteFlights();
              break;
          }
      }else{
        changeUser();
      }
  }
  
  function deleteByID(){
    
      var ID = prompt('Indica la ID del vuelo a eliminar:');
      var isIDTrue = false;
      if(!isNaN(ID) && ID !== null){
        for(let i = 0; i < flights.length; i++){
          if(flights[i].id == ID){
              isIDTrue = true;    
              flights.splice(i,1);
          }
        }
  
        if(isIDTrue){
          alert('El vuelo ha sido eliminado!');
          askDeleteFlights();
        }else{
          alert('Esta ID no existe. Inténtalo de nuevo.');
          deleteByID();
        }
        
      }else if(isNaN(ID)){
        alert('Esta ID no existe. Inténtalo de nuevo.');
          deleteByID();     
      }else{
        changeUser();
      }
  }
  
  /*
  Si eres USER la función debería permitir:
  ● Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos
   de los vuelos encontrados e, indicando al programa el ID, el programa responderá: 
   "Gracias por su compra, vuelva pronto."
  */
  
  //User functions
  function user(){
      sortByPrice();
      buyFlight();   
  }
  
  function sortByPrice(){
      var sortPriceBy = prompt('Ordenar por precio. Introduce: \n Alto (precio más alto) \n Bajo (precio más bajo) \n Defecto '); 
      
      if(sortPriceBy !== null){
          sortPriceBy = sortPriceBy.toLowerCase();
          switch(sortPriceBy){
            case 'alto':
              flights.sort(priceHigher);
              displayFlights(onAlert);
              break;
            case 'bajo':
              flights.sort(priceLower);
              displayFlights(onAlert);
              break;
            case 'defecto':
            default:
             displayFlights(onAlert);//show flights on prompt ask ID to buy
             break;
          }
      }else{
        goodbye();
      }
    }
    
  function priceLower(a,b){
      var costA = a.cost;
      var costB = b.cost;
      
      let compare = 0;
      if (costA > costB){
        compare = 1;
      }else{
        compare = -1;
      }
      return compare;
  }
    
  function priceHigher(a,b){
      var costA = a.cost;
      var costB = b.cost;
      
      let compare = 0;
      if (costA < costB){
        compare = 1;
      }else{
        compare = -1;
      }
      return compare;
  }
  
  function buyFlight(){
      var buyID = prompt('Indica el ID del vuelo que quieres comprar:');
      var isIDValid = false;
      if(!isNaN(buyID) && buyID !== null){
        for(let i = 0; i < flights.length; i++){
          if(flights[i].id == buyID){
              isIDValid = true;    
              
          }
        }
  
        if(isIDValid){
          alert('Gracias por su compra, vuelva pronto.');
        }else{
          alert('Esta ID no existe. Inténtalo de nuevo.');
          buyFlight();
        }
        
      }else if(isNaN(buyID)){
        alert('Esta ID no existe. Inténtalo de nuevo.');
        buyFlight();     
      }else{
        goodbye();
      }
  }

  //Extra. Cambiar de usuario.
  function changeUser(){
    var changeTypeUser = confirm('Quieres cambiar el tipo de usuario?');
    if(changeTypeUser){
      isAdmin();
    }else{
        goodbye();
    }
  }

  airlines();
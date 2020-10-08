/*U2T6 - Ejemplo de práctica entregable

Haz una página web que implemente un juego de encontrar un número aleatorio bajo las 
premisas que se explican a continuación:

- La página calculará un número del 1 al 100.
- Luego preguntará al usuario por el número mediante un prompt.
- Si el usuario escribe algo que no es un número se indica el error y se vuelve a pedir el número.
- Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego.
- Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es.
- Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.
- Al final, si se ha finalizado correctamente el juego se indica el número de intentos.
- Se permite volver a jugar al usuario mediante un cuadro de confirmación*/

var min = 1;
var max = 100;
var attempts = 0;
var randomNumber = getRandom(min,max);
var chosenNumber;
var playAgain;

game();

function game(){
    do{
        attempts++;
        chosenNumber = prompt("Enter the number you want to try luck with." /* + '\n' + "Hint for developer: " + randomNumber*/);
    
        if(chosenNumber !== null){
            chosenNumber *= 1;

            if(!isNaN(chosenNumber)){

                if(chosenNumber === randomNumber){
                    alert("Congrats, you won the game." + '\n' + "Number of attempts: " + attempts);
                    playAgain = confirm("Do you want to play again?");
    
                    if(playAgain){
                        chosenNumber = 0;
                        randomNumber = getRandom(min,max);
                        attempts = 0;
                    } else {
                        break;
                    }
    
                } else {
                    alert("That's the wrong number, woooo.");
                    if(chosenNumber > randomNumber){
                        alert("The random number is smaller than the chosen number");
                    } else {
                        alert("The random number is bigger than the chosen number");
                    }
                }

            } else {
                alert("Debes introducir un número.");
            }

        } else {
            alert("You aborted the game.")
            break;
        } 
        
    } while (chosenNumber !== randomNumber)
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
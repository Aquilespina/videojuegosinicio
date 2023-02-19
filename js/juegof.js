var vida=100;
var pocion=20;
var ataque=10;

function MuestaVida(){
    console.log(vida);
}
function ataqueEnemigo(){
    vida -= ataque;
}

function MasVida(){
    vida +=pocion;
}
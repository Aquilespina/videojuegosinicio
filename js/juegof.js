var vida=100;
var pocion=20;
var potencia;


function ataqueEnemigo(potencia,nombreAtaque ){
    vida -= potencia;

    console.log("Has sido atacado con; "+nombreAtaque);
    console.log("vida:"+vida)

}

function MasVida(){
    vida +=pocion;
    console.log("Vida:"+vida)
}
var vida=100;
var pocion=20;
var potencia;

function mostrarvida(nombre){
    console.log("Has sido atacado con; "+nombre);
    console.log("vida:"+vida)

}


function ataqueEnemigo(potencia,nombreAtaque ){
    vida -= potencia;
mostrarvida(nombreAtaque);

}

function MasVida(){
    vida +=pocion;
    console.log("Vida:"+vida)
}
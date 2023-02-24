var turno =1;

var vida=100;

var atacar=0;

var quemar=1; 
var envenenar=2;
var fallar=3;

//Estados del jugar
var vivo = true;
var envendado=false;
var quemado= false;

function muestraEstado()
{
    if(envendado==true){
        console.log("El jugador se encuentra envenenado");

    }
    if(quemado==true){
        console.log("El jugador se encuentra quemado")

    }
}
function jugarturno(){
var JugardaCPU= Math.floor(Math.random()*4)
console.log(JugardaCPU);

if(JugardaCPU==atacar){
    console.log("Atacado al jugar");

}
if(JugardaCPU==quemar){
    quemado=true;
    console.log("He quemado al jugador");

}
if(JugardaCPU==envenenar){
    envendado=true;
    console.log("He envenenado al jugador");

}
if(JugardaCPU==fallar){
    console.log("He fallado");

}
muestraEstado();


}
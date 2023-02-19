var vida,ataque, magia, pocion;
var nombre, textoBienvenida;
nombre ='Aquiles'
textoBienvenida = 'Hola '+ nombre,

pocion= 20 
ataque=10;

vida = 100;

for (var i=0;i<3;i++){
vida=vida-ataque;
}
vida= vida+pocion;

console.log(textoBienvenida);

console.log(vida);

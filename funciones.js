// Declarativas

function nombreFuncion(){ // esta function tiene un nombre
    // Accion
    console.log("Saludar!"); // Funcion que imprime saludar
}

nombreFuncion();
// Expresion

var despedir = function(){  //funcion anónima porque no tiene un nombre
    console.log("Chau!");

    // return devuelve un valor
}

var sumar = function(a,b){
    return a + b;
}

sumar(10,20); 



function verCompra(prenda){
    console.log(`Hola, la compra que hiciste es ${prenda}`);
}

verCompra("Hoodie")

function sumarPrecios(){
    var hoodie = 21999.90;
    var tShirt = 9900.99;
    let resultado = hoodie + tShirt
    console.log(resultado)
}

sumarPrecios() 
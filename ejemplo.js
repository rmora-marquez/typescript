var foo = "hola mundo";
console.log(foo);

foo = 1;
bar = '2';

console.log(foo + +bar);
//Objetos
//literal
var myObject = {
    sayHello: function() {
        console.log("hola");
    },
    name: 'Rebecca'
}
myObject.sayHello();
console.log(myObject.name);

class Persona {
    name;
    constructor(nombre) {
        this.name = nombre
    }

    dihola() {
        console.log("hola, soy " + this.name);
    }
}
var rebeca = new Persona('Rebecca');
rebeca.dihola();
console.log(rebeca.name);


//Funciones
/*var saludar = function(persona, saludo) {
    var texto = saludo + ', ' + persona;
    console.log(texto);
}*/
var saludar = function(persona, saludo) {
    var texto = saludo + ', ' + persona;
    return function() {
        console.log(texto);
    }
}
var f1 = saludar("Rebecca", 'Hola');
var f2 = saludar('Raul', 'buenos dias');
var f3 = saludar('Pedro', 'buenos dias');
f1();
f3();
f2();
f1();

var myFn = function(fn) {
    var result = fn();
    console.log(result);
}
myFn(function() {
    return "hola mundo";
});

var myOtherFn = function() {
    return "adios mundo cruel";
}
myFn(myOtherFn);
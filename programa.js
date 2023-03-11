// Comentarios de una linea

/* comentarios 
de varias lineas
*/

//No es necesario declarar una variable antes de utilizarla

//variables de ambito de funcion
var a=34;

//variables de ambito de bloque
let b=56;

//Operaciones: Atirmeticas, comparacion, logica binaria


//Estructuras de datos: Arreglos
//Lineas secuanciales
let c=true;
let d=false;

alert ("Javascript ok");  
console.log(a+b);

console.log(c && d);
console.log(c || d);

//Romper la secuencialidad del programa 
//para evitar procesar ciertas lineas del codigo.

//Decision
// if(condicion) {}

if (a > b)
{
    console.log("a es mayor que b");
}else{
    console.log("a es menor que b");
}


// Capturar datos en variables en ambito local
let nombre;
nombre = prompt();
document.write(nombre)

console.log(nombre);

//constante: Valor que una vez asignado nunca cambia. ambito global
//variables globales ocupan mucha memoria, no es bueno tener muchas definidas.
const result1=1;

function calcular (base, altura)
{
    let area;
    let perimetro;

    area = base * altura;
    perimetro = 2* (base+altura);

    //Valores q retorna
    return [area,perimetro];

}

function calcular_hipotenusa(a1,b1)
{
    //Math.pow(a1,2);
    const hipotenusa = Math.sqrt(a1**2+b1**2);

    return hipotenusa;
}

function calculadora (x,y)
{
    document.writeln("------");
    document.writeln(x+y);
    document.writeln(x-y);


    console.warn(x+y);
    console.error(x-y);

}

let resultado=calcular(5,4);
let resultado1=calcular_hipotenusa(4,2);

calculadora(5,5);

console.log(resultado[0]);
console.log(resultado[1]);

console.log(resultado1);


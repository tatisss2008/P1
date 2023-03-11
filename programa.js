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

function media ()
{
    let f = document.getElementById('f');
    let g = document.getElementById('g');
    let h = document.getElementById('h');


    let x1 = parseInt(f.value);
    let y1 = parseInt(g.value);
    let z1 = parseInt(h.value);

    let promedio  = (x1+y1)/2;
    console.log("Promedio: "+(promedio));
    return promedio;

}


function calcular_tiempo()
{
    let v1 = parseInt(document.getElementById('f').value); 
    let v2 = parseInt(document.getElementById('g').value); 
    let d = parseInt(document.getElementById('h').value); 

    let t = d/(v1-v2);
    let tf = t*60;

    let resultado = document.getElementById("resultado");
    resultado.value=tf;
    
    console.log(tf);
    return tf;
    
}

function calcular_definitiva(p1,p2,p3,e1,t1)
{
    
    let promedio = 0.55*(p1+p2+p3) + 0.3*e1 + 0.15*t1 ;
    return promedio;
}


let resultado=calcular(5,4);
let resultado1=calcular_hipotenusa(4,2);

calculadora(9,5);

console.log(resultado[0]);
console.log(resultado[1]);

console.log(resultado1);


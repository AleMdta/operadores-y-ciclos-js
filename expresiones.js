/*
OPERADORES

  -ARITMÉTICOS: retorna valores únicos y corresponde a las operaciones matemáticas.(+, -, *, /, %, **(exp), ++(incremento), --(decremento))

  -DE ASIGNACIÓN: (= asignación, == igualdad, ===igualdad estricta).

  -DE CADENAS: (toLowerCase, toUpperCase, trim, toString, concat)

  -LÓGICOS: (&&, ||, !)

  -DE COMPARACIÓN: permiten comparar datos y retorna un valor booleano true/false. (<, >, <=, >=, ==, !=(no es igual), ===, !==(no es estrictamente igual))

*/

//Operador de igualdad abstracta (==): compara dos valores para ver si son iguales.
5 == "5"; //el resultado sería true, ya que JS convierte la cadena "5" a un número, antes de compararlos.

//Triple igual o igualdad estricta: verifica que los valores sean estrcictamente iguales.
5 === "5"; //el resultado sería false, ya que son dos elementos de distintos tipos (number vs string)

//Convertir grados Celcius a Fahrenheit
function conversionGrados (gradosCel){
  let gradosFahr = gradosCel * (9/5) + 32;
  return gradosFahr;
}
//console.log(conversionGrados(28) + "°F");

//variables
let num1 = 10;
let num2 = 2;
let num3 = "5";

//operaciones
suma = num1 + num2;
resta = num1 - num2;
mult = num1 * num2;
div = num1/num2;
residuo = num1 % num2;
incremento = num1++;
decremento = num2--;

//impresión
console.log("La suma de 10 y 2 es: ", suma);
console.log("La resta de 10 y 2 es: ", resta);


/*
Operadores de comparacion

Operadores que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano (true o false)

 - mayor que (>)
 - menor que (<)
 - mayor o igual que (>=)
 - menor o igual que (<=)
 - igual (==)
 - estrictamente igual (===)
 - no es igual (!=)
 - no es estrictamente igual (!==)



Igual (==)

Sirve para comparar que dos valores sean iguales 


*/


let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

// 13 == "13" //true
// 13 === "13" //false
// 23 > 12 true
// 23 < 12 false


if (edadFelipe >= 18){
    console.log("Puedes ir a la pachangona");
} else {
    console.log("Te quedas en casa");
}



// Dos negaciones es una afirmacion
//!vamos a comer (no vamos a comer)
//!no me gusta Java (no no me gusta Java) (no * no = si)




/*

Operadores de asignacion

Son los operadores que utilizan para asignar un valor a una variable. Se usa el operador =


let edad = 31;
let saldo = 0;

*/




/*Operadores logicos

Nos devuelven un resultado a partir de que se cumpla (o no) una condicion, el resultado es booleano (true  o false).


    - AND &&: Sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso.


*/

let tengoUnCrush = true;
let miCrushMeQuiere = true;


if (tengoUnCrush && miCrushMeQuiere){
    console.log("Estoy feliz");
}else{
    console.log("Haganse a un lado que me quiero automorir");
}


/*
    
    - OR ||: Sirve para determinar si dos expresioones son falsas. Si cualquiera de las dos afirmaciones es verdadera, todo es verdader. Si las dos son falsas, todo es falso.


*/


if (hayChilaquilesVerdes || hayCarneEnSuJugo){
    console.log("Felipe desayuna chido");
} else {
    console.log("Felipe no desayuna chido");
}


/*

NOT (!): Regresa lo contrario de lo que evaluamos


*/

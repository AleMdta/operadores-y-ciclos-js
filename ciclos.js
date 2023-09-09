/*
While: Primero pregunta y si es verdadero ejecuta.

Do While: Primero ejecuta, despues pregunta y si es verdadero, vuelve a ejecutar

Do-While
    se ejecuta mientras sea verdadero.

    do{
        codigo a ejecutar
    }while (condición);

*/

// ejemplo de un consultorio dental
// var contPx  = 0;
// do{
//     var nombre = prompt("Ingresa el nombre del paciente");
//     if (nombre != "" && contPx < 15){
//         console.log("Paciente registrado exitosamente.");
//         contPx++;
//     }else{
//         console.log("Ningún paciente fue registrado.");
//     }
// }while(confirm("¿Desea registrar otro paciente?"));
//While(contPx < 15); //o podría terminar el ciclo cuando el registro de pacientes sea menor a 15 
//un confirm para aceptar o cancelar, mientras siga dando aceptar el contador sigue, cuando da click en cancelar se para el ciclo e imprime el número total de pacientes

// console.log("Número total de pacientes: ", contPx);

/*
For
    Se utiliza cuando conocemos el número exacto de iteraciones que se van a realizar.

    -inicialización: se ejcuta antes de que el bucle comience y se usa para establecer una variable de control.

    -condición: detonante que verificamos antes de cada iteración para saber si sigue con la ejecución o no.

    -expresión de iteración (contador): modifica la variable de inicio y sirve para tener un fin.

    for(inicio; condición; paso){
        código a ejecutar
    }
*/

//Crea un código qie imprima números del 0 al 4
// la variable i representa la transición de los valores, desde donde inicia, como avanza y donde termina
for(var i = 0; i <= 4; i++){ //Si quisiera que i aumnetera de 5 en 5, i+=5
    //console.log(i);
}

//Consultorio dental - registro de citas
let cantidadCitasDiarias = 5; //maxima capacida de cita en un día

for(let i = 1; i <= cantidadCitasDiarias; i++){
    var nombre = prompt("Ingrese el nombre del paciente " + i);
    console.log("Cita " + i + " para " + nombre);
}

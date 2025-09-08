/* VARIABLES  
Nombre de memoria que contiene temporalmente el valor declarado */
let age; 
age = 27;


/* CONSTANTES
Valores que no cambian durante la ejecucion */
const mybirthday = '03.08.1996';


/* TIPOS DE DATOS 

1. Primitivos: numeros, cadenas, booleanos, nulos, indefinidos
2. Referencia: objetos, arreglos y funciones
   

- OBJETOS: Estructura autonoma con propiedades que describen a la entidad 
*/
let girl ={
  name: 'Emily',
  age: 22,
  eyeColour: 'brown'
};


/* - ARRAYS o ARREGLOS: Estructura de datos que contiene una lista de 
elementos conmultiples valores en una sola variable */
let shopping = [];
shopping = ['cafe', 'azucar', 'huevos', 'harina', 'maple'];

/* - FUNCIONES: Bloque organizado y reusable de codigo, implementado para
realizar una accion */
function product (a, b){
  return a*b;
}

/* - CONDICIONALES: Conjunto de reglas efectuadas en ciertas circunstnacias
en las que se cumplan */
if (condition){
  statement;
}

/* - LOOPS: Usados para repetir bloques especificos mientras se cumpla o 
termine la condiciones. Contamos con for, while y  do while */

/* - SWITCH CASE: Realiza diferentes acciones de acuerdo a las diferentes
condiciones. La expresión evaluada debe coincidir con el valor de cada caso,
se realiza un match o una comparación, al encontrar la funcion necesaria, 
ejecuta las instrucciones del bloque interno */

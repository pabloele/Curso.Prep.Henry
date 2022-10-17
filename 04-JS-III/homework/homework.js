// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}



function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0; i<array.length; i++) {
    //console.log(i);
    array[i] = array[i]+1;
    
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var l = palabras.length;
  var frase = palabras[0];
  for (var i = 1; i < l; i++) {
    frase = frase + ' ' + palabras[i];
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var ta = false;
  var l = array.length;
  for (var i=0; i<l; i++) {
    if (elemento === array[i]) {
      ta = true;
    }
  }
  return ta;
}



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var l = numeros.length;
  var s = 0;
  for (var i=0; i<l; i++) {
    s = s + numeros[i];
  }
  return s;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var l = resultadosTest.length;
  var p = 0;
  for (var i = 0; i< l; i++) {
    p = p + resultadosTest[i];
  }
  return(p/l);
}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var l = numeros.length;
  var max = 0;
  for (var i=0; i<l; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
}



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  var l = arguments.length;
  var mult = 1;

  if (l > 0) {
    for (var i=0; i<l; i++) {
      mult = mult * arguments[i];
    }
  } else {
    
    mult = 0;
  }

  return mult;
 }



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var c = 0;
  var l = arreglo.length;
  for (var i=0; i<l; i++) {
    if (arreglo[i] > 18) {
      c= c+1;}
    }
return c;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if (numeroDeDia == 1 || numeroDeDia == 7) {
    return 'Es fin de semana';
  } else {return 'Es dia Laboral';}   
  
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nstr = n.toString();
  if (nstr[0] == 9) {
    return true;
  } else {
    return false;
  }
  
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var l = arreglo.length;
  var t = arreglo[0]
  
  var dif = false;

  for (var i=0; i<l; i++) {
    if (t !== arreglo[i]) {
      dif = true
    }
  } 
  return !dif;

  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var l = array.length;
  var array2 = []
  var c = 0;
  for(var i=0; i<l;i++) {
    if (array[i] === "Noviembre" || array[i] === "Enero" || array[i] === "Marzo") {
      c = c + 1;
      array2.push(array[i]);
    }
  }
  if (c === 3) {
    return array2;
  } else {
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var l = array.length;
  var mayores = [];
  for (var i =0; i<l; i++) {
    if (array[i]> 100) {
      mayores.push(array[i]);
    }
  }
  return mayores;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [numero];
  for (var i=1;i<11;i++) {
    array[i] = array[i-1] + 2;
    if (array[i] === i) {
      return "Se interrumpió la ejecución";
      break;
    }
  }
  array.shift()
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  var array = [numero+2];
  var i = 1;
  while (i<10) {
    if (i === 5) {
      i++;  
      continue;
    }
    array.push(array[array.length-1] + 2);
    //array[i]=array[i - 1] + 2;
    i++;
  }
  //array.shift();
  return array;

}
//continueStatement(2);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

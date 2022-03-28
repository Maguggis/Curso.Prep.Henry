// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arreglo = Object.entries(objeto);
  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:
  let objeto = {};
  let n = 1;
  let arreglo = string.split("");
  arreglo.forEach(function(elemento){
    if (arreglo.indexOf(elemento) > -1){
      objeto.assign(elemento, n);
      n++;
    }
  })
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  // for(var i = 0; i < s.length ; i++){
  //   if (s[i] === s[i].toUpperCase()){
  //     var n = 0;
  //     s.splice(n, 1, s[i]);
  //     n++;
  //   } 
  // }
  // return s;
  let string = s.forEach(function(e){
    let n = 0;
    if (e === e.toUpperCase()){
      s[n] = e;
      n++;
    }
  });
  return string;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  let stringInvertida = "";
  for (var i = str.length - 1; i >= 0; i--){
    stringInvertida = stringInvertida + str.charAt(i);
  }
  return stringInvertida;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
  let num = numero.toString();
  let numInvertido = "";
  for (var i = num.length - 1; i >= 0; i--){
    numInvertido = numInvertido + num.charAt(i);
  }
  if (num === numInvertido){
    return "Es capicua";
  } else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí:
  cadenaNueva = cadena.split("");
  for (var i = 0; i < cadena.length; i++){
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c" ){
      cadenaNueva.splice(i,1,"");
    }
  }
  return cadenaNueva.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (a,b){
    if (a.length > b.length){
      return 1;
    } 
    if (a.length < b.length){
      return -1;
    } else {
      return 0;
    }
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:
  let arreglo3= [];
  arreglo1.forEach(function(elemento) {
    if (arreglo2.indexOf(elemento) > -1) {
      arreglo3.push(elemento);  // existe pero en otra posición
    }
  });  
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


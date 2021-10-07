window.cipher = {// implementacion del objeto "cipher" el cual se exporta en el objeto global "window" 
  encode: function encode (offset,str){//El primer metodo llamado "encode"
    if(!(typeof(str)==='string')){//si el tipo de dato ingresado no es "string" devuelve "Error, ingrese una cadena de caracteres"
      let noEs = "Error, ingrese una cadena de caracteres"
      return  noEs
    }
    let desplazado = ""//crea una cadena de caracteres vacia, la cual vamos a regresar al final de la función 
    for(let i = 0; i <str.length; i++){// un bucle for para ir revisando letra por lerta de la cadena de caracteres
      if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){// revisa si el caracter es mayuscula
        desplazado = desplazado + String.fromCharCode((str.charCodeAt(i)+offset-65)%26+65)// agrega a la cadena de caracteres vacia la letra ya desplazada
      } else { if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){//revisa si el caracter es minuscula
        desplazado = desplazado + String.fromCharCode((str.charCodeAt(i)+offset-97)%26+97)// agrega a la cadena de caracteres vacia la letra ya desplazada
      } else {//si no es mayuscula o minuscula
        desplazado =desplazado + String.fromCharCode(str.charCodeAt(i))// agrega otro aracter que no sea mayuscula o minuscula a la cadena de caracteres
      }  
      }
    }
    //console.log(typeof(desplazado))
    return desplazado //finalmente regresa la cadena de caracteres "codificada" o desplazada  
  },
  decode: function decode (offset,str){//El segundo metodo llamado "encode"
    if(!(typeof(str)==='string')){// Es lo mismo que el metodo encode, solo cambia el offset, es decir el numero de caracteres desplazado
      let noEs = "Error, ingrese una cadena de caracteres"
      return  noEs
    }
    let desplazado = ""
    for(let i = 0; i <str.length; i++){
      if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
        desplazado = desplazado + String.fromCharCode((str.charCodeAt(i)-offset-65 +26)%26+65)//rotar la cadena de caracteres hacia el sentido contrario-
      } else { if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){//es equivalente a rotar la cadena una vez completamente menos el numero de desplazamientos que queremos
        desplazado = desplazado + String.fromCharCode((str.charCodeAt(i)-offset-97 +26)%26+97)//se implemento de esta manera en el metodo decode.
      } else {
        desplazado =desplazado + " ";/*String.fromCharCode(str.charCodeAt(i))*/
      }   
      }
    }
    return desplazado// finalmente regresa la cadena de caracteres "decodificada" o desplazada
  },
  createCipherWithOffset: function createCipherWithOffset (offset){
    console.log("el offset es" + offset)
  }
};







/*
//............................................Funcion para "rotar" un arreglo un "n" veces...........................

function rotar (arr, des){
  for(let i=0; i<des; i++){
    arr.unshift(arr.pop())
  }
  return arr;
}
//...................................................................................................................
//.................................................Funcion para codificar............................................
function desplazar (str,offset){// la funcion desplazar requiere una cadena y el numero de desplazamientos u offset
  let desplazado =[];//se crea un arreglo, para ir guardando las letras desplazadas y posteriormente convertirlo en string
  for (let i = 0; i <str.length; i++){
    let mIndex = minu.indexOf(str[i]) //busca en el arreglo "minu" la primera letra del str y regresa la posicion en minu
    let MIndex = mayu.indexOf(str[i]) //busca en el arreglo "mayu" la primera letra del str y regresa la posicion en mayu
    //console.log(MIndex)
    //console.log(mIndex)
    if(mIndex < 0){ // if's anidados para determinar si la letra es mayuscula, minuscula o espacio e ir formando el arreglo
      if(MIndex < 0){
        //console.log(" ")
        desplazado.push(" ")// agrega espacio a desplazado
      }else {
        let newPos = (MIndex+offset)%26 //utilizando la formula de la documentacion, se calcula la nueva letra
        //console.log(mayu[offset])
        desplazado.push(mayu[newPos])// agrega letra mayuscula
      }
    } else {
    let newPos = (mIndex + offset)%26
    //console.log(minu[offset])
    desplazado.push(minu[newPos])// agrega letra minuscula
    }
  }
  //console.log(desplazado)
  //console.log(desplazado.join(''))
  let movida = desplazado.join('') // convierte el arreglo desplazado a un str
  return movida 
}
//...................................................................................................................

//.................................................Funcion para decodificar..........................................
function regresar (str,offset){//La misma funcion que codificar, solo que el offset es de: "26-offset"
  let desplazado =[];// es quivalente dar una vuelta completa menos el offset, que regresar el offset
  for (let i = 0; i <str.length; i++){
    let mIndex = minu.indexOf(str[i]);
    let MIndex = mayu.indexOf(str[i])
    //console.log(MIndex)
    //console.log(mIndex)
    if(mIndex < 0){
      if(MIndex < 0){
        //console.log(" ")
        desplazado.push(" ")
      }else {
        let newPos = (MIndex + 26 - offset)%26 
        //console.log(mayu[offset])
        desplazado.push(mayu[newPos])
      }
    } else {
    let newPos = (mIndex + 26 - offset)%26
    //console.log(minu[offset])
    desplazado.push(minu[newPos])
    }
  }
  //console.log(desplazado)
  //console.log(desplazado.join(''))
  let movida = desplazado.join('')
  return movida 
}
//...................................................................................................................
//............................................Arreglos necesarios para las funciones desplazar y regresar............
let minu = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let mayu = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//...................................................................................................................
*/
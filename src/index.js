//............................................Funcion para "rotar" un arreglo un "n" veces...........................
function rotar (arr, des){
  for(let i=0; i<des; i++){
    arr.unshift(arr.pop())
  }
  return arr;
}
//...................................................................................................................


console.log("............................")
let str1 ="Holamudo";


//............................................Arreglos necesarios para las funciones desplazar y regresar............
let minu = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let mayu = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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

console.log(desplazar(str1,2));


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


console.log(regresar(desplazar(str1,2),2))
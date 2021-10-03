//............................................Funcion para "rotar" un arreglo un "n" veces......................................
function rotar (arr, des){
  for(let i=0; i<des; i++){
    arr.unshift(arr.pop())
  }
  return arr;
}
//..............................................................................................................................

console.log("............................")
let str1 ="Hola mudo";
//............................................Arreglos necesarios para las funciones desplazar y regresar......................
let minu = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let mayu = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//.............................................................................................................................
function desplazar (str,offset){
  let desplazado =[];
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
        let newPos = (MIndex+offset)%26 
        //console.log(mayu[offset])
        desplazado.push(mayu[newPos])
      }
    } else {
    let newPos = (mIndex + offset)%26
    //console.log(minu[offset])
    desplazado.push(minu[newPos])
    }
  }
  //console.log(desplazado)
  //console.log(desplazado.join(''))
  let movida = desplazado.join('')
  return movida 
}
console.log(desplazar(str1,2));

function regresar (str,offset){
  let desplazado =[];
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
console.log(regresar(desplazar(str1,2),2))
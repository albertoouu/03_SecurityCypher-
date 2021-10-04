//cipher.saludar()
let boton = document.getElementById("encoding")
boton.addEventListener("click",function (){cipher.saludar()})




function code (offset,str){
  if(!(typeof(str)==='string')){
    let noEs = "Error, ingrese una cadena de caracteres"
    return  noEs
  }
  let desplazado = ""
  for(let i = 0; i <str.length; i++){
    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
      desplazado = desplazado + String.fromCharCode((str.charCodeAt(i)+offset-65)%26+65)
    } else { if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
      desplazado = desplazado + String.fromCharCode((str.charCodeAt(i)+offset-97)%26+97)
    } else {
      desplazado =desplazado + String.fromCharCode(str.charCodeAt(i))
    }
      
    }
  }
  return desplazado
}

function decode (offset,str){
  if(!(typeof(str)==='string')){
    let noEs = "Error, ingrese una cadena de caracteres"
    return  noEs
  }
  let desplazado = ""
  for(let i = 0; i <str.length; i++){
    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
      desplazado = desplazado + String.fromCharCode((str.charCodeAt(i)-offset-65 +26)%26+65)
    } else { if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
      desplazado = desplazado + String.fromCharCode((str.charCodeAt(i)-offset-97 +26)%26+97)
    } else {
      desplazado =desplazado + String.fromCharCode(str.charCodeAt(i))
    }
      
    }
  }
  return desplazado
}

let str = "HoLa MuDo"
let x = code(1,str)
console.log(x)
let y = decode(1,str)
console.log(y)
console.log(decode(1,code(1,str)))
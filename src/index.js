//La UI se divide en 4 pantallas, al iniciar se muestra:
document.getElementById("p2").hidden =true // se oculta la segunda pantalla
document.getElementById("p3").hidden =true //se oculta la tercera pantalla
document.getElementById('p4').hidden = true // se oculta la cuarta pantalla

let ini =document.getElementById('Ini') // se jala el boton (id="Ini")
ini.addEventListener('click', function (){ // se agrega un addEventListener a el boton y cuando se clickea ejecuta:
  let user = document.getElementById('usuario').value // obtiene el valor del input "usuario" y lo guarda en la variable usuario
  let password = document.getElementById('key').value // obtiene el valor del input "key" y lo gurda en password
  console.log(user) 
  console.log(password)
  if(user == "usuario" && password == 123){ //se establece el usuario y la contraseña y si se cumplen las condiciones se ejectua:
  document.getElementById('header').hidden = true // se oculta el header
  document.getElementById('p1').hidden = true //se oculta la pantalla 1
  document.getElementById('p2').hidden = false // se muestra la pantalla 2
  } else {
    console.log("contraseña o usuario no validos") // si la contraseña y el usuario no son los correctos muestra en la consola el mensaje
  }
})
// en la segunda pantalla se muestran dos botones, uno con el boton "cifrar" y el otro "descifrar"
let cifrar = document.getElementById('cifrar') // se agrega un evento al boton de cifrar y si es clickeado ejecuta:
cifrar.addEventListener('click',function(){
document.getElementById("p1").hidden =true // 
document.getElementById("p2").hidden =true
document.getElementById('p3').hidden = true
document.getElementById('p4').hidden = false
})

let descifrar = document.getElementById('descifrar')
descifrar.addEventListener('click',function(){
document.getElementById("p1").hidden =true
document.getElementById("p2").hidden =true
document.getElementById('p4').hidden = true
document.getElementById('p3').hidden = false
})

let bdescifrar =document.getElementById('bdescifrar')
bdescifrar.addEventListener('click', function(){
  let textd = document.getElementById('adescifrar').value
  console.log(textd)
  console.log(cipher.decode(1,textd))
  document.getElementById('parrafoDescifrar').innerHTML = cipher.decode(1,textd)

})

let bcifrar =document.getElementById('bcifrar')
bcifrar.addEventListener('click', function(){
  let textd = document.getElementById('acifrar').value
  console.log(textd)
  console.log(cipher.encode(1,textd))
  document.getElementById('parrafoCifrar').innerHTML = cipher.encode(1,textd)
})

let regresaDes = document.getElementById('regresaDes')
regresaDes.addEventListener('click',function(){
 console.log("regresaDes")
 document.getElementById("p2").hidden =false
 document.getElementById("p3").hidden =true
 document.getElementById('p4').hidden = true
})

let regresaCi = document.getElementById('regresaCi')
regresaCi.addEventListener('click',function(){
 console.log("regresaDes")
 document.getElementById("p2").hidden =false
 document.getElementById("p3").hidden =true
 document.getElementById('p4').hidden = true
})
/*
cipher.saludar()
let boton = document.getElementById("encoding")
boton.addEventListener("click",function (){cipher.saludar()})
*/


/*
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
let x = encode(1,str)
console.log(x)
let y = decode(1,str)
console.log(y)
console.log(decode(1,code(1,str)))
*/
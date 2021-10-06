//La UI se divide en 4 pantallas, al iniciar se muestra:
document.getElementById("p2").hidden =true // se oculta la segunda pantalla
document.getElementById("p3").hidden =true //se oculta la tercera pantalla
document.getElementById('p4').hidden = true // se oculta la cuarta pantalla

let ini =document.getElementById('Ini') // se jala el boton (id="Ini")
ini.addEventListener('click', function (){ // se agrega un addEventListener a el boton y cuando se clickea ejecuta:
  let user = document.getElementById('usuario').value // obtiene el valor del input "usuario" y lo guarda en la variable usuario
  let password = document.getElementById('pass').value // obtiene el valor del input "pass" y lo gurda en password
  //console.log(user) 
  //console.log(password)
  if(user == "usuario" && password == 123){ //se establece el usuario y la contraseña y si se cumplen las condiciones se ejectua:
  document.getElementById('header').hidden = true // se oculta el header
  document.getElementById('p1').hidden = true //se oculta la pantalla 1
  document.getElementById('p2').hidden = false // se muestra la pantalla 2
  } else {
    console.log("contraseña o usuario no validos") // si la contraseña y el usuario no son los correctos muestra en la consola el mensaje
    alert("Usuario o contraseña no validos")
  }
})
// en la segunda pantalla se muestran dos botones, uno con el boton "cifrar" y el otro "descifrar"
let cifrar = document.getElementById('cifrar') // se agrega un evento al boton de cifrar y si es clickeado ejecuta:
cifrar.addEventListener('click',function(){
document.getElementById("p1").hidden =true // se oculta la pantalla 1 
document.getElementById("p2").hidden =true // se oculta la pantalla 2
document.getElementById('p3').hidden = true //se oculta la pantalla 3
document.getElementById('p4').hidden = false //se muestra la pantalla 4
})

let descifrar = document.getElementById('descifrar') // se agrega un evento al boton de descifrar y si es clickeado ejecuta:
descifrar.addEventListener('click',function(){
document.getElementById("p1").hidden =true //se oculta la pantalla 1
document.getElementById("p2").hidden =true //se oculta la pantalla 2
document.getElementById('p4').hidden = true //se oculta la pantalla 4
document.getElementById('p3').hidden = false //se muestra la pantalla 3
})
// en la pantalla 3 se muestra el input del key, el input de la cadena a mostrar y dos botones uno para cifrar y otro para regresar a la pantalla 2
let bdescifrar =document.getElementById('bdescifrar')// se agrega un evento al boton "bdescifrar" 
bdescifrar.addEventListener('click', function(){// si se clickea se ejecuta:
  let textd = document.getElementById('adescifrar').value //obtiene el valor del input "adescifrar" y lo guarda en la variable textd
  let key1 = document.getElementById("key1").value // obtiene el valor del input "key2" del html y lo guarda en la variable "key"....................................................................................
  console.log(key1+".............")
  console.log(cipher.decode(parseInt(key1),textd))
  document.getElementById('parrafoDescifrar').innerHTML = cipher.decode(parseInt(key1),textd)// Subsituye lo que hay en "parrafoDescifrar" por el valor que te regresa cipher.:w

})

let bcifrar =document.getElementById('bcifrar')
bcifrar.addEventListener('click', function(){
  let textd = document.getElementById('acifrar').value
  let key2 = document.getElementById("key2").value // obtiene el valor del input "key" del html y lo guarda en la variable "key"....................................................................................
  console.log(key2+".............")
  console.log(typeof(parseInt(key2)))
  console.log(textd)
  console.log(cipher.encode(parseInt(key2),textd))
  document.getElementById('parrafoCifrar').innerHTML = cipher.encode(parseInt(key2),textd)
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
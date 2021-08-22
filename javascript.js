let arreglo = []
function mostrarInformacion (){
    var nombre = document.getElementById("nombre").value 

    arreglo.push(nombre)
    
let contenido=''
    for (let index = 0; index < arreglo.length; index++) {
        contenido+= `<p>${arreglo[index]}</p>`
        console.log(contenido) 
    }
document.getElementById("listaNombres").innerHTML=contenido
    
}

let arreglodos = []
function mostrarInformaciondos() {
    var precio = document.getElementById("precio").value 

    arreglodos.push(precio)

let contenidodos= ''
    for (let index = 0; index < arreglodos.length; index++) {
        contenidodos += `<p>${arreglodos[index]}</p>`
        console.log(contenidodos)

    }
document.getElementById("listaPrecios").innerHTML=contenidodos
}
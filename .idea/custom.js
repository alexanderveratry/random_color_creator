<!-- array lugares, da las opciones -->
var lugares = ["red", "blue"]
//length, necesario para la formula de azar

//interaccion con el html
var h1 =
    document.getElementById("demo")

var h3 =
    document.getElementById("h3")

var f= document.getElementById("add")



var x =
    document.getElementById("add")



function guardarNumeros() {

    boxvalue = document.getElementById('box').value;
    lugares.push(boxvalue);
    console.log(lugares);
    return false;

}

//funcion de azar con lugares
function myFun() {
    h3.innerHTML = lugares
    y = lugares.length

    var c = Math.floor((Math.random() * y) + 1)
    const elegido = lugares[c - 1]

   h1.style.backgroundColor = elegido
    h1.innerHTML = elegido
}
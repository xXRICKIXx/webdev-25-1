
console.log("oi gente");

function converteSegundosFormatoRelogio(segundos) {
    let horas = parseInt(segundos / 3600)
    let minutos = parseInt((segundos % 3600) / 60)
    segundos = segundos % 60
    
    if(horas<10) {
        horas = "0"+horas
    }
    //console.log(horas+":"+minutos+":"+segundos);    
    return horas+":"+minutos+":"+segundos
}

//let s = parseInt(prompt("digite segundos"))
//let texto = converteSegundosFormatoRelogio(30234)
//console.log("oi gente");
//converteSegundosFormatoRelogio(3456)

//console.log("horas",horas);
//console.log("minutos",minutos);
//console.log("segundos",segundos);

let elem = document.getElementById("relogio01")
let elem2 = document.getElementById("relogio02")
//console.log(elem);
//elem.innerHTML = texto


let segundos = 1

function atualizaRelogioBrasil() {
    segundos++
    let texto = converteSegundosFormatoRelogio(segundos)
    elem.innerHTML = texto
    texto = converteSegundosFormatoRelogio(segundos+10800)
    elem2.innerHTML = texto
}

setInterval(atualizaRelogioBrasil,10)
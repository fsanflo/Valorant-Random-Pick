//Cambiar si hay nuevos personajes
const PERSONAJES = ["Astra", "Breach", "Brimstone", "Chamber", "Clove", "Cypher", "Deadlock", "Fade", "Gekko", "Harbor", "Iso", "Jett", "KAY-O", "Killjoy", "Neon", "Omen", "Phoenix", "Raze", "Reyna", "Sage", "Skye", "Sova", "Viper", "Yoru"]
const NUM_PERSONAJES = PERSONAJES.length;



$(document).ready(function () {
    inicio();
    
    //PERSONAJE ALEATORIO
    $("#botonAleatorio").click(function () {
        $("#personaje").css("visibility", "visible");
        let aletorio = getRandomInt(NUM_PERSONAJES);
        let personaje = PERSONAJES[aletorio];


        $("#imagen").attr("src", "./img/" + personaje + ".png")
        $("#imagen").attr("alt", personaje)
        $("#nombre").html(personaje)
    });

    //COPYPASTES
    $(".copiar").click(function () {
        let textoACopiar = $(this).siblings('p').text();
        console.log(textoACopiar)
        navigator.clipboard.writeText(textoACopiar);
    });
});

function inicio() {
    $("#personaje").css("visibility", "hidden");
}

//Genera un numero RANDOM
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function copyToClipboard(idElemento) {
    let copyText = $(idElemento).val();
    navigator.clipboard.writeText(copyText.value);
}
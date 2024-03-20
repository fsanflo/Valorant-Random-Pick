//Cambiar si hay nuevos personajes
const PERSONAJES = ["Astra", "Breach", "Brimstone", "Chamber", "Cypher", "Deadlock", "Fade", "Gekko", "Harbor", "Iso", "Jett", "KAY_O", "Killjoy","Neon","Omen","Phoenix","Raze", "Reyna","Sage","Skye","Sova","Viper","Yoru"]
const NUM_PERSONAJES = PERSONAJES.length;



$(document).ready(function () {
    inicio();

    $("#botonAleatorio").click(function () {
        $("#personaje").css("visibility", "visible");
        let aletorio = getRandomInt(NUM_PERSONAJES);
        let personaje = PERSONAJES[aletorio];


        $("#imagen").attr("src","./img/"+personaje+".png")
        $("#nombre").html(personaje)
    });
});

function inicio() {
    $("#personaje").css("visibility", "hidden");
}

//Genera un numero RANDOM
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
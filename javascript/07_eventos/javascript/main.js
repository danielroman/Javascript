function uy(element, event){
    event = event || window.event
    alert(element.id + " en fase " + event.eventPhase)
    event.stopPropagation()
}

function ay(){
    alert("Ay mis higos que me los bombambean")
}

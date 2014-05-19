
function show_vehicle(){
    var vehicle = document.getElementById("vehicle")
    vehicle = vehicle.options[vehicle.selectedIndex].value

    vehicle = eval("new " + vehicle + "()")

    var output = document.getElementById("output")
    output.innerHTML = ""
    for (var i in vehicle)
        output.innerHTML += i + ": " + vehicle[i] + "<br/>\n"
}



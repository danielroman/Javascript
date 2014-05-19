var xhr = new XMLHttpRequest()



function load_page(){
    var url = document.getElementById("page_url").value
    url += "?Access-Control-Allow-Origin: *"

    xhr.onreadystatechange = function () {
        if (xhr.onreadystatechange == 4) 
            document.getElementById("output").innerHTML = xhr.responseText
    }
    xhr.open("GET", encodeURI(url), true)
    xhr.send()
}

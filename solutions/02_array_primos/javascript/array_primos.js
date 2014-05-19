function array_primos(){
    
    var primos = new array();
    primos[0] = 2;
    var n = 10;
    var numero = 3;
    var primo_hallado = true;
    var primo_encontrado = 0;

   while(primo_encontrado <= n){
	for (var divisor = 2; divisor < numero; divisor++)
	    if(numero % divisor == 0)
		primo_hallado = false;

	if(primo_hallado == true){
	    primo_encontrado++;
	    celdas++;
	    primos[celdas] = numero;
	}

	  primo_hallado = true;
	  numero++; 
    }

	alert(primos.valueOf())

}



var primes = [2]

for (var candidate = primes[0] + 1;
     primes.length<100; candidate++) {

    /* candidate es un nuevo candidato */
    var is_prime = true  // En principio puede ser primo

    /* Divido al candidato por todos los primos conocidos */
    for (var div_index=0; 
         is_prime && div_index<primes.length; 
         div_index++)

         /* Si tiene algun divisor, ya no puedo
          * seguir suponiendo que es primo.
          */
       if (candidate % primes[div_index] == 0)
           is_prime = false

    /* Si despues de todas las divisiones es primo, lo añado
     * a la lista de primos.
     */
    if (is_prime)
        primes.push(candidate)
}

console.log(primes)

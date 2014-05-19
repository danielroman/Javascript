var text = "\
En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivia un hidalgo de los de lanza en astillero, adarga antigua, rocin flaco y galgo corredor. Una olla de algo mas vaca que carnero, salpicon las mas noches, duelos y quebrantos los sabados, lantejas los viernes, algun palomino de anadidura los domingos, consumian las tres partes de su hacienda. El resto della concluian sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los dias de entresemana se honraba con su vellori de lo mas fino. Tenia en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que asi ensillaba el rocin como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta anos; era de complexion recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenia el sobrenombre de Quijada, o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque, por conjeturas verosimiles, se deja entender que se llamaba Quejana. Pero esto importa poco a nuestro cuento; basta que en la narracion del no se salga un punto de la verdad. \
\
Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los mas del ano, se daba a leer libros de caballerias, con tanta aficion y gusto, que olvido casi de todo punto el ejercicio de la caza, y aun la administracion de su hacienda. Y llego a tanto su curiosidad y desatino en esto, que vendio muchas hanegas de tierra de sembradura para comprar libros de caballerias en que leer, y asi, llevo a su casa todos cuantos pudo haber dellos; y de todos, ningunos le parecian tan bien como los que compuso el famoso Feliciano de Silva, porque la claridad de su prosa y aquellas entricadas razones suyas le parecian de perlas, y mas cuando llegaba a leer aquellos requiebros y cartas de desafios, donde en muchas partes hallaba escrito: La razon de la sinrazon que a mi razon se hace, de tal manera mi razon enflaquece, que con razon me quejo de la vuestra fermosura. Y tambien cuando leia: ...los altos cielos que de vuestra divinidad divinamente con las estrellas os fortifican, y os hacen merecedora del merecimiento que merece la vuestra grandeza.\
\
Con estas razones perdia el pobre caballero el juicio, y desvelabase por entenderlas y desentranarles el sentido, que no se lo sacara ni las entendiera el mesmo Aristoteles, si resucitara para solo ello. No estaba muy bien con las heridas que don Belianis daba y recebia, porque se imaginaba que, por grandes maestros que le hubiesen curado, no dejaria de tener el rostro y todo el cuerpo lleno de cicatrices y senales. Pero, con todo, alababa en su autor aquel acabar su libro con la promesa de aquella inacabable aventura, y muchas veces le vino deseo de tomar la pluma y dalle fin al pie de la letra, como alli se promete; y sin duda alguna lo hiciera, y aun saliera con ello, si otros mayores y continuos pensamientos no se lo estorbaran. Tuvo muchas veces competencia con el cura de su lugar —que era hombre docto, graduado en Sigüenza—, sobre cual habia sido mejor caballero: Palmerin de Ingalaterra o Amadis de Gaula; mas maese Nicolas, barbero del mesmo pueblo, decia que ninguno llegaba al Caballero del Febo, y que si alguno se le podia comparar, era don Galaor, hermano de Amadis de Gaula, porque tenia muy acomodada condicion para todo; que no era caballero melindroso, ni tan lloron como su hermano, y que en lo de la valentia no le iba en zaga.\
\
En resolucion, el se enfrasco tanto en su letura, que se le pasaban las noches leyendo de claro en claro, y los dias de turbio en turbio; y asi, del poco dormir y del mucho leer, se le seco el celebro, de manera que vino a perder el juicio. Llenosele la fantasia de todo aquello que leia en los libros, asi de encantamentos como de pendencias, batallas, desafios, heridas, requiebros, amores, tormentas y disparates imposibles; y asentosele de tal modo en la imaginacion que era verdad toda aquella maquina de aquellas sonadas sonadas invenciones que leia, que para el no habia otra historia mas cierta en el mundo. Decia el que el Cid Ruy Diaz habia sido muy buen caballero, pero que no tenia que ver con el Caballero de la Ardiente Espada, que de solo un reves habia partido por medio dos fieros y descomunales gigantes. Mejor estaba con Bernardo del Carpio, porque en Roncesvalles habia muerto a Roldan el encantado, valiendose de la industria de Hercules, cuando ahogo a Anteo, el hijo de la Tierra, entre los brazos. Decia mucho bien del gigante Morgante, porque, con ser de aquella generacion gigantea, que todos son soberbios y descomedidos, el solo era afable y bien criado. Pero, sobre todos, estaba bien con Reinaldos de Montalban, y mas cuando le veia salir de su castillo y robar cuantos topaba, y cuando en allende robo aquel idolo de Mahoma que era todo de oro, segun dice su historia. Diera el, por dar una mano de coces al traidor de Galalon, al ama que tenia, y aun a su sobrina de anadidura.\
\
En efeto, rematado ya su juicio, vino a dar en el mas estrano pensamiento que jamas dio loco en el mundo; y fue que le parecio convenible y necesario, asi para el aumento de su honra como para el servicio de su republica, hacerse caballero andante, y irse por todo el mundo con sus armas y caballo a buscar las aventuras y a ejercitarse en todo aquello que el habia leido que los caballeros andantes se ejercitaban, deshaciendo todo genero de agravio, y poniendose en ocasiones y peligros donde, acabandolos, cobrase eterno nombre y fama. Imaginabase el pobre ya coronado por el valor de su brazo, por lo menos, del imperio de Trapisonda; y asi, con estos tan agradables pensamientos, llevado del estrano gusto que en ellos sentia, se dio priesa a poner en efeto lo que deseaba.\
"

var summary = {}

function report() {

	var real_letters = 0
	for (var i=0; i<text.length; i++){

		var letter = text[i]
		letter = letter.toLowerCase()

		if ( /[a-z]/i.test(letter) ){
			real_letters++
			if (!summary[letter])
				summary[letter] = 0
			summary[letter]++
		}
	}

	for (var i in summary)
		summary[i] = Math.round(10000 * summary[i] / real_letters) / 100

	document.getElementById("es").innerHTML = summary.toSource()			
}

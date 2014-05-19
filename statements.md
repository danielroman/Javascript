
HTML
====

01 Links
--------

Write a little example site having _css_, _docs_ and _images_ folders with an _index.html_. _index.html_ shall link 
to _about.html_ and _quijote.html_ inside the _docs_ directory. These pages redirect **back** to _index.html_. The former carries us to a given anchor point inside _quijote.html_

02 Tables
---------

Show the distances between 7 cities in your country.


03 Images
---------

Write a page showing a picture in its original format, and a normalized version of 100x100 along with a thumbnail of 64x64. Use _imagemagick_ to change the size. The original picture shall not be a square. Write the command tha you will have used for your conversions.

Javascript
=========

01 Resumen de frecuencias
--------------------------

Dados un número variable de nombres propios (palabras), calcular el numero de aparaciones de cada letra.

```javascript
function resumen(){
  var hash = {}
  // => Analizar n nombres propios
  hash[letra] = hash[letra] || 0
  hash[letra]++
  return hash
}

resumen("pepe", "maria", "juan")

// => { 'a': 3, 'e',: 2, 'i':1, 'j': 1, 'm': 1, 'n': 1, 'p': 2, 'u':1 }

```

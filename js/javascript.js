
function parrafoGrande() {
 
textoArea1 = document.getElementById("parrafo1").innerHTML;
numeroCaracteres1 = textoArea1.length;
textoArea2 = document.getElementById("parrafo2").innerHTML;
numeroCaracteres2 = textoArea2.length;
textoArea3 = document.getElementById("parrafo3").innerHTML;
numeroCaracteres3 = textoArea3.length;
textoArea4 = document.getElementById("parrafo4").innerHTML;
numeroCaracteres4 = textoArea4.length;
textoArea5 = document.getElementById("parrafo5").innerHTML;
numeroCaracteres5 = textoArea5.length;

var conteo = [ numeroCaracteres1 , numeroCaracteres2, numeroCaracteres3, numeroCaracteres4, numeroCaracteres5 ];
var mayorCantidad = 0;
 
for(i = 0; i < conteo.length; i++){
    if (conteo[i] > mayorCantidad)
    {
       mayorCantidad = conteo[i];
    }
}

switch(mayorCantidad) {
  case numeroCaracteres1:
    alert("El primer parrafo es el que contiene mayor cantidad de letras");
    break;
  case numeroCaracteres2:
    alert("El segundo parrafo es el que contiene mayor cantidad de letras");
    break;
  case numeroCaracteres3:
    alert("El tercer parrafo es el que contiene mayor cantidad de letras");
    break;
  case numeroCaracteres4:
    alert("El cuarto parrafo es el que contiene mayor cantidad de letras");
    break;
  case numeroCaracteres5:
    alert("El quinto parrafo es el que contiene mayor cantidad de letras");
    break;
     }
 

 } 
         


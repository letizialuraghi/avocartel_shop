//imposto le variabili
var slideTab = [1,1];                                       //array (variabile che contiene molteplici valori dello stesso tipo) "slideTab" con due elementi inizializzati a 1
var slideId = []                                            //array vuoto  
var slides = document.getElementsByClassName("carosello");  //collegamento della pagina html attraverso il nome della classe con la variabile slides

//scrivo un ciclo con un numero di iterazioni definito
for (var e = 1; e <= slides.length; e++) {                 //il ciclo inizia quando la variabile e=1; funziona fino a quando si è all'interno di e minore/uguale alla lunghezza dell'array "slides"; dopodichè si incrementa l'interazione successiva
  slideId.push("slide"+e);                                 //stringa formata dalla parola slide concatenata al valore e
}

creaSlide(1, 0);                      //carosello uno (primo valore di slideTab)
creaSlide(1, 1);                      //carosello due (secondo valore di slideTab)

//funzione per il funzionamento dei pulsanti avanti/indietro
function cambiaSlide(n, no) {            //la funzione cambiaSlide con parametri n e no include la funzione creaSlide
  creaSlide(slideTab[no] += n, no);      //nella funzione creaslide ci sono gli argomenti slideTab[no] += n e no; Questo aggiorna il valore dell'elemento corrispondente nell'array "slideTab" e ricrea lo slideshow con la nuova immagine visualizzata.
}

//esplicitazione della funzione creaSlide
function creaSlide(n, no) {
  var i;                                                    //variabile i
  var x = document.getElementsByClassName(slideId[no]);     //variabile x, che rappresenta un array di elementi html (le foto) selezionate tramite la classe slideId
  if (n > x.length) {                                       //se n è maggiore della lunghezza dell'array x, il valore di slideTab[no] è uguale a 1
    slideTab[no] = 1}
  if (n < 1) {                                              //se n è minore di 1, il valore di slideTab[no] è uguale alla lunghezza ddell'array x
    slideTab[no] = x.length}
  for (i = 0; i < x.length; i++) {                          //si crea un ciclo: a partire da i=0 fino a quando i non è > di x.length (=occupa tutta la durata dell'array)
    x[i].style.display = "none";                            //lo stile del display sarà none, ovvero tutte le immagini tranne quella corrente non saranno visualizzabili
  }
  x[slideTab[no]-1].style.display = "block";                //lo stile del display dell'elemento corrente nell'array x è su block, così permette di vedere l'immagine
}
function mostraOverlay() {
    /*Il metodo getElementById() dell’oggetto document restituisce l’elemento della pagina HTML avente l’id uguale a ciò che 
    è specificato tra parentesi (in questo caso è l’ overlay cioè il nome dell’Id attribuito) al div che contiene tutti gli elementi della newsletter*/
    //Se si imposta display: block, elemento è visualizzata come un elemento di blocco
      document.getElementById("overlay").style.display = "block";
  }
  
  //funzione per nascondere la newsletter
  function nascondereOverlay() {
      //Se si imposta display: none, si nasconde l’intero elemento (in questo caso è sempre l’overlay, quindi la nostra newsletter)  
      document.getElementById("overlay").style.display = "none";
  }
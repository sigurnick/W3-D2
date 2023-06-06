/* ESERCIZIO 1
             Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
          */

const changeTitle = function () {
  // let h1 = document.getElementsByTagName("h1");
  // console.log(h1[0].innerText);
  // h1[0] = h1[0].innerText = "ciao";

  let h1 = document.querySelector("h1");
  h1.innerText = "Nuovo Titolo";
};

changeTitle();

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  let h1 = document.querySelector("h1");
  h1.classList.add("myHeading");
};

addClassToTitle();

/* ESERCIZIO 3
       Scrivi una funzione per che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  let allP = document.querySelectorAll("div p");
  console.log(allP);

  allP.forEach((element) => {
    element.innerText = "nuovo paragrafo";
  });
};

changePcontent();

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  let AllLink = document.querySelectorAll("a");
  console.log(AllLink);
  AllLink.forEach((element) => {
    element.setAttribute("href", "https://www.google.com");
  });
};

changeUrls();

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  let newLi = document.createElement("li");
  newLi.innerText = "4";

  let parentUl = document.getElementById("secondList");
  console.log(parentUl);
  parentUl.appendChild(newLi);
};

addToTheSecond();

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un secondo paragrafo al primo div
    */

const addParagraph = function () {};

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  let lista = document.getElementById("firstList");
  lista.style.display = "none";
};

hideFirstUl();

/* ESERCIZIO 8
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  let allUl = document.querySelectorAll("ul");
  console.log(allUl);

  allUl.forEach((element) => {
    element.style.backgroundColor = "green";
  });
};

paintItGreen();

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {

    let h1 = document.getElementsByTagName("h1")
   let stringa = h1[0].innerText
   stringa = stringa.slice(0,stringa.length-1)
   console.log(stringa);
   h1[0].innerText= stringa

};

// makeItClickable()
let h1 = document.getElementsByTagName("h1")
h1[0].onclick = makeItClickable


/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {


};


/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea".
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {

    let div = document.getElementById("tableArea")
    console.log(div);
    let newTable = document.createElement("table")
    let newTr = document.createElement("tr")
    let newTh1 = document.createElement("th")
    let newTh2 = document.createElement("th")
    let newTh3 = document.createElement("th")
    let newTh4 = document.createElement("th")

    div.appendChild(newTable)
    newTable.appendChild(newTr)
   
    newTh1.innerText = "immagine"
    newTh2.innerText = "nome prodotto"
    newTh3.innerText = "quantità"
    newTh4.innerText = "prezzo"
    newTr.appendChild(newTh1)
    newTr.appendChild(newTh2)
    newTr.appendChild(newTh3)
    newTr.appendChild(newTh4) 

};

generateTable()

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function (d1,d2,d3,d4) {

    let table = document.querySelector("table")
    console.log(table);
    let newRow = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    td1.innerText = d1
    td2.innerText = d2
    td3.innerText = d3
    td4.innerText = d4



    table.appendChild(newRow)
    newRow.appendChild(td1)
    newRow.appendChild(td2)
    newRow.appendChild(td3)
    newRow.appendChild(td4)


};

addRow("","cuffie","2","30€")

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
      Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */

const deleteVowels = function () {};

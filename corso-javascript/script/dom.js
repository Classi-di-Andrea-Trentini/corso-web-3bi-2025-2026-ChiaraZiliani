/** 
 * DOM - Document Object Model 
 * Per ogni pagina HTML viene generato un modello ad oggetti (ad albero) che rappresenta la struttura del documento, consentendo di accedere e manipolare gli elementi HTML tramite JavaScript
 * Dentro DOM si possono utilizzare tutti i tag HTML, ma anche tag specifici di SVG e MathML
 */
function saluta() {
    // 1. Istanzio un oggetto che rappresenta nel DOM il tag div nel quale scrivere il saluto
    // document = oggetto globale che rappresenta l'intero documento HTML, da cui posso accedere a tutti gli elementi del DOM
    var divSaluto = document.getElementById('saluto'); // getElementById() è un metodo che restituisce l'elemento del DOM con l'id specificato
    divSaluto.innerText = 'Benvenuti nel corso JavaScript!'; // innerText è una proprietà che consente di impostare o ottenere il testo all'interno di un elemento HTML
}
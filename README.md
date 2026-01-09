# Conventional commit
Sito: https://www.conventionalcommits.org/en/v1.0.0/

## Summary
2 tipi di messaggi:
- FEAT --> aggiunta parte nuova al progetto (FEATURE)
    - ES. FEAT(esercizio1): descrizione breve di ciò che si è fatto 
    - ES. FEAT: descrizione
- FIX --> modificare o sistemare qualcosa che già abbiamo fatto 
    - ES. FIX(esercizio1): descrizione breve di ciò che si è fatto
    - ES. FIX: descrizione

# TPSIT
***HYPER TEXT MARK UP LANGUAGE → HTML CSS***

## GIT 
→ si può utilizzare senza account GitHub/altri tipi  
→ software di VERSIONAMENTO che opera in locale sul computer  
→ creato dallo sviluppatore del Kernel di Linux  

x64 bit  vs  x32 bit  
x64	→ possiamo disporre ed utilizzare più memoria ram  
x32 	→ al massimo 4G di ram

**GIT Bash** → promt dei comandi di Linux  
**GIT CMD**	 → prompt dei comandi di Windows  
**GIT GUI**  → versione grafica 

### Kernel
→ gestisce le risorse del computer  
→ è il programma che gestisce il computer  
Linux → installazione  
Windows → installazione → configurazione di base senza GUI

Deve esserci un programma, oppure un insieme di programmi, che permette all’utente di interagire con il computer → SHELL (grafica/testuale)

Promt dei comandi → shell di windows  
Bash (Born Again Shell) → shell di Linux → più potente della precedente

**LINUX**:  
No lettere (es. a: ___ ; b: ___ )  
Kernel  
Chi ha creato il Kernel ha creato anche GIT


## COMADI
- git config --global user.name (chi sei) → registra tutti i comandi/operazioni che verranno fatti con un utente;  
- git config --global user.mail (come posso contattarti) → registra tutti i comandi/operazioni sotto una mail  
- --global → per far in modo che TUTTE le operazioni di quell’utente vengano registrate con nome/email  
- commit → istantanea → fotografia dello stato del file   
- git status → mostra i file dentro la stage area  
- -m → associa al istantanea un messaggio di testo  
- git commit -m “ messaggio” → pulisce la stage area  
- {*} git add [nome file] → aggiunge il/i file elencati alla stage area → scatta delle istantanee del file  
- git log → mostra l'elenco dei commit che sono stati eseguiti (da chi? Quando?)  


## REPOSITORY
Dove vengono salvati tutti i progetti e i progressi 
Dove attivi il tracciamento del codice 

Windows o Linux → cartella che inizia col “.” è nascosta  
CARTELLA .git → contiene tutti i database che compongono il progetto


File salvati nella cartella Repository → non sono tracciati da GIT di default → bisogna usare il comando {*} → lo aggiungiamo alla stage area → tracciato

**Ash code**  
→ firma → non hanno un algoritmo inverso  
	 	→ lunghezza fissa;  
→ piccola modifica al file firmato deve modificare del tutto la firma;  

### AREE
**File System**  
→ prendo il file che voglio tracciare e lo metto nella Stage area  
**Stage area**  
→ scatto l’istantanea del file → pulisce la stage area  
**Commits**  
→ racchiude tutte le istantanee  


## Guide
***Sito responsitive***
Il sto deve adattarsi al dispositivo utilizzato 

## HTML
*HyperText MarkUp Language*
--> linguaggio markup standard per la formattazione di Ipertesti (pagine Web)
- Ipertesti --> documenti che contengono collegamenti ad altri documenti o parti ello stello documento 

Creo una pagina --> HTML per formattarla --> serve un programma per leggerla (BROWSER)
- BROWSER --> 

### Versioni 
- più usata --> versione 4 
- noi ci concentriamo su --> VERSIONE 5
***Sito utile*** https://www.w3schools.com/

**Per pubblicare il nostro sito web ci serve --> webServer**
- Client --> richiede di utilizzare un servizio
- Server --> computer che offre/fornisce i servizi ai client attraverso la rete
- Peer to peer --> ogni computer connesso alla rete è allo stesso tempo client e server (mette a disposizione informazioni per altri)

***Server***
- Printer server --> consente di condividere le stampanti 
- Live Server --> (WebServer con più utilità) utilizzato per vedere l'anteprima in rete del sito che creiamo con anche e modifiche in tempo reale 

### Struttura base
- <!DOCTYPE html> --> VERSIONE 5
    

**TIM BERNERS-LEE** (creatore di html)  
--> ha scelto più flessibilità 
--> scelta di utilizzare HTML

HTML --> diviso in --> **HEAD** e **BODY**  
HEAD --> tag presenti non vengono visualizzati nel web (tranne quello del titolo della scheda in alto) --> vengono chiamati META INFORMAZIONI (= contenuti che forniscono informazioni aggiuntive sul documento)  
--> utilizzati per 
- META KEYWORDS --> parole chiave che parlano dell'argomento (più sono più verra visualizzato "in alto il sito" --> visitato di più)  
- META DESCRIPTION --> descrizioni --> meglio le scriviamo più verra visualizzato "in alto il sito" --> utilizato di più dagli utenti  
BODY -->  insieme di tutti i tag che costituiscono il documeto  

## TAG  
**2 TIPI**   
- BLOCK TIPE --> (per lavorare bene bisogna avere il riquadro "ispeziona" sempre aperto) impostazioni dello stile di ogni singolo elemento  
    - es. <h1, h2, h3...> --> titoli (h1 più grande) / <article></article> (inserimento di un articolo)  
    - Ogni parte di testo (titolo o contenuto) è un blocco  
        - ogni blocco 
            - va dal margine sinistro a quello destro  
            - ha un BORDER (bordo)  
            - ha un PADDING (spaziatura tra il blocco e il BORDER)  
            - ha un MARGIN (spaziatura che separa i vari elementi)
    - LISTA COMANDI:
        - <P> --> nuovo paragrafo 
        - <h1, h2, h3...> --> titolo 
        - <div> --> contenitore generico 
        - <footer> --> parte in fondo 
        - <header> --> parte in alto 
        - <article> --> articolo 
        - <ul> --> elenco puntato (unordered list)
            - <li></li> --> nuovo elemento (list item)
        - <ol> --> elenco numerato (ordered list)
            - <li></li> --> nuovo elemento (list item)
        - <table> --> tabella (devo scriverla una riga alla volta)
            - ATTENZIONE: dobbiamo essere noi ad inserire tutte le celle (se metto 3<th> devo mettere 3<td> --> altrimenti la tabella viene irregolare)
            - <thead> --> intestazione (table head)
                - <tr> --> nuova riga (table row)
                    - <th> --> nuova colonna di intesazione 
                    - <th>
                    - <th> 
            - <tbody> --> corpo della tabella (table body)
                - <tr> --> nuova riga
                    - <td> --> dati della cella della tabella (table data)
                    - <td>
                    - <td> 


## CASCADING STYLE SHEETS [CSS]
--> tecnologia che ci permette di dare un apetto grafico alla pagine web  
--> il nome riguarda il funzionamento 
--> possono esserci più file CSS in una pagina web con cratteristiche diverse 

!important --> comando che da precedenza a quelle caratteristiche rispetto a quelle inline o altre  


**PRIORITA'**  
*l'ultimo che viene caricato vince*  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./Stile1.css"> <!-- Collegamento al file CSS esterno -->
    <style>
        /* Stile CSS per il titolo del sito */
        /* Tutti i titoli h1 avranno le caratteristiche seguenti */
        h1 {
            color: blue !important; /* Il colore blu avrà la precedenza su altri stili */
            border: 2px solid black;
            font-family: 'Times New Roman', Times, serif;
        }
    </style>
    <link rel="stylesheet" href="./Stile2.css"> <!-- Collegamento al file CSS esterno -->
</head>
<body>
    <h1 style="color:red; font-family: Arial, Helvetica, sans-serif; ">Titolo del sito, col attributo style</h1> <!-- Titolo del sito con stile inline -->
    <h1>Titolo h1 senza attributo style</h1>
</body>
</html>
```
Nel codice sopra la priorità è:
1. Stile2.css
2. <style>
3. Stile1.css
4. inline

**ID**  
--> per scrivere dei testi (titoli, paragrafi...) speciali, con caratteristiche diverse dallo Style  
--> può esserci un solo ID con il nome in tutto il codice  

**CLASSE**  
--> per scrivere dei testi (titoli, paragrafi...) speciali, con caratteristiche diverse dallo Style  
--> applica le caratteristiche a tutti i tag della classe
# Guida Markdown
Markdown è un linguaggio di formattazione molto veloce (la scrittura è molto più rapida che in HTML), compatibile con HTML (in realtà posso inserire in un file md anche pezzi di codice HTML)

## Titoli
Per inserire un titolo nel file md si utilizzano i \#.  
Esistono 6 livelli di titolo (come in HTML):

# Titolo 1
## Titolo 2 
### Titolo 3
#### Titolo 4 
##### Titolo 5 
###### Titolo 6

## Paragrafi 
I paragrafi vengono inseriti scrivendo il testo a capo.

Inizio un paragrafo...

Se voglio forzare un ritorno a capo...  
Inserisco un doppio spazio alla fine della riga.

## Elenchi puntati e numerati 
Elenco puntato:
- primo elemento 
- secondo elemento 
    - elemento nidificato 1 
    - elemento nidificato 2
        - elemento nidificato secondo livello 1
- terzo elemento 

Elenco numerato:
1. primo elemento 
2. secondo elemento
    1. sotto elemento 
    2. sotto elemento 
4. terzo elemento 
9. quarto elemento 

## Formattazione caratteri 
- Corsivo:  
*Questo testo è in corsivo* (\*)
_Anche questo testo è in corsivo_ (\_)

- Grassetto:  
**Questo testo è in grassetto** (\**)
__Anche questo testo è in grassetto__ (\_ _)

- Grassetto e corsivo:  
***Questo testo è in grassetto e in corsivo***
___Anche questo testo è in grassetto e corsivo___ (\_ _ _)

- Barrato:  
~~Questo testo è barrato~~ (\~~)  
NB TILDE --> alt + 126

## Citazioni
> Con questo simbolo si inserisce una citazione rientrata nel documento (\>)
>> Altra citazione rientrata (\>>)

## Link e immagini 
**Motori di ricerca**
- [Google](https://google.com)
- [Bing](https://bing.com)

**Immagini**
![Questa è un'immagine con URL relativa](universo-orig.webp)
![Questa è un'immagine con URL assoluta](https://cdn.studenti.stbm.it/images/2017/04/10/universo-orig.jpeg)
https:// --> hypertext transfer protocol --> serve per il trasferimento di ipertesti  
**IPERTESTI** --> documenti che contengono collegamenti ad altri documenti o parti ello stello documento  
**RGB** --> metodo additivo --> massimo di ogni colore = **bianco**  
**STAMPANTE** --> metodo sottrattivo --> ciano giallo e magenta --> massimo di ogni colore = **nero**

## Codice 
Per inserire codici o parti di codici si mettono tre asterischi "storti" (accenti gravi) con a seguire il nome del programma (java/bash...).
```java
public class helloWorld {
    public static void main(String[] args) {
        //Questa è una linea di commento
    }
}
```
```bash
cd /workspace
ls
```
NB ASTERISCO "STORTO" (accento grave) --> alt + 96

Se si vuole inserire un'istruzione in un paragrafo normale la si mette tra asterischi "storti" (accenti gravi):  
`public class ...` (per creare una classe in java)

## Tabelle 
|Intestazione 1|Intestazione 2|Intestazione 3|
|-|-|-|
| valore 1 | valore 2 | valore 3 |
| valore 4 | valore 5 | valore 6 |
| valore 4 | valore 5 | valore 6 |

Per spostare le righe si deve tenere premuto ALT + SHIFT e spostare con le frecce (su o giu).

Per duplicare le righe si deve tenere premuto ALT + SHIFT e premere le frecce (su o giu, non cambia, la riga duplicata verrà sempre sotto). 

## Commenti  
\<!-- questo è un commento -->  
Per scriverlo più velocemente --> ALT + SHIFT + A  

## Note a piè pagina 
Può capitare di voler inserire delle note a piè pagina in un documento [^1].  
Ovviamente anche le note possono essere formattate [^2].

[^1]: Questo è il testo della nota 1  
[^2]: Questo è il testo della **nota 2**

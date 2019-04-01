- [IDealJob ~ Progetto-IDW-18-19 :bowtie:](#idealjob--progetto-idw-18-19-bowtie)
  - [Idea progetto](#idea-progetto)
    - [Specifica problema](#specifica-problema)
    - [Descrizione funzionale](#descrizione-funzionale)
  - [Architettura piattaforma](#architettura-piattaforma)
  - [Fonti scelte (quante fonti?)](#fonti-scelte-quante-fonti)
    - [LinkedIn](#linkedin)
    - [GitHub](#github)
    - [Medium](#medium)
    - [Coursera (?)](#coursera)
    - [Numbeo](#numbeo)
    - [Glassdoor (?)](#glassdoor)
    - [Indeed](#indeed)
    - [Payscale](#payscale)
  - [Risorse utili](#risorse-utili)


# IDealJob ~ Progetto-IDW-18-19 :bowtie:	
<English platform>

Nome progetto **IDealJob\***

\*ID(Integrazione dati), Lavoro ideale in base alle proprio preferenze.

- [x] Specifica del problema
- [x] Architettura (Buona bozza, bisogna cambiare qualcosina)
- [x] Nome progetto
- [ ] Scelta fonti (**Quali dobbiamo cambiare?**)
- [ ] Descrizione funzionale (**definitiva?**)


## Idea progetto

### Specifica problema

<Boost del mercato>

Al giorno d'oggi esistono molte piattaforme che hanno dato notevole slancio al mondo del lavoro e aperto ulteriormente il mercato dietro ad esso.\
L'ambito nel quale viviamo è cambiato: siamo circondati da tecnologie sempre più moderne grazie alle quali siamo interconnessi globalmente.\
È vero, infatti, che risulta molto più semplice sia per le aziende trovare  il candidato giusto, sia per i professionisti imbattarsi in opportunità di lavoro adatte ai propri interessi e alle proprie competenze.\
Questo contesto ha però introdotto **nuove problematiche** da affrontare.

Può capitare di trovarsi di fronte alle offerte lavorative più disparate per compenso, aziende, luogo di lavoro, ambito lavorativo, competenze richieste, e chiedersi se la proposta o l'inserzione che si sta esaminando sia ciò che fa per sè.\
Le domande che ci si pone sono varie: 
* Il compenso è giusto?
* È l'azienda che fa per me?
* Quali sono le mie aspettative future?
* Sono disposto a trasferirmi?
* Come posso prepararmi al meglio all'interview?
* ...

e \<nome app\> vuole aiutarti a trovare una risposta ad ognuno di questi quesiti.\
Quello che si vuole fornire con l'applicazione è una visione chiara dell'offerta in sè, ma anche di quegli altri fattori non immediatamente visibili su cui ruota la scelta finale: \<nome app\> vuole essere la piattaforma di riferimento per chi cerca lavoro e vuole farlo nel modo più sereno possibile.

### Descrizione funzionale

Di seguito sono descritte le varie funzionalità offerte dalla piattaforma.
Le funzionalità sono relative ai lavori nel campo dell'IT.

- La piattaforma permette di ricercare le offerte di lavoro rispetto a una **particolare professione** dell'IT di interesse (Ci vuole una lista di piattaforme dell'IT???)
- La piattaforma permette di ricercare le offerte di lavoro rispetto a una **particolare località** specificando il raggio entro il quale mostrare le offerte (come fare per determinare solo quelle dell'IT???)
- La piattaforma permette di ricercare le offerte di lavoro rispetto a una **particolare azienda** di interesse (trovare solo le aziende dell'IT???)
  - Ricevere su queste delle informazioni riguardo:
    - Stima del compenso del lavoro proposto
    - Informazioni sul costo della vita relativo al luogo dell'offerta
    - Poter consultare reviews riguardo l'azienda (facile indeed)
    - Informazioni sulle interview sostenute in passato (consigli etc, glassdoor scraping?)
    - Stime delle prospettive future riguardo il lavoro (previsione in base all'esperienza - payscale)
    - Informazioni sulle competenze richieste per il lavoro e fonti per aprofondire e prepararsi riguardo quest'ultime come repositories, corsi online , (frameworks ?) 

## Architettura piattaforma

![Architettura piattaforma](/images/architecture.jpg)

## Fonti scelte (quante fonti?)

### LinkedIn

### GitHub

### Medium

### Coursera (?)

### Numbeo

Numbeo è il più grande database al mondo di informazioni su città e nazioni, fornite direttamente dagli utenti. Numbeo fornisce informazioni aggiornate e tempestive riguardo le condizioni di vita nelle varie parti del mondo, tra cui il costo della vita, gli indicatori del mercato immobiliare, la situazione sanitaria, il traffico, il tasso di criminalità e il livello d’inquinamento. 

Numbeo mette a disposizione delle API per interagire con il suo database. 

Per ulteriori dettagli, https://www.numbeo.com/common/api.jsp

### Glassdoor (?)

Glassdoor è una piattaforma che permette di rilasciare recensioni e feedback su varie aziende e offrire indicazioni sui colloqui. 
Possiede inoltre una vasta categoria con offerte di lavoro con annessa possibilità di candidarsi.

Le API non sono disponibili per individuali ma solo per API partners.
Non è possibile fare scraping in quanto per l'accesso è richiesto un account.

Per ulteriori dettagli, https://www.glassdoor.com/developer/index.htm

### Indeed

Indeed è un portale che permette di ricercare offerte di lavoro nella città o paese desiderato. 

Viene offerta la possibilità di utilizzare API gratuite.

Per ulteriori dettagli, https://www.programmableweb.com/api/indeed e http://opensource.indeedeng.io/api-documentation/

### Payscale

Payscale è una piattaforma in grado di offrire informazioni sui salari medi per ogni lavoro in ogni parte del mondo.


## Risorse utili

https://olery.com/blog/the-best-travel-apis-discover-contribute/


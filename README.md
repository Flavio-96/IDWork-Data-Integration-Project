- [1. IDWork - Data integration](#1-idwork---data-integration)
  - [1.1. Nome Scelto: **IDWork\****](#11-nome-scelto-idwork)
  - [1.2. Idea progetto](#12-idea-progetto)
  - [1.2.1 Scope sistema](#121-scope-sistema)
    - [1.2.2. Specifica problema](#122-specifica-problema)
    - [1.2.3. Descrizione funzionale](#123-descrizione-funzionale)
  - [1.3. Architettura piattaforma](#13-architettura-piattaforma)
  - [1.4. Fonti Scelte](#14-fonti-scelte)
    - [1.4.1. Adzuna](#141-adzuna)
    - [1.4.2. SimplyHired](#142-simplyhired)
    - [1.4.3. Numbeo](#143-numbeo)
    - [1.4.4. U.S.News](#144-usnews)
    - [1.4.5. Medium](#145-medium)
    - [1.4.6. Hacker Noon](#146-hacker-noon)
    - [1.4.7. Coursera](#147-coursera)
    - [1.4.8. Udacity](#148-udacity)
    - [1.4.9. GitHub](#149-github)
  - [1.5. Cache](#15-cache)

___
# 1. IDWork - Data integration	

È stata realizzata una pagina di presentazione del progetto in cui è presente la **documentazione**, le **informazioni del progetto** e un breve **video demo**.\
Spero apprezziate il nostro lavoro.

[Presentazione web page](https://flavio-96.github.io/IDWork-Data-Integration-Project/)

Altre informazioni sono presenti qui nel README, ma consigliamo la visione della web page e in particolare della demo.

## 1.1. Nome Scelto: **IDWork\****

\***IDW** &rarr; **I**ntegrazione **D**ati sul **W**eb :books:\
\*Work &rarr; Lo scopo della piattaforma è quello di facilitare la scelta del lavoro in base ai diversi fattori in analisi, **work è la nostra keyword** :moneybag:

___

## 1.2. Idea progetto

L'idea è partita da una nostra esigenza personale: non c'è attualmente una piattaforma che ci permette di valutare offerte di lavoro a 360°, valutando non solo l'offerta in sè, ma anche altri aspetti cruciali come il luogo del lavoro e le prospettive riguardo l'occupazione.

## 1.2.1 Scope sistema

Il sistema per ragioni legate alla qualità delle fonti e al focus del progetto è ristretto alle seguenti offerte di lavoro:

- Offerte di lavoro negli **USA**
- Offerte di lavoro ersclusivamente in **ambito IT**

### 1.2.2. Specifica problema

Al giorno d'oggi esistono molte piattaforme che hanno dato notevole slancio al mondo del lavoro e aperto ulteriormente il mercato dietro ad esso.\
L'ambito nel quale viviamo è cambiato: siamo circondati da tecnologie sempre più moderne grazie alle quali siamo interconnessi globalmente.\
È vero, infatti, che risulta molto più semplice sia per le aziende trovare  il candidato giusto, sia per i professionisti imbattersi in opportunità di lavoro adatte ai propri interessi e alle proprie competenze.\
Questo contesto ha però introdotto **nuove problematiche** da affrontare.

Può capitare di trovarsi di fronte alle offerte lavorative più disparate per compenso, aziende, luogo di lavoro, ambito lavorativo, competenze richieste, e chiedersi se la proposta o l'inserzione che si sta esaminando sia ciò che fa per sè.\
Le domande che ci si pone sono varie: 
- Il **compenso è giusto**?
- È l'**azienda che fa per me**?
- Quali sono le mie **aspettative future**?
- Sono disposto a **trasferirmi**?
- Come posso prepararmi al meglio all'**interview**?

IDWork vuole aiutarti a trovare una risposta ad ognuno di questi quesiti.\
Quello che l'applicazione offre è una visione chiara dell'offerta in sè, ma anche degli altri fattori non immediatamente visibili che indirizzano la scelta finale: IDWork vuole essere la piattaforma di riferimento per chi cerca lavoro e vuole farlo nel modo più sereno possibile.

### 1.2.3. Descrizione funzionale

Di seguito sono descritte le varie funzionalità offerte dalla piattaforma.
Le funzionalità sono relative ai lavori nel campo dell'IT.

- La piattaforma permette di ricercare le offerte di lavoro rispetto a una **ambito** dell'IT di interesse e una determinata **località**.
  - Ricevere su queste delle informazioni riguardo:
    - Informazioni presenti nell'**offerta**.
    - **Stima del compenso** del lavoro in base alla località e alle competenze e all'esperienza.
    - Informazioni sulla sede del lavoro come costi e indici di qualità della vita.
    - Informazioni sulle competenze richieste per il lavoro
      - **Articoli**
      - **Corsi online** (MOOC)
      - **Repository**
      
## 1.3. Architettura piattaforma

![Architettura piattaforma](/images/architecture.jpg)  

## 1.4. Fonti Scelte

Fonti utilizzate:

- **Adzuna**
- **SimplyHired**
- **Numbeo**
- **U.S.News**
- **Medium**
- **Hacker Noon**
- **Coursera**
- **Udacity**
- **Github**
___

### 1.4.1. Adzuna

Adzuna è un aggregatore di offerte di lavoro operante in tutto il mondo. Esso combina migliaia di fonti diverse su un unico portale offrendo così una vasta scelta per quando si ricerca un lavoro.​

- [Risorsa](https://developer.adzuna.com/overview)

### 1.4.2. SimplyHired

SimplyHired è stato utilizzato per ottenere le informazioni circa i compensi dei lavori negli Stati Uniti.
Qui vengono ricavate le informazioni sul compenso in base alla propria esperienza (beginner, medium, senior).

- [Risorsa](https://www.simplyhired.com/salaries)

### 1.4.3. Numbeo

Numbeo è il più grande database al mondo di informazioni su città e nazioni, fornite direttamente dagli utenti. Numbeo fornisce informazioni aggiornate e tempestive riguardo le condizioni di vita nelle varie parti del mondo, tra cui il costo della vita, gli indicatori del mercato immobiliare, la situazione sanitaria, il traffico, il tasso di criminalità e il livello d’inquinamento. 

Numbeo mette a disposizione delle API per interagire con il suo database. 

- [Risorsa](https://www.numbeo.com/common/api.jsp)

### 1.4.4. U.S.News

U.S. News & World Report è una società americana che pubblica notizie, opinioni, ranking e analisi sututte le principali località negli USA.\
Offre un'overviewcompleta delle città evidenziandone i pro e i controInoltre non sono poche le statistischedi interesse per chi sta valutando un trasferimento

- [Risorsa](https://realestate.usnews.com/places/rankings/best-places-to-live)

### 1.4.5. Medium
Medium è una piattaforma di pubblicazioni online di recente creazione. Al suo interno è possibile trovare risorse e tutorial sugli ultimi trend e tecnologie emergenti.​

### 1.4.6. Hacker Noon
Hacker Noon è un tech blog indipendente che permette a professionisti del settore IT e correlati di scrivere opinioni e articoli senza alcuna restrizioneÈ uno dei blog relativi al mondo dell'informatica più seguito globalmente e mette a disposizione uno staff di editor per controllare la qualità del materiale sul sito

### 1.4.7. Coursera
Coursera è una piattaforma statunitense che opera nel campo delle tecnologie didattiche fondata dai professori della Stanford Andrew Nge Daphne Koller, che offre corsi online (MOOC), specializzazioni e corsi di studioCourseracollabora con varie università e i servizi disponibili sono certificati

### 1.4.8. Udacity
Udacity è un'organizzazione educativa che offre corsi online aperti (MOOC)Offrelezioni video con sottotitoli e quiz integrati, promuovendo la metodologia del 'learning by doing'

### 1.4.9. GitHub
Github  è la piattaforma leader per l’hosting di progetti software sottoforma di codice sorgente. Dispone di una enorme quantità di progetti da poter consultare e a cui è possibile contribuire ​

Inoltre sono numerosi i repositories contenente materiale didattico e di studio raccolto dagli utenti

- [Documentazione](https://developer.github.com/v3/)

## 1.5. Cache
Per aumentare la reattività del sistema ed evitare di effettuare richieste alle fonti ad ogni ricerca da parte dell’utente, si è deciso di implementare un sistema di cache basato su **Redis**.


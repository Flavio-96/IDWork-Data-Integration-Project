___
- [1. IDWork ~ Progetto IDW 18/19 :computer:](#1-idwork--progetto-idw-1819-computer)
  - [1.1. Nome Scelto: **IDWork\****](#11-nome-scelto-idwork)
  - [1.2. Idea progetto](#12-idea-progetto)
    - [1.2.1. Specifica problema](#121-specifica-problema)
    - [1.2.2. Descrizione funzionale](#122-descrizione-funzionale)
  - [1.3. Architettura piattaforma](#13-architettura-piattaforma)
  - [1.4. Fonti](#14-fonti)
  - [1.5. Fonti scelte](#15-fonti-scelte)
    - [1.5.1. Adzuna](#151-adzuna)
    - [1.5.2. Numbeo](#152-numbeo)
    - [1.5.3. SimplyHired](#153-simplyhired)
    - [1.5.4. edX](#154-edx)
    - [1.5.5. GitHub](#155-github)
    - [1.5.6. Medium](#156-medium)
  - [1.6. Cache](#16-cache)
  - [1.7. Risorse utili](#17-risorse-utili)

___
### 0.0.1. Checklist

- [x] Nome progetto
- [x] Specifica del problema
- [x] Architettura
- [x] Scelta fonti (UsaJobs esclusa definitivamente?)
- [ ] Descrizione funzionale (da definire meglio)
- [ ] Aggiunte key per le api
____
# 1. IDWork ~ Progetto IDW 18/19 :computer:	

## 1.1. Nome Scelto: **IDWork\****

\***IDW** &rarr; **I**ntegrazione **D**ati sul **W**eb :books:\
\*Work &rarr; Lo scopo della piattaforma è quello di facilitare la scelta del lavoro in base ai diversi fattori in analisi, **work è la nostra keyword** :moneybag:

___

## 1.2. Idea progetto

L'idea è partita da una nostra esigenza personale: non c'è attualmente una piattaforma che ci permette di valutare offerte di lavoro a 360°, valutando non solo l'offerta in sè, ma anche prospettive luogo di lavoro, prospettive riguardo l'occupazione e come prepararsi al colloquio.

**Scope** del sistema:

- Offerte di lavoro esclusivamente **USA**
- Offerte di lavoro ersclusivamente nell'**ambito IT**

### 1.2.1. Specifica problema

Al giorno d'oggi esistono molte piattaforme che hanno dato notevole slancio al mondo del lavoro e aperto ulteriormente il mercato dietro ad esso.\
L'ambito nel quale viviamo è cambiato: siamo circondati da tecnologie sempre più moderne grazie alle quali siamo interconnessi globalmente.\
È vero, infatti, che risulta molto più semplice sia per le aziende trovare  il candidato giusto, sia per i professionisti imbattarsi in opportunità di lavoro adatte ai propri interessi e alle proprie competenze.\
Questo contesto ha però introdotto **nuove problematiche** da affrontare.

Può capitare di trovarsi di fronte alle offerte lavorative più disparate per compenso, aziende, luogo di lavoro, ambito lavorativo, competenze richieste, e chiedersi se la proposta o l'inserzione che si sta esaminando sia ciò che fa per sè.\
Le domande che ci si pone sono varie: 
- Il **compenso è giusto**?
- È l'**azienda che fa per me**?
- Quali sono le mie **aspettative future**?
- Sono disposto a **trasferirmi**?
- Come posso prepararmi al meglio all'**interview**?

e IDWork vuole aiutarti a trovare una risposta ad ognuno di questi quesiti.\
Quello che si vuole fornire con l'applicazione è una visione chiara dell'offerta in sè, ma anche di quegli altri fattori non immediatamente visibili su cui ruota la scelta finale: IDWork vuole essere la piattaforma di riferimento per chi cerca lavoro e vuole farlo nel modo più sereno possibile.

### 1.2.2. Descrizione funzionale

Di seguito sono descritte le varie funzionalità offerte dalla piattaforma.
Le funzionalità sono relative ai lavori nel campo dell'IT.

- La piattaforma permette di ricercare le offerte di lavoro rispetto a una **particolare professione** dell'IT di interesse
- La piattaforma permette di ricercare le offerte di lavoro rispetto a una particolare professione in una **particolare località** specificando il raggio entro il quale mostrare le offerte
  - Ricevere su queste delle informazioni riguardo:
    - Informazioni presenti nell'**offerta** (Adzuna)
    - **Stima del compenso** del lavoro in base alla località nel caso non sia presente nell'offerta (SimplyHired?)
    - Indici sulla **qualità della vita**, **affitti**, **criminalità**, **sanità** dove è proposto il lavoro (Numbeo)
    - **Stima del compenso e prospettiva futura** riguardo il lavoro (previsione in base all'esperienza - SimplyHired)
    - Informazioni sulle competenze richieste per il lavoro
      - **Repositories** (Github)
      - **Articoli** (Medium)
      - **Corsi online** (edX)
    - ~~Poter consultare **reviews** riguardo l'azienda~~ (Google places?)
    - ~~Informazioni sulle **interview sostenute in passato** (consigli etc, glassdoor scraping?)~~
      
## 1.3. Architettura piattaforma

![Architettura piattaforma](/images/architecture.jpg)

- **Adzuna** viene interrogata l'api che ci restituisce i lavori ed è il centro di tutto\
Da qui ricaviamo informazioni riguardo l'offerta e facciamo le varie join necessarie per prendere le altre informazioni
Le informazioni sono volatili ovviamente
- **Numbeo** viene interrogata tramite API e di default mettiamo nel warehouse tutti i dati che ci sono sulla piattaforma\
Per le interrogazioni dove non troviamo la città precisa ci affidiamo ai dati sulla città più vicina (interrogazione all'api di nuovo)\
Necessario il **timestamp**
- **SimplyHired** lo interroghiamo tramite **data warehouse**, questo però va costruito in maniera **incrementale** dato che inizialmente non possiamo andarci a prendere le info dei lavori dato che non abbiamo una lista dei lavori di IT presenti sul sito. Controlliamo quindi se l'informazione che cerchiamo è presente nel db, se non c'è facciamo scraping e aggiorniamo il warehouse con queste info\
Necessario il **timestamp**
- **edX** prendiamo tutte le info e popoliamo il data warehouse e cerchiamo li direttamente in base all'argomento di interesse. Non è necessario usare il timestamp qui perché i corsi alla fine vanno sempre bene.
- **Github** lo interroghiamo al volo in base alle competenze richieste nell'offerta di lavoro e utilizziamo l'api disponibili
- **Medium** facciamo scraping (Non abbiamo visto ancora come fare precisamente)
  

## 1.4. Fonti

Fonti sicuramente **utilizzate**:

- **Adzuna**
- **Numbeo**
- **SimplyHired**
- **edX**
- **Github**
- **Medium**
___
Fonti **scartate**:

- ~~Indeed~~
- ~~Glassdoor~~
___
Fonti da **valutare**:

- UsaJobs
- Hackernoon
___
## 1.5. Fonti scelte

### 1.5.1. Adzuna

Adzuna è un aggregatore di offerte di lavoro operante in tutto il mondo. Esso combina migliaia di fonti diverse su un unico portale offrendo così una vasta scelta per quando si ricerca un lavoro.​

- [Documentazione](https://developer.adzuna.com/overview)
- **Application ID:** 08190ca0
- **Application Key:** a6bad673c3a2f2875ec76371415a7270

### 1.5.2. Numbeo

Numbeo è il più grande database al mondo di informazioni su città e nazioni, fornite direttamente dagli utenti. Numbeo fornisce informazioni aggiornate e tempestive riguardo le condizioni di vita nelle varie parti del mondo, tra cui il costo della vita, gli indicatori del mercato immobiliare, la situazione sanitaria, il traffico, il tasso di criminalità e il livello d’inquinamento. 

Numbeo mette a disposizione delle API per interagire con il suo database. 

- [Documentazione](https://www.numbeo.com/common/api.jsp)
- **Application Key:** y6bfz7p8k6vbw7

### 1.5.3. SimplyHired

SimplyHired  è una piattaforma che permette di consultare le statistiche sui valori dei salari medi per ogni professione sul territorio statunitense, in base al proprio grado di esperienza.

### 1.5.4. edX

edX  è una piattaforma per l’apprendimento fondata dal MIT e dall’università di Harvard. Fornisce corsi MOOC gratuiti erogati da fonti autorevoli come altre università e grandi aziende​

Le fonti sono inoltre verificate

- [Documentazione](https://course-catalog-api-guide.readthedocs.io/en/latest/index.html)
- **API Client ID:** M5D86eK9MfUJssKPrmtFeagHyJCHsZDI8nYI7qzm
- **API Client Secret:** zsObnR8AxRm3RR4Yl4O3RQH5dKIh4lwr90E6AIOB7N1KsRHE3ru1tihmntom0qzQoPCJVd39x0HlYXLNwPvCQ6IgFgsoKU4l4njh7jiyxEPIrGyL0YnrUQEcIt3tnEat

### 1.5.5. GitHub

Github  è la piattaforma leader per l’hosting di progetti software sottoforma di codice sorgente. Dispone di una enorme quantità di progetti da poter consultare e a cui è possibile contribuire ​

Inoltre sono numerosi i repositories contenente materiale didattico e di studio raccolto dagli utenti

- [Documentazione](https://developer.github.com/v3/)

### 1.5.6. Medium

Medium è una piattaforma di pubblicazioni online di recente creazione. Al suo interno è possibile trovare risorse e tutorial sugli ultimi trend e tecnologie emergenti.​

***Come fare scraping?***

## 1.6. Cache

**Bisogna decidere cosa mettere in cache**

**La cache è in ram solo?
La gestione tramite db?**

## 1.7. Risorse utili

- [Olery: best Travel APIs](https://olery.com/blog/the-best-travel-apis-discover-contribute)
- [Programmableweb: hub api e mashups](https://www.programmableweb.com)
- [Repo list free api](https://github.com/toddmotto/public-apis)


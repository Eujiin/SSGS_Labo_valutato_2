# Labo-String: CLI per la manipolazione di stringhe

Labo-String è una semplice applicazione da linea di comando (CLI) sviluppata in Node.js, progettata per fornire utilità comuni per la manipolazione e l’analisi di stringhe.

## Funzionalità disponibili

- Inversione di una stringa
- Verifica se una stringa è palindroma
- Troncamento di una stringa a una lunghezza massima specificata
- Conteggio delle occorrenze di ciascun carattere in una stringa

## Requisiti

- Node.js (versione 16 o superiore)
- npm

## Installazione

Clonare il repository e installare le dipendenze con il comando:

```bash
npm ci
```

> Nota: `npm ci` garantisce una installazione più pulita e coerente rispetto a `npm install`, ideale in ambienti di Continuous Integration.

## Esecuzione

L'applicazione può essere eseguita tramite:

```bash
node index.js
```

### Esempio di utilizzo

```bash
$ node index.js reverse "hello"
olleh

$ node index.js isPalindrome "racecar"
true

$ node index.js truncate "questa è una stringa" 10
questa è

$ node index.js countChars "test"
{ t: 2, e: 1, s: 1 }
```

## Test

I test sono scritti utilizzando [Jest](https://jestjs.io/). Per eseguirli:

```bash
npm test
```

Per generare un report sulla copertura del codice:

```bash
npm run test -- --coverage
```

## Struttura del progetto

```
.
├── index.js              # Entry point dell'app CLI
├── stringUtils.js        # Funzioni principali
├── __tests__/            # Test unitari
├── package.json
├── .gitignore
├── README.md
```

## Licenza

Questo progetto è distribuito sotto licenza MIT.

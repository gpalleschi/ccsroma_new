# CCS Roma — Sito web

Replica in React del layout di un sito Church Center (harvestmiami.churchcenter.com), tradotto in italiano e con il brand **CCS Roma**.

## Avvio

```bash
npm install
npm run dev      # avvia il server di sviluppo (Vite)
npm run build    # build di produzione in /dist
npm run preview  # anteprima della build
```

## Stack

- React 18 + Vite 5
- React Router 6 (navigazione SPA)
- Tailwind CSS 3
- Nessun backend: i contenuti dinamici sono in file JSON locali

## Struttura delle cartelle

```
ccsroma_new/
├── index.html
├── PIANO.md                 # mappa del sito, palette, componenti, breakpoint
├── tailwind.config.js       # colori brand, font, breakpoint
├── public/
│   ├── favicon.svg          # favicon (monogramma CCS Roma)
│   └── logos/               # loghi del brand
│       ├── logo-black.png   # versione NERA (per sfondi chiari: header/footer)
│       ├── logo-white.png   # versione BIANCA (per sfondi scuri)
│       └── logo*.svg        # versioni vettoriali (nere)
│   └── images/              # immagini del sito (es. programma.jpg)
└── src/
    ├── main.jsx             # entry point
    ├── App.jsx              # rotte (React Router)
    ├── index.css            # stili base + componenti (Tailwind)
    ├── i18n/
    │   └── it.js            # TUTTI i testi dell'interfaccia (italiano)
    ├── data/                # contenuti dinamici (JSON)
    │   ├── site.json        # identità, contatti, social, link esterni
    │   ├── events.json      # eventi/celebrazioni
    │   ├── groups.json      # gruppi
    │   └── messages.json    # messaggi
    ├── hooks/
    │   └── useDocumentTitle.js
    ├── components/
    │   ├── layout/          # Header, Footer, Layout
    │   └── common/          # Hero, CardGrid, ButtonLink, ecc.
    └── pages/               # una pagina per ogni rotta
```

## Come modificare testi e contenuti

- **Testi dell'interfaccia** (menu, pulsanti, titoli, etichette, messaggi):
  modifica `src/i18n/it.js`.
- **Contatti, social e link esterni** (email, telefono, indirizzo, URL form/donazioni/YouTube):
  modifica `src/data/site.json`.
- **Eventi / celebrazioni**: modifica `src/data/events.json`.
- **Gruppi**: modifica `src/data/groups.json` (vuoto di default, come l'originale).
- **Messaggi**: modifica `src/data/messages.json`.
- **Loghi**: sostituisci i file in `public/logos/` (mantenendo i nomi) oppure aggiorna i riferimenti in `Header.jsx`/`Footer.jsx` e `index.html`.

## Note

- I link esterni (form Church Center, PayPal, playlist YouTube, ecc.) sono segnaposto con valore `#` in `src/data/site.json`: sostituiscili con i tuoi URL reali.
- Le immagini originali sono sostituite da placeholder con le stesse proporzioni; per usare immagini reali, sostituisci i componenti `PlaceholderImage`/`ImageBlock` con gli `<img>` reali.
- I form (donazione e login) hanno validazione lato client e messaggio di conferma simulato, senza invio reale.

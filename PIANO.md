# PIANO — Replica di harvestmiami.churchcenter.com (CCS Roma)

Analisi del sito originale **Harvest Miami** (Church Center) e piano di replica in React, tradotto in italiano e con il brand **CCS Roma**.

---

## 1. Mappa del sito (sitemap)

Il sito originale usa la navigazione Church Center con un menu "More" a tendina. Percorsi tradotti in italiano:

| # | Pagina | Percorso | Descrizione / contenuto |
|---|--------|----------|--------------------------|
| 1 | Home | `/` | Hero, social, orario celebrazioni, griglie di card, orari servizi, "Dio all'opera", sezioni "Disponibile ora" e "Collabora con noi", mappa/indirizzo, regalo RightNow Media |
| 2 | Calendario | `/calendario` | Vista Elenco / Mese con eventi ricorrenti |
| 3 | Dona | `/dona` | Form di donazione (singola/ricorrente) |
| 4 | Messaggi | `/messaggi` | Link ai messaggi su YouTube + elenco messaggi |
| 5 | Check-in | `/check-in` | Segnaposto |
| 6 | Directory | `/directory` | Segnaposto |
| 7 | Eventi | `/eventi` | Elenco eventi con pulsante "Registrati" |
| 8 | Gruppi | `/gruppi` | Stato vuoto ("Nessun gruppo disponibile") |
| 9 | Harvest Kids | `/harvest-kids` | Pagina ministero bambini |
| 10 | Accedi | `/accedi` | Form di login simulato |
| — | 404 | `*` | Pagina non trovata |

**Navigazione header (desktop):** Home · Calendario · Dona · Messaggi · Altro ▾ (Check-in, Directory, Eventi, Gruppi, Harvest Kids) · Accedi
**Navigazione mobile:** hamburger → pannello laterale (280px) con tutti i link + social.

**Footer:** Termini di servizio · Informativa sulla privacy (sinistra) · CCS Roma + email + telefono (destra) + copyright.

---

## 2. Componenti riutilizzabili

| Componente | Percorso | Ruolo |
|------------|----------|-------|
| `Layout` | `src/components/layout/Layout.jsx` | Header + `<main>` + Footer |
| `Header` | `src/components/layout/Header.jsx` | Header sticky (si comprime allo scroll), nav desktop, dropdown "Altro", drawer mobile |
| `Footer` | `src/components/layout/Footer.jsx` | Link legali + contatti |
| `HeroSection` | `src/components/common/HeroSection.jsx` | Immagine hero a tutta larghezza (300px regolare / 500px alta) |
| `SectionHeading` | `src/components/common/SectionHeading.jsx` | Titolo di sezione centrato (h2) |
| `Divider` | `src/components/common/Divider.jsx` | Separatore orizzontale 1px |
| `SocialLinks` | `src/components/common/SocialLinks.jsx` | Icone social (FB/IG/YT) |
| `ImageBlock` | `src/components/common/ImageBlock.jsx` | Immagine singola (placeholder) opz. con link |
| `CardGrid` | `src/components/common/CardGrid.jsx` | Griglia di card immagine (1–3 colonne) |
| `ButtonLink` | `src/components/common/ButtonLink.jsx` | Pulsante/link (primary/secondary/compact, interno o esterno) |
| `TextBlock` | `src/components/common/TextBlock.jsx` | Blocco di paragrafi |
| `MapBlock` | `src/components/common/MapBlock.jsx` | Placeholder mappa + indirizzo + "Ottieni indicazioni" |
| `PageHeader` | `src/components/common/PageHeader.jsx` | Intestazione delle sottopagine |
| `EmptyState` | `src/components/common/EmptyState.jsx` | Messaggio di stato vuoto |
| `PlaceholderImage` | `src/components/common/PlaceholderImage.jsx` | Placeholder immagine con proporzioni configurate |
| `Icons` | `src/components/common/Icons.jsx` | Icone SVG inline (social, chevron, contatti, frecce) |
| `useDocumentTitle` | `src/hooks/useDocumentTitle.js` | Imposta il titolo della pagina |

---

## 3. Palette colori

Ricavata dalle variabili CSS del sito originale:

| Ruolo | Valore |
|-------|--------|
| Brand (chiaro / accento) | `#d9bf8c` (oro/tan) |
| Brand (scuro) | `#89744a` (marrone) |
| Sfondo pagina | `#FAFAFA` |
| Sfondo header/footer | `#FFFFFF` / `#FAFAFA` |
| Testo principale | `#171717` (neutral-900) |
| Testo secondario | `#737373` (neutral-500) |
| Bordi / divisori | `#e5e5e5` (neutral-200) |

In Tailwind queste sono mappate nel colore personalizzato `brand` (con scala 50–900 e varianti `brand-light`/`brand-dark`) e nella palette `neutral`.

---

## 4. Font

- **Famiglia:** Inter (Google Fonts, pesi 300–800) — alternativa più vicina al font sans-serif usato da Church Center.
- **Titoli/heading:** Inter 600–700, letter-spacing lievemente ridotto.
- **Corpo:** Inter 400, dimensione base ~15–16px.

---

## 5. Spaziature, bordi, ombre

- **Colonna contenuti:** `max-width: 640px`, centrata; i blocchi hero e section-header sono a tutta larghezza.
- **Header interno:** `max-width: 900px`.
- **Spaziatura tra blocchi:** padding verticale ~24px (`py-6`) + divisore 1px.
- **Raggio angoli:** 8px (card, pulsanti, input, dropdown), pill (chip/importi).
- **Ombre:** leggere (`shadow-lg` sul dropdown, `shadow-xl` sul drawer mobile).
- **Pulsanti:**
  - Primary: gradiente brand `linear-gradient(117.9deg, #d9bf8c, #d9bf8c)`, testo scuro.
  - Secondary: bordo + sfondo bianco.
  - Compact: padding/font ridotti.

---

## 6. Breakpoint e comportamento responsive

| Breakpoint | Valore Tailwind | Comportamento |
|------------|-----------------|----------------|
| mobile (default) | < 600px | Nav a hamburger, card a 1 colonna, contenuti impilati |
| `sm` | 600px | Griglie a 2 colonne dove previsto |
| `md` | 720px | Nav desktop visibile, header 136px (logo 80px) |
| `lg` | 960px | Titoli sezione più grandi |
| `xl` | 1280px | Layout desktop completo |

Verifica visiva eseguita a **375px, 768px e 1280px**.

---

## 7. Note sulla fedeltà e le semplificazioni

- **Immagini:** sostituite con placeholder SVG (stesse proporzioni 16:9 e altezze hero 300px), poiché gli asset originali sono su CDN con URL firmati a scadenza e appartengono a Harvest Miami.
- **Link esterni** (form Church Center, PayPal, playlist YouTube, RightNow Media, ecc.) mantenuti come segnaposto in `src/data/site.json` (valore `#`), pronti da sostituire.
- **Contenuti dinamici** (eventi, gruppi, messaggi) in `src/data/*.json`, facilmente modificabili.
- **Tutti i testi** centralizzati in `src/i18n/it.js`.

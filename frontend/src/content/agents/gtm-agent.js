export default {
  it: {
    meta: {
      title: "Fulcrum GTM Agent — Agente AI per il go-to-market",
      description:
        "Struttura posizionamento, prodotto, pricing, distribuzione e promozione per lanci e rebranding. Prepara analisi e scenari, le decisioni restano tue.",
    },
    hero: {
      h1: "Fulcrum GTM Agent",
      lead: "Struttura il go-to-market di un brand o di un prodotto: posizionamento, prodotto, pricing, distribuzione, promozione. L'agente prepara analisi e scenari. Le decisioni restano tue.",
    },
    problema: {
      heading: "Ogni lancio riparte dal foglio bianco",
      lead: "Il metodo esiste nella testa di due o tre persone. Fuori da lì, ogni lancio e ogni rebranding ricostruiscono lo stesso lavoro da capo.",
      blocks: [
        { head: "Ricerche disperse", body: "Analisi di mercato e competitor stanno in slide vecchie, cartelle diverse e teste diverse. Nessuno sa quale versione sia quella aggiornata." },
        { head: "Posizionamento riscritto ogni volta", body: "Messaggi, argomenti di vendita e offerte commerciali si rifanno da zero a ogni occasione. Le versioni in circolazione non coincidono tra loro." },
        { head: "Prezzi e canali a mano", body: "Matrici prodotto-segmento e scenari di prezzo vivono nei fogli di calcolo. Il piano canali si decide senza listini e margini aggiornati." },
      ],
    },
    capacita: {
      heading: "Cosa fa l'agente, dalle analisi al piano",
      lead: "Sei attività lungo posizionamento e quattro P. L'agente produce analisi, scenari e materiali; posizionamento e prezzi li decidi tu.",
      items: [
        { head: "Analizza mercato e competitor", body: "Raccoglie e struttura informazioni su concorrenti, prezzi e posizionamenti, con la fonte accanto a ogni dato. Dove la fonte manca, lo dichiara." },
        { head: "Costruisce posizionamento e matrice prodotto-segmento", body: "Traduce l'analisi in posizionamento, messaggi chiave e matrice prodotto-segmento. Prepara più ipotesi: scegli tu quale portare avanti." },
        { head: "Scenari di prezzo e piano canali", body: "Elabora scenari di prezzo su listini e margini presi dall'ERP e propone il mix di canali e promozione. La decisione di prezzo resta tua." },
        { head: "Aggiorna listini e regole di prezzo", body: "Applica le variazioni approvate su ERP ed e-commerce, listino per listino. Nessuna modifica va in produzione senza approvazione." },
        { head: "Prepara le offerte commerciali", body: "Compone le offerte su dati CRM ed ERP: configurazione, prezzi validi, condizioni, scadenze. Il commerciale controlla, personalizza e firma." },
        { head: "Tiene operativo il piano di lancio", body: "Trasforma il go-to-market in un documento con attività, responsabili e scadenze. Monitora l'avanzamento e segnala cosa è fermo." },
      ],
    },
    integrazione: {
      heading: "Da dove prende i dati e chi decide",
      blocks: [
        { head: "Sistemi", body: "CRM per pipeline e vendite, ERP per listini, margini e anagrafiche, piattaforma e-commerce per prezzi e disponibilità, oltre alle fonti di mercato che l'azienda ha in abbonamento." },
        { head: "Dati", body: "Legge storico vendite, marginalità, listini e pipeline. Scrive documenti, scenari e bozze di offerta. Le modifiche a listini e prezzi partono solo dopo approvazione." },
        { head: "Human-in-the-loop", body: "Una persona approva prima che l'azione diventi definitiva. Posizionamento e prezzi restano decisioni del management: l'agente prepara le opzioni e registra quale hai scelto." },
        { head: "Governance", body: "Permessi per ruolo su dati di margine e pipeline, log delle analisi e delle modifiche ai listini, segregazione dei dati per cliente e per progetto." },
      ],
    },
    cosaCambia: {
      heading: "Il lancio di una nuova linea prodotto",
      lead: "È uno scenario costruito su attività ricorrenti di un'azienda consumer, non un caso cliente. Nessun numero: i tempi si misurano sui tuoi dati in assessment.",
      scenarios: [
        {
          title: "Nuova linea prodotto in un'azienda consumer",
          today: [
            "L'analisi competitor la fa chi ha tempo, quando ha tempo",
            "Il posizionamento si discute su documenti che cambiano a ogni riunione",
            "Gli scenari di prezzo nascono in un foglio di calcolo personale",
            "Il piano di lancio esiste in slide, poi si perde nelle attività quotidiane",
          ],
          withAgent: [
            "L'analisi di mercato e competitor arriva strutturata e con le fonti citate",
            "Posizionamento e matrice prodotto-segmento sono un documento unico e versionato",
            "Gli scenari di prezzo si costruiscono su margini e listini reali dell'ERP",
            "Il piano di lancio ha attività, responsabili e scadenze, e viene monitorato",
            "Le decisioni di prezzo e posizionamento restano al tavolo del management",
          ],
        },
      ],
      kpi: [
        "Tempo dall'idea al piano di go-to-market approvato",
        "Tempo di aggiornamento dei listini dopo una decisione di prezzo",
        "Copertura dell'analisi competitor: concorrenti e mercati coperti",
        "Tempo ciclo di preparazione di un'offerta commerciale",
      ],
    },
    perChi: {
      heading: "Per chi lancia e riposiziona",
      lead: "Serve a chi porta più prodotti sul mercato ogni anno e ha già una base dati commerciale da cui partire.",
      funzioni: ["Direzione marketing e commerciale", "Brand manager", "Product manager", "Pricing e trade marketing"],
      settori: ["Consumer Goods", "Manifatturiero B2B", "Servizi"],
      dimensione: "PMI dai 50 dipendenti e mid-market fino a 1000, con più lanci all'anno.",
      whenNot: "Se lanci un prodotto ogni molti anni e non esiste una base dati commerciale, non c'è materiale su cui lavorare: te lo diciamo prima.",
    },
    sicurezza: {
      heading: "Dati strategici, accessi controllati",
      note: "Margini, listini e pipeline sono tra i dati più sensibili che hai: restano segregati per cliente e per progetto, con permessi per ruolo. Le analisi e le modifiche ai listini restano a log, con chi le ha approvate.",
    },
    faq: {
      heading: "Domande che ci fanno prima della demo",
      items: [
        { q: "Decide lui il prezzo?", a: "No. L'agente costruisce gli scenari sui margini e sui listini reali, mostra le assunzioni e le conseguenze di ciascuno. La scelta resta al management. Una volta approvata, l'agente applica la variazione su ERP ed e-commerce e la traccia." },
        { q: "Serve anche per un rebranding?", a: "Sì. Rebranding e lancio usano lo stesso lavoro di base: analisi, posizionamento, messaggi, canali. Nel rebranding l'agente aggiunge la ricognizione di quanto è già pubblicato e la lista dei materiali da aggiornare, per canale." },
        { q: "Da dove prende i dati di mercato?", a: "Da fonti pubbliche, dalle banche dati che la tua azienda ha in abbonamento e dai tuoi dati interni di vendita. Ogni informazione arriva con la fonte accanto. Quando un dato non è verificabile, l'agente lo dichiara invece di stimarlo." },
        { q: "Come si collega al Fulcrum Marketing Agent?", a: "Il Fulcrum GTM Agent decide cosa dire, a chi, a che prezzo e su quali canali. Il Fulcrum Marketing Agent esegue: produce e pubblica DEM, push, pagine e schede prodotto. Uno imposta, l'altro manda in produzione. Funzionano anche separati." },
        { q: "Funziona per il B2B?", a: "Sì. Nel B2B pesa di più la parte commerciale: matrice prodotto-segmento, listini per canale, preparazione delle offerte su dati CRM ed ERP. La logica delle quattro P resta, cambiano i canali e il ciclo di vendita." },
      ],
    },
    cta: {
      heading: "Portaci il prossimo lancio",
      body: "In demo lavoriamo su un prodotto o un brand vero, con i tuoi dati commerciali. Se l'AI non serve, lo diciamo.",
    },
  },

  en: {
    meta: {
      title: "Fulcrum GTM Agent — go-to-market, structured",
      description:
        "Structures positioning, product, pricing, place and promotion for launches and rebrands. It prepares the analysis, you decide.",
    },
    hero: {
      h1: "Fulcrum GTM Agent",
      lead: "Structures go-to-market for a brand or a product: positioning, product, pricing, place, promotion. The agent prepares the analysis and the scenarios. The decisions stay yours.",
    },
    problema: {
      heading: "Every launch starts from a blank page",
      lead: "The method lives in two or three people's heads. Outside that, every launch and every rebrand rebuilds the same work from scratch.",
      blocks: [
        { head: "Research scattered everywhere", body: "Market and competitor analysis sits in old decks, different folders and different heads. Nobody knows which version is current." },
        { head: "Positioning rewritten each time", body: "Messaging, sales arguments and commercial offers are rebuilt from zero every time. The versions in circulation don't match each other." },
        { head: "Prices and channels by hand", body: "Product-segment matrices and pricing scenarios live in spreadsheets. The channel plan gets decided without current price lists and margins." },
      ],
    },
    capacita: {
      heading: "What the agent does, from analysis to plan",
      lead: "Six tasks across positioning and the four Ps. The agent produces analysis, scenarios and materials; positioning and prices are yours to decide.",
      items: [
        { head: "Analyses market and competitors", body: "Collects and structures information on competitors, prices and positioning, with the source next to every data point. Where the source is missing, it says so." },
        { head: "Builds positioning and the product-segment matrix", body: "Turns the analysis into positioning, key messages and a product-segment matrix. It prepares several options: you choose which one to run." },
        { head: "Pricing scenarios and channel plan", body: "Builds pricing scenarios on price lists and margins from the ERP and proposes the channel and promotion mix. The pricing decision stays yours." },
        { head: "Updates price lists and pricing rules", body: "Applies approved changes across ERP and e-commerce, one price list at a time. Nothing goes live without approval." },
        { head: "Prepares commercial offers", body: "Assembles offers from CRM and ERP data: configuration, valid prices, terms, expiry dates. Your sales team reviews, adjusts and signs." },
        { head: "Keeps the launch plan running", body: "Turns the go-to-market into a working document with tasks, owners and deadlines. It tracks progress and flags what has stalled." },
      ],
    },
    integrazione: {
      heading: "Where the data comes from and who decides",
      blocks: [
        { head: "Systems", body: "Your CRM for pipeline and sales, ERP for price lists, margins and item master data, e-commerce platform for prices and availability, plus the market sources your company subscribes to." },
        { head: "Data", body: "It reads sales history, margins, price lists and pipeline. It writes documents, scenarios and draft offers. Changes to price lists go live only after approval." },
        { head: "Human-in-the-loop", body: "A person approves before an action becomes final. Positioning and pricing stay management decisions: the agent prepares the options and records the one you picked." },
        { head: "Governance", body: "Role-based permissions on margin and pipeline data, a log of analyses and price list changes, data segregated by client and by project." },
      ],
    },
    cosaCambia: {
      heading: "Launching a new product line",
      lead: "A scenario built on recurring work in a consumer goods company, not a client case. No figures: times are measured on your data during the assessment.",
      scenarios: [
        {
          title: "A new product line in a consumer goods company",
          today: [
            "Competitor analysis is done by whoever has time, when they have time",
            "Positioning is debated on documents that change at every meeting",
            "Pricing scenarios live in one person's spreadsheet",
            "The launch plan exists in slides, then gets lost in daily work",
          ],
          withAgent: [
            "Market and competitor analysis arrives structured, with sources cited",
            "Positioning and the product-segment matrix are one versioned document",
            "Pricing scenarios are built on real ERP margins and price lists",
            "The launch plan has tasks, owners and deadlines, and it is tracked",
            "Pricing and positioning decisions stay on the management table",
          ],
        },
      ],
      kpi: [
        "Time from idea to approved go-to-market plan",
        "Time to update price lists after a pricing decision",
        "Competitor analysis coverage: competitors and markets covered",
        "Cycle time to prepare a commercial offer",
      ],
    },
    perChi: {
      heading: "For teams that launch and reposition",
      lead: "It fits companies that bring several products to market each year and already have commercial data to start from.",
      funzioni: ["Marketing and sales leadership", "Brand managers", "Product managers", "Pricing and trade marketing"],
      settori: ["Consumer Goods", "B2B Manufacturing", "Services"],
      dimensione: "Companies from 50 to 1,000 employees running several launches a year.",
      whenNot: "If you launch once every several years and have no commercial data, there's nothing to work on. We'll say so upfront.",
    },
    sicurezza: {
      heading: "Strategic data, controlled access",
      note: "Margins, price lists and pipeline are among the most sensitive data you hold: they stay segregated by client and by project, with role-based permissions. Analyses and price list changes are logged, with the person who approved them.",
    },
    faq: {
      heading: "Questions we get before the demo",
      items: [
        { q: "Does it set the price?", a: "No. The agent builds scenarios on real margins and price lists, shows the assumptions and the consequences of each. The choice stays with management. Once approved, the agent applies the change across ERP and e-commerce and logs it." },
        { q: "Does it work for a rebrand?", a: "Yes. Rebrands and launches share the same groundwork: analysis, positioning, messaging, channels. For a rebrand the agent adds an audit of what's already published and the list of materials to update, channel by channel." },
        { q: "Where does the market data come from?", a: "From public sources, from the databases your company subscribes to and from your own sales data. Every item comes with its source. When something isn't verifiable, the agent says so instead of estimating it." },
        { q: "How does it connect to Fulcrum Marketing Agent?", a: "Fulcrum GTM Agent decides what to say, to whom, at what price and on which channels. Fulcrum Marketing Agent executes: it produces and publishes the campaigns, push messages, pages and product content that follow. They also work separately." },
        { q: "Does it work for B2B?", a: "Yes. In B2B the commercial side weighs more: product-segment matrix, price lists per channel, offers prepared from CRM and ERP data. The logic stays the same; channels and sales cycles change." },
      ],
    },
    cta: {
      heading: "Bring us your next launch",
      body: "In the demo we work on a real product or brand, with your commercial data. If AI isn't the answer, we say so.",
    },
  },
};

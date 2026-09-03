export default {
  it: {
    meta: {
      title: "Fulcrum Procurement Agent — acquisti e referenze su ERP",
      description:
        "L'agente AI che automatizza riordini, richieste d'offerta e aggiornamento referenze sull'ERP, per produzione, retail, distribuzione ed e-commerce.",
    },
    hero: {
      h1: "Fulcrum Procurement Agent. Riordini e referenze sull'ERP.",
      lead: "Automatizza l'operatività degli acquisti sull'ERP, dalle materie prime alle referenze di catalogo, per produzione, retail ed e-commerce. Lavora dentro i tuoi sistemi: gli ordini fuori soglia li approvi tu.",
    },
    problema: {
      heading: "Gli acquisti si reggono su lavoro manuale",
      lead: "Chi compra passa la giornata tra fogli di calcolo, email e maschere dell'ERP. Il lavoro è ripetitivo, ma un errore ferma una linea di produzione o svuota uno scaffale.",
      blocks: [
        { head: "Scorte controllate a mano", body: "Qualcuno apre l'ERP ogni mattina, incrocia giacenze, distinte base e ordini aperti, poi decide cosa riordinare. Il criterio resta nella sua testa." },
        { head: "Fornitori confrontati via email", body: "Le richieste d'offerta partono una alla volta. Prezzi, tempi di consegna e minimi d'ordine finiscono in un foglio che nessuno aggiorna." },
        { head: "Referenze e cataloghi in ritardo", body: "Nuovi articoli, listini e schede prodotto entrano nel gestionale e sul sito con giorni di scarto. L'e-commerce vende quello che non c'è." },
      ],
    },
    capacita: {
      heading: "Sei attività che l'agente svolge ogni giorno",
      lead: "Il Fulcrum Procurement Agent lavora sui tuoi dati di magazzino, acquisti e catalogo. Ogni azione ha un responsabile umano dichiarato.",
      items: [
        { head: "Proporre il riordino", body: "Legge giacenze, consumi, distinte base e ordini aperti, calcola il fabbisogno e prepara la proposta. Tu confermi quantità e data di consegna." },
        { head: "Richiedere e confrontare le offerte", body: "Invia le richieste d'offerta ai fornitori in elenco e riporta prezzi, tempi e condizioni nello stesso confronto. La scelta resta al buyer." },
        { head: "Inserire ordini e referenze su ERP", body: "Crea l'ordine, aggiorna anagrafiche articoli, listini e codici fornitore. Ogni scrittura è tracciata e si può annullare." },
        { head: "Sollecitare e monitorare le consegne", body: "Controlla le conferme d'ordine, segnala i ritardi e scrive al fornitore con le formule e le regole che imposti tu." },
        { head: "Aggiornare il catalogo e-commerce", body: "Porta schede prodotto, attributi, prezzi e disponibilità dal gestionale al catalogo online, rispettando la struttura dati che usi già." },
        { head: "Segnalare anomalie di prezzo e tempi", body: "Confronta ogni offerta e ogni conferma con lo storico. Evidenzia scostamenti su prezzo, lead time e minimi d'ordine prima che diventino un problema." },
      ],
    },
    integrazione: {
      heading: "Dentro i sistemi che usi già",
      blocks: [
        { head: "Sistemi", body: "ERP, moduli acquisti e magazzino. PIM o piattaforma e-commerce. Email e portali fornitori, EDI dove esiste. MES e automazione di produzione si valutano in assessment: qui non li promettiamo." },
        { head: "Dati", body: "L'agente legge giacenze, anagrafiche, listini, ordini e conferme. Scrive proposte, ordini e aggiornamenti di anagrafica solo dove gli dai il permesso. I dati restano nei tuoi sistemi." },
        { head: "Human-in-the-loop", body: "Le soglie le definisci tu. Sotto soglia e con fornitore abituale l'agente procede. Sopra soglia, con un fornitore nuovo o con un prezzo fuori range, decide una persona." },
        { head: "Governance", body: "Ogni azione lascia un log: chi l'ha richiesta, quali dati ha letto, cosa ha scritto sull'ERP. Permessi per ruolo. La manutenzione resta alla stessa squadra che ha costruito l'agente." },
      ],
    },
    cosaCambia: {
      heading: "Due scenari tipo, produzione e retail",
      lead: "Sono scenari costruiti su processi ricorrenti, non casi cliente. Ti servono per capire dove finisce il lavoro manuale e dove inizia la decisione.",
      scenarios: [
        {
          title: "A — Riordino di materie prime (produzione)",
          today: [
            "Il responsabile acquisti controlla le scorte minime a video e verifica le distinte base delle commesse aperte",
            "Chiama due fornitori e riporta i prezzi in un foglio",
            "Inserisce l'ordine a mano",
          ],
          withAgent: [
            "L'agente rileva il fabbisogno e prepara la richiesta d'offerta",
            "Confronta le risposte e presenta l'ordine pronto",
            "Il buyer approva e l'ordine entra sull'ERP",
          ],
        },
        {
          title: "B — Aggiornamento di un lotto di referenze (retail ed e-commerce)",
          today: [
            "Il listino nuovo arriva via email",
            "Qualcuno aggiorna a mano codici, prezzi e schede prodotto su gestionale e sito",
            "Le due operazioni avvengono in giorni diversi",
          ],
          withAgent: [
            "L'agente normalizza il listino",
            "Aggiorna anagrafiche e catalogo online nella stessa sessione",
            "Segnala le referenze incoerenti al responsabile",
          ],
        },
      ],
      kpi: [
        "Tempo ciclo dal fabbisogno all'ordine emesso",
        "Rotture di stock sugli articoli gestiti dall'agente",
        "Tempo di aggiornamento di un lotto di referenze",
        "Errori di anagrafica rilevati dopo la pubblicazione",
      ],
    },
    perChi: {
      heading: "Per chi gestisce acquisti e assortimento",
      lead: "L'agente serve dove gli acquisti sono ripetitivi e le referenze molte: produzione a commessa o a magazzino, distribuzione, retail, e-commerce.",
      funzioni: ["Direzione acquisti", "Operations e supply chain", "Magazzino e pianificazione", "E-commerce e category management"],
      settori: ["Manifatturiero", "Consumer Goods & Retail", "Distribuzione ed e-commerce", "Healthcare & Pharma"],
      dimensione: "PMI 50-250 e mid-market 250-1000 dipendenti.",
      whenNot: "Compri poco e ogni acquisto è una trattativa diversa. In quel caso te lo diciamo.",
    },
    sicurezza: {
      heading: "Prezzi e fornitori sono dati sensibili",
      note: "Listini, sconti e condizioni fornitore sono informazioni commerciali riservate. L'accesso è per ruolo: chi gestisce il catalogo non vede le condizioni d'acquisto. Nessun dato viene condiviso tra clienti e l'elaborazione resta in Europa.",
    },
    faq: {
      heading: "Domande che ci fanno prima della demo",
      items: [
        { q: "Funziona con il nostro ERP?", a: "Dipende da come apre i dati. Se il tuo ERP espone API o export strutturati, l'agente ci lavora. In assessment verifichiamo lettura e scrittura sui moduli acquisti e magazzino, prima di qualunque preventivo." },
        { q: "Chi decide gli ordini?", a: "Tu. L'agente prepara la proposta con i dati che l'hanno generata: fabbisogno, fornitore, prezzo, tempo di consegna. Le soglie di autonomia le imposti tu e si possono restringere o allargare nel tempo." },
        { q: "Gestisce anche il catalogo del nostro e-commerce?", a: "Sì, se il catalogo è collegato a un PIM o alla piattaforma e-commerce. L'agente aggiorna schede, attributi, prezzi e disponibilità partendo dal gestionale, e segnala le referenze incoerenti invece di pubblicarle." },
        { q: "E la produzione? Si collega al MES?", a: "È una valutazione da fare in assessment, non una promessa. I sistemi di produzione hanno vincoli propri e spesso l'integrazione utile è in sola lettura, per calcolare i fabbisogni. Preferiamo dirlo prima." },
        { q: "Lo facciamo già con ChatGPT. Che differenza c'è?", a: "Una chat generica risponde, non opera. Il Fulcrum Procurement Agent legge i tuoi dati, scrive sull'ERP, rispetta le soglie di approvazione e lascia un log di ogni azione. È lavoro svolto, non testo prodotto." },
        { q: "Cosa serve per iniziare e quanto costa?", a: "Serve una call. Poi un assessment su processi, dati e sistemi, che dice dove l'agente genera valore e dove no. Il preventivo arriva dopo l'assessment, sul perimetro concordato." },
      ],
    },
    cta: {
      heading: "Vediamo l'agente sui tuoi codici articolo",
      body: "In demo partiamo da un tuo processo reale: un riordino di materie prime o un lotto di referenze.",
    },
  },

  en: {
    meta: {
      title: "Fulcrum Procurement Agent — purchasing on your ERP",
      description:
        "The AI agent that handles reordering, supplier quotes and catalogue listings inside your ERP, for manufacturing, retail, distribution and e-commerce.",
    },
    hero: {
      h1: "Fulcrum Procurement Agent. Reorders and listings on your ERP.",
      lead: "It automates day-to-day purchasing inside your ERP, from raw materials to catalogue listings, for manufacturing, retail and e-commerce. It works in your systems: orders above your threshold still need your approval.",
    },
    problema: {
      heading: "Purchasing still runs on manual work",
      lead: "Buyers spend the day between spreadsheets, email threads and ERP screens. The work is repetitive, but one mistake stops a production line or empties a shelf.",
      blocks: [
        { head: "Stock checked by hand", body: "Someone opens the ERP every morning, cross-checks stock, bills of materials and open orders, then decides what to reorder. The logic stays in that person's head." },
        { head: "Suppliers compared over email", body: "Requests for quotation go out one at a time. Prices, lead times and minimum order quantities end up in a spreadsheet nobody keeps current." },
        { head: "Listings and catalogues lag behind", body: "New items, price lists and product pages reach the ERP and the website days apart. The e-commerce site sells what is not in stock." },
      ],
    },
    capacita: {
      heading: "Six jobs the agent handles every day",
      lead: "Fulcrum Procurement Agent works on your stock, purchasing and catalogue data. Every action has a named human owner.",
      items: [
        { head: "Proposes the reorder", body: "It reads stock, consumption, bills of materials and open orders, calculates requirements and prepares the proposal. You confirm quantity and delivery date." },
        { head: "Requests and compares quotes", body: "It sends requests for quotation to your supplier list and lines up prices, lead times and terms in one comparison. The buyer still chooses." },
        { head: "Creates orders and listings in the ERP", body: "It raises the order and updates item master data, price lists and supplier codes. Every write is logged and can be reversed." },
        { head: "Chases and tracks deliveries", body: "It checks order confirmations, flags delays and writes to the supplier using the wording and rules you set." },
        { head: "Updates the e-commerce catalogue", body: "It moves product pages, attributes, prices and availability from the ERP to the online catalogue, following the data structure you already use." },
        { head: "Flags price and lead time anomalies", body: "It compares every quote and confirmation against history. It highlights gaps on price, lead time and minimum quantities before they become a problem." },
      ],
    },
    integrazione: {
      heading: "Inside the systems you already run",
      blocks: [
        { head: "Systems", body: "ERP purchasing and warehouse modules. PIM or e-commerce platform. Email, supplier portals and EDI where it exists. MES and production automation are assessed, not promised." },
        { head: "Data", body: "The agent reads stock, master data, price lists, orders and confirmations. It writes proposals, orders and master data updates only where you grant permission. Your data stays in your systems." },
        { head: "Human-in-the-loop", body: "You set the thresholds. A person approves before the action becomes final. Below threshold and with a known supplier the agent proceeds; above threshold, with a new supplier or an off-range price, a person decides." },
        { head: "Governance", body: "Every action leaves a log: who requested it, what data it read, what it wrote to the ERP. Role-based permissions. The team that builds the agent maintains it." },
      ],
    },
    cosaCambia: {
      heading: "Two typical scenarios: production and retail",
      lead: "Built on recurring processes, not client cases. They show where manual work ends and the decision begins.",
      scenarios: [
        {
          title: "A — Raw material reorder (manufacturing)",
          today: [
            "The purchasing manager checks minimum stock on screen and reviews bills of materials for open jobs",
            "They call two suppliers and copy prices into a spreadsheet",
            "They key the order in by hand",
          ],
          withAgent: [
            "The agent detects the requirement and prepares the request for quotation",
            "It compares the replies and presents the order ready to go",
            "The buyer approves and the order lands in the ERP",
          ],
        },
        {
          title: "B — Updating a batch of listings (retail and e-commerce)",
          today: [
            "The new price list arrives by email",
            "Someone updates codes, prices and product pages in the ERP and on the site by hand",
            "The two updates happen on different days",
          ],
          withAgent: [
            "The agent normalises the price list",
            "It updates master data and the online catalogue in the same session",
            "It flags inconsistent listings to the manager",
          ],
        },
      ],
      kpi: [
        "Cycle time from requirement to order placed",
        "Stockouts on the items the agent manages",
        "Time to update a batch of listings",
        "Master data errors found after publication",
      ],
    },
    perChi: {
      heading: "For whoever runs purchasing and assortment",
      lead: "It pays off where purchasing is repetitive and listings are many: make-to-order and make-to-stock manufacturing, distribution, retail, e-commerce.",
      funzioni: ["Purchasing", "Operations and supply chain", "Warehouse and planning", "E-commerce and category management"],
      settori: ["Manufacturing", "Consumer Goods & Retail", "Distribution and e-commerce", "Healthcare & Pharma"],
      dimensione: "SMEs of 50-250 and mid-market of 250-1000 employees.",
      whenNot: "You buy rarely and every purchase is a different negotiation. We will say so.",
    },
    sicurezza: {
      heading: "Prices and suppliers are sensitive data",
      note: "Price lists, discounts and supplier terms are confidential commercial information. Access is role-based: whoever manages the catalogue does not see purchasing terms. No data is shared between clients and processing stays in Europe.",
    },
    faq: {
      heading: "Questions we get before the demo",
      items: [
        { q: "Does it work with our ERP?", a: "It depends on how your ERP exposes data. If it offers APIs or structured exports, the agent can work with it. In the assessment we test read and write on the purchasing and warehouse modules before any quote." },
        { q: "Who decides on the orders?", a: "You do. The agent prepares the proposal with the data behind it: requirement, supplier, price, lead time. You set the autonomy thresholds and you can tighten or widen them over time." },
        { q: "Does it also handle our e-commerce catalogue?", a: "Yes, if the catalogue is connected to a PIM or to the e-commerce platform. The agent updates pages, attributes, prices and availability from the ERP, and flags inconsistent listings instead of publishing them." },
        { q: "What about production? Does it connect to the MES?", a: "That is an assessment question, not a promise. Production systems have their own constraints and the useful integration is often read-only, to calculate requirements. We prefer to say so upfront." },
        { q: "We already do this with ChatGPT. What is different?", a: "A generic chat answers; it does not operate. Fulcrum Procurement Agent reads your data, writes to the ERP, respects approval thresholds and logs every action. That is work done, not text produced." },
        { q: "What does it take to start, and what does it cost?", a: "It starts with a call. Then an assessment of processes, data and systems that says where the agent creates value and where it does not. The quote comes after the assessment, on the agreed scope." },
      ],
    },
    cta: {
      heading: "Let's run it on your item codes",
      body: "In the demo we start from a process you actually run: a raw material reorder or a batch of listings.",
    },
  },
};

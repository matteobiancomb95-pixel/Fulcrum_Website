export const SETTORI = {
  it: {
    meta: {
      title: "Settori — Fulcrum",
      description:
        "Agenti AI calibrati sui processi e sui vincoli del tuo settore: manifatturiero, retail, financial services, healthcare e altri quattro.",
    },
    hero: {
      eyebrow: "Settori",
      h1: "L'AI entra in produzione settore per settore",
      lead: "Ogni agente parte dai processi reali del tuo settore, dalle sue funzioni e dai suoi vincoli normativi. È la differenza tra una demo e un sistema che lavora ogni giorno.",
    },
    prioritari: {
      eyebrow: "Quattro settori",
      heading: "Dove conosciamo i processi meglio",
      lead: "Qui sappiamo come è fatto il ciclo passivo, chi firma cosa e quale gestionale gira in azienda. Sono i settori da cui partiamo.",
      caricoLabel: "Il carico tipico",
      agentiLabel: "Agenti indicati",
      vincoliLabel: "Vincoli da rispettare",
      cards: [
        {
          name: "Manifatturiero",
          intro: "Produzione, materie prime e ciclo passivo vivono sullo stesso ERP. Il lavoro manuale si concentra lì.",
          carico: [
            "Riordino materie prime e gestione delle scorte a mano",
            "Anagrafiche articolo e fornitore aggiornate su più sistemi",
            "Registrazione delle fatture passive e controllo delle differenze",
          ],
          agents: ["procurement-agent", "finance-agent", "hr-payroll-agent"],
          vincoli: "Fatturazione elettronica e conservazione a norma, CCNL metalmeccanico e turni, ERP diffusi in Italia con personalizzazioni storiche.",
        },
        {
          name: "Consumer Goods & Retail",
          intro: "Le referenze cambiano ogni stagione e i contenuti vanno pubblicati su più canali insieme.",
          carico: [
            "Apertura e aggiornamento delle referenze su ERP e catalogo e-commerce",
            "Schede prodotto, DEM e push notification scritte una per una",
            "Lancio di un nuovo prodotto senza un impianto di posizionamento e pricing",
          ],
          agents: ["procurement-agent", "marketing-agent", "gtm-agent"],
          vincoli: "Etichettatura e claim di prodotto, listini e promozioni per canale, dati di catalogo condivisi con la distribuzione.",
        },
        {
          name: "Financial Services",
          intro: "Contratti, normativa e adempimenti occupano tempo qualificato che potrebbe stare sul cliente.",
          carico: [
            "Ricerca su contratti, polizze e circolari senza una fonte unica",
            "Controllo documentale sugli adempimenti ricorrenti",
            "Ciclo attivo e passivo con quadrature manuali",
          ],
          agents: ["legal-agent", "finance-agent", "hr-payroll-agent"],
          vincoli: "Vigilanza di Banca d'Italia e IVASS secondo l'attività svolta, tracciabilità delle decisioni, conservazione e audit trail dei documenti.",
        },
        {
          name: "Healthcare & Pharma",
          intro: "La documentazione è regolata e le persone vanno formate di continuo, con prova di avvenuta formazione.",
          carico: [
            "Ricerca in procedure, linee guida e documentazione regolatoria",
            "Gare, acquisti e anagrafiche di prodotto sotto vincolo",
            "Formazione ricorrente del personale su procedure aggiornate",
          ],
          agents: ["legal-agent", "procurement-agent", "finance-agent"],
          vincoli: "Dati particolari secondo il GDPR, procedure di qualità e tracciabilità delle versioni, requisiti regolatori di settore.",
        },
      ],
      note: "In ogni settore il Fulcrum Training Agent è la componente persone: forma chi userà gli altri agenti e i nuovi assunti.",
    },
    altri: {
      eyebrow: "Altri settori",
      heading: "Lavoriamo anche qui",
      lead: "Stesso metodo, stesso punto di partenza: il processo che pesa di più, non la tecnologia.",
      cards: [
        {
          name: "Automotive & Mobility",
          line: "Ricambi, anagrafiche e rete di vendita: molta operatività ripetuta su ERP e listini.",
          agents: ["procurement-agent", "gtm-agent", "finance-agent"],
        },
        {
          name: "Utilities & Energy",
          line: "Contratti, adempimenti regolatori e ciclo di fatturazione con volumi alti e regole che cambiano.",
          agents: ["legal-agent", "finance-agent", "procurement-agent"],
        },
        {
          name: "Professional Services",
          line: "Studi e società di consulenza: ricerca documentale, gestione del personale e amministrazione interna.",
          agents: ["legal-agent", "hr-payroll-agent", "finance-agent"],
        },
        {
          name: "Pubblica Amministrazione",
          line: "Atti, normativa e formazione del personale, dentro procedure di acquisto vincolate.",
          agents: ["legal-agent", "training-agent"],
          note: "Per i vincoli del procurement pubblico e per le integrazioni dedicate si parte dal Fulcrum Custom Agent.",
        },
      ],
      cta: { label: "Scopri Fulcrum Custom Agent", href: "/ai-adoption-enterprise" },
    },
    contesto: {
      eyebrow: "Contesto italiano",
      heading: "Le regole con cui lavori sono italiane",
      lead: "Un agente generico non sa com'è fatto un cedolino, né come si chiude una fattura elettronica. Noi partiamo da lì: CCNL applicati, adempimenti, scadenze, normative di settore e i gestionali che girano davvero nelle aziende italiane.",
      items: [
        "CCNL e adempimenti del ciclo di vita del dipendente",
        "Fatturazione elettronica, conservazione a norma, ciclo attivo e passivo",
        "Normative di settore: Banca d'Italia, IVASS, requisiti regolatori sanitari",
        "ERP e gestionali diffusi in Italia, con le personalizzazioni che hanno accumulato",
      ],
      note: "Sui settori che non conosciamo non improvvisiamo. Se il tuo non è in questo elenco, lo diciamo nella call e valutiamo insieme se ha senso partire.",
    },
    cta: {
      eyebrow: "Primo passo",
      heading: "In che settore lavori?",
      body: "Portaci il processo che pesa di più e i sistemi che usi. Ti diciamo quale agente ha senso e quale no.",
    },
  },

  en: {
    meta: {
      title: "Industries — Fulcrum",
      description:
        "AI agents calibrated on the processes and constraints of your industry: manufacturing, retail, financial services, healthcare and four more.",
    },
    hero: {
      eyebrow: "Industries",
      h1: "AI reaches production industry by industry",
      lead: "Every agent starts from the real processes of your industry, its functions and its regulatory limits. That is the difference between a demo and a system that works every day.",
    },
    prioritari: {
      eyebrow: "Four industries",
      heading: "Where we know the processes best",
      lead: "Here we know how accounts payable actually runs, who signs what and which system the company works in. These are our starting points.",
      caricoLabel: "The typical load",
      agentiLabel: "Agents to consider",
      vincoliLabel: "Constraints to respect",
      cards: [
        {
          name: "Manufacturing",
          intro: "Production, raw materials and accounts payable all live in the same ERP. That is where the manual work piles up.",
          carico: [
            "Raw material reordering and stock levels handled by hand",
            "Item and supplier master data kept aligned across several systems",
            "Supplier invoice posting and checking of discrepancies",
          ],
          agents: ["procurement-agent", "finance-agent", "hr-payroll-agent"],
          vincoli: "Italian e-invoicing and compliant archiving, CCNL (Italian national labour contracts) and shift rules, ERPs common in Italy with years of custom work on top.",
        },
        {
          name: "Consumer Goods & Retail",
          intro: "Assortments change every season and content has to go live on several channels at once.",
          carico: [
            "Creating and updating listings across ERP and e-commerce catalogue",
            "Product pages, email campaigns and push notifications written one by one",
            "Launching a new product with no structure for positioning and pricing",
          ],
          agents: ["procurement-agent", "marketing-agent", "gtm-agent"],
          vincoli: "Labelling and product claims, price lists and promotions by channel, catalogue data shared with distribution partners.",
        },
        {
          name: "Financial Services",
          intro: "Contracts, regulation and recurring obligations absorb qualified time that could go to clients.",
          carico: [
            "Searching contracts, policies and circulars with no single source",
            "Document checks on recurring compliance obligations",
            "Receivables and payables with manual reconciliation",
          ],
          agents: ["legal-agent", "finance-agent", "hr-payroll-agent"],
          vincoli: "Supervision by Banca d'Italia and IVASS depending on the activity, traceability of decisions, document retention and audit trail.",
        },
        {
          name: "Healthcare & Pharma",
          intro: "Documentation is regulated and people need continuous training, with proof that training happened.",
          carico: [
            "Searching procedures, guidelines and regulatory documentation",
            "Tenders, purchasing and product master data under constraint",
            "Recurring staff training on procedures that keep changing",
          ],
          agents: ["legal-agent", "procurement-agent", "finance-agent"],
          vincoli: "Special categories of data under GDPR, quality procedures and version traceability, sector regulatory requirements.",
        },
      ],
      note: "In every industry the Fulcrum Training Agent is the people side: it trains whoever will use the other agents, and new hires.",
    },
    altri: {
      eyebrow: "Other industries",
      heading: "We work here too",
      lead: "Same method, same starting point: the process that weighs most, not the technology.",
      cards: [
        {
          name: "Automotive & Mobility",
          line: "Spare parts, master data and dealer networks: a lot of repeated work in the ERP and in price lists.",
          agents: ["procurement-agent", "gtm-agent", "finance-agent"],
        },
        {
          name: "Utilities & Energy",
          line: "Contracts, regulatory obligations and a billing cycle with high volumes and rules that keep moving.",
          agents: ["legal-agent", "finance-agent", "procurement-agent"],
        },
        {
          name: "Professional Services",
          line: "Firms and consultancies: document search, people management and internal administration.",
          agents: ["legal-agent", "hr-payroll-agent", "finance-agent"],
        },
        {
          name: "Public Sector",
          line: "Records, regulation and staff training, inside constrained purchasing procedures.",
          agents: ["legal-agent", "training-agent"],
          note: "For public procurement constraints and dedicated integrations, the starting point is the Fulcrum Custom Agent.",
        },
      ],
      cta: { label: "Explore Fulcrum Custom Agent", href: "/ai-adoption-enterprise" },
    },
    contesto: {
      eyebrow: "Italian context",
      heading: "The rules you work with are Italian",
      lead: "A generic agent doesn't know how an Italian payslip is built, or how an e-invoice is closed. That is where we start: the CCNL in force, compliance deadlines, sector regulation and the systems Italian companies actually run.",
      items: [
        "CCNL (Italian national labour contracts) and employee lifecycle obligations",
        "Italian e-invoicing, compliant archiving, receivables and payables",
        "Sector regulation: Banca d'Italia, IVASS, healthcare regulatory requirements",
        "ERPs and business systems common in Italy, with the custom work they carry",
      ],
      note: "We don't improvise on industries we don't know. If yours isn't on this list, we'll say so in the call and decide together whether it makes sense to start.",
    },
    cta: {
      eyebrow: "First step",
      heading: "Which industry do you work in?",
      body: "Bring us the process that weighs most and the systems you use. We'll tell you which agent makes sense and which doesn't.",
    },
  },
};

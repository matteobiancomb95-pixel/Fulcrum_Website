// Registry dei 7 agenti di catalogo. Fonte unica per home, hub, footer, form e "altri agenti".
// Ordine fisso deciso in architettura: HR & Payroll, Finance, Procurement, Marketing, GTM, Legal, Training.

export const AGENTS = [
  {
    slug: "hr-payroll-agent",
    sign: "hr",
    name: "Fulcrum HR & Payroll Agent",
    related: ["training-agent", "finance-agent", "legal-agent"],
    it: {
      eyebrow: "HR & Payroll",
      oneLiner:
        "Automatizza le attività operative del ciclo di vita del dipendente, dallo screening all'uscita, con validazione umana sugli adempimenti.",
      caps: ["Screening CV e talent acquisition", "Inquadramento CCNL e proposta economica", "Adempimenti e cedolini con validazione umana"],
      perChi: "HR · payroll · PMI senza funzione HR strutturata",
    },
    en: {
      eyebrow: "HR & Payroll",
      oneLiner:
        "Automates the operational work across the employee lifecycle, from screening to exit, with human validation on statutory filings.",
      caps: ["CV screening and talent acquisition", "Grading under national labour agreements (CCNL) and offers", "Payroll input and filings with human validation"],
      perChi: "HR · payroll · SMEs with no structured HR function",
    },
  },
  {
    slug: "finance-agent",
    sign: "finance",
    name: "Fulcrum Administration & Finance Agent",
    related: ["hr-payroll-agent", "procurement-agent", "legal-agent"],
    it: {
      eyebrow: "Amministrazione & Finanza",
      oneLiner: "Registra le fatture passive, emette quelle attive e riconcilia i movimenti, dentro il gestionale che usi già.",
      caps: ["Registrazione fatture passive con abbinamento ordine-DDT", "Fatturazione attiva e invio", "Riconciliazione bancaria e scadenzario"],
      perChi: "CFO · amministrazione · controllo di gestione",
    },
    en: {
      eyebrow: "Administration & Finance",
      oneLiner: "Posts supplier invoices, issues customer invoices and reconciles bank movements, inside the ERP your team already uses.",
      caps: ["Supplier invoices posted and matched to orders", "Customer invoicing and sending", "Bank reconciliation and payment schedule"],
      perChi: "CFO · finance administration · management control",
    },
  },
  {
    slug: "procurement-agent",
    sign: "procurement",
    name: "Fulcrum Procurement Agent",
    related: ["finance-agent", "marketing-agent", "gtm-agent"],
    it: {
      eyebrow: "Procurement & Operations",
      oneLiner:
        "Automatizza l'operatività degli acquisti sull'ERP, dalle materie prime alle referenze di catalogo, per produzione, retail ed e-commerce.",
      caps: ["Proposte di riordino su scorte e fabbisogni", "Richieste d'offerta e confronto fornitori", "Inserimento ordini e aggiornamento referenze su ERP"],
      perChi: "Manifatturiero · retail · distribuzione · e-commerce",
    },
    en: {
      eyebrow: "Procurement & Operations",
      oneLiner: "Runs day-to-day purchasing in your ERP, from raw materials to catalogue items, for manufacturing, retail and e-commerce.",
      caps: ["Reorder proposals from stock and demand", "Requests for quotation and supplier comparison", "Purchase orders and item updates in the ERP"],
      perChi: "Manufacturing · retail · distribution · e-commerce",
    },
  },
  {
    slug: "marketing-agent",
    sign: "marketing",
    name: "Fulcrum Marketing Agent",
    related: ["gtm-agent", "procurement-agent", "training-agent"],
    it: {
      eyebrow: "Marketing & Contenuti",
      oneLiner: "Produce e aggiorna DEM, push, pagine e schede prodotto, con approvazione umana e linee guida di brand.",
      caps: ["DEM, newsletter e push con varianti per segmento", "Aggiornamento di pagine e schede prodotto", "Calendario editoriale e adattamenti multilingua"],
      perChi: "Marketing · CRM · e-commerce",
    },
    en: {
      eyebrow: "Marketing & Content",
      oneLiner: "Produces and updates emails, push messages, pages and product content, with human approval and your brand guidelines.",
      caps: ["Email campaigns, newsletters and push per segment", "Page and product content updates", "Editorial calendar and multilingual adaptation"],
      perChi: "Marketing · CRM · e-commerce",
    },
  },
  {
    slug: "gtm-agent",
    sign: "gtm",
    name: "Fulcrum GTM Agent",
    related: ["marketing-agent", "procurement-agent", "finance-agent"],
    it: {
      eyebrow: "Go-to-market",
      oneLiner: "Struttura il go-to-market: posizionamento, prodotto, pricing, canali e promozione, per lanci e rebranding.",
      caps: ["Analisi di mercato e competitor con fonti", "Posizionamento e matrice prodotto/segmento", "Scenari di pricing e piano canali-promozione"],
      perChi: "Direzione marketing e commerciale · brand e product manager",
    },
    en: {
      eyebrow: "Go-to-market",
      oneLiner: "Structures your go-to-market: positioning, product, pricing, channels and promotion, for launches and rebrands.",
      caps: ["Market and competitor analysis with sources", "Positioning and product-segment matrix", "Pricing scenarios and channel-promotion plan"],
      perChi: "Marketing and sales leadership · brand and product managers",
    },
  },
  {
    slug: "legal-agent",
    sign: "legal",
    name: "Fulcrum Legal Agent",
    related: ["finance-agent", "hr-payroll-agent", "training-agent"],
    it: {
      eyebrow: "Legal & Compliance",
      oneLiner: "Cerca nei documenti del team legale e risponde citando la fonte, progettato per ridurre le allucinazioni.",
      caps: ["Ricerca documentale con citazione della fonte", "Revisione clausole e confronto con template", "Estrazione di scadenze e obblighi"],
      perChi: "Uffici legali · compliance · studi professionali",
    },
    en: {
      eyebrow: "Legal & Compliance",
      oneLiner: "Searches your legal archives and answers with the source cited, designed to reduce hallucinations from generic LLMs.",
      caps: ["Document search with the source cited", "Clause review against your templates", "Deadlines and obligations extracted from contracts"],
      perChi: "In-house legal · compliance · professional firms",
    },
  },
  {
    slug: "training-agent",
    sign: "training",
    name: "Fulcrum Training Agent",
    related: ["hr-payroll-agent", "marketing-agent", "legal-agent"],
    it: {
      eyebrow: "Formazione & Persone",
      oneLiner: "LLM su misura per formazione, upskilling e onboarding, costruito sulla documentazione della tua azienda.",
      caps: ["Onboarding guidato sulla documentazione aziendale", "Risposte su procedure e policy interne", "Percorsi di upskilling per funzione con verifica"],
      perChi: "HR · L&D · manager di funzione · tutte le aziende",
    },
    en: {
      eyebrow: "Training & People",
      oneLiner: "A custom LLM for training, upskilling and onboarding, built on your company's own documentation.",
      caps: ["Guided onboarding on your own documentation", "Answers on internal procedures and policies", "Upskilling paths per function, with assessment"],
      perChi: "HR · L&D · function managers · any company",
    },
  },
];

export const agentBySlug = (slug) => AGENTS.find((a) => a.slug === slug);

export const agentHref = (slug) => `/ai-adoption/${slug}`;

/** Card data flattened for one language. */
export const agentCard = (agent, lang) => ({
  slug: agent.slug,
  sign: agent.sign,
  name: agent.name,
  href: agentHref(agent.slug),
  ...agent[lang],
});

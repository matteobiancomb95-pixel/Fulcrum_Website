import React, { createContext, useContext, useEffect, useState } from "react";

export const CONTENT = {
  it: {
    skip: "Vai al contenuto",
    nav: {
      servizi: {
        label: "Servizi",
        items: [
          { label: "AI Adoption", href: "/ai-adoption", desc: "Formazione aziendale sull'AI" },
          { label: "Agenti AI", href: "/ai-agents", desc: "Use case di AI agentica" },
          { label: "Servizi Digitali", href: "/servizi-digitali", desc: "Software, Web & Mobile app" },
        ],
      },
      settori: { label: "Settori", href: "/settori" },
      chiSiamo: { label: "Chi siamo", href: "/chi-siamo" },
    },
    header: { cta: "Contattaci", langAria: "Cambia lingua" },
    hero: {
      lines: ["Driving", "AI Adoption"],
      sub: "Formiamo le persone e automatizziamo i processi con l'intelligenza artificiale.",
      ctaPrimary: "Contattaci",
      ctaSecondary: "Scopri i nostri servizi",
    },
    metrics: [
      { value: 6, prefix: "< ", suffix: " mesi", label: "tempo medio di break-even" },
      { value: 70, prefix: "+", suffix: "%", label: "tempo risparmiato sui task manuali" },
      { value: 90, prefix: "", suffix: "%", label: "riduzione errori manuali" },
      { value: 24, prefix: "", suffix: "/7", label: "operatività degli agenti" },
    ],
    manifesto: {
      eyebrow: "Il principio",
      items: [
        { n: "01", head: "L'AI è la leva.", body: "Una tecnologia complessa che, da sola, non solleva nulla. Serve un punto d'appoggio." },
        { n: "02", head: "La complessità è il carico.", body: "Processi manuali, competenze frammentate, decisioni lente. Il peso che rallenta l'azienda." },
        { n: "03", head: "Fulcrum è il fulcro.", body: "Il punto d'appoggio senza il quale la leva non solleva niente. Sforzo minimo, sollevamento enorme." },
      ],
    },
    services: {
      eyebrow: "I due pilastri",
      heading: "Persone e processi, un unico fulcro.",
      cards: [
        {
          eyebrow: "Persone", title: "AI Adoption", href: "/ai-adoption",
          desc: "Programmi strutturati per portare l'intelligenza artificiale nelle competenze di tutta l'organizzazione.",
          items: ["AI Leadership", "AI Upskilling per tutti i livelli", "Redazione AI Policy", "Programma AI Champion"],
          link: "Esplora AI Adoption",
        },
        {
          eyebrow: "Processi", title: "AI Agents", href: "/ai-agents",
          desc: "Agenti AI specializzati sulle aree a più alto impatto, con competenza specifica sul contesto italiano.",
          items: ["Finance & Document Automation", "Customer Operations", "Sales & Revenue Automation", "AI Governance & Compliance"],
          link: "Esplora AI Agents",
        },
      ],
    },
    method: {
      eyebrow: "Il metodo",
      heading: "Dall'assessment all'adozione quotidiana.",
      steps: [
        { n: "01", title: "Assessment", desc: "Mappiamo processi, dati e competenze per individuare dove l'AI genera valore reale." },
        { n: "02", title: "Design", desc: "Disegniamo la roadmap di adozione e l'architettura degli agenti su misura." },
        { n: "03", title: "Build", desc: "Sviluppiamo agenti e percorsi formativi, integrati nei vostri strumenti esistenti." },
        { n: "04", title: "Adoption", desc: "Accompagniamo le persone fino all'uso quotidiano, misurando l'impatto." },
      ],
    },
    sectors: {
      eyebrow: "Settori",
      heading: "Competenza verticale, non genericità.",
      lead: "Non facciamo AI generica: ogni programma parte dai processi reali del tuo settore, dalle sue funzioni e dai suoi vincoli normativi. È la differenza tra un progetto che resta una demo e uno che entra in produzione.",
      ctaLabel: "Esplora tutti i settori",
      ctaHref: "/settori",
      list: ["Financial Services", "Healthcare & Pharma", "Consumer Goods & Retail", "Automotive & Mobility", "Manifatturiero", "Utilities & Energy", "Professional Services", "Pubblica Amministrazione"],
      marquee: ["Driving AI Adoption", "Persone", "Processi", "Effortless"],
    },
    trust: {
      eyebrow: "Fiducia & Sicurezza",
      heading: "Progettati per chi non può permettersi rischi.",
      items: [
        { title: "GDPR Compliant", desc: "Trattamento dati conforme al Regolamento europeo." },
        { title: "Conformità AI Act", desc: "Sistemi progettati secondo il quadro normativo UE." },
        { title: "Dati in Europa", desc: "Infrastruttura e storage all'interno dell'Unione." },
        { title: "Logging & Audit Trail", desc: "Tracciabilità completa di ogni azione degli agenti." },
        { title: "DPO Esterno", desc: "Data Protection Officer dedicato a supporto." },
        { title: "Valutazione Privacy", desc: "DPIA e risk assessment prima di ogni rilascio." },
      ],
    },
    contact: {
      eyebrow: "Contatti",
      heading: "Contattaci.",
      intro: "Raccontaci dove vuoi portare la tua azienda. Ti rispondiamo entro un giorno lavorativo con una proposta concreta.",
      labels: { nome: "Nome", azienda: "Azienda", email: "Email", dimensione: "Dimensione azienda", messaggio: "Messaggio" },
      placeholders: { nome: "Mario Rossi", azienda: "Nome azienda", email: "nome@azienda.it", messaggio: "Come possiamo aiutarti?", dimensione: "Seleziona…" },
      sizes: ["1-50 dipendenti", "51-200 dipendenti", "201-1000 dipendenti", "1000+ dipendenti"],
      checkboxes: [
        { k: "privacy", label: "Ho letto e accetto la Privacy Policy.", req: true },
        { k: "marketing", label: "Acconsento a ricevere comunicazioni marketing.", req: false },
      ],
      submit: "Invia messaggio",
      submitting: "Invio in corso…",
      errorGeneric: "Invio non riuscito. Riprova tra poco.",
      errors: {
        nome: "Inserisci il tuo nome.",
        azienda: "Inserisci il nome dell'azienda.",
        email: "Inserisci la tua email.",
        emailInvalid: "Email non valida.",
        dimensione: "Seleziona la dimensione azienda.",
        messaggio: "Scrivi un messaggio.",
        privacy: "Il consenso privacy è obbligatorio.",
      },
      success: { title: "Messaggio inviato.", body: (name) => `Grazie ${name}. Ti ricontattiamo a breve.` },
    },
    footer: {
      tagline: "Il fulcro della trasformazione AI. Formiamo le persone e automatizziamo i processi.",
      cols: [
        { head: "Servizi", links: [
          { label: "AI Adoption", href: "/ai-adoption" },
          { label: "Agenti AI", href: "/ai-agents" },
          { label: "Servizi Digitali", href: "/servizi-digitali" },
        ]},
        { head: "Azienda", links: [
          { label: "Chi siamo", href: "/chi-siamo" },
          { label: "Settori", href: "/settori" },
          { label: "Contattaci", href: "/#contatti" },
        ]},
        { head: "Legale", links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Cookie Policy", href: "#" },
        ]},
      ],
      companyLabel: "Registration Code",
      company: "306318621",
      emailLabel: "Email",
      email: "matteobianco.mb95@gmail.com",
      rights: "Tutti i diritti riservati.",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
    },
    cookie: {
      title: "Rispettiamo la tua privacy",
      body: "Usiamo solo cookie essenziali di default. Puoi accettare tutti i cookie per aiutarci a migliorare l'esperienza.",
      essential: "Solo essenziali",
      accept: "Accetta tutti",
    },
  },

  en: {
    skip: "Skip to content",
    nav: {
      servizi: {
        label: "Services",
        items: [
          { label: "AI Adoption", href: "/ai-adoption", desc: "Corporate AI training" },
          { label: "AI Agents", href: "/ai-agents", desc: "Agentic AI use cases" },
          { label: "Digital Services", href: "/servizi-digitali", desc: "Software, Web & Mobile apps" },
        ],
      },
      settori: { label: "Sectors", href: "/settori" },
      chiSiamo: { label: "About", href: "/chi-siamo" },
    },
    header: { cta: "Contact us", langAria: "Change language" },
    hero: {
      lines: ["Driving", "AI Adoption"],
      sub: "We train your people and automate your processes with artificial intelligence.",
      ctaPrimary: "Contact us",
      ctaSecondary: "Discover our services",
    },
    metrics: [
      { value: 6, prefix: "< ", suffix: " months", label: "average time to break-even" },
      { value: 70, prefix: "+", suffix: "%", label: "time saved on manual tasks" },
      { value: 90, prefix: "", suffix: "%", label: "reduction in manual errors" },
      { value: 24, prefix: "", suffix: "/7", label: "agent operability" },
    ],
    manifesto: {
      eyebrow: "The principle",
      items: [
        { n: "01", head: "AI is the lever.", body: "A complex technology that, on its own, lifts nothing. It needs a pivot point." },
        { n: "02", head: "Complexity is the load.", body: "Manual processes, fragmented skills, slow decisions. The weight that holds a company back." },
        { n: "03", head: "Fulcrum is the pivot.", body: "The fulcrum without which the lever lifts nothing. Minimal effort, enormous lift." },
      ],
    },
    services: {
      eyebrow: "The two pillars",
      heading: "People and processes, a single fulcrum.",
      cards: [
        {
          eyebrow: "People", title: "AI Adoption", href: "/ai-adoption",
          desc: "Structured programmes to embed artificial intelligence into the skills of your entire organisation.",
          items: ["AI Leadership", "AI Upskilling for every level", "AI Policy drafting", "AI Champion programme"],
          link: "Explore AI Adoption",
        },
        {
          eyebrow: "Processes", title: "AI Agents", href: "/ai-agents",
          desc: "AI agents specialised on the highest-impact areas, with deep expertise in the Italian context.",
          items: ["Finance & Document Automation", "Customer Operations", "Sales & Revenue Automation", "AI Governance & Compliance"],
          link: "Explore AI Agents",
        },
      ],
    },
    method: {
      eyebrow: "The method",
      heading: "From assessment to everyday adoption.",
      steps: [
        { n: "01", title: "Assessment", desc: "We map processes, data and skills to pinpoint where AI creates real value." },
        { n: "02", title: "Design", desc: "We design the adoption roadmap and a tailored agent architecture." },
        { n: "03", title: "Build", desc: "We build agents and training paths, integrated into your existing tools." },
        { n: "04", title: "Adoption", desc: "We guide people all the way to daily use, measuring the impact." },
      ],
    },
    sectors: {
      eyebrow: "Sectors",
      heading: "Vertical expertise, not generic advice.",
      lead: "We don't do generic AI: every programme starts from the real processes of your sector, its functions and its regulatory constraints. That's the difference between a project that stays a demo and one that reaches production.",
      ctaLabel: "Explore all sectors",
      ctaHref: "/settori",
      list: ["Financial Services", "Healthcare & Pharma", "Consumer Goods & Retail", "Automotive & Mobility", "Manufacturing", "Utilities & Energy", "Professional Services", "Public Administration"],
      marquee: ["Driving AI Adoption", "People", "Processes", "Effortless"],
    },
    trust: {
      eyebrow: "Trust & Security",
      heading: "Built for those who can't afford risk.",
      items: [
        { title: "GDPR Compliant", desc: "Data processing compliant with the EU Regulation." },
        { title: "AI Act Compliance", desc: "Systems designed to the EU regulatory framework." },
        { title: "Data in Europe", desc: "Infrastructure and storage within the Union." },
        { title: "Logging & Audit Trail", desc: "Full traceability of every agent action." },
        { title: "External DPO", desc: "A dedicated Data Protection Officer on call." },
        { title: "Privacy Assessment", desc: "DPIA and risk assessment before every release." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Contact us.",
      intro: "Tell us where you want to take your company. We reply within one business day with a concrete proposal.",
      labels: { nome: "Name", azienda: "Company", email: "Email", dimensione: "Company size", messaggio: "Message" },
      placeholders: { nome: "John Smith", azienda: "Company name", email: "name@company.com", messaggio: "How can we help?", dimensione: "Select…" },
      sizes: ["1-50 employees", "51-200 employees", "201-1000 employees", "1000+ employees"],
      checkboxes: [
        { k: "privacy", label: "I have read and accept the Privacy Policy.", req: true },
        { k: "marketing", label: "I agree to receive marketing communications.", req: false },
      ],
      submit: "Send message",
      submitting: "Sending…",
      errorGeneric: "Couldn't send. Please try again shortly.",
      errors: {
        nome: "Please enter your name.",
        azienda: "Please enter your company name.",
        email: "Please enter your email.",
        emailInvalid: "Invalid email.",
        dimensione: "Please select company size.",
        messaggio: "Please write a message.",
        privacy: "Privacy consent is required.",
      },
      success: { title: "Message sent.", body: (name) => `Thanks ${name}. We'll be in touch soon.` },
    },
    footer: {
      tagline: "The fulcrum of AI transformation. We train people and automate processes.",
      cols: [
        { head: "Services", links: [
          { label: "AI Adoption", href: "/ai-adoption" },
          { label: "AI Agents", href: "/ai-agents" },
          { label: "Digital Services", href: "/servizi-digitali" },
        ]},
        { head: "Company", links: [
          { label: "About", href: "/chi-siamo" },
          { label: "Sectors", href: "/settori" },
          { label: "Contact us", href: "/#contatti" },
        ]},
        { head: "Legal", links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Cookie Policy", href: "#" },
        ]},
      ],
      companyLabel: "Registration Code",
      company: "306318621",
      emailLabel: "Email",
      email: "matteobianco.mb95@gmail.com",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
    },
    cookie: {
      title: "We respect your privacy",
      body: "We use essential-only cookies by default. You can accept all cookies to help us improve the experience.",
      essential: "Essential only",
      accept: "Accept all",
    },
  },
};

const LangContext = createContext(null);
const LANG_KEY = "fulcrum_lang";

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "it" || saved === "en") return saved;
  } catch (e) { /* ignore */ }
  const nav = (typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage || "it")).toLowerCase();
  return nav.startsWith("it") ? "it" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLang);
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem(LANG_KEY, l); } catch (e) { /* ignore */ }
  };
  const toggle = () => setLang(lang === "it" ? "en" : "it");
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t: CONTENT[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

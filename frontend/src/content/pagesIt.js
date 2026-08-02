// Italian content for the standalone pages (AI Adoption, AI Agents, Servizi Digitali, Settori, Chi siamo)

export const AGENT_CATEGORIES_IT = [
  {
    name: "Customer Operations",
    cases: [
      { title: "Bot Customer Care (voce + chat)", desc: "Assistente conversazionale che gestisce richieste ricorrenti: check polizza/conto, stato ordine, triage e FAQ paziente, supporto prodotto.", core: ["Financial Services", "Retail", "B2B", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Gestione sinistri / ticketing", desc: "Apertura, classificazione e instradamento automatico di sinistri o ticket di assistenza, con raccolta documenti e primo riscontro al cliente.", core: ["Financial Services"] },
    ],
  },
  {
    name: "Sales & Revenue",
    cases: [
      { title: "Sales Automation (lead gen + qualifica)", desc: "Agente che individua nuove opportunità, invia comunicazioni omnichannel, qualifica le lead e le inserisce in pipeline.", core: ["Consumer Goods", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Pricing Automation", desc: "Agente che adatta i prezzi sulla base di mercato, domanda e stock. Prioritario nel retail; nel SaaS come dynamic/packaging pricing.", core: ["Retail", "SaaS B2B"] },
    ],
  },
  {
    name: "Marketing & Content",
    cases: [
      { title: "Generazione contenuti + target marketing", desc: "Produzione di contenuti e definizione automatica dei target di campagna a partire dai dati CRM/CDP.", core: ["Financial Services", "Retail", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Grafiche omnichannel", desc: "Realizzazione automatica di grafiche declinate per canale (email, social, onsite, ADV) da template di brand.", core: ["Retail", "SaaS B2B"] },
      { title: "Estrazione target omnichannel", desc: "Segmentazione e costruzione automatica delle audience su tutti i canali a partire da regole di business.", core: ["Financial Services", "Retail", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Aggiornamento contenuti sito web", desc: "Aggiornamento automatico di pagine, schede e contenuti del sito.", core: ["Retail", "SaaS B2B"] },
      { title: "Aggiornamento contenuti social", desc: "Pianificazione e pubblicazione automatica dei contenuti social.", core: ["Retail", "SaaS B2B"] },
    ],
  },
  {
    name: "Finance & Document",
    cases: [
      { title: "Contabilità passiva (fatture fornitori)", desc: "Registrazione e riconciliazione automatica delle fatture fornitore su ERP. Task ad alta frequenza, alto ROI.", core: ["Retail", "Consumer Goods", "B2B", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Fatturazione attiva", desc: "Emissione, registrazione e riconciliazione automatica delle fatture attive.", core: ["Consumer Goods", "B2B", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Document automation (polizze, contratti, normativa)", desc: "Estrazione, classificazione e generazione di documenti: polizze e contratti, documentazione regolatoria e letteratura scientifica, contratti SaaS.", core: ["Financial Services", "B2B", "SaaS B2B"] },
    ],
  },
  {
    name: "Supply & Operations",
    cases: [
      { title: "Buyer automation (assortimento su ERP)", desc: "Inserimento e aggiornamento automatico dell'assortimento su ERP.", core: ["Retail", "Consumer Goods"] },
      { title: "Riordino quantità (stock-based)", desc: "Agente che riordina le quantità sulla base dello stock presente su ERP e delle previsioni di domanda.", core: ["Retail", "Consumer Goods"] },
      { title: "Automazione produzione", desc: "Schedulazione, controllo qualità documentale e tracciabilità di lotto. Da validare in fase di assessment sui sistemi MES/produzione.", core: [] },
    ],
  },
  {
    name: "Data & Reporting",
    cases: [
      { title: "Reportistica automatica (BI)", desc: "Generazione automatica di report dai tool di analytics (Power BI, Tableau, SAP BO) con adattamento dell'analisi, oggi fatto a mano in Excel.", core: ["Tutti i settori"] },
    ],
  },
  {
    name: "HR & People",
    cases: [
      { title: "Talent Acquisition (screening + scheduling)", desc: "Screening automatico dei CV, contatto del candidato e organizzazione del colloquio.", core: [] },
    ],
  },
  {
    name: "Governance & Compliance",
    cases: [
      { title: "AI Governance & Compliance", desc: "Conformità normativa e tracciabilità: Banca d'Italia/IVASS e AI Act, documentazione regolatoria, AI Act trasversale. Ogni agente in produzione richiede questo layer.", core: ["Financial Services", "B2B", "SaaS B2B"] },
    ],
  },
];

export const PAGES_IT = {
  aiAdoption: {
    eyebrow: "Persone",
    title: "AI Adoption",
    lead: "Formazione aziendale strutturata per portare l'intelligenza artificiale nelle competenze quotidiane di tutta l'organizzazione — dai vertici alle prime linee.",
    stats: [
      { value: "100%", label: "dei livelli coinvolti, dal board agli operativi" },
      { value: "4-8 sett.", label: "per il primo ciclo di adozione misurabile" },
      { value: "AI Policy", label: "interna redatta e adottata" },
    ],
    programsTitle: "I programmi",
    programs: [
      { title: "AI Leadership", desc: "Percorsi executive per board e management: dove l'AI genera valore, come governarne rischi e investimenti, come guidare il cambiamento." },
      { title: "AI Upskilling per tutti i livelli", desc: "Laboratori operativi calibrati per funzione: prompt, strumenti e flussi di lavoro reali applicati ai task di ogni team." },
      { title: "Redazione AI Policy", desc: "Definizione di regole d'uso chiare, sicure e conformi: cosa è permesso, con quali dati, con quali controlli." },
      { title: "Programma AI Champion", desc: "Selezione e formazione di referenti interni che diffondono l'adozione e mantengono viva la trasformazione nel tempo." },
    ],
    methodTitle: "Come lavoriamo",
    method: [
      { n: "01", title: "Assessment", desc: "Misuriamo maturità, competenze e casi d'uso ad alto impatto." },
      { n: "02", title: "Design", desc: "Costruiamo il percorso formativo su misura per funzioni e livelli." },
      { n: "03", title: "Delivery", desc: "Formazione operativa con esempi e strumenti del contesto reale." },
      { n: "04", title: "Adoption", desc: "Accompagniamo fino all'uso quotidiano, con KPI e follow-up." },
    ],
    ctaTitle: "Porta l'AI nelle competenze del tuo team.",
    ctaText: "Contattaci per un AI Adoption Assessment.",
  },

  aiAgents: {
    eyebrow: "Processi",
    title: "AI Agents",
    lead: "Agenti AI specializzati sulle aree a più alto impatto, con competenza specifica sul contesto italiano. Ogni agente è integrato nei tuoi strumenti e coperto da un layer di governance.",
    legendTitle: "Priorità per settore",
    legend: [
      { mark: "core", label: "core — alto impatto, primi da attivare" },
      { mark: "all", label: "orizzontale — valido in quasi tutti i settori" },
    ],
    categoriesTitle: "Use case per categoria",
    coreLabel: "Settori core",
    categories: AGENT_CATEGORIES_IT,
    ctaTitle: "Quale processo vuoi automatizzare per primo?",
    ctaText: "Contattaci per la matrice use case sul tuo settore.",
  },

  serviziDigitali: {
    eyebrow: "End-to-end",
    title: "Servizi Digitali",
    lead: "Gestiamo l'intero ciclo di implementazione e integrazione dei servizi digitali: dall'analisi al rilascio in produzione, fino alla manutenzione. Un unico interlocutore, dalla strategia al codice.",
    services: [
      { title: "Software ad hoc (CRM, ERP, ecc.)", desc: "Progettazione e sviluppo di gestionali su misura — CRM, ERP e sistemi interni — integrati con i tuoi processi e con gli agenti AI.", points: ["Analisi processi e requisiti", "Integrazione con sistemi esistenti", "Automazioni AI native", "Formazione e supporto"] },
      { title: "Web App", desc: "Applicazioni web performanti e scalabili: portali, dashboard, aree riservate e piattaforme su misura.", points: ["UX/UI su misura", "Architettura scalabile", "Sicurezza e conformità", "Manutenzione evolutiva"] },
      { title: "Mobile App", desc: "App native e cross-platform per iOS e Android, pensate per l'uso reale e integrate con i tuoi dati.", points: ["iOS e Android", "Design orientato all'uso", "Integrazione back-end", "Pubblicazione e aggiornamenti"] },
    ],
    processTitle: "Gestione E2E",
    process: [
      { n: "01", title: "Discovery", desc: "Analisi di processi, requisiti e obiettivi di business." },
      { n: "02", title: "Design", desc: "Architettura, UX e piano di integrazione." },
      { n: "03", title: "Build", desc: "Sviluppo iterativo con automazioni AI dove servono." },
      { n: "04", title: "Integrazione", desc: "Collegamento a sistemi, dati e strumenti esistenti." },
      { n: "05", title: "Run", desc: "Rilascio, monitoraggio e manutenzione evolutiva." },
    ],
    ctaTitle: "Hai un servizio digitale da costruire o integrare?",
    ctaText: "Contattaci per una call di scoping.",
  },

  settori: {
    eyebrow: "Settori",
    title: "AI su misura per il tuo settore",
    lead: "Portiamo AI Adoption e AI Agents nelle organizzazioni italiane di ogni settore. Ogni programma è calibrato sulle specificità dell'industry, sulle funzioni coinvolte e sul livello di maturità digitale.",
    stats: [
      { value: "8", label: "settori presidiati" },
      { value: "17+", label: "use case di agenti mappati" },
      { value: "IT", label: "competenza sul contesto italiano" },
    ],
    adoptionLabel: "AI Adoption",
    agentsLabel: "AI Agents",
    list: [
      { name: "Financial Services", desc: "Compliance, gestione del rischio, operations e servizio al cliente: l'AI trasforma il settore finanziario e assicurativo su ogni fronte.", adoption: "Formazione per compliance, risk, customer service e operations. Sessioni dedicate ai consigli di amministrazione.", agents: "Document automation per polizze e contratti, gestione sinistri, AI Governance per Banca d'Italia, IVASS e AI Act." },
      { name: "Healthcare & Pharma", desc: "Vincoli regolamentari stringenti e dati sensibili: il nostro approccio mette compliance e privacy al primo posto.", adoption: "Formazione per personale medico e amministrativo, R&D e regulatory affairs sull'uso conforme dell'AI.", agents: "Document automation per dati clinici e letteratura, bot di triage e FAQ paziente, governance regolatoria." },
      { name: "Consumer Goods & Retail", desc: "Personalizzazione dell'esperienza, supply chain, marketing e vendite: il retail è tra i settori a più alto ROI.", adoption: "Formazione per marketing, vendite, category management e operations su personalizzazione e content generation.", agents: "Pricing automation, buyer automation e riordino su ERP, customer care multicanale, contabilità passiva." },
      { name: "Automotive & Mobility", desc: "Doppia trasformazione — elettrificazione e digitalizzazione — che ridisegna vendita, customer journey e rete concessionarie.", adoption: "Formazione per reti commerciali, customer success e operations; gestione del cambiamento nelle reti.", agents: "Sales automation e qualifica lead, document automation per leasing e finanziamenti, supporto post-vendita." },
      { name: "Manifatturiero", desc: "Volumi elevati di documenti e processi operativi: l'AI interviene su efficienza, qualità e tracciabilità.", adoption: "Formazione per operations, qualità e funzioni amministrative sull'uso quotidiano dell'AI.", agents: "Contabilità passiva e fatturazione, reportistica automatica, automazione di produzione da validare in assessment." },
      { name: "Utilities & Energy", desc: "Grandi volumi di dati clienti e documentazione regolamentare: efficienza operativa, customer experience e compliance.", adoption: "Formazione per operations, customer service, regulatory e field sul digitale del settore energetico.", agents: "Customer care per bollette e reclami, reportistica operativa, governance sulle normative di settore (ARERA)." },
      { name: "Professional Services", desc: "Studi e società di servizi: l'AI accelera analisi, produzione documentale e relazione con il cliente.", adoption: "Formazione per professionisti e staff su prompt, strumenti e flussi di lavoro applicati ai mandati reali.", agents: "Document automation, reportistica automatica, sales automation e gestione delle richieste clienti." },
      { name: "Pubblica Amministrazione", desc: "In piena trasformazione digitale: l'AI migliora efficienza dei servizi, tempi di risposta e semplificazione dei processi.", adoption: "Formazione per dirigenti e funzionari su AI Act, GDPR e uso responsabile dell'AI nel settore pubblico.", agents: "Classificazione documenti e redazione atti, supporto al cittadino (FAQ, stato pratiche), governance normativa." },
    ],
    ctaTitle: "In quale settore opera la tua organizzazione?",
    ctaText: "Contattaci per un percorso su misura.",
  },

  chiSiamo: {
    eyebrow: "Chi siamo",
    title: "Fulcrum accelera l'adozione dell'intelligenza artificiale nelle aziende",
    lead: "AI transformation company italiana. Lavoriamo su persone e processi per portare l'AI dove genera valore reale — con la concretezza di chi conosce il contesto italiano.",
    stats: [
      { value: "Persone", label: "programmi di AI Adoption su tutti i livelli" },
      { value: "Processi", label: "AI Agents sulle aree ad alto impatto" },
      { value: "E2E", label: "dalla strategia al software in produzione" },
    ],
    missionTitle: "La nostra missione",
    missionText: "Acceleriamo l'adozione dell'AI nelle aziende. L'intelligenza artificiale non è il futuro, è il presente. Siamo il fulcro che trasforma una tecnologia complessa nella leva più potente dell'azienda, formando le persone e automatizzando i processi.",
    visionTitle: "La nostra visione",
    visionText: "Crediamo che gestire un'azienda debba essere effortless, grazie all'adozione dell'AI. Siamo il fulcro di quella trasformazione: sforzo minimo, sollevamento enorme.",
    approachTitle: "Il nostro approccio",
    approach: [
      { title: "Impatto verificabile", desc: "Ogni progetto ha KPI definiti. A fine percorso il report mostra cosa è cambiato: competenze, ore risparmiate, costi ridotti, processi automatizzati." },
      { title: "Esecuzione", desc: "Progettiamo e realizziamo. La stessa squadra che fa la proposta sviluppa l'agente e forma le persone." },
      { title: "Expertise verticale", desc: "Conosciamo modelli, piattaforme, limiti ed evoluzioni della tecnologia perché la usiamo ogni giorno." },
      { title: "Onestà", desc: "Se un progetto AI non ha senso, lo diciamo. Se un sistema legacy non è integrabile, lo diciamo. L'obiettivo è l'impatto reale." },
    ],
    techTitle: "Tecnologie e partner",
    techText: "Siamo model-agnostic e vendor-agnostic. Lavoriamo con i principali modelli e piattaforme AI: OpenAI, Anthropic, Google, Meta, Mistral, oltre a Microsoft Copilot, n8n e cloud Azure, AWS e Google Cloud.",
    ctaTitle: "Costruiamo insieme la tua trasformazione AI.",
    ctaText: "Contattaci.",
  },
};

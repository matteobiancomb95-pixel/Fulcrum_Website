export const ENTERPRISE = {
  it: {
    meta: {
      title: "Enterprise: Fulcrum Custom Agent su misura — Fulcrum",
      description:
        "Agenti e sistemi AI progettati sul tuo processo, quando il catalogo non basta. Integrazione, governance e formazione incluse. Prenota una call di scoping.",
    },
    hero: {
      eyebrow: "Enterprise",
      h1: "Fulcrum Custom Agent. AI sul tuo processo",
      lead: "Quando il processo non è nel catalogo, progettiamo, sviluppiamo e integriamo un agente su misura. Lo costruisce la stessa squadra che forma le tue persone.",
    },
    forme: {
      eyebrow: "Cosa costruiamo",
      heading: "Tre forme, un solo modo di lavorare",
      lead: "Il Fulcrum Custom Agent non è una categoria a parte: è lo stesso metodo del catalogo applicato a un processo che il catalogo non copre.",
      items: [
        { head: "Estensione di un agente", body: "Parti da un agente di catalogo e lo porti oltre il perimetro standard: un flusso in più, un sistema in più, regole di approvazione specifiche." },
        { head: "Agente su processo proprietario", body: "Il processo è tuo e non assomiglia a nessun altro. Lo mappiamo, lo scomponiamo e costruiamo l'agente sulle sue regole reali, non su un template." },
        { head: "Sistema di più agenti", body: "Più agenti coordinati su un flusso end-to-end che attraversa funzioni diverse, con passaggi di consegna espliciti e un punto di controllo umano per ogni passaggio critico." },
      ],
      note: "In tutte e tre le forme sono sempre inclusi: integrazione nei sistemi esistenti, governance (permessi, log, dati in Europa) e formazione delle persone che useranno il sistema.",
    },
    quandoServe: {
      eyebrow: "Il frame",
      heading: "Tre situazioni in cui il catalogo non basta",
      items: [
        { head: "Processo non coperto", body: "Il lavoro che pesa di più non è HR, finance, acquisti, contenuti, go-to-market, legal o formazione. È qualcosa che appartiene solo al tuo modello di business." },
        { head: "Flusso che attraversa più funzioni", body: "Ordine, fattura e incasso vivono in tre sistemi e in tre uffici. Automatizzare un pezzo sposta il collo di bottiglia, non lo elimina." },
        { head: "Vincoli specifici", body: "Sistemi legacy, installazioni on-premise, requisiti regolatori o di segregazione dei dati che richiedono un'architettura dedicata fin dal disegno." },
      ],
      note: "Se dopo l'assessment risulta che un agente di catalogo basta, te lo diciamo e passi da lì: costa meno e parte prima.",
      cta: { label: "Tutti gli agenti", href: "/ai-adoption" },
    },
    metodo: {
      eyebrow: "Il metodo",
      heading: "Lo stesso metodo, con vincoli enterprise",
      steps: [
        { n: "01", title: "Assessment", body: "Mappiamo processi, sistemi, dati e rischi del perimetro. L'esito è un documento scritto: cosa si automatizza, cosa resta alle persone, cosa non conviene toccare." },
        { n: "02", title: "Design", body: "Architettura del sistema, scelta dei modelli per caso d'uso, piano di integrazione, regole di governance e di approvazione. Qui si decide anche come si misura il risultato." },
        { n: "03", title: "Build", body: "Sviluppo iterativo su ambienti separati, test con gli utenti reali, verifica delle integrazioni sui sistemi esistenti prima di toccare la produzione." },
        { n: "04", title: "Adoption", body: "Rilascio, formazione delle persone, run e manutenzione con ruoli scritti: chi monitora, chi interviene, chi aggiorna quando cambia un processo o una norma." },
      ],
      note: "Nessuna durata dichiarata prima dell'assessment: dipende da quanti sistemi tocchi e da quanto sono accessibili i dati.",
    },
    governance: {
      eyebrow: "Governance",
      heading: "Chi possiede cosa, scritto prima di iniziare",
      items: [
        { head: "Dati", body: "Restano nei tuoi sistemi e sono trattati in Europa. Definiamo cosa l'agente legge, cosa scrive e con quali permessi, per ruolo e per ambiente." },
        { head: "Modelli", body: "Siamo vendor-agnostic: scegliamo il modello per caso d'uso tra i fornitori che usiamo, incluse opzioni open in cloud europeo o installazioni on-premise dove i vincoli lo richiedono." },
        { head: "Ownership", body: "Codice, configurazioni e prompt restano della tua azienda secondo le condizioni contrattuali. La documentazione tecnica viene consegnata con il sistema." },
        { head: "Run", body: "Tre opzioni: gestione affidata a Fulcrum, gestione del tuo team dopo la formazione, oppure modello misto con presidio condiviso. La scelta è tua e si può cambiare." },
      ],
    },
    esempi: {
      eyebrow: "Esempi",
      heading: "Che forma prende un sistema su misura",
      lead: "Sono esempi di architetture possibili, non casi cliente: oggi non pubblichiamo casi né numeri.",
      scenario: {
        title: "Dall'ordine all'incasso",
        today: [
          "L'ordine entra nel gestionale e la fattura viene emessa in amministrazione",
          "L'incasso si controlla a mano, quando qualcuno se ne ricorda",
          "Tre uffici, tre momenti, nessuna traccia unica del flusso",
        ],
        withAgent: [
          "Un agente di procurement e uno di amministrazione lavorano sullo stesso flusso",
          "L'ordine confermato genera il documento e la fattura viene preparata",
          "Le eccezioni arrivano a chi deve decidere, con la motivazione",
        ],
      },
      items: [
        { head: "Non conformità in produzione", body: "Un agente raccoglie segnalazioni, apre e traccia le non conformità e collega le evidenze ai sistemi di fabbrica. L'integrazione con MES e macchine è da valutare in assessment, caso per caso." },
        { head: "Ricerca documentale su archivi interni", body: "Un agente interroga archivi tecnici, contrattuali o di progetto con permessi per ruolo, cita sempre la fonte e registra ogni richiesta." },
        { head: "Estensione di Microsoft Copilot", body: "Se il tuo ambiente è già su Microsoft 365, aggiungiamo agenti che lavorano sui dati aziendali senza sostituire gli strumenti che le persone usano ogni giorno." },
      ],
    },
    trust: {
      eyebrow: "Sicurezza",
      heading: "Controlli che valgono anche in audit",
      note: "Ogni azione dell'agente viene registrata con utente, momento e dato toccato: il log è pensato per essere leggibile da chi fa audit, non solo da chi sviluppa. Sviluppo, test e produzione restano su ambienti separati, con dati di test che non espongono informazioni reali.",
    },
    faq: {
      eyebrow: "Obiezioni",
      heading: "Cinque domande dei CIO",
      items: [
        { q: "\"Chi lo mantiene?\"", a: "Decidi in fase di design: Fulcrum, il tuo team dopo la formazione, o un modello misto. Consegniamo codice, configurazioni e documentazione, così il presidio può cambiare senza rifare il sistema." },
        { q: "\"Siamo legati a un fornitore di modelli?\"", a: "No. L'architettura tiene separato il modello dal resto del sistema, così si può sostituire senza riscrivere le integrazioni. Il modello si sceglie per caso d'uso, non per abitudine." },
        { q: "\"Funziona con sistemi legacy?\"", a: "Dipende da cosa espone il sistema: API, database, file, code di messaggi. In assessment lo verifichiamo. Se non è integrabile in modo sostenibile, lo diciamo prima del preventivo." },
        { q: "\"Quanto dura un progetto?\"", a: "Dipende dal perimetro deciso in assessment: numero di sistemi, qualità dei dati, vincoli di ambiente. Non diamo durate prima di aver visto i tuoi sistemi." },
        { q: "\"Cosa succede ai dati?\"", a: "Restano nei tuoi sistemi, trattati in Europa, con permessi per ruolo e log di ogni accesso. L'uso dei dati per addestrare modelli è escluso dalle condizioni contrattuali." },
      ],
    },
    cta: {
      eyebrow: "Primo passo",
      heading: "Portaci il processo, non la tecnologia",
      body: "In call di scoping servono tre cose: il processo che pesa, i sistemi che tocca e i vincoli che non puoi superare.",
    },
  },

  en: {
    meta: {
      title: "Enterprise: Fulcrum Custom Agent — Fulcrum",
      description:
        "AI agents and systems designed on your process when the catalogue is not enough. Integration, governance and training included. Book a scoping call.",
    },
    hero: {
      eyebrow: "Enterprise",
      h1: "Fulcrum Custom Agent. AI on your process",
      lead: "When your process is not in the catalogue, we design, build and integrate an agent to spec. The same team that builds it trains your people.",
    },
    forme: {
      eyebrow: "What we build",
      heading: "Three forms, one way of working",
      lead: "Fulcrum Custom Agent is not a separate category. It is the same method as the catalogue, applied to a process the catalogue does not cover.",
      items: [
        { head: "Extension of a catalogue agent", body: "You start from a catalogue agent and take it past the standard scope: one more flow, one more system, your own approval rules." },
        { head: "Agent on a proprietary process", body: "The process is yours and looks like nobody else's. We map it, break it down and build the agent on its real rules, not on a template." },
        { head: "A system of several agents", body: "Several agents coordinated on an end-to-end flow across functions, with explicit handovers and a human control point at every critical step." },
      ],
      note: "All three always include integration with your existing systems, governance (permissions, logs, data in Europe) and training for the people who will use the system.",
    },
    quandoServe: {
      eyebrow: "The frame",
      heading: "Three cases the catalogue does not cover",
      items: [
        { head: "Process not covered", body: "The work that weighs most is not HR, finance, purchasing, content, go-to-market, legal or training. It belongs only to your business model." },
        { head: "A flow across functions", body: "Order, invoice and payment live in three systems and three offices. Automating one piece moves the bottleneck, it does not remove it." },
        { head: "Specific constraints", body: "Legacy systems, on-premise installations, regulatory or data segregation requirements that call for a dedicated architecture from the first design." },
      ],
      note: "If the assessment shows that a catalogue agent is enough, we tell you and you start there: it costs less and goes live sooner.",
      cta: { label: "All agents", href: "/ai-adoption" },
    },
    metodo: {
      eyebrow: "The method",
      heading: "The same method, with enterprise constraints",
      steps: [
        { n: "01", title: "Assessment", body: "We map processes, systems, data and risks in scope. The output is written: what gets automated, what stays with people, what is not worth touching." },
        { n: "02", title: "Design", body: "System architecture, model choice per use case, integration plan, governance and approval rules. How the result is measured is decided here too." },
        { n: "03", title: "Build", body: "Iterative development on separate environments, tests with real users, integrations verified against your systems before production is touched." },
        { n: "04", title: "Adoption", body: "Go-live, training, run and maintenance with written roles: who monitors, who intervenes, who updates when a process or a rule changes." },
      ],
      note: "No duration is stated before the assessment: it depends on how many systems you touch and how accessible your data is.",
    },
    governance: {
      eyebrow: "Governance",
      heading: "Who owns what, written before we start",
      items: [
        { head: "Data", body: "It stays in your systems and is processed in Europe. We define what the agent reads, what it writes and with which permissions, per role and per environment." },
        { head: "Models", body: "We are vendor-agnostic: the model is chosen per use case among the providers we use, including open options in European cloud or on-premise where constraints require it." },
        { head: "Ownership", body: "Code, configurations and prompts belong to your company under the terms of the contract. Technical documentation is delivered with the system." },
        { head: "Run", body: "Three options: run by Fulcrum, run by your team after training, or a mixed model with shared oversight. The choice is yours and it can change." },
      ],
    },
    esempi: {
      eyebrow: "Examples",
      heading: "What a system to spec looks like",
      lead: "These are examples of possible architectures, not client cases: we publish no cases and no numbers today.",
      scenario: {
        title: "From order to payment",
        today: [
          "The order enters the ERP and the invoice is issued by finance",
          "The payment is checked by hand, when someone remembers",
          "Three offices, three moments, no single trace of the flow",
        ],
        withAgent: [
          "A procurement agent and a finance agent work on the same flow",
          "The confirmed order generates the document and the invoice is prepared",
          "Exceptions reach whoever has to decide, with the reason attached",
        ],
      },
      items: [
        { head: "Non-conformities in production", body: "An agent collects reports, opens and tracks non-conformities and links evidence to plant systems. Integration with MES and machines is assessed case by case." },
        { head: "Document search on internal archives", body: "An agent queries technical, contractual or project archives with permissions per role, always cites the source and logs every request." },
        { head: "Extending Microsoft Copilot", body: "If your environment already runs on Microsoft 365, we add agents that work on company data without replacing the tools people use every day." },
      ],
    },
    trust: {
      eyebrow: "Security",
      heading: "Controls that hold up in an audit",
      note: "Every agent action is recorded with user, time and data touched: the log is meant to be read by auditors, not only by developers. Development, test and production stay on separate environments, with test data that exposes no real information.",
    },
    faq: {
      eyebrow: "Objections",
      heading: "Five questions CIOs ask",
      items: [
        { q: "\"Who maintains it?\"", a: "You decide during design: Fulcrum, your team after training, or a mixed model. We hand over code, configurations and documentation, so oversight can change without rebuilding the system." },
        { q: "\"Are we locked to one model provider?\"", a: "No. The architecture keeps the model separate from the rest of the system, so it can be replaced without rewriting the integrations. The model is chosen per use case." },
        { q: "\"Does it work with legacy systems?\"", a: "It depends on what the system exposes: APIs, database, files, message queues. We check in the assessment. If it cannot be integrated sustainably, we say so before the quote." },
        { q: "\"How long does a project take?\"", a: "It depends on the scope agreed in the assessment: number of systems, data quality, environment constraints. We give no durations before seeing your systems." },
        { q: "\"What happens to our data?\"", a: "It stays in your systems, processed in Europe, with permissions per role and every access logged. Using your data to train models is excluded by contract." },
      ],
    },
    cta: {
      eyebrow: "First step",
      heading: "Bring the process, not the technology",
      body: "A scoping call needs three things: the process that weighs, the systems it touches and the constraints you cannot move.",
    },
  },
};

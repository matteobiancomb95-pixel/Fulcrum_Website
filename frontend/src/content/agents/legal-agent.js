export default {
  it: {
    meta: {
      title: "Fulcrum Legal Agent — ricerca documentale con fonte citata",
      description:
        "L'agente AI che cerca nei contratti, nelle policy e nella normativa e risponde citando la fonte. Progettato per ridurre le allucinazioni.",
    },
    hero: {
      h1: "Fulcrum Legal Agent",
      lead: "Cerca nei documenti del team legale e risponde citando la fonte, progettato per ridurre le allucinazioni degli LLM generici. Lavora solo sugli archivi che autorizzi: ogni output è una bozza per un legale, non un parere.",
    },
    problema: {
      heading: "La risposta esiste già, ma va trovata",
      lead: "Il lavoro legale interno è fatto in buona parte di ricerca. I documenti ci sono: sono sparsi tra archivi, cartelle condivise e banche dati.",
      blocks: [
        { head: "Ricerca dispersa", body: "Contratti, policy, normativa e giurisprudenza stanno in posti diversi. Trovare la clausola giusta richiede memoria personale più che uno strumento." },
        { head: "Revisione clausola per clausola", body: "Ogni contratto in arrivo si confronta a mano con il template aziendale. Le differenze si segnano in un file e si spiegano di nuovo al business." },
        { head: "Scadenze e domande ricorrenti", body: "Rinnovi, obblighi e termini restano dentro i contratti finché qualcuno non li estrae. Intanto i colleghi chiedono al legale le stesse cose ogni settimana." },
      ],
    },
    capacita: {
      heading: "Sei attività a supporto del team legale",
      lead: "Il Fulcrum Legal Agent assiste, non decide. Prepara, cerca e segnala; la valutazione giuridica resta al professionista.",
      items: [
        { head: "Ricerca documentale con citazione della fonte", body: "Risponde alla domanda indicando il documento, la clausola e il punto esatto da cui arriva la risposta. Senza fonte non produce un'affermazione." },
        { head: "Revisione clausole e confronto con template", body: "Confronta il contratto in arrivo con il tuo template e le tue posizioni negoziali. Evidenzia differenze e clausole mancanti, in una bozza da rivedere." },
        { head: "Estrazione di scadenze e obblighi", body: "Legge contratti e polizze ed estrae termini, rinnovi taciti, obblighi di preavviso e limiti di responsabilità, con il riferimento al testo." },
        { head: "Monitoraggio normativo di settore", body: "Segue le fonti che indichi e segnala le novità che riguardano i tuoi contratti e le tue policy, con il collegamento al testo ufficiale." },
        { head: "Supporto alla documentazione di compliance", body: "Prepara bozze e raccolte di evidenze per registri, informative e documentazione GDPR e AI Act, partendo dai documenti aziendali." },
        { head: "Dire \"non lo so\"", body: "Quando nei documenti autorizzati non c'è una risposta sostenibile, l'agente lo dichiara e passa la domanda a una persona. È un comportamento progettato, non un limite." },
      ],
    },
    integrazione: {
      heading: "Dentro i sistemi che usi già",
      blocks: [
        { head: "Sistemi", body: "Document management e archivi aziendali, tipo SharePoint o Drive. Archivi contratti, polizze e delibere. Banche dati giuridiche in abbonamento del cliente. Email e cartelle di pratica." },
        { head: "Dati e approccio anti-allucinazione", body: "L'agente risponde solo sui documenti che gli autorizzi. Recupera i passaggi pertinenti, cita obbligatoriamente la fonte e registra ogni risposta. Non genera riferimenti normativi che non trova nelle fonti indicizzate." },
        { head: "Human-in-the-loop", body: "Una persona approva prima che l'output diventi definitivo. Ogni risposta è una bozza di lavoro per un legale, che verifica la fonte e decide." },
        { head: "Governance", body: "Log di ogni domanda, dei documenti consultati e della risposta data. Permessi per ruolo e per pratica: chi non può vedere un fascicolo non lo trova nemmeno tramite l'agente." },
      ],
    },
    cosaCambia: {
      heading: "Una due diligence contrattuale, prima e dopo",
      lead: "È uno scenario costruito su un processo ricorrente, non un caso cliente. Nessun numero: i tempi si misurano sul tuo archivio in assessment.",
      scenarios: [
        {
          title: "Archivio polizze in una compagnia assicurativa",
          today: [
            "Il team apre i fascicoli uno a uno e cerca massimali, esclusioni e clausole di recesso",
            "Riporta tutto in un foglio",
            "Rilegge i casi dubbi a fine giornata",
          ],
          withAgent: [
            "L'agente estrae le voci richieste da ogni polizza con il rimando al punto del testo",
            "Segnala i documenti in cui la clausola manca o è ambigua",
            "Il legale verifica le fonti e conclude",
          ],
        },
      ],
      kpi: [
        "Tempo di ricerca per quesito interno",
        "Tempo di revisione per contratto standard",
        "Quota di risposte con fonte verificabile",
        "Scadenze contrattuali intercettate prima del termine",
      ],
    },
    perChi: {
      heading: "Per chi lavora su contratti e norme",
      lead: "L'agente serve dove l'archivio è grande, le domande si ripetono e ogni risposta deve poter essere verificata su un documento.",
      funzioni: ["General counsel e ufficio legale interno", "Compliance e risk", "Studi professionali", "DPO e privacy"],
      settori: ["Financial Services", "Healthcare & Pharma", "Utilities & Energy", "Manifatturiero con contrattualistica complessa"],
      dimensione: "PMI dai 50 dipendenti e mid-market fino a 1000, con archivio contrattuale strutturato.",
      whenNot: "Se l'archivio non esiste in formato digitale, il primo lavoro è digitalizzarlo, non installare un agente. Te lo diciamo prima.",
    },
    sicurezza: {
      heading: "Riservatezza e segreto professionale",
      note: "I documenti restano segregati per cliente e per pratica, con permessi per ruolo. L'elaborazione avviene in Europa e ogni consultazione è tracciata. I tuoi documenti non vengono usati per addestrare modelli.",
    },
    faq: {
      heading: "Domande che ci fanno prima della demo",
      items: [
        { q: "Dà pareri legali?", a: "No. L'agente assiste il team legale: cerca, estrae, confronta e prepara bozze con la fonte citata. La valutazione giuridica e il parere restano al professionista abilitato. Il sito e la demo non sostituiscono in alcun modo una consulenza legale." },
        { q: "Come evita le allucinazioni?", a: "È progettato per ridurle, non per eliminarle. Risponde solo sui documenti autorizzati, cita sempre la fonte e dichiara quando non trova una risposta sostenibile. La verifica della fonte resta un passaggio del tuo processo, non un optional." },
        { q: "Chi risponde di un errore?", a: "Chi firma. L'output è una bozza di lavoro con i riferimenti in chiaro, pensata per essere verificata rapidamente. Il log di ogni risposta permette di ricostruire quali documenti sono stati consultati e quando." },
        { q: "Dove stanno i nostri documenti?", a: "Dove stanno oggi. L'agente li consulta nei tuoi archivi con i permessi che gli assegni; l'elaborazione avviene in Europa. La segregazione è per cliente e per pratica e ogni accesso è registrato." },
        { q: "Funziona con le nostre banche dati giuridiche?", a: "Solo se l'abbonamento lo consente. Verifichiamo licenze e condizioni d'uso in assessment, prima di collegare qualunque fonte esterna. Dove non è possibile, l'agente lavora sull'archivio interno." },
        { q: "Lo facciamo già con ChatGPT. Che differenza c'è?", a: "Una chat generica risponde con la memoria del modello e può inventare un riferimento. Il Fulcrum Legal Agent risponde solo sui tuoi documenti, cita il punto esatto, registra la richiesta e dichiara quando non sa." },
        { q: "Quanto costa e chi lo mantiene?", a: "Il preventivo arriva dopo l'assessment, sul perimetro concordato. La manutenzione, compreso l'aggiornamento delle fonti indicizzate, resta alla stessa squadra che costruisce l'agente." },
      ],
    },
    cta: {
      heading: "Vediamo l'agente sul tuo archivio",
      body: "In demo partiamo da un tuo caso reale: una revisione contrattuale o una ricerca che oggi porta via una giornata.",
    },
  },

  en: {
    meta: {
      title: "Fulcrum Legal Agent — document search with sources",
      description:
        "The AI agent that searches your contracts, policies and regulations and answers with the source cited. Designed to reduce hallucinations.",
    },
    hero: {
      h1: "Fulcrum Legal Agent",
      lead: "Searches your legal archives and answers with the source cited, designed to reduce hallucinations from generic LLMs. It works only on the archives you authorise: every output is a draft for a lawyer, not an opinion.",
    },
    problema: {
      heading: "The answer exists, but someone must find it",
      lead: "In-house legal work is largely search. The documents are there: scattered across archives, shared folders and subscription databases.",
      blocks: [
        { head: "Search spread everywhere", body: "Contracts, policies, regulations and case law live in different places. Finding the right clause relies on personal memory more than on a tool." },
        { head: "Clause-by-clause review", body: "Every incoming contract is compared by hand with the company template. Differences go into a file and get explained to the business again." },
        { head: "Deadlines and repeat questions", body: "Renewals, obligations and notice periods stay buried in contracts until someone extracts them. Meanwhile colleagues ask legal the same things every week." },
      ],
    },
    capacita: {
      heading: "Six ways it supports the legal team",
      lead: "The Fulcrum Legal Agent assists, it doesn't decide. It searches, prepares and flags; legal judgement stays with the professional.",
      items: [
        { head: "Document search with the source cited", body: "Answers the question pointing to the document, the clause and the exact passage the answer comes from. Without a source, it makes no claim." },
        { head: "Clause review against your template", body: "Compares the incoming contract with your template and negotiating positions. Highlights differences and missing clauses in a draft for review." },
        { head: "Extracting deadlines and obligations", body: "Reads contracts and policies and extracts terms, automatic renewals, notice obligations and liability caps, each with a reference to the text." },
        { head: "Regulatory monitoring", body: "Follows the sources you specify and flags changes affecting your contracts and policies, with a link to the official text." },
        { head: "Compliance documentation support", body: "Prepares drafts and evidence sets for registers, notices and GDPR or AI Act documentation, starting from your own company documents." },
        { head: "Saying \"I don't know\"", body: "When the authorised documents don't support an answer, the agent says so and passes the question to a person. That's designed behaviour, not a limitation." },
      ],
    },
    integrazione: {
      heading: "Inside the systems you already use",
      blocks: [
        { head: "Systems", body: "Document management and company archives, such as SharePoint or Drive. Contract, policy and resolution repositories. Your own subscription legal databases. Email and matter folders." },
        { head: "Data and the anti-hallucination approach", body: "The agent answers only on documents you authorise. It retrieves the relevant passages, cites the source every time and logs every answer. It doesn't generate references it can't find in the indexed sources." },
        { head: "Human-in-the-loop", body: "Human-in-the-loop means a person approves before an output becomes final. Every answer is a working draft for a lawyer, who checks the source and decides." },
        { head: "Governance", body: "A log of every question, the documents consulted and the answer given. Permissions by role and by matter: if you can't see a file, the agent won't surface it." },
      ],
    },
    cosaCambia: {
      heading: "Contract due diligence, before and after",
      lead: "A typical scenario built on a recurring process, not a client case. No figures: times are measured on your archive during the assessment.",
      scenarios: [
        {
          title: "Policy archive at an insurance company",
          today: [
            "The team opens each file one by one and looks for limits, exclusions and termination clauses",
            "Everything is copied into a spreadsheet",
            "Doubtful cases are reread at the end of the day",
          ],
          withAgent: [
            "The agent extracts the requested items from each policy with a pointer to the passage",
            "It flags documents where the clause is missing or ambiguous",
            "The lawyer verifies the sources and concludes",
          ],
        },
      ],
      kpi: [
        "Search time per internal question",
        "Review time per standard contract",
        "Share of answers with a verifiable source",
        "Contract deadlines caught before the term",
      ],
    },
    perChi: {
      heading: "For teams working on contracts and rules",
      lead: "The agent fits where the archive is large, questions repeat and every answer must be verifiable against a document.",
      funzioni: ["General counsel and in-house legal", "Compliance and risk", "Professional firms", "DPO and privacy"],
      settori: ["Financial Services", "Healthcare & Pharma", "Utilities & Energy", "Manufacturing with complex contracting"],
      dimensione: "Companies from 50 to 1,000 employees with a structured contract archive.",
      whenNot: "If your archive isn't digital, the first job is digitising it, not installing an agent. We'll say so upfront.",
    },
    sicurezza: {
      heading: "Confidentiality and professional privilege",
      note: "Documents stay segregated by client and by matter, with role-based permissions. Processing happens in Europe and every consultation is logged. Your documents are not used to train models.",
    },
    faq: {
      heading: "Questions we get before the demo",
      items: [
        { q: "Does it give legal advice?", a: "No. The agent assists the legal team: it searches, extracts, compares and prepares drafts with the source cited. Legal judgement and formal opinions stay with the qualified professional. Neither this page nor the demo replaces legal advice." },
        { q: "How does it avoid hallucinations?", a: "It's designed to reduce them, not to eliminate them. It answers only on authorised documents, always cites the source and states when it can't support an answer. Verifying the source stays a step in your process, not an option." },
        { q: "Who is liable for a mistake?", a: "Whoever signs. The output is a working draft with references in plain sight, built to be verified quickly. The log of each answer shows which documents were consulted and when." },
        { q: "Where do our documents live?", a: "Where they live today. The agent consults them in your archives with the permissions you assign; processing happens in Europe. Segregation is by client and matter, and every access is logged." },
        { q: "Does it work with our legal databases?", a: "Only if your subscription allows it. We check licences and terms of use in the assessment, before connecting any external source. Where it isn't possible, the agent works on your internal archive." },
        { q: "We already do this with ChatGPT. What's different?", a: "A generic chat answers from the model's memory and can invent a citation. The Fulcrum Legal Agent answers only on your documents, points to the exact passage, logs the request and says when it doesn't know." },
        { q: "What does it cost, and who maintains it?", a: "The quote comes after the assessment, on the agreed scope. Maintenance, including updates to the indexed sources, stays with the same team that builds the agent." },
      ],
    },
    cta: {
      heading: "See the agent on your own archive",
      body: "In the demo we start from one of your real cases: a contract review or a search that costs a full day today.",
    },
  },
};

export default {
  it: {
    meta: {
      title: "Fulcrum HR & Payroll Agent — ciclo di vita del dipendente",
      description:
        "L'agente AI che automatizza il lavoro operativo su selezione, assunzione, presenze, cedolini e uscita, con validazione umana sugli adempimenti.",
    },
    hero: {
      h1: "Fulcrum HR & Payroll Agent",
      lead: "Automatizza le attività operative del ciclo di vita del dipendente, dallo screening all'uscita, con validazione umana sugli adempimenti. Lavora nei tuoi sistemi di paghe e presenze: ciò che la legge riserva a un professionista abilitato passa sempre da una persona.",
    },
    problema: {
      heading: "Il personale si gestisce a mano",
      lead: "In una PMI senza funzione HR strutturata il lavoro sulle persone si divide tra amministrazione, titolare e consulente esterno. Ripetitivo da fare, costoso da sbagliare.",
      blocks: [
        { head: "Selezione senza filtro", body: "I CV arrivano da portali, email e LinkedIn. Qualcuno li legge tutti, scrive ai candidati e incastra i colloqui a mano, tra un'urgenza e l'altra." },
        { head: "Assunzioni ricostruite ogni volta", body: "Documenti da raccogliere, inquadramento CCNL da verificare, proposta economica da calcolare. Ogni assunzione riparte da un file salvato l'ultima volta." },
        { head: "Il ciclo mensile rincorso", body: "Presenze, permessi, note spese e variabili si raccolgono per email. I dati per i cedolini partono in ritardo e le scadenze si controllano a memoria." },
      ],
    },
    capacita: {
      heading: "Sei attività che l'agente svolge ogni giorno",
      lead: "Il Fulcrum HR & Payroll Agent lavora sui tuoi dati di personale, presenze e paghe. Per ogni attività è dichiarato cosa fa l'agente e cosa resta alla persona.",
      items: [
        { head: "Screening CV e talent acquisition", body: "Raccoglie le candidature, le confronta con i requisiti della posizione e prepara una lista motivata. Chi passa al colloquio lo decidi tu." },
        { head: "Inquadramento CCNL e proposta economica", body: "Prepara la bozza di inquadramento sul CCNL applicato e il calcolo della proposta economica, con le voci esplicitate. Un professionista abilitato valida prima della firma." },
        { head: "Adempimenti e cedolini con validazione umana", body: "Raccoglie presenze, permessi e variabili, controlla la coerenza e prepara i dati per il ciclo paghe. L'elaborazione e l'invio restano al professionista abilitato." },
        { head: "Onboarding amministrativo", body: "Richiede i documenti al nuovo assunto, verifica cosa manca, apre le pratiche interne e prepara il kit di ingresso. Tu firmi, l'agente rincorre." },
        { head: "Gestione dell'uscita", body: "Prepara la checklist di uscita per dimissioni o cessazione: documenti, restituzione beni, dati per il conguaglio. Le decisioni e gli atti restano a te e al professionista." },
        { head: "Risposte ai dipendenti", body: "Risponde alle domande ricorrenti su ferie, permessi, policy e cedolino, citando il documento aziendale. Se la risposta non c'è, gira la richiesta a una persona." },
      ],
    },
    integrazione: {
      heading: "Dentro i sistemi che usi già",
      blocks: [
        { head: "Sistemi", body: "Software paghe e rilevazione presenze diffusi in Italia. ATS o LinkedIn per il recruiting. Gestionale HR, email e cartelle documentali. I portali istituzionali restano operati dal professionista abilitato." },
        { head: "Dati", body: "L'agente legge anagrafiche, contratti, presenze, assenze e voci variabili. Scrive proposte, bozze e pratiche dove gli dai il permesso. I dati del personale restano nei tuoi sistemi." },
        { head: "Human-in-the-loop", body: "Una persona approva prima che l'azione diventi definitiva. Ogni adempimento che la legge riserva a professionisti abilitati passa dal consulente del lavoro, interno o esterno: l'agente prepara, controlla e segnala." },
        { head: "Governance", body: "Ogni accesso a un dato del personale lascia un log. Permessi per ruolo: chi gestisce la selezione non vede le retribuzioni. La manutenzione resta alla stessa squadra che ha costruito l'agente." },
      ],
    },
    cosaCambia: {
      heading: "Un ciclo paghe mensile, prima e dopo",
      lead: "È uno scenario costruito su un processo ricorrente, non un caso cliente. I 120 dipendenti sono un'ipotesi dello scenario, non un dato Fulcrum.",
      scenarios: [
        {
          title: "Ciclo paghe in una PMI manifatturiera (ipotesi: 120 dipendenti)",
          today: [
            "L'amministrazione scarica le timbrature e insegue i responsabili per permessi e straordinari",
            "Le variabili si ricopiano in un foglio e si inviano al consulente a ridosso della scadenza",
            "Le anomalie emergono dopo l'elaborazione",
          ],
          withAgent: [
            "L'agente raccoglie presenze e variabili dai sistemi",
            "Segnala incongruenze e assenze non giustificate prima della chiusura",
            "Prepara il file per il ciclo paghe: l'amministrazione verifica, il professionista abilitato elabora e invia",
          ],
        },
      ],
      kpi: [
        "Tempo di preparazione del ciclo paghe",
        "Tempo di screening per posizione aperta",
        "Scadenze rispettate e rilavorazioni dopo l'elaborazione",
        "Tempo di onboarding amministrativo di un nuovo assunto",
      ],
    },
    perChi: {
      heading: "Per chi gestisce persone e paghe",
      lead: "L'agente serve dove il lavoro sul personale è continuo ma la struttura HR è leggera, e il carico amministrativo pesa su poche persone.",
      funzioni: ["HR manager e responsabile del personale", "Amministrazione del personale e payroll", "Imprenditore o direzione generale di PMI", "Responsabili di funzione che assumono"],
      settori: ["Manifatturiero", "Consumer Goods & Retail", "Professional Services"],
      dimensione: "PMI dai 50 dipendenti e mid-market fino a 1000, anche senza funzione HR strutturata.",
      whenNot: "Se la gestione del personale è interamente esternalizzata e non vuoi internalizzare nulla, non c'è processo da automatizzare e te lo diciamo.",
    },
    sicurezza: {
      heading: "I dati del personale sono i più delicati che hai",
      note: "Retribuzioni, certificati e motivi di assenza sono dati personali e in parte categorie particolari. L'agente vede solo i dati necessari all'attività richiesta, con permessi per ruolo e minimizzazione. Ogni accesso è registrato e la valutazione privacy (DPIA) è prevista nel progetto.",
    },
    faq: {
      heading: "Domande che ci fanno prima della demo",
      items: [
        { q: "Sostituisce il consulente del lavoro?", a: "No. L'agente automatizza il lavoro operativo: raccolta dati, controlli, preparazione delle pratiche. Gli adempimenti che la legge riserva a professionisti abilitati restano al consulente del lavoro, interno o esterno, che valida e firma. La responsabilità professionale non si delega a un software." },
        { q: "Copre il nostro CCNL?", a: "L'agente lavora sul CCNL che applichi, caricato con i tuoi accordi integrativi e le prassi aziendali. In assessment verifichiamo quali istituti sono automatizzabili e quali richiedono sempre una valutazione umana." },
        { q: "Cosa succede quando cambia il CCNL o una norma?", a: "L'aggiornamento delle regole fa parte della manutenzione, insieme alla verifica del professionista che segue l'azienda. L'agente non deduce le norme da solo: usa le fonti e le configurazioni che gli diamo, e segnala quando una regola non è più applicabile." },
        { q: "Come tratta i dati dei dipendenti?", a: "Con permessi per ruolo, minimizzazione e log di ogni accesso. I dati restano nei tuoi sistemi e l'elaborazione avviene in Europa. Il progetto è impostato per la conformità al GDPR e include la valutazione privacy (DPIA)." },
        { q: "Si integra con il nostro software paghe?", a: "Dipende da come apre i dati. Se il software espone API o export strutturati, l'agente ci lavora. In assessment verifichiamo lettura e scrittura su presenze, anagrafiche e variabili prima di qualunque preventivo." },
        { q: "E le persone del team HR?", a: "Restano, con meno lavoro di trascrizione. L'agente toglie la raccolta dati e i controlli ripetitivi; colloqui, valutazioni, relazioni sindacali e decisioni sulle persone restano a chi le fa oggi. La formazione all'uso è parte del progetto." },
        { q: "Cosa serve per iniziare e quanto costa?", a: "Serve una call. Poi un assessment su processi, dati e sistemi, che dice dove l'agente genera valore e dove no. Il preventivo arriva dopo l'assessment, sul perimetro concordato." },
      ],
    },
    cta: {
      heading: "Vediamo l'agente sul tuo ciclo paghe",
      body: "In demo partiamo da un tuo processo reale: una posizione da coprire o la chiusura del mese.",
    },
  },

  en: {
    meta: {
      title: "Fulcrum HR & Payroll Agent — employee lifecycle",
      description:
        "The AI agent that automates operational work across hiring, attendance, payslips and exit, with human validation on statutory filings.",
    },
    hero: {
      h1: "Fulcrum HR & Payroll Agent",
      lead: "Automates the operational work across the employee lifecycle, from screening to exit, with human validation on statutory filings. It works inside your payroll and attendance systems: anything the law reserves to a licensed professional always goes through a person.",
    },
    problema: {
      heading: "People admin still runs by hand",
      lead: "In a company without a structured HR function, people work is split between admin, the owner and an external advisor. Repetitive to do, expensive to get wrong.",
      blocks: [
        { head: "Screening with no filter", body: "CVs arrive from job boards, email and LinkedIn. Someone reads them all, replies to candidates and books interviews manually, between one urgency and the next." },
        { head: "Every hire rebuilt from scratch", body: "Documents to collect, CCNL (Italian national labour contracts) grading to check, an offer to calculate. Each hire restarts from a file saved last time." },
        { head: "The monthly cycle chased", body: "Attendance, leave, expenses and variable items are collected by email. Payroll data leaves late and deadlines are tracked from memory." },
      ],
    },
    capacita: {
      heading: "Six things the agent does every day",
      lead: "The Fulcrum HR & Payroll Agent works on your people, attendance and payroll data. For each task, what the agent does and what stays with a person is stated.",
      items: [
        { head: "CV screening and talent acquisition", body: "Collects applications, compares them with the role requirements and prepares a shortlist with reasons. You decide who moves to interview." },
        { head: "CCNL grading and offer preparation", body: "Drafts the grading under the national contract you apply and the offer calculation, with every item shown. A licensed professional validates before signing." },
        { head: "Compliance tasks and payslips, human-validated", body: "Collects attendance, leave and variable items, checks consistency and prepares the payroll input. Processing and filing stay with the licensed professional." },
        { head: "Administrative onboarding", body: "Requests documents from the new hire, flags what's missing, opens internal records and prepares the starter pack. You sign, the agent chases." },
        { head: "Exit management", body: "Prepares the exit checklist for resignation or termination: documents, asset return, data for the final settlement. Decisions and formal acts stay with you and your advisor." },
        { head: "Answers for employees", body: "Answers recurring questions on leave, policies and payslips, citing the internal document. When there's no answer, it hands the request to a person." },
      ],
    },
    integrazione: {
      heading: "Inside the systems you already use",
      blocks: [
        { head: "Systems", body: "Payroll and time-tracking software used in Italy. ATS or LinkedIn for recruiting. HR system, email and document folders. Government portals stay operated by the licensed professional." },
        { head: "Data", body: "The agent reads employee records, contracts, attendance, absences and variable items. It writes drafts and records only where you grant permission. Your people data stays in your systems." },
        { head: "Human-in-the-loop", body: "Human-in-the-loop means a person approves before an action becomes final. Every filing the law reserves to licensed professionals goes through your labour consultant, internal or external. The agent prepares, checks and flags." },
        { head: "Governance", body: "Every access to people data leaves a log. Role-based permissions: whoever runs recruiting doesn't see pay data. Maintenance stays with the same team that built the agent." },
      ],
    },
    cosaCambia: {
      heading: "A monthly payroll cycle, before and after",
      lead: "A typical scenario built on a recurring process, not a client case. The 120 employees are an assumption of the scenario, not a Fulcrum figure.",
      scenarios: [
        {
          title: "Payroll cycle in a manufacturing SME (assumption: 120 employees)",
          today: [
            "Admin exports clockings and chases managers for leave and overtime",
            "Variable items are retyped into a spreadsheet and sent to the consultant close to the deadline",
            "Anomalies surface after processing",
          ],
          withAgent: [
            "The agent collects attendance and variable items from your systems",
            "It flags inconsistencies and unjustified absences before closing",
            "It prepares the payroll file: admin verifies, the licensed professional processes and files",
          ],
        },
      ],
      kpi: [
        "Time to prepare the payroll cycle",
        "Screening time per open role",
        "Deadlines met and rework after processing",
        "Administrative onboarding time for a new hire",
      ],
    },
    perChi: {
      heading: "For teams running people and payroll",
      lead: "The agent fits where people work is constant, the HR structure is light and the admin load sits on very few people.",
      funzioni: ["HR manager and people lead", "Payroll and HR administration", "Owner or general management", "Hiring managers"],
      settori: ["Manufacturing", "Consumer Goods & Retail", "Professional Services"],
      dimensione: "Companies from 50 to 1,000 employees, including those without a structured HR function.",
      whenNot: "If people admin is fully outsourced and you don't want to bring anything back in-house, there's no process to automate. We'll say so.",
    },
    sicurezza: {
      heading: "People data is the most sensitive you hold",
      note: "Pay, certificates and absence reasons are personal data, partly special categories. The agent only sees the data a given task requires, with role-based permissions and minimisation. Every access is logged and a privacy assessment (DPIA) is part of the project.",
    },
    faq: {
      heading: "Questions we get before the demo",
      items: [
        { q: "Does it replace our labour consultant?", a: "No. The agent automates operational work: data collection, checks, preparing records. Filings the law reserves to licensed professionals stay with your labour consultant, internal or external, who validates and signs. Professional liability can't be delegated to software." },
        { q: "Does it cover our national labour contract?", a: "The agent works on the CCNL you apply, loaded with your company agreements and practices. In the assessment we check which items can be automated and which always need human judgement." },
        { q: "What happens when the contract or a rule changes?", a: "Updating the rules is part of maintenance, together with the check by the professional who follows your company. The agent doesn't infer law on its own: it uses the sources and configurations we give it, and flags rules that no longer apply." },
        { q: "How does it handle employee data?", a: "With role-based permissions, minimisation and a log of every access. Data stays in your systems and processing happens in Europe. The project is set up for GDPR compliance and includes a privacy assessment (DPIA)." },
        { q: "Does it integrate with our payroll software?", a: "It depends on how that software exposes data. If it offers APIs or structured exports, the agent works with it. In the assessment we verify read and write access on attendance, records and variable items before any quote." },
        { q: "What about our HR people?", a: "They stay, with less retyping. The agent removes data collection and repetitive checks; interviews, reviews, employee relations and decisions about people stay with whoever makes them today. Training on the tool is part of the project." },
        { q: "What does it take to start, and what does it cost?", a: "It starts with a call. Then an assessment on processes, data and systems that says where the agent creates value and where it doesn't. The quote comes after the assessment, on the agreed scope." },
      ],
    },
    cta: {
      heading: "See the agent on your payroll cycle",
      body: "In the demo we start from one of your real processes: an open role or a month-end close.",
    },
  },
};

export default {
  it: {
    meta: {
      title: "Fulcrum Training Agent — formazione e onboarding AI",
      description:
        "LLM su misura per formazione, upskilling e onboarding, costruito sulla documentazione della tua azienda. Percorsi per ruolo erogati con la squadra Fulcrum.",
    },
    hero: {
      h1: "Fulcrum Training Agent",
      lead: "LLM su misura per formazione, upskilling e onboarding, costruito sulla documentazione della tua azienda. Risponde alle persone sui processi reali; i percorsi li progettiamo e li eroghiamo con te.",
    },
    problema: {
      heading: "La conoscenza dell'azienda non è a disposizione",
      lead: "Le procedure esistono, ma vivono in cartelle, teste e chat. Chi entra impara chiedendo; chi sa fare viene interrotto tutto il giorno.",
      blocks: [
        { head: "Onboarding a voce", body: "Il nuovo assunto impara affiancando qualcuno che ha già il proprio lavoro da fare. Ogni inserimento dipende da chi capita ad accompagnarlo." },
        { head: "Domande ripetitive ai colleghi", body: "Le stesse domande su procedure, policy e sistemi tornano ogni settimana. Le risposte restano in una chat privata e si perdono." },
        { head: "Formazione AI generica", body: "Webinar e corsi standard spiegano gli strumenti in astratto. Il lunedì nessuno sa applicarli al proprio processo, e i materiali invecchiano senza che nessuno se ne accorga." },
      ],
    },
    capacita: {
      heading: "Cosa fa l'agente e cosa restiamo a fare noi",
      lead: "Il Fulcrum Training Agent lavora sulla documentazione che la tua azienda ha già validato. I percorsi executive e i laboratori li tengono le persone di Fulcrum.",
      items: [
        { head: "Guida l'onboarding sulla documentazione aziendale", body: "Accompagna il nuovo assunto sulle procedure del suo ruolo, giorno per giorno, citando il documento da cui prende la risposta." },
        { head: "Risponde su procedure e policy interne", body: "Risolve le domande ricorrenti su processi, sistemi e regole d'uso. Quando la fonte non esiste, lo dice e segnala il vuoto a chi cura i contenuti." },
        { head: "Eroga percorsi di upskilling per funzione, con verifica", body: "Propone esercizi sui casi reali della funzione e verifica la comprensione. Il responsabile vede chi ha completato cosa." },
        { head: "Abilita i quattro percorsi che progettiamo con te", body: "AI Leadership per board e management; AI Upskilling come laboratori per funzione; AI Policy, dove l'agente aiuta a redigere le regole d'uso e poi le rende consultabili; AI Champion, per formare i referenti interni." },
        { head: "Tiene aggiornati i materiali", body: "Quando una procedura cambia, l'agente aggiorna i contenuti collegati e segnala cosa è rimasto indietro. La validazione resta a chi possiede il processo." },
        { head: "Mostra cosa è stato appreso", body: "Traccia completamenti, domande frequenti e argomenti in cui le persone si bloccano. HR e manager di funzione leggono dove serve intervenire." },
      ],
    },
    integrazione: {
      heading: "Dove vive l'agente e chi lo governa",
      blocks: [
        { head: "Sistemi", body: "LMS, intranet e documentale, sistema HR per ruoli e anagrafiche, Teams o Slack come canale d'uso. L'elenco delle piattaforme supportate si chiude in assessment." },
        { head: "Dati", body: "Solo documentazione verificata dalla tua azienda: procedure, manuali, policy, materiali formativi. Niente fonti esterne non autorizzate. Ogni risposta cita il documento da cui proviene." },
        { head: "Human-in-the-loop", body: "Una persona approva prima che l'azione diventi definitiva: formatori e AI Champion validano contenuti e percorsi. Le sessioni executive e i laboratori li tengono le persone di Fulcrum." },
        { head: "Governance", body: "Permessi per ruolo: ogni persona vede solo la documentazione del proprio perimetro. Log delle domande e delle risposte, con revisione periodica dei contenuti." },
      ],
    },
    cosaCambia: {
      heading: "L'inserimento di un nuovo addetto amministrativo",
      lead: "È uno scenario costruito su un inserimento ricorrente in una PMI, non un caso cliente. Nessun numero: i tempi si misurano sulla tua documentazione in assessment.",
      scenarios: [
        {
          title: "Inserimento di un addetto amministrativo",
          today: [
            "Il primo giorno è una serie di presentazioni e un accesso ai sistemi",
            "Le procedure si imparano chiedendo alla collega più esperta",
            "Le stesse domande tornano per settimane, sempre alle stesse persone",
            "Nessuno sa a che punto è l'autonomia, se non a percezione",
          ],
          withAgent: [
            "Il percorso del ruolo è pronto dal primo giorno, sulle procedure reali",
            "Le domande sulle policy trovano risposta con il documento citato",
            "I colleghi esperti intervengono sulle eccezioni, non sulle basi",
            "HR vede completamenti, argomenti critici e domande senza risposta",
          ],
        },
      ],
      kpi: [
        "Tempo di onboarding fino all'autonomia sulle procedure",
        "Domande ripetitive gestite dall'agente invece che dai colleghi",
        "Completamento dei percorsi per funzione",
        "Tempo di aggiornamento dei materiali dopo un cambio di procedura",
      ],
    },
    perChi: {
      heading: "Per chi forma e inserisce le persone",
      lead: "Serve a chi deve portare l'AI e le procedure interne nelle mani delle persone, con un team di formazione piccolo rispetto alle richieste. È anche la parte persone di ogni altro agente: chi userà un agente viene formato qui.",
      funzioni: ["HR e L&D", "Manager di funzione", "Direzione che porta l'AI nel team", "AI Champion interni"],
      settori: ["Tutti i settori", "Healthcare & Pharma", "Manifatturiero", "Professional Services"],
      dimensione: "PMI dai 50 dipendenti e mid-market fino a 1000, in tutti i settori.",
      whenNot: "Se non esiste documentazione interna da cui partire, non c'è materiale su cui costruire: si parte allora dall'assessment.",
    },
    sicurezza: {
      heading: "Documentazione interna e dati delle persone",
      note: "La documentazione interna resta nei tuoi sistemi e non viene condivisa fuori dall'azienda né tra clienti. I permessi seguono il ruolo: nessuno accede a materiali di funzioni che non lo riguardano. La formazione obbligatoria per legge, come la sicurezza sul lavoro, resta agli enti accreditati: l'agente non la sostituisce.",
    },
    faq: {
      heading: "Domande che ci fanno prima della demo",
      items: [
        { q: "Che fine hanno fatto i vostri programmi di formazione?", a: "Restano, come percorsi. AI Leadership, AI Upskilling, AI Policy e AI Champion oggi si erogano insieme all'agente: le sessioni le tengono le persone di Fulcrum, l'agente le prepara, le prolunga nel tempo e risponde quando l'aula è finita." },
        { q: "Serve un LMS?", a: "No. Se hai un LMS l'agente ci si collega e usa i tuoi percorsi. Se non ce l'hai, l'agente lavora su intranet, documentale e canale di chat aziendale. In assessment verifichiamo cosa esiste e cosa conviene usare." },
        { q: "Le persone parlano con un bot invece che con un formatore?", a: "No: parlano con l'agente per le domande ricorrenti e con i formatori per i laboratori e le sessioni executive. L'agente toglie il carico ripetitivo ai colleghi esperti, non toglie l'aula." },
        { q: "Copre la formazione obbligatoria?", a: "No. La formazione obbligatoria per legge resta agli enti accreditati. L'agente copre procedure interne, uso degli strumenti, onboarding e upskilling sull'AI." },
        { q: "Come misuriamo l'apprendimento?", a: "Con i KPI concordati in assessment: tempo fino all'autonomia, completamento dei percorsi, verifiche superate, domande che le persone continuano a fare. Nessuna percentuale promessa prima di aver misurato la situazione di partenza." },
        { q: "E se la nostra documentazione è vecchia o incompleta?", a: "È la situazione più frequente. L'assessment mappa cosa esiste e cosa manca. L'agente segnala i vuoti man mano che le persone fanno domande senza risposta: la documentazione migliora mentre lo usi." },
      ],
    },
    cta: {
      heading: "Vediamolo sulle tue procedure",
      body: "In demo partiamo da un ruolo reale della tua azienda e dalla documentazione che hai già. Se l'AI non serve, lo diciamo.",
    },
  },

  en: {
    meta: {
      title: "Fulcrum Training Agent — training and onboarding",
      description:
        "A custom LLM for training, upskilling and onboarding, built on your company documentation. Role-based paths delivered together with the Fulcrum team.",
    },
    hero: {
      h1: "Fulcrum Training Agent",
      lead: "A custom LLM for training, upskilling and onboarding, built on your company documentation. It answers your people on real procedures; we design and run the learning paths with you.",
    },
    problema: {
      heading: "Company knowledge is not available when needed",
      lead: "The procedures exist, but they live in folders, in people's heads and in chat threads. New joiners learn by asking; the experts get interrupted all day.",
      blocks: [
        { head: "Onboarding by word of mouth", body: "A new hire learns by shadowing someone who already has a full workload. Every onboarding depends on who happens to be free." },
        { head: "The same questions, every week", body: "Questions about procedures, policies and systems come back constantly. The answers stay in a private chat and get lost." },
        { head: "Generic AI training", body: "Standard webinars explain tools in the abstract. On Monday nobody knows how to apply them to their own process, and the materials quietly go out of date." },
      ],
    },
    capacita: {
      heading: "What the agent does, and what we still do",
      lead: "Fulcrum Training Agent works on documentation your company has already validated. Executive sessions and workshops are run by Fulcrum people.",
      items: [
        { head: "Guides onboarding on your documentation", body: "It walks a new hire through the procedures of their role, day by day, citing the document each answer comes from." },
        { head: "Answers questions on procedures and policies", body: "It resolves recurring questions on processes, systems and usage rules. When the source does not exist, it says so and flags the gap to whoever owns the content." },
        { head: "Runs role-based upskilling paths, with checks", body: "It sets exercises on real cases from the function and checks understanding. Managers can see who has completed what." },
        { head: "Powers the four paths we design with you", body: "AI Leadership for the board and management; AI Upskilling as workshops per function; AI Policy, where the agent helps draft usage rules and then keeps them at hand; AI Champion, to train internal referents." },
        { head: "Keeps materials current", body: "When a procedure changes, the agent updates the linked content and flags what is out of date. Validation stays with the process owner." },
        { head: "Shows what has been learned", body: "It tracks completions, frequent questions and the topics where people get stuck. HR and function managers see where to step in." },
      ],
    },
    integrazione: {
      heading: "Where the agent lives and who governs it",
      blocks: [
        { head: "Systems", body: "LMS, intranet and document repositories, the HR system for roles and employee records, Teams or Slack as the channel. The supported list is confirmed during the assessment." },
        { head: "Data", body: "Only documentation your company has validated: procedures, manuals, policies, training materials. No unauthorised external sources. Every answer cites the document behind it." },
        { head: "Human-in-the-loop", body: "A person approves before an action becomes final: trainers and AI Champions validate content and paths. Executive sessions and workshops are delivered by Fulcrum people." },
        { head: "Governance", body: "Role-based permissions: each person only sees the documentation for their own scope. Questions and answers are logged, with periodic content review." },
      ],
    },
    cosaCambia: {
      heading: "Onboarding a new administrative assistant",
      lead: "Built on a recurring onboarding in a mid-sized company, not a client case. No figures: times are measured on your documentation during the assessment.",
      scenarios: [
        {
          title: "Onboarding an administrative assistant",
          today: [
            "Day one is a round of introductions and a set of system logins",
            "Procedures are learned by asking the most experienced colleague",
            "The same questions come back for weeks, to the same people",
            "Nobody knows how far autonomy has progressed, beyond a gut feeling",
          ],
          withAgent: [
            "The role-based path is ready on day one, on the real procedures",
            "Policy questions get an answer with the source document attached",
            "Experienced colleagues handle exceptions, not the basics",
            "HR sees completions, difficult topics and questions left unanswered",
          ],
        },
      ],
      kpi: [
        "Time to autonomy on procedures",
        "Repeat questions handled by the agent instead of colleagues",
        "Path completion per function",
        "Time to update materials after a procedure changes",
      ],
    },
    perChi: {
      heading: "For whoever trains and onboards people",
      lead: "It fits companies that need AI and internal procedures in people's hands, with a training team that is small next to the demand. It is also the people side of every other agent: whoever uses an agent is trained here.",
      funzioni: ["HR and L&D", "Function managers", "Leadership bringing AI into the team", "Internal AI Champions"],
      settori: ["Any industry", "Healthcare & Pharma", "Manufacturing", "Professional Services"],
      dimensione: "Companies from 50 to 1,000 employees, any industry.",
      whenNot: "If there is no internal documentation to start from, there is nothing to build on: we start from the assessment instead.",
    },
    sicurezza: {
      heading: "Internal documentation and employee data",
      note: "Internal documentation stays in your systems and is never shared outside the company or between clients. Permissions follow the role: nobody reaches material from functions that do not concern them. Training that is mandatory by law, such as workplace safety, stays with accredited bodies: the agent does not replace it.",
    },
    faq: {
      heading: "Questions we get before the demo",
      items: [
        { q: "What happened to your training programmes?", a: "They are still here, as paths. AI Leadership, AI Upskilling, AI Policy and AI Champion now run alongside the agent: Fulcrum people deliver the sessions, and the agent prepares them, extends them over time and answers once the classroom is over." },
        { q: "Do we need an LMS?", a: "No. If you have one, the agent connects to it and uses your existing paths. If you don't, it works on the intranet, the document repository and your chat channel. The assessment tells us what exists and what is worth using." },
        { q: "Will people talk to a bot instead of a trainer?", a: "No. They talk to the agent for recurring questions and to trainers for workshops and executive sessions. The agent removes repetitive load from your experts; it does not remove the classroom." },
        { q: "Does it cover mandatory training?", a: "No. Training that is mandatory by law stays with accredited bodies. The agent covers internal procedures, tool usage, onboarding and AI upskilling." },
        { q: "How do we measure learning?", a: "With the KPIs agreed in the assessment: time to autonomy, path completion, checks passed, questions people keep asking. No percentage is promised before the starting point is measured." },
        { q: "What if our documentation is old or incomplete?", a: "That is the most common situation. The assessment maps what exists and what is missing. The agent flags gaps as people ask questions it cannot answer: the documentation improves while you use it." },
      ],
    },
    cta: {
      heading: "Let's run it on your procedures",
      body: "In the demo we start from a real role in your company and the documentation you already have. If AI is not the answer, we say so.",
    },
  },
};

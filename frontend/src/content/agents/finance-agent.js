export default {
  it: {
    meta: {
      title: "Fulcrum Administration & Finance Agent — fatture e ERP",
      description:
        "L'agente AI che registra le fatture passive, emette quelle attive e riconcilia i movimenti dentro il gestionale che la tua azienda usa già.",
    },
    hero: {
      h1: "Fulcrum Administration & Finance Agent",
      lead: "Registra le fatture passive, emette quelle attive e riconcilia i movimenti, dentro il gestionale che usi già. Ogni scrittura è proposta all'amministrazione: nessun documento diventa definitivo senza approvazione.",
    },
    problema: {
      heading: "L'amministrazione ricopia dati tutto il giorno",
      lead: "I documenti arrivano già digitali, ma il lavoro resta manuale. Ogni fattura passa da occhi umani per finire in una riga di prima nota.",
      blocks: [
        { head: "Fatture passive da abbinare", body: "Il documento arriva dallo SDI. Qualcuno cerca l'ordine e il DDT corrispondenti, controlla quantità e prezzi, poi registra a mano sul gestionale." },
        { head: "Ciclo attivo e incassi", body: "Le fatture attive si preparano su richiesta, si inviano e poi si insegue il pagamento. Scadenzario e solleciti dipendono da chi si ricorda di guardarli." },
        { head: "Chiusure rincorse", body: "La riconciliazione bancaria si fa a fine periodo. Le anomalie emergono durante la chiusura, quando il tempo per sistemarle è già finito." },
      ],
    },
    capacita: {
      heading: "Sei attività che l'agente svolge ogni giorno",
      lead: "Il Fulcrum Administration & Finance Agent lavora sui documenti e sui dati contabili che hai già. Per ogni attività è dichiarato cosa propone l'agente e cosa approva la persona.",
      items: [
        { head: "Registrare le fatture passive", body: "Legge la fattura elettronica, la abbina all'ordine e al DDT, verifica quantità, prezzi e aliquote e prepara la registrazione. Il contabile approva." },
        { head: "Emettere e inviare le fatture attive", body: "Prepara la fattura dai dati di ordine o contratto, applica le regole di fatturazione elettronica e la trasmette tramite il tuo intermediario, dopo la conferma." },
        { head: "Riconciliare banca e scadenzario", body: "Confronta i movimenti bancari con partite aperte e scadenze, propone gli abbinamenti e lascia in evidenza quelli incerti, con la motivazione." },
        { head: "Solleciti e comunicazioni", body: "Prepara solleciti ai clienti e risposte ai fornitori sullo stato dei pagamenti, con i testi e le regole di escalation che imposti tu." },
        { head: "Controlli di coerenza prima della chiusura", body: "Confronta registrazioni, anagrafiche e storico e segnala doppioni, aliquote anomale, importi fuori range e documenti mancanti prima della chiusura mensile." },
        { head: "Estrazioni per il controllo di gestione", body: "Prepara le estrazioni ricorrenti che oggi qualcuno costruisce a mano: scaduto, marginalità per commessa, spesa per fornitore, nei formati che usi." },
      ],
    },
    integrazione: {
      heading: "Dentro i sistemi che usi già",
      blocks: [
        { head: "Sistemi", body: "ERP e gestionali contabili diffusi in Italia. Intermediario SDI per la fatturazione elettronica. Home banking e flussi CBI, PEC ed email dell'amministrazione." },
        { head: "Dati", body: "L'agente legge fatture, ordini, DDT, anagrafiche, partite aperte e movimenti bancari. Sui conti bancari lavora in sola lettura dove il sistema lo consente. Scrive registrazioni e documenti solo dove gli dai il permesso." },
        { head: "Human-in-the-loop", body: "Una persona approva prima che l'azione diventi definitiva. L'agente propone, il contabile conferma. Le soglie di importo le definisci tu; nella fase iniziale nessuna scrittura è definitiva senza conferma." },
        { head: "Governance", body: "Ogni proposta e ogni scrittura lasciano un log: documento di origine, dati letti, regola applicata, chi ha approvato. Permessi per ruolo e tracciabilità per il revisore." },
      ],
    },
    cosaCambia: {
      heading: "Il ciclo passivo, prima e dopo",
      lead: "È uno scenario costruito su un processo ricorrente, non un caso cliente. Nessun numero: i tempi si misurano sui tuoi volumi in assessment.",
      scenarios: [
        {
          title: "Fatture fornitori in una PMI di distribuzione",
          today: [
            "La fattura arriva dallo SDI e l'addetto cerca ordine e DDT",
            "Controlla riga per riga e chiede conferma al magazzino quando i numeri non tornano",
            "Registra a mano sul gestionale",
          ],
          withAgent: [
            "L'agente abbina la fattura a ordine e DDT e verifica quantità, prezzi e aliquote",
            "Prepara la registrazione e mette in coda solo le eccezioni, con la motivazione",
            "Il contabile approva e la scrittura entra sul gestionale",
          ],
        },
      ],
      kpi: [
        "Tempo di lavorazione per fattura passiva",
        "Quota di fatture registrate senza intervento, misurata sui tuoi documenti",
        "Giorni necessari alla chiusura mensile",
        "Tempi medi di incasso sulle partite gestite dall'agente",
      ],
    },
    perChi: {
      heading: "Per chi governa amministrazione e finanza",
      lead: "L'agente serve dove i documenti sono tanti e il processo è ripetitivo, e dove l'amministrazione lavora sempre a ridosso delle scadenze.",
      funzioni: ["CFO e direzione amministrativa", "Amministrazione, ciclo attivo e ciclo passivo", "Controllo di gestione", "Tesoreria e credito"],
      settori: ["Manifatturiero", "Distribuzione e Consumer Goods & Retail", "Professional Services", "Financial Services"],
      dimensione: "PMI dai 50 dipendenti e mid-market fino a 1000, con volumi documentali alti.",
      whenNot: "Se i volumi sono bassi e il gestionale non espone API né export utilizzabili, l'automazione costa più di quanto rende: te lo diciamo prima.",
    },
    sicurezza: {
      heading: "Dati contabili e bancari, con tracciabilità",
      note: "Sui dati bancari l'agente lavora in sola lettura dove il sistema lo consente. Ogni scrittura proposta è registrata con la fonte e con chi l'ha approvata, così il percorso resta ricostruibile. Commercialista e revisore restano il punto di controllo contabile.",
    },
    faq: {
      heading: "Domande che ci fanno prima della demo",
      items: [
        { q: "Si integra con il nostro gestionale?", a: "Dipende da come apre i dati. Se il gestionale espone API o export strutturati, l'agente ci lavora. In assessment verifichiamo lettura e scrittura su ciclo attivo, ciclo passivo e anagrafiche, prima di qualunque preventivo." },
        { q: "Chi risponde di un errore di registrazione?", a: "Chi approva. L'agente propone la scrittura con il documento di origine e la regola applicata; la conferma resta al contabile. Il log permette di ricostruire ogni passaggio. La responsabilità contabile e fiscale non cambia titolare." },
        { q: "Funziona con la fatturazione elettronica italiana?", a: "Sì, lavorando con il tuo intermediario SDI. L'agente legge le fatture ricevute in formato elettronico e prepara quelle attive secondo le regole che applichi oggi. La trasmissione avviene dopo la conferma." },
        { q: "Sostituisce il commercialista?", a: "No. L'agente toglie il lavoro di trascrizione e di controllo ripetitivo. Interpretazione fiscale, bilancio e adempimenti che richiedono un professionista restano al commercialista, che continua a vedere gli stessi dati con più ordine." },
        { q: "Lo facciamo già con ChatGPT. Che differenza c'è?", a: "Una chat generica legge un documento e ti risponde. Il Fulcrum Administration & Finance Agent abbina la fattura all'ordine, scrive sul gestionale dopo approvazione, rispetta le soglie e lascia un log. È lavoro svolto, non testo prodotto." },
        { q: "Quanto tempo serve per partire e chi lo mantiene?", a: "Il primo passo è una call, poi l'assessment su processi, dati e sistemi. Le durate dipendono dai tuoi volumi e dalle integrazioni: le stimiamo lì, non prima. La manutenzione resta alla stessa squadra che costruisce l'agente." },
      ],
    },
    cta: {
      heading: "Vediamo l'agente sulle tue fatture",
      body: "In demo partiamo da un tuo processo reale: un ciclo passivo o una riconciliazione bancaria.",
    },
  },

  en: {
    meta: {
      title: "Fulcrum Administration & Finance Agent — invoices",
      description:
        "The AI agent that posts supplier invoices, issues customer invoices and reconciles bank movements inside the ERP your team already uses.",
    },
    hero: {
      h1: "Fulcrum Administration & Finance Agent",
      lead: "Posts supplier invoices, issues customer invoices and reconciles bank movements, inside the ERP your team already uses. Every entry is proposed to your accountant: nothing becomes final without approval.",
    },
    problema: {
      heading: "Finance admin retypes data all day",
      lead: "Documents already arrive digital, but the work stays manual. Every invoice passes through human eyes to end up as one accounting entry.",
      blocks: [
        { head: "Supplier invoices to match", body: "The document arrives through the e-invoicing exchange. Someone finds the matching order and delivery note, checks quantities and prices, then posts it by hand." },
        { head: "Billing and collections", body: "Customer invoices are prepared on request, sent, and then payment is chased. Ageing and reminders depend on who remembers to look." },
        { head: "Closings chased at the end", body: "Bank reconciliation happens at period end. Anomalies surface during the close, when there's no time left to fix them." },
      ],
    },
    capacita: {
      heading: "Six things the agent does every day",
      lead: "The Fulcrum Administration & Finance Agent works on the documents and accounting data you already have. For each task, what the agent proposes and what a person approves is stated.",
      items: [
        { head: "Posting supplier invoices", body: "Reads the electronic invoice, matches it to the order and delivery note, checks quantities, prices and VAT rates, and prepares the entry. Your accountant approves." },
        { head: "Issuing and sending customer invoices", body: "Builds the invoice from order or contract data, applies your Italian e-invoicing rules and transmits it through your provider, after confirmation." },
        { head: "Bank reconciliation and ageing", body: "Matches bank movements against open items and due dates, proposes the matches and leaves uncertain ones visible, with the reason." },
        { head: "Reminders and correspondence", body: "Prepares customer payment reminders and replies to suppliers on payment status, using the wording and escalation rules you set." },
        { head: "Consistency checks before the close", body: "Compares entries, master data and history, and flags duplicates, unusual VAT rates, out-of-range amounts and missing documents before the monthly close." },
        { head: "Extracts for management control", body: "Prepares the recurring extracts someone builds by hand today: overdue receivables, margin by project, spend by supplier, in the formats you use." },
      ],
    },
    integrazione: {
      heading: "Inside the systems you already use",
      blocks: [
        { head: "Systems", body: "ERP and accounting systems used in Italy. Your provider for Italian e-invoicing. Online banking and bank file formats, certified email and the finance mailbox." },
        { head: "Data", body: "The agent reads invoices, orders, delivery notes, master data, open items and bank movements. On bank accounts it works read-only where the system allows. It writes entries and documents only where you grant permission." },
        { head: "Human-in-the-loop", body: "Human-in-the-loop means a person approves before an action becomes final. The agent proposes, the accountant confirms. You define the amount thresholds; in the early phase no entry is final without confirmation." },
        { head: "Governance", body: "Every proposal and every entry leaves a log: source document, data read, rule applied, who approved. Role-based permissions and a trail your auditor can follow." },
      ],
    },
    cosaCambia: {
      heading: "The payables cycle, before and after",
      lead: "A typical scenario built on a recurring process, not a client case. No figures: times are measured on your volumes during the assessment.",
      scenarios: [
        {
          title: "Supplier invoices in a distribution SME",
          today: [
            "The invoice arrives through the exchange system and a clerk looks for the order and delivery note",
            "They check line by line and ask the warehouse when numbers don't add up",
            "They post the entry manually",
          ],
          withAgent: [
            "The agent matches the invoice to order and delivery note and checks quantities, prices and VAT rates",
            "It prepares the entry and queues only exceptions, with the reason",
            "The accountant approves and the entry lands in the ERP",
          ],
        },
      ],
      kpi: [
        "Processing time per supplier invoice",
        "Share of invoices posted without intervention, measured on your documents",
        "Days needed to close the month",
        "Collection times on the receivables the agent handles",
      ],
    },
    perChi: {
      heading: "For teams running administration and finance",
      lead: "The agent fits where documents are many and the process repeats, and where finance always works against the deadline.",
      funzioni: ["CFO and finance management", "Accounts payable and accounts receivable", "Management control", "Treasury and credit"],
      settori: ["Manufacturing", "Distribution and Consumer Goods & Retail", "Professional Services", "Financial Services"],
      dimensione: "Companies from 50 to 1,000 employees with high document volumes.",
      whenNot: "If volumes are low and your ERP offers neither APIs nor usable exports, automation costs more than it returns. We'll say so upfront.",
    },
    sicurezza: {
      heading: "Accounting and banking data, fully traceable",
      note: "On banking data the agent works read-only where the system allows. Every proposed entry is recorded with its source and its approver, so the path stays reconstructable. Your accountant and auditor remain the control point.",
    },
    faq: {
      heading: "Questions we get before the demo",
      items: [
        { q: "Does it integrate with our ERP?", a: "It depends on how your ERP exposes data. If it offers APIs or structured exports, the agent works with it. In the assessment we verify read and write access on payables, receivables and master data before any quote." },
        { q: "Who is liable for a wrong entry?", a: "Whoever approves it. The agent proposes the entry with the source document and the rule applied; confirmation stays with your accountant. The log lets you reconstruct every step. Accounting and tax responsibility doesn't change hands." },
        { q: "Does it work with Italian e-invoicing?", a: "Yes, through your existing provider. The agent reads incoming electronic invoices and prepares outgoing ones under the rules you already apply. Transmission happens after confirmation." },
        { q: "Does it replace our accountant?", a: "No. The agent removes retyping and repetitive checking. Tax interpretation, statutory accounts and filings that require a professional stay with your accountant, who sees the same data in better order." },
        { q: "We already do this with ChatGPT. What's different?", a: "A generic chat reads a document and answers. The Fulcrum Administration & Finance Agent matches the invoice to the order, writes to the ERP after approval, respects thresholds and leaves a log. That's work done, not text produced." },
        { q: "How long does it take to start, and who maintains it?", a: "The first step is a call, then an assessment on processes, data and systems. Timelines depend on your volumes and integrations: we estimate them there, not before. Maintenance stays with the same team that builds the agent." },
      ],
    },
    cta: {
      heading: "See the agent on your own invoices",
      body: "In the demo we start from one of your real processes: a payables cycle or a bank reconciliation.",
    },
  },
};

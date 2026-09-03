export default {
  it: {
    meta: {
      title: "Fulcrum Marketing Agent — Agente AI per i contenuti",
      description:
        "Produce e pubblica DEM, push, pagine e schede prodotto dentro CRM, CMS ed e-commerce, con approvazione umana su ogni uscita.",
    },
    hero: {
      h1: "Fulcrum Marketing Agent",
      lead: "Produce e pubblica i contenuti operativi: DEM, push notification, schede prodotto, pagine del sito. Lavora dentro CRM, CMS ed e-commerce. Nulla esce senza la tua approvazione.",
    },
    problema: {
      heading: "Il collo di bottiglia non è l'idea: è la produzione",
      lead: "Il piano editoriale c'è. A mancare sono le ore per scrivere, adattare, controllare e pubblicare tutto quello che il piano prevede.",
      blocks: [
        { head: "DEM, newsletter e push", body: "Ogni DEM richiede testi, oggetti e varianti per segmento. Il lavoro si concentra sulle stesse due o tre persone." },
        { head: "Sito e schede prodotto", body: "Pagine e schede si aggiornano quando qualcuno trova il tempo. Le informazioni superate restano online e generano richieste al customer care." },
        { head: "Calendario, lingue e brand", body: "Gli adattamenti italiano-inglese arrivano in ritardo. Il controllo su tono, claim e terminologia si fa a mano, spesso all'ultimo momento." },
      ],
    },
    capacita: {
      heading: "Cosa fa l'agente, contenuto per contenuto",
      lead: "Sei attività operative. Per ciascuna è chiaro cosa produce l'agente e cosa resta alla persona che approva.",
      items: [
        { head: "Produce DEM, newsletter e push", body: "Genera testi, oggetti e varianti per segmento a partire dal brief e dai dati del CRM. Tu approvi la versione finale prima dell'invio." },
        { head: "Aggiorna pagine e schede prodotto", body: "Scrive e aggiorna contenuti su CMS ed e-commerce, con attributi e immagini presi dal PIM. Ogni modifica entra in coda di approvazione." },
        { head: "Gestisce calendario e adattamenti multilingua", body: "Pianifica le uscite, prepara le versioni italiano e inglese e tiene allineate le lingue. Il piano resta modificabile dal team." },
        { head: "Controlla brand e tono prima di pubblicare", body: "Verifica ogni contenuto contro le linee guida: terminologia, claim vietati, disclaimer obbligatori. Segnala cosa non passa e perché." },
        { head: "Personalizza sui dati del CRM", body: "Costruisce le varianti sui segmenti reali del database. Usa solo i contatti con consenso marketing valido e registrato." },
        { head: "Sintetizza le performance di campagna", body: "Raccoglie i dati dalle piattaforme e prepara il recap per la riunione. Lettura, interpretazione e decisioni restano al marketing." },
      ],
    },
    integrazione: {
      heading: "Come si integra nel tuo stack",
      blocks: [
        { head: "Sistemi", body: "CRM e piattaforme di marketing automation, CMS ed e-commerce, PIM e DAM, strumenti di push notification. L'elenco degli strumenti supportati si chiude in assessment." },
        { head: "Dati", body: "Legge liste, segmenti e consensi dal CRM, attributi e immagini dal PIM o dal DAM, contenuti esistenti dal CMS. Scrive bozze, mai pubblicazioni dirette." },
        { head: "Human-in-the-loop", body: "Una persona approva prima che l'azione diventi definitiva. Definiamo un flusso per tipo di contenuto: DEM, pagina, push notification." },
        { head: "Governance", body: "Ogni bozza, modifica e pubblicazione resta a log, con l'utente che ha approvato e l'orario. Permessi per ruolo, canale e brand." },
      ],
    },
    cosaCambia: {
      heading: "Una campagna DEM stagionale, dal brief all'invio",
      lead: "È uno scenario costruito su attività ricorrenti del marketing, non un caso cliente. Nessun numero: i tempi si misurano sui tuoi volumi in assessment.",
      scenarios: [
        {
          title: "Campagna stagionale su più segmenti",
          today: [
            "Il brief passa di mano tra marketing, copy e CRM",
            "Le varianti per segmento si scrivono una alla volta",
            "Il controllo brand arriva a ridosso della data di invio",
            "L'adattamento inglese slitta all'invio successivo",
          ],
          withAgent: [
            "Dal brief nascono le bozze per tutti i segmenti previsti",
            "Le varianti usano i dati e i consensi già presenti nel CRM",
            "Il controllo su tono e claim avviene prima della coda di approvazione",
            "La versione inglese è pronta insieme a quella italiana",
            "Il marketing approva, corregge o rifiuta: l'invio parte solo dopo",
          ],
        },
      ],
      kpi: [
        "Tempo dal brief all'invio approvato",
        "Contenuti pubblicati per persona nel periodo",
        "Tempo di aggiornamento di una pagina o di una scheda prodotto",
        "Rilavorazioni dovute a errori o incoerenze di brand",
      ],
    },
    perChi: {
      heading: "Per chi pubblica ogni settimana",
      lead: "Serve a chi ha un piano editoriale vivo e più canali da tenere allineati, con un team piccolo rispetto alla mole di contenuti.",
      funzioni: ["Marketing", "CRM", "E-commerce", "Comunicazione"],
      settori: ["Consumer Goods & Retail", "Servizi", "B2B con marketing strutturato"],
      dimensione: "PMI dai 50 dipendenti e mid-market fino a 1000, con un piano editoriale attivo.",
      whenNot: "Se pubblichi pochi contenuti e a bassa frequenza, l'agente non ripaga il progetto: te lo diciamo prima di partire.",
    },
    sicurezza: {
      heading: "Sicurezza, consensi e tracciabilità",
      note: "L'agente lavora solo sui contatti con consenso marketing valido e registrato nel CRM: esclusioni e revoche vengono rispettate a ogni invio. I dati dei tuoi clienti restano separati e non vengono condivisi tra progetti. Ogni pubblicazione e ogni invio restano a log, con l'utente che ha approvato.",
    },
    faq: {
      heading: "Domande che ci fanno prima della demo",
      items: [
        { q: "Lo facciamo già con ChatGPT. Cosa cambia?", a: "ChatGPT scrive un testo dentro una chat. L'agente prende il brief, legge i segmenti e i consensi nel CRM, produce le varianti, le porta in approvazione e le pubblica sul canale giusto. La differenza è l'integrazione nel processo, non la qualità della frase." },
        { q: "I contenuti sembreranno scritti da una macchina?", a: "L'agente lavora sulle tue linee guida, sui tuoi contenuti passati e sulla tua terminologia. Le prime settimane servono a tarare tono e vincoli. E ogni contenuto passa da una persona prima di uscire: la qualità resta una tua decisione." },
        { q: "Rispetta i consensi marketing?", a: "Sì. Le liste arrivano dal CRM e l'agente usa solo i contatti con consenso valido per quella finalità. Revoche ed esclusioni si applicano al momento dell'invio. La titolarità dei dati e la base giuridica restano tue." },
        { q: "Chi approva prima della pubblicazione?", a: "Lo decidi tu, per tipo di contenuto. Un flusso per le DEM, uno per le pagine sito, uno per le push notification. L'agente prepara e propone; la pubblicazione parte solo dopo l'approvazione della persona indicata." },
        { q: "Si integra con il nostro CRM e il nostro CMS?", a: "Dipende dalle API e dagli export disponibili. È la prima cosa che verifichiamo in assessment, insieme a piattaforma email, e-commerce e strumenti push. Se l'integrazione non è praticabile, te lo diciamo prima di iniziare." },
        { q: "Che differenza c'è con il Fulcrum GTM Agent?", a: "Il Fulcrum GTM Agent decide: posizionamento, prodotto, pricing, distribuzione, promozione. Il Fulcrum Marketing Agent esegue: produce e pubblica DEM, push, pagine e schede prodotto che ne derivano. Uno imposta, l'altro manda in produzione. Funzionano anche separati." },
      ],
    },
    cta: {
      heading: "Vediamolo sulla tua prossima campagna",
      body: "In demo partiamo da un contenuto che produci davvero: una DEM, una scheda prodotto, una push. Se l'AI non serve, lo diciamo.",
    },
  },

  en: {
    meta: {
      title: "Fulcrum Marketing Agent — content operations",
      description:
        "Produces and publishes campaigns, push messages, pages and product content inside your CRM and CMS. Human approval on every release.",
    },
    hero: {
      h1: "Fulcrum Marketing Agent",
      lead: "Produces and publishes day-to-day content: email campaigns, push notifications, product pages, website copy. It works inside your CRM, CMS and e-commerce. Nothing ships without your approval.",
    },
    problema: {
      heading: "The bottleneck is not the idea. It's production",
      lead: "The editorial plan exists. What's missing are the hours to write, adapt, check and publish everything the plan asks for.",
      blocks: [
        { head: "Campaigns and push", body: "Every send needs copy, subject lines and variants per segment. The work lands on the same two or three people and piles up." },
        { head: "Pages and product content", body: "Pages and product descriptions get updated when someone finds the time. Outdated information stays online and generates support tickets." },
        { head: "Calendar, languages, brand", body: "Italian-English adaptations arrive late. Tone, claims and terminology get checked by hand, usually at the last minute." },
      ],
    },
    capacita: {
      heading: "What the agent does, content type by content type",
      lead: "Six operational tasks. For each one it's clear what the agent produces and what stays with the person who approves.",
      items: [
        { head: "Produces campaigns, newsletters and push", body: "Writes copy, subject lines and per-segment variants from your brief and your CRM data. You approve the final version before it goes out." },
        { head: "Updates pages and product content", body: "Writes and updates content in your CMS and e-commerce, using attributes and images from the PIM. Every change enters an approval queue." },
        { head: "Runs the calendar and multilingual adaptation", body: "Plans the schedule, prepares Italian and English versions and keeps the two languages aligned. The plan stays editable by your team." },
        { head: "Checks brand and tone before publishing", body: "Reviews every piece against your guidelines: terminology, banned claims, mandatory disclaimers. It flags what fails and why." },
        { head: "Personalises on CRM data", body: "Builds variants on the real segments in your database. It only uses contacts with a valid, recorded marketing consent." },
        { head: "Summarises campaign performance", body: "Pulls the numbers from your platforms and prepares the recap for the meeting. Reading, interpretation and decisions stay with marketing." },
      ],
    },
    integrazione: {
      heading: "How it fits your stack",
      blocks: [
        { head: "Systems", body: "CRM and marketing automation platforms, CMS and e-commerce, PIM and DAM, push notification tools. The supported list is confirmed during the assessment." },
        { head: "Data", body: "It reads lists, segments and consents from the CRM, attributes and images from the PIM or DAM, existing copy from the CMS. It writes drafts, never direct publications." },
        { head: "Human-in-the-loop", body: "A person approves before an action becomes final. We define one flow per content type: who signs off a campaign, a page, a push message." },
        { head: "Governance", body: "Every draft, edit and publication is logged, with the approving user and the timestamp. Permissions by role, channel and brand." },
      ],
    },
    cosaCambia: {
      heading: "A seasonal email campaign, from brief to send",
      lead: "A scenario built on recurring marketing work, not a client case. No figures: times are measured on your volumes during the assessment.",
      scenarios: [
        {
          title: "Seasonal campaign across several segments",
          today: [
            "The brief moves between marketing, copy and CRM",
            "Segment variants get written one at a time",
            "The brand check lands right before the send date",
            "The English version slips to the next campaign",
          ],
          withAgent: [
            "One brief produces drafts for every planned segment",
            "Variants use the data and consents already in the CRM",
            "Tone and claims are checked before the approval queue",
            "The English version is ready alongside the Italian one",
            "Marketing approves, edits or rejects: only then does it send",
          ],
        },
      ],
      kpi: [
        "Time from brief to approved send",
        "Content published per person over a period",
        "Time to update a page or a product description",
        "Rework caused by errors or brand inconsistencies",
      ],
    },
    perChi: {
      heading: "For teams that publish every week",
      lead: "It fits companies with a live editorial plan and several channels to keep aligned, run by a team that's small for the volume.",
      funzioni: ["Marketing", "CRM", "E-commerce", "Communications"],
      settori: ["Consumer Goods & Retail", "Services", "B2B with a structured marketing function"],
      dimensione: "Companies from 50 to 1,000 employees with an active editorial plan.",
      whenNot: "If you publish little and rarely, the agent won't pay for the project. We'll say so before we start.",
    },
    sicurezza: {
      heading: "Security, consents, traceability",
      note: "The agent only works on contacts with a valid marketing consent recorded in the CRM: exclusions and withdrawals are applied at every send. Your customer data stays segregated and is never shared across projects. Every publication and every send is logged, with the user who approved it.",
    },
    faq: {
      heading: "Questions we get before the demo",
      items: [
        { q: "We already do this with ChatGPT. What changes?", a: "ChatGPT writes text inside a chat. The agent takes the brief, reads segments and consents in the CRM, produces the variants, routes them for approval and publishes them on the right channel. The difference is integration into the process, not sentence quality." },
        { q: "Will the content read like a machine wrote it?", a: "The agent works from your guidelines, your past content and your terminology. The first weeks are spent tuning tone and constraints. And every piece passes through a person before it ships: quality stays your decision." },
        { q: "Does it respect marketing consents?", a: "Yes. Lists come from the CRM and the agent only uses contacts with a valid consent for that purpose. Withdrawals and exclusions apply at send time. Data ownership and legal basis stay yours." },
        { q: "Who approves before publication?", a: "You decide, per content type. One flow for campaigns, one for website pages, one for push messages. The agent prepares and proposes; publication happens only after the named person approves." },
        { q: "Does it work with our CRM and CMS?", a: "It depends on the available APIs and exports. That's the first thing we check in the assessment, along with your email platform, e-commerce and push tools. If the integration isn't workable, we say so before we start." },
        { q: "How is this different from Fulcrum GTM Agent?", a: "Fulcrum GTM Agent decides: positioning, product, pricing, place, promotion. Fulcrum Marketing Agent executes: it produces and publishes the campaigns, push messages, pages and product content that follow. One sets direction, the other ships. They also work separately." },
      ],
    },
    cta: {
      heading: "Let's try it on your next campaign",
      body: "In the demo we start from content you actually produce: an email campaign, a product page, a push message. If AI isn't the answer, we say so.",
    },
  },
};

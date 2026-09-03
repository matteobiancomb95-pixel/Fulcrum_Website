import { REGISTRATION_CODE } from "../site";

const UPDATED_IT = "Giugno 2026";
const UPDATED_EN = "June 2026";

export const LEGAL = {
  privacy: {
    it: {
      meta: {
        title: "Privacy Policy — Fulcrum",
        description:
          "Come Fulcrum tratta i dati del form contatti e del calendario zcal: finalità, basi giuridiche, conservazione e i tuoi diritti.",
      },
      eyebrow: "Legale",
      h1: "Privacy Policy",
      lead: "Questa pagina spiega quali dati personali raccogliamo su questo sito, perché li trattiamo e come puoi controllarli. È scritta per essere letta, non per essere subita.",
      updatedLabel: "Ultimo aggiornamento",
      updated: UPDATED_IT,
      otherLang: "English version",
      indexLabel: "Indice",
      sections: [
        {
          id: "titolare",
          h2: "1. Chi tratta i tuoi dati",
          paras: [
            `Il titolare del trattamento è Fulcrum, Registration Code ${REGISTRATION_CODE}. Per qualsiasi richiesta sui tuoi dati puoi usare la pagina Contatti di questo sito: è il canale che presidiamo.`,
            "Non abbiamo nominato un Responsabile della protezione dei dati (DPO). Se in futuro lo nomineremo, i suoi contatti verranno pubblicati qui.",
          ],
        },
        {
          id: "dati",
          h2: "2. Quali dati raccogliamo",
          bullets: [
            "Form contatti: nome e cognome, azienda, email di lavoro, dimensione azienda, area di interesse, messaggio",
            "Prenotazione della call: nome, email e orario scelto, raccolti dal servizio di calendario zcal",
            "Log tecnici dell'infrastruttura: dati necessari a servire le pagine e a proteggere il sito da abusi",
          ],
          paras: [
            "Non usiamo strumenti di analisi statistica o di profilazione pubblicitaria: nessun dato di navigazione viene raccolto per misurare il traffico.",
            "Non raccogliamo categorie particolari di dati e non chiediamo dati che non servono a risponderti. Il campo messaggio è libero: non inserire dati riservati o personali di altre persone.",
          ],
        },
        {
          id: "finalita",
          h2: "3. Perché li trattiamo e con quale base giuridica",
          bullets: [
            "Rispondere alla tua richiesta e organizzare la call — base giuridica: misure precontrattuali su tua richiesta (art. 6.1.b GDPR)",
            "Inviare aggiornamenti su agenti AI e casi d'uso — base giuridica: il tuo consenso, facoltativo e revocabile (art. 6.1.a GDPR)",
            "Tenere il sito sicuro e funzionante, con log e protezione anti-spam — base giuridica: nostro legittimo interesse (art. 6.1.f GDPR)",
          ],
          paras: [
            "Il consenso marketing è separato dall'invio del form: puoi ricevere risposta senza darlo.",
          ],
        },
        {
          id: "conservazione",
          h2: "4. Per quanto tempo li conserviamo",
          bullets: [
            "Richieste dal form e prenotazioni: 24 mesi dall'ultimo contatto",
            "Consenso marketing: fino a quando lo revochi",
            "Log tecnici dell'infrastruttura: secondo i tempi di conservazione del fornitore di hosting",
          ],
          paras: [
            "Alla scadenza cancelliamo i dati o li rendiamo anonimi, salvo obblighi di legge o esigenze di difesa in giudizio.",
          ],
        },
        {
          id: "destinatari",
          h2: "5. Chi li tratta per noi",
          paras: [
            "I tuoi dati restano nostri: non li vendiamo e non li cediamo per finalità di terzi. Li trattano per nostro conto i fornitori che ci servono per far funzionare il sito, nominati responsabili del trattamento.",
          ],
          bullets: [
            "Fornitore di hosting e infrastruttura del sito",
            "zcal — calendario e gestione delle prenotazioni",
            "Fornitore di posta elettronica e di invio email transazionali",
          ],
          after: [
            "Possono accedere ai dati anche le persone di Fulcrum autorizzate a rispondere alle richieste, e le autorità quando la legge lo impone.",
          ],
        },
        {
          id: "trasferimenti",
          h2: "6. Trasferimenti fuori dall'Unione Europea",
          paras: [
            "Alcuni fornitori hanno sede o infrastruttura anche negli Stati Uniti. I trasferimenti avvengono sulla base delle Clausole Contrattuali Standard della Commissione Europea oppure dell'adesione del fornitore al EU-US Data Privacy Framework. Su richiesta ti indichiamo la garanzia applicata a ciascun servizio.",
          ],
        },
        {
          id: "cookie",
          h2: "7. Cookie e contenuti di terze parti",
          paras: [
            "Il sito usa solo cookie e memorie tecniche necessarie al funzionamento. Non carichiamo strumenti di misurazione statistica. Gli embed di terze parti, come il calendario zcal nella pagina Contatti, si caricano soltanto dopo il tuo consenso. L'elenco completo e il modo per cambiare scelta sono nella Cookie Policy.",
          ],
        },
        {
          id: "diritti",
          h2: "8. I tuoi diritti",
          bullets: [
            "Accesso: sapere quali dati abbiamo e ottenerne copia",
            "Rettifica: correggere dati sbagliati o incompleti",
            "Cancellazione: chiedere che i dati siano eliminati",
            "Limitazione e opposizione: chiedere di sospendere o fermare un trattamento",
            "Portabilità: ricevere i dati in formato leggibile da una macchina",
            "Revoca del consenso: in ogni momento, senza effetto su quanto fatto prima",
          ],
          paras: [
            "Per esercitare un diritto usa la pagina Contatti di questo sito. Rispondiamo entro un mese; se la richiesta è complessa te lo diciamo e spieghiamo perché.",
          ],
        },
        {
          id: "reclamo",
          h2: "9. Reclamo al Garante",
          paras: [
            "Se ritieni che il trattamento dei tuoi dati violi il GDPR, puoi presentare reclamo al Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Roma, www.garanteprivacy.it. Puoi anche rivolgerti all'autorità giudiziaria.",
          ],
        },
        {
          id: "modifiche",
          h2: "10. Modifiche a questa pagina",
          paras: [
            "Se cambiamo strumenti o finalità aggiorniamo questa pagina e la data in alto. Le modifiche rilevanti vengono segnalate in home o via email a chi ha dato il consenso marketing.",
          ],
        },
      ],
    },

    en: {
      meta: {
        title: "Privacy Policy — Fulcrum",
        description:
          "How Fulcrum processes data from the contact form and the zcal calendar: purposes, legal bases, retention and your rights.",
      },
      eyebrow: "Legal",
      h1: "Privacy Policy",
      lead: "This page explains which personal data we collect on this site, why we process it and how you can control it. It is written to be read, not endured.",
      updatedLabel: "Last updated",
      updated: UPDATED_EN,
      otherLang: "Versione italiana",
      indexLabel: "Contents",
      sections: [
        {
          id: "titolare",
          h2: "1. Who processes your data",
          paras: [
            `The data controller is Fulcrum, Registration Code ${REGISTRATION_CODE}, Italy. For any request about your data please use the Contact page of this site: that is the channel we monitor.`,
            "We have not appointed a Data Protection Officer. If we appoint one, the contact details will be published here.",
          ],
        },
        {
          id: "dati",
          h2: "2. What data we collect",
          bullets: [
            "Contact form: full name, company, work email, company size, area of interest, message",
            "Call booking: name, email and chosen slot, collected by the zcal calendar service",
            "Infrastructure technical logs: data needed to serve the pages and protect the site from abuse",
          ],
          paras: [
            "We use no analytics or advertising profiling tools: no browsing data is collected to measure traffic.",
            "We do not collect special categories of data and we do not ask for anything we don't need to reply. The message field is free text: don't put confidential data or other people's personal data in it.",
          ],
        },
        {
          id: "finalita",
          h2: "3. Why we process it and on which legal basis",
          bullets: [
            "Reply to your request and set up the call — legal basis: pre-contractual steps at your request (Art. 6.1.b GDPR)",
            "Send updates on AI agents and use cases — legal basis: your consent, optional and revocable (Art. 6.1.a GDPR)",
            "Keep the site secure and working, with logs and anti-spam protection — legal basis: our legitimate interest (Art. 6.1.f GDPR)",
          ],
          paras: [
            "Marketing consent is separate from sending the form: you get an answer without it.",
          ],
        },
        {
          id: "conservazione",
          h2: "4. How long we keep it",
          bullets: [
            "Form requests and bookings: 24 months from the last contact",
            "Marketing consent: until you withdraw it",
            "Infrastructure technical logs: according to the retention period of the hosting provider",
          ],
          paras: [
            "When the period ends we delete the data or make it anonymous, unless the law or the defence of a legal claim requires otherwise.",
          ],
        },
        {
          id: "destinatari",
          h2: "5. Who processes it for us",
          paras: [
            "Your data stays ours: we don't sell it and we don't share it for third-party purposes. It is processed on our behalf by the providers that run the site, appointed as data processors.",
          ],
          bullets: [
            "Hosting and site infrastructure provider",
            "zcal — calendar and booking management",
            "Email provider and transactional email service",
          ],
          after: [
            "Fulcrum staff authorised to answer requests can access the data, as can public authorities where the law requires it.",
          ],
        },
        {
          id: "trasferimenti",
          h2: "6. Transfers outside the European Union",
          paras: [
            "Some providers are based or hosted also in the United States. Transfers rely on the European Commission's Standard Contractual Clauses or on the provider's participation in the EU-US Data Privacy Framework. On request we tell you which safeguard applies to each service.",
          ],
        },
        {
          id: "cookie",
          h2: "7. Cookies and third-party content",
          paras: [
            "The site only uses cookies and technical storage needed to work. We load no analytics tools. Third-party embeds, such as the zcal calendar on the Contact page, load only after your consent. The full list and how to change your choice are in the Cookie Policy.",
          ],
        },
        {
          id: "diritti",
          h2: "8. Your rights",
          bullets: [
            "Access: know which data we hold and get a copy",
            "Rectification: correct wrong or incomplete data",
            "Erasure: ask for your data to be deleted",
            "Restriction and objection: ask us to pause or stop a processing activity",
            "Portability: receive your data in a machine-readable format",
            "Withdrawal of consent: at any time, without affecting what was done before",
          ],
          paras: [
            "To exercise a right, use the Contact page of this site. We reply within one month; if the request is complex we tell you and explain why.",
          ],
        },
        {
          id: "reclamo",
          h2: "9. Complaint to the supervisory authority",
          paras: [
            "If you believe the processing of your data breaches the GDPR, you can lodge a complaint with the Italian data protection authority (Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Rome, www.garanteprivacy.it) or with the supervisory authority of your country. You can also go to court.",
          ],
        },
        {
          id: "modifiche",
          h2: "10. Changes to this page",
          paras: [
            "If we change tools or purposes we update this page and the date at the top. Significant changes are announced on the homepage or by email to people who gave marketing consent.",
          ],
        },
      ],
    },
  },

  cookie: {
    it: {
      meta: {
        title: "Cookie Policy — Fulcrum",
        description:
          "Quali cookie usa il sito Fulcrum: solo tecnici, nessuno strumento di misurazione, embed zcal solo con consenso. Come accettare, rifiutare, cambiare idea.",
      },
      eyebrow: "Legale",
      h1: "Cookie Policy",
      lead: "Questa pagina elenca i cookie e gli strumenti simili usati sul sito, a cosa servono e come cambi la tua scelta in qualsiasi momento.",
      updatedLabel: "Ultimo aggiornamento",
      updated: UPDATED_IT,
      otherLang: "English version",
      indexLabel: "Indice",
      sections: [
        {
          id: "cosa-sono",
          h2: "1. Cosa sono i cookie",
          paras: [
            "I cookie sono piccoli file che un sito salva sul tuo dispositivo. Alcuni servono a far funzionare le pagine, altri a caricare contenuti di terze parti. Nella stessa categoria rientrano tecnologie simili, come il localStorage del browser, che qui usiamo per ricordare la tua scelta sul banner.",
          ],
        },
        {
          id: "consenso",
          h2: "2. Come chiediamo il consenso",
          paras: [
            "Alla prima visita compare un banner con due scelte della stessa evidenza: Accetta o Rifiuta. Finché non scegli, nessun contenuto di terze parti viene caricato. Se rifiuti, restano attivi solo i cookie tecnici e il sito funziona senza limitazioni.",
          ],
        },
        {
          id: "tecnici",
          h2: "3. Cookie tecnici, sempre attivi",
          paras: [
            "Non richiedono consenso perché senza di essi il sito non funziona o non è sicuro.",
          ],
          table: {
            head: ["Nome", "Chi lo imposta", "A cosa serve", "Durata"],
            rows: [
              ["fulcrum-consenso-cookie", "Fulcrum (questo sito)", "Ricorda se hai accettato o rifiutato i contenuti di terze parti", "6 mesi"],
              ["Cookie e log di sicurezza dell'hosting", "Fornitore di hosting", "Servire le pagine, bilanciare il traffico, bloccare abusi e spam sui form", "Secondo i tempi del fornitore"],
            ],
          },
        },
        {
          id: "misurazione",
          h2: "4. Nessuno strumento di misurazione",
          paras: [
            "Questo sito non usa Google Analytics né altri strumenti di statistica o di profilazione pubblicitaria. Non installiamo cookie di terze parti per misurare il traffico e non incrociamo dati di navigazione con altre fonti.",
          ],
        },
        {
          id: "terze-parti",
          h2: "5. Servizi di terze parti: zcal",
          paras: [
            "La pagina Contatti contiene il calendario di zcal per prenotare la call. L'embed è un contenuto esterno e può impostare cookie propri: si carica solo dopo il tuo consenso. Se rifiuti, al suo posto trovi il bottone \"Apri il calendario\", che apre zcal in una nuova scheda: in quel caso vale l'informativa di zcal.",
          ],
        },
        {
          id: "revoca",
          h2: "6. Come cambiare o revocare la scelta",
          bullets: [
            "Usa il link \"Preferenze cookie\" nel footer: riapre il banner e puoi decidere di nuovo",
            "Cancella i cookie dalle impostazioni del browser: al ritorno il banner riappare",
            "Blocca i cookie di terze parti dal browser: il calendario resta accessibile in nuova scheda",
          ],
          paras: [
            "La revoca vale da quel momento in poi e non riguarda i dati già raccolti prima della tua scelta.",
          ],
          prefsCta: "Modifica le preferenze",
        },
        {
          id: "contatti",
          h2: "7. Chi contattare",
          paras: [
            `Per domande su questa pagina usa la pagina Contatti di questo sito. Il titolare è Fulcrum, Registration Code ${REGISTRATION_CODE}. Come trattiamo i dati personali raccolti dal sito è spiegato nella Privacy Policy.`,
          ],
        },
      ],
    },

    en: {
      meta: {
        title: "Cookie Policy — Fulcrum",
        description:
          "Which cookies the Fulcrum site uses: technical ones only, no analytics tools, zcal embed with consent. How to accept, reject or change it.",
      },
      eyebrow: "Legal",
      h1: "Cookie Policy",
      lead: "This page lists the cookies and similar tools used on the site, what they do and how you can change your choice at any time.",
      updatedLabel: "Last updated",
      updated: UPDATED_EN,
      otherLang: "Versione italiana",
      indexLabel: "Contents",
      sections: [
        {
          id: "cosa-sono",
          h2: "1. What cookies are",
          paras: [
            "Cookies are small files a site saves on your device. Some make the pages work, others load third-party content. Similar technologies belong to the same category, such as browser localStorage, which we use to remember your banner choice.",
          ],
        },
        {
          id: "consenso",
          h2: "2. How we ask for consent",
          paras: [
            "On your first visit a banner shows two equally prominent options: Accept or Reject. Until you choose, no third-party content is loaded. If you reject, only technical cookies stay active and the site works with no limitations.",
          ],
        },
        {
          id: "tecnici",
          h2: "3. Technical cookies, always on",
          paras: [
            "They need no consent because without them the site does not work or is not secure.",
          ],
          table: {
            head: ["Name", "Set by", "Purpose", "Duration"],
            rows: [
              ["fulcrum-consenso-cookie", "Fulcrum (this site)", "Remembers whether you accepted or rejected third-party content", "6 months"],
              ["Hosting security cookies and logs", "Hosting provider", "Serve the pages, balance traffic, block abuse and form spam", "As stated by the provider"],
            ],
          },
        },
        {
          id: "misurazione",
          h2: "4. No analytics tools",
          paras: [
            "This site uses neither Google Analytics nor any other analytics or advertising profiling tool. We set no third-party cookies to measure traffic and we do not combine browsing data with other sources.",
          ],
        },
        {
          id: "terze-parti",
          h2: "5. Third-party services: zcal",
          paras: [
            "The Contact page embeds the zcal calendar for booking the call. The embed is external content and may set its own cookies: it loads only after your consent. If you reject, you get the \"Open the calendar\" button instead, which opens zcal in a new tab: in that case zcal's own notice applies.",
          ],
        },
        {
          id: "revoca",
          h2: "6. How to change or withdraw your choice",
          bullets: [
            "Use the \"Cookie preferences\" link in the footer: it reopens the banner and you can decide again",
            "Delete cookies from your browser settings: the banner appears again on your next visit",
            "Block third-party cookies in your browser: the calendar stays reachable in a new tab",
          ],
          paras: [
            "Withdrawal applies from that moment on and does not cover data already collected before your choice.",
          ],
          prefsCta: "Change your preferences",
        },
        {
          id: "contatti",
          h2: "7. Who to contact",
          paras: [
            `For questions about this page, use the Contact page of this site. The controller is Fulcrum, Registration Code ${REGISTRATION_CODE}. How we process the personal data collected through the site is explained in the Privacy Policy.`,
          ],
        },
      ],
    },
  },
};

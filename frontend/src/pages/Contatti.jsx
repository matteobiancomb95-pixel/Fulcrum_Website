import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { Seo } from "../components/fx/Seo";
import { PageHero } from "../components/fx/PageHero";
import { SectionHead, ArrowLink } from "../components/fx/Bits";
import { TrustStrip } from "../components/fx/Strips";
import { MethodSteps } from "../components/fx/MethodSteps";
import { ContactForm } from "../components/site/ContactForm";
import { CalendarEmbed } from "../components/site/CalendarEmbed";
import { CONTATTI } from "../content/pages/contatti";
import { LINKEDIN, INSTAGRAM } from "../content/site";
import { useLang } from "../i18n";

const Social = ({ href, label, testid, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    data-testid={testid}
    className="fc-pill transition-colors hover:border-[var(--fc-accent)] hover:text-[var(--fc-accent)]"
  >
    {children}
    <span>{label}</span>
  </a>
);

export default function Contatti() {
  const { lang, t, path } = useLang();
  const c = CONTATTI[lang];

  return (
    <>
      <Seo title={c.meta.title} description={c.meta.description} />
      <PageHero
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primary={{ label: t.cta.call, href: "/contatti#calendario" }}
        secondary={c.hero.secondary}
      />

      <section id="calendario" className="fc-section-tight" data-testid="contatti-calendario">
        <div className="fc-container">
          <SectionHead eyebrow={c.calendario.eyebrow} heading={c.calendario.heading} lead={c.calendario.lead} className="max-w-[62ch]" />
          <div className="mt-10">
            <CalendarEmbed
              title={t.calendar.title}
              blockedText={t.calendar.blocked}
              activateLabel={t.calendar.activate}
              openLabel={t.cta.openCalendar}
              newTabNote={t.calendar.newTabNote}
            />
          </div>
        </div>
      </section>

      <section id="form" className="fc-section-tight border-y hairline" style={{ borderTopWidth: 1, borderBottomWidth: 1 }} data-testid="contatti-form">
        <div className="fc-container">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
            <SectionHead eyebrow={c.form.eyebrow} heading={c.form.heading} lead={c.form.lead} />
            <ContactForm />
          </div>
        </div>
      </section>

      <MethodSteps
        eyebrow={c.dopo.eyebrow}
        heading={c.dopo.heading}
        steps={c.dopo.steps}
        note={c.dopo.note}
        testid="contatti-dopo"
      />

      <section className="fc-section-tight" data-testid="contatti-canali">
        <div className="fc-container">
          <SectionHead eyebrow={c.canali.eyebrow} heading={c.canali.heading} lead={c.canali.lead} className="max-w-[62ch]" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Social href={LINKEDIN} label="LinkedIn" testid="contatti-linkedin"><Linkedin size={17} /></Social>
            <Social href={INSTAGRAM} label="Instagram" testid="contatti-instagram"><Instagram size={17} /></Social>
          </div>
          <p className="fc-small fc-muted mt-8 max-w-[62ch]">
            {c.canali.privacyPre}
            <Link to={path("/privacy")} className="underline" style={{ color: "var(--fc-accent)", textUnderlineOffset: 3 }} data-testid="contatti-privacy-link">
              {c.canali.privacyLink}
            </Link>
            {c.canali.privacyPost}
          </p>
          <div className="mt-6">
            <ArrowLink to="/ai-adoption" testid="contatti-catalogo">{t.cta.catalogue}</ArrowLink>
          </div>
        </div>
      </section>

      <TrustStrip mini />
    </>
  );
}

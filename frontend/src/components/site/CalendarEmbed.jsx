import React from "react";
import { ExternalLink } from "lucide-react";
import { useConsent } from "../../consent";
import { ZCAL_EMBED } from "../../content/site";

/** Embed zcal: il src viene promosso solo dopo il consenso ai contenuti di terze parti. */
export const CalendarEmbed = ({ blockedText, activateLabel, openLabel, newTabNote, title }) => {
  const { granted, decide } = useConsent();

  return (
    <div>
      <div
        className="overflow-hidden rounded-[20px] border hairline"
        style={{ borderWidth: 1, minHeight: granted ? 700 : 0 }}
        data-testid="calendar-embed"
      >
        {granted ? (
          <iframe
            src={`${ZCAL_EMBED}?embed=1&embedType=iframe`}
            title={title}
            loading="lazy"
            width="100%"
            height="760"
            style={{ border: 0, display: "block", minHeight: 620 }}
          />
        ) : (
          <div className="p-8 sm:p-12" data-testid="calendar-blocked">
            <p className="fc-small fc-muted max-w-[58ch]">{blockedText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={() => decide("granted")} data-testid="calendar-activate" className="fc-btn fc-btn-primary fc-btn-sm">
                {activateLabel}
              </button>
              <a href={ZCAL_EMBED} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-ghost fc-btn-sm" data-testid="calendar-open-blocked">
                {openLabel} <ExternalLink size={15} />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <a href={ZCAL_EMBED} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-ghost fc-btn-sm" data-testid="calendar-open">
          {openLabel} <ExternalLink size={15} />
        </a>
        <p className="fc-caption mt-3">{newTabNote}</p>
      </div>
    </div>
  );
};

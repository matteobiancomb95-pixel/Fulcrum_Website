import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "../../i18n";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const Cmp = motion[as] || motion.div;
  return (
    <Cmp
      className={className}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </Cmp>
  );
};

export const SectionHead = ({ eyebrow, heading, lead, testid, className = "", children }) => (
  <div className={className} data-testid={testid}>
    {eyebrow && <Reveal as="p" className="fc-eyebrow">{eyebrow}</Reveal>}
    {heading && (
      <Reveal as="h2" className="fc-h2" delay={0.04}>
        {heading}
      </Reveal>
    )}
    {lead && (
      <Reveal as="p" className="fc-lead mt-4 max-w-[62ch]" delay={0.08}>
        {lead}
      </Reveal>
    )}
    {children}
  </div>
);

/** Link interno localizzato. */
export const L = ({ to, children, ...rest }) => {
  const { path } = useLang();
  const external = to?.startsWith("http") || to?.startsWith("mailto:");
  if (external) return <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  return <Link to={path(to)} {...rest}>{children}</Link>;
};

export const Btn = ({ to, variant = "primary", size = "", children, ...rest }) => (
  <L to={to} className={`fc-btn fc-btn-${variant} ${size === "sm" ? "fc-btn-sm" : ""}`} {...rest}>
    {children}
  </L>
);

export const ArrowLink = ({ to, children, testid, ...rest }) => (
  <L to={to} className="fc-arrow" data-testid={testid} {...rest}>
    <span>{children}</span>
    <ArrowRight size={16} />
  </L>
);

export const Bullet = ({ children, marker = "tri" }) => (
  <li className="flex gap-3">
    <span className={marker === "tri" ? "fc-tri" : "fc-square"} aria-hidden="true" />
    <span className="fc-small fc-muted">{children}</span>
  </li>
);

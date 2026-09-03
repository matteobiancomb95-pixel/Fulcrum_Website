import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useConsent } from "../../consent";
import { loadGA4, trackPageView } from "../../lib/ga4";

export const Analytics = () => {
  const { granted } = useConsent();
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (granted) loadGA4();
  }, [granted]);

  useEffect(() => {
    if (granted) trackPageView(pathname + search);
  }, [granted, pathname, search]);

  return null;
};

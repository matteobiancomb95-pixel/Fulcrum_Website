const GA4_ID = process.env.REACT_APP_GA4_MEASUREMENT_ID;

let loaded = false;

export const loadGA4 = () => {
  if (loaded || !GA4_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA4_ID, { send_page_view: false, anonymize_ip: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);
  loaded = true;
};

export const trackPageView = (path) => {
  if (!loaded || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.origin + path,
    page_path: path,
  });
};

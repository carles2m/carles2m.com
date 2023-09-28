export const GA_TRACKING_ID = "G-2L1ZXMPH7Y";

export const reportClick = (url: string) => {
  window.gtag("event", "click", {
    "event_category": "outbound",
    "event_label": url,
    "transport_type": "beacon"
  });
};
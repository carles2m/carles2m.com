export const GA_TRACKING_ID = "G-2L1ZXMPH7Y";
export const GA_TRACKING_ID_2 = "UA-122301273-2";

export const reportClick = (url: string) => {
  window.gtag("event", "click", {
    "event_category": "outbound",
    "event_label": url,
    "transport_type": "beacon"
  });
};
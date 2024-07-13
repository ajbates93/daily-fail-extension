chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.includes("dailymail.co.uk")) {
      return { redirectUrl: "https://www.theguardian.com/" };
    }
  },
  {
    urls: ["*://*.dailymail.co.uk/*"],
  },
  ["blocking"],
);

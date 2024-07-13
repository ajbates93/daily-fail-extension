function extractMetaInfo() {
  const metaInfo = {
    title: document.title,
    description:
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content") || "",
    keywords:
      document
        .querySelector('meta[name="keywords"]')
        ?.getAttribute("content") || "",
    url: window.location.href,
  };

  chrome.runtime.sendMessage({
    action: "metaInfo",
    data: metaInfo,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", extractMetaInfo);
} else {
  extractMetaInfo();
}
